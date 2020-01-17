﻿
namespace Domain.Entities
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Status{ get; set; }

        //EF core Navigation property
        public int ProjectId { get; set; }
    }
}
