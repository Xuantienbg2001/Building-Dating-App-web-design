using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class TaskItem
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(200)]
        public string Title { get; set; }

        public string Description { get; set; }

        public string Status { get; set; } = "Todo"; // Mặc định là Todo

        // Foreign Key
        public int BoardId { get; set; }

        // Navigation property: Task này thuộc về Board nào
        public Board Board { get; set; }
    }
}