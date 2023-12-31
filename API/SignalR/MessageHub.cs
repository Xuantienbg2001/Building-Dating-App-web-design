﻿using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.SignalR
{
    public class MessageHub : Hub
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IHubContext<PresenceHub> _precenseHub;
        private readonly PresenceTracker _tracker;

        public MessageHub(IUnitOfWork unitOfWork, IMapper mapper, 
            IUserRepository userRepository, IHubContext<PresenceHub> precenseHub, PresenceTracker tracker)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _precenseHub = precenseHub;
            _tracker = tracker;
        }

        public override async Task OnConnectedAsync()
        {
            var httpContext = Context.GetHttpContext();
            var otherUser = httpContext.Request.Query["user"].ToString();
            var groupName = GetGroupName(Context.User.GetUsername(), otherUser);
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
            var group = await AddToGroup(groupName);
            await Clients.Group(groupName).SendAsync("UpdateGroup", group);

            var messages = await _unitOfWork.MessageRepository.GetMessageThread(Context.User.GetUsername(), otherUser);

            if (_unitOfWork.HasChange()) await _unitOfWork.Complete();

            await Clients.Caller.SendAsync("ReceiveMessageThread", messages);
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
          var group =  await RemoveFromMessageGroup();
            await Clients.Group(group.Name).SendAsync("UpdateGroup", group);
            await base.OnDisconnectedAsync(exception);
        }

        public async Task SendMessage( CreateMessageDto createMessageDto)
        {
            // lấy tên người dùng 
            var username = Context.User.GetUsername();

            // kiêm tra tên ng dùng có giống tên trong tin nhă
            if (username == createMessageDto.RecipientUsername.ToLower())
                throw new HubException ("You cannot send messages to yourself");
            //ktra xem người dùng có gửi tin nhắn cho chính mình hay không
            //bằng cách tên ng dùng hiện tại với tên ng dùng ng nhận


            var sender = await _unitOfWork.UserRepository.GetUserByUsernameAsync(username);
            var recipient = await _unitOfWork.UserRepository.GetUserByUsernameAsync(createMessageDto.RecipientUsername);
            //đoạn này dùng để lấy thông tin người dùng và ng nhận tin nhắn dựa vào tên ng dùng của họ


            if (recipient == null) throw new HubException("Not found user");
            //nếu k tìm thấy thì tra về notfound


            // SAU ĐÓ sẽ tạo 1 tin nhắn mới 
            // chứa thông tin về ng dùng và ng nhận
            var message = new Message
            {
                Sender = sender,
                Recipient = recipient,
                SenderUsername = sender.UserName,
                RecipientUsername = recipient.UserName, 
                Content = createMessageDto.Content
            };
            // sau đó chuyển tới kho lưu trữ tin nhắn .sau đó cta thêm tin nhắn và chuyển tin nhắn những gì cta muốn

            var groupName = GetGroupName(sender.UserName, recipient.UserName);

            var group = await _unitOfWork.MessageRepository.GetMessageGroup(groupName);

            if (group.Connections.Any(x => x.UserName == recipient.UserName))
            {
                message.DataRead = DateTime.UtcNow;
            }else 
            {
                var connections = await _tracker.GetConnectionForUser(recipient.UserName);
                if (connections != null) 
                {
                  await _precenseHub.Clients.Clients(connections).SendAsync("NewMessageReceived",
                        new { username = sender.UserName, knowAs =sender.KnownAs});
                }
            }

            _unitOfWork.MessageRepository.AddMessage(message);
            if (await _unitOfWork.Complete()) 
            {
          
                await Clients.Group(groupName).SendAsync("NewMessage", _mapper.Map<MessageDto>(message));
            }  
        }

        private async Task<Group> AddToGroup(string groupName) 
        {
            var group = await _unitOfWork.MessageRepository.GetMessageGroup(groupName);
            var connection = new Connection(Context.ConnectionId, Context.User.GetUsername());

            if (group == null)
            {
                group = new Group(groupName);
                _unitOfWork.MessageRepository.AddGroup(group);
            }

            group.Connections.Add(connection);

            if (await _unitOfWork.Complete()) return group;

            throw new HubException("Failed to join group");
        }

        private async Task<Group> RemoveFromMessageGroup()
        {
            var group = await _unitOfWork.MessageRepository.GetGroupForConnection(Context.ConnectionId);
            var connection = group.Connections.FirstOrDefault(x => x.ConnectionId == Context.ConnectionId);
            _unitOfWork.MessageRepository.RemoveConnection(connection);
           if (await _unitOfWork.Complete()) return group;

            throw new HubException("Failed to remove group");
        }

        private string GetGroupName(string caller, string other)
        {
            var stringCompare = string.CompareOrdinal(caller, other) < 0;
            return stringCompare ? $"{caller}-{other}" : $"{other}-{caller}";
        }
    }
}
