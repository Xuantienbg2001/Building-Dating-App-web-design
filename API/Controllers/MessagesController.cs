using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    // cta thêm authorize
    [Authorize] // thêm thuộc tinh ủy quyên f
    public class MessagesController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public MessagesController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            // khởi tạo các trường tham số 
        }
        //hàm để khởi tạo các trường của lớp từ các đối tượng truyền vào
        // việc khởi tạo để cung cấp các đối tượng cần thiết cho các phương thức của lớp để thực hiện các tác vụ xử lý dữ liệu

        [HttpGet]
        //getmessagesForuser đc sử dụng để lấy các tin nhắn cho ng dùng hiện tại và trả về kết quả 1 danh sách các đối tượng messagedto
        public async Task<ActionResult<IEnumerable<MessageDto>>> GetMessagesForUser([FromQuery] MessageParams messageParams)
        {
            messageParams.Username = User.GetUsername();  
            // lấy tên ng dùng từ đối tượng user( là đối tượng đại diện cho ng dùng hiện tại và gái giá trị cho thuộc tính usename)
            var messages = await _unitOfWork.MessageRepository.GetMessagesForUser(messageParams);
            // đc sử dụng để tương tác vớ cơ sở dữ liệu

            Response.AddPaginationHeader(messages.CurrentPage, messages.PageSize,
                    messages.TotalCount, messages.TotalPages);
            
            //thêm thông tin về phân trang vào header của pttp response 
            return messages;
            // sau đó trả về kết quả danh sách các tin nhắn dưới dạng actionresult để trả về cho http reponse

        
        }
        
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteMessage(int id )
        {
            var username = User.GetUsername();
            // lấy tên đăng nhập của ng dùng hiện tại qua đối tượng user

            var message = await _unitOfWork.MessageRepository.GetMessage(id);
            // lấy tin nhắn cần xóa từ cơ sở dữ liệu bằng cách sử dụng đối tượng
            if(message.Sender.UserName != username && message.Recipient.UserName != username ) 
            return Unauthorized();
            // kiểm tra xem gn dùng hiện tại có phải là ng gửi hoặc ng nhận tin nhắn hay không , nếu k trả về lỗi unauthozized

            if(message.Sender.UserName== username) 
            message.SenderDeleted = true;
            

            if(message.Recipient.UserName== username) 
            message.RecipientDeleted = true;

            if(message.SenderDeleted && message.RecipientDeleted)
                _unitOfWork.MessageRepository.DeleteMessage(message);
             //nếu tin nhắn đã bị xóa cả ng dùng và ng nhận thì tin nhắn sẽ đc xóa khỏi co sở dữ liệu

            if(await _unitOfWork.Complete()) return Ok();

            return BadRequest("Problem deleting message");

        }
        // httpdeleted định nghĩa để xác định pth này đc kích hoạt bởi 1 yêu cầu http delete đến đường dẫn chứa 1 tham số id 
        //id truyền vào 1 số duy nhất đại diện cho tin nhắn cần xóa , trả về đối tượng actionResult 



    } 
}

