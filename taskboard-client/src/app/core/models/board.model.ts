export interface BoardSummary {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  memberCount: number;
}

export interface TaskItem {
  id: string;
  title: string;
  description?: string;
  order: number;
  dueDateUtc?: string;
  priority: number;
  status: number;
  columnId: string;
  createdById: string;
}

export interface BoardColumn {
  id: string;
  name: string;
  order: number;
  boardId: string;
  tasks: TaskItem[];
}

export interface BoardDetail {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  columns: BoardColumn[];
  members: { userId: string; boardId: string }[];
}

export interface TaskUpdatedEvent {
  action: string;
  boardId: string;
  taskId?: string;
  columnId?: string;
  title?: string;
  description?: string;
  order: number;
  priority: number;
  status: number;
  dueDateUtc?: string;
}
