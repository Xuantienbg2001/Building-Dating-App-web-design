using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Authorize]
    public class BoardsController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public BoardsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BoardDto>>> GetBoards()
        {
            var boards = await _unitOfWork.BoardRepository.GetBoardsAsync();
            return Ok(boards);
        }

        [HttpPost]
        public async Task<ActionResult<BoardDto>> CreateBoard(BoardCreateDto boardCreateDto)
        {
            var board = new Board 
            { 
                Name = boardCreateDto.Name, 
                Description = boardCreateDto.Description 
            };

            _unitOfWork.BoardRepository.Add(board);

            if (await _unitOfWork.Complete()) 
                return Ok(_mapper.Map<BoardDto>(board));

            return BadRequest("Failed to create board");
        }
    }
}