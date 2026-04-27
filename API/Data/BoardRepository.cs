using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;                // Để dùng được lệnh .Where()
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore; // Để dùng được .ToListAsync() và .SingleOrDefaultAsync()


namespace API.Data
{
    public class BoardRepository : IBoardRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public BoardRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void Add(Board board) => _context.Boards.Add(board);

        public void Update(Board board) => _context.Entry(board).State = EntityState.Modified;

        public async Task<IEnumerable<BoardDto>> GetBoardsAsync()
        {
            return await _context.Boards
                .ProjectTo<BoardDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }

        public async Task<BoardDto> GetBoardByIdAsync(int id)
        {
            return await _context.Boards
                .Where(x => x.Id == id)
                .ProjectTo<BoardDto>(_mapper.ConfigurationProvider)
                .SingleOrDefaultAsync();
        }
    }
}