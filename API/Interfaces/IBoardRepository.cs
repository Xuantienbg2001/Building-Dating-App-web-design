using API.DTOs;
using API.Entities;
using System.Collections.Generic; // Để dùng được IEnumerable
using System.Threading.Tasks;


namespace API.Interfaces
{
    public interface IBoardRepository
    {
        void Add(Board board);
        void Update(Board board);
        Task<IEnumerable<BoardDto>> GetBoardsAsync();
        Task<BoardDto> GetBoardByIdAsync(int id);
    }
}