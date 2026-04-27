# TaskBoard (Trello-lite)

TaskBoard is a real-time collaboration backend for managing boards, columns, and tasks.  
Tech stack: ASP.NET Core Web API, EF Core, SignalR, JWT authentication.

## Core Objectives

- User registration and login.
- Board creation and ownership.
- Column and task management inside each board.
- Task assignment to users.
- Real-time updates through SignalR.
- Admin endpoints for user management.

## Domain Draft (Entity Model)

Relationship flow:

`User -> Board -> Column -> Task -> TaskAssignment`

### Entity Notes

- **User**: account data, role (`Member` or `Admin`), navigation to owned boards and assignments.
- **Board**: created by one user, contains many columns, has members (many-to-many via `BoardMember`).
- **BoardColumn**: belongs to a board, has ordering for Kanban layout.
- **TaskItem**: belongs to a column, supports due date, priority, status, and creator.
- **TaskAssignment**: maps task to one assignee user (supports history and extension later).
- **BoardMember**: maps users to boards for collaboration permission.

## API Endpoints (Planned Before Coding)

| Group | Method | Route | Auth | Purpose |
|---|---|---|---|---|
| Auth | POST | `/api/auth/register` | No | Register a new user account |
| Auth | POST | `/api/auth/login` | No | Login and receive JWT token |
| Users | GET | `/api/users/me` | Yes | Get current user profile |
| Users | GET | `/api/users` | Admin | List all users (admin management) |
| Boards | POST | `/api/boards` | Yes | Create a new board |
| Boards | GET | `/api/boards` | Yes | List boards where user is owner/member |
| Boards | GET | `/api/boards/{boardId}` | Yes | Get board details with columns and tasks |
| Boards | PATCH | `/api/boards/{boardId}` | Yes | Update board metadata |
| Boards | DELETE | `/api/boards/{boardId}` | Yes | Delete board (owner/admin) |
| Board Members | POST | `/api/boards/{boardId}/members` | Yes | Add user to board |
| Board Members | DELETE | `/api/boards/{boardId}/members/{userId}` | Yes | Remove user from board |
| Columns | POST | `/api/boards/{boardId}/columns` | Yes | Create a column in board |
| Columns | PATCH | `/api/boards/{boardId}/columns/{columnId}` | Yes | Rename/reorder column |
| Columns | DELETE | `/api/boards/{boardId}/columns/{columnId}` | Yes | Delete a column |
| Tasks | POST | `/api/columns/{columnId}/tasks` | Yes | Create task in column |
| Tasks | GET | `/api/columns/{columnId}/tasks` | Yes | List tasks in column |
| Tasks | PATCH | `/api/tasks/{taskId}` | Yes | Update title/description/status/priority |
| Tasks | PATCH | `/api/tasks/{taskId}/move` | Yes | Move task across columns/order |
| Tasks | DELETE | `/api/tasks/{taskId}` | Yes | Delete task |
| Task Assignments | POST | `/api/tasks/{taskId}/assignees/{userId}` | Yes | Assign task to user |
| Task Assignments | DELETE | `/api/tasks/{taskId}/assignees/{userId}` | Yes | Unassign task from user |
| Realtime | GET | `/hubs/board` | Yes | SignalR hub endpoint for board events |
| Admin | PATCH | `/api/admin/users/{userId}/role` | Admin | Promote/demote user role |
| Admin | PATCH | `/api/admin/users/{userId}/lock` | Admin | Lock or unlock an account |

## Suggested Commit Flow

1. `chore(init): scaffold TaskBoard solution structure`
2. `docs(api): define TaskBoard entity draft and endpoint plan`
3. `feat(domain): add EF Core entities for TaskBoard core model`
