using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace API.SignalR
{
    public class TaskHub : Hub
    {
        protected virtual string GetBoardId()
        {
            var httpContext = Context.GetHttpContext();

            return httpContext?
                .Request
                .Query["boardId"]
                .ToString();
        }

        public override async Task OnConnectedAsync()
        {
            string boardId = GetBoardId();

            if (!string.IsNullOrEmpty(boardId))
            {
                await Groups.AddToGroupAsync(
                    Context.ConnectionId,
                    boardId);
            }

            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            string boardId = GetBoardId();

            if (!string.IsNullOrEmpty(boardId))
            {
                await Groups.RemoveFromGroupAsync(
                    Context.ConnectionId,
                    boardId);
            }

            await base.OnDisconnectedAsync(exception);
        }

        public async Task UpdateTask(
            string boardId,
            object updatedTask)
        {
            await Clients
                .Group(boardId)
                .SendAsync(
                    "TaskUpdated",
                    updatedTask);
        }
    }
}