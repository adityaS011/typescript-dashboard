// Task types placeholder
import { TASK_STATUS, TASK_PRIORITY, TASK_TYPE } from "../constants/task.constants";

export type TaskStatus =
  | typeof TASK_STATUS.ALL
  | typeof TASK_STATUS.PENDING
  | typeof TASK_STATUS.COMPLETED;

export type TaskType = typeof TASK_TYPE.MY | typeof TASK_TYPE.SHARED | typeof TASK_TYPE.SCHEDULED;
export type TaskPriority = typeof TASK_PRIORITY.LOW | typeof TASK_PRIORITY.MEDIUM | typeof TASK_PRIORITY.HIGH;

export interface Task {
  id: string;
  type?: TaskType;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}




