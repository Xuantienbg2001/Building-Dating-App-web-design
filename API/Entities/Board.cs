using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace API.Entities
{
    public class Board
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        public string Description { get; set; }

        // Navigation property: Một Board có nhiều Task
        public ICollection<TaskItem> Tasks { get; set; } = new List<TaskItem>();
    }
}