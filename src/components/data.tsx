export interface TaskType {
  name: string
  due_date: string
  status: string
  priority: string
}

export interface NotificationType {
  name: string
  description: string
}

export const tasks: TaskType[] = [
  {
    name: 'Task 1',
    due_date: '2025-01-07',
    status: 'completed',
    priority: 'high',
  },
  {
    name: 'Task 2',
    due_date: '2025-05-01',
    status: 'in progress',
    priority: 'low',
  },
  {
    name: 'Task 3',
    due_date: '2024-12-01',
    status: 'not started',
    priority: 'high',
  },
  {
    name: 'Task 4',
    due_date: '2025-01-05',
    status: 'completed',
    priority: 'high',
  },
  {
    name: 'Task 4',
    due_date: '2025-01-05',
    status: 'completed',
    priority: 'high',
  },
  {
    name: 'Task 4',
    due_date: '2025-01-05',
    status: 'completed',
    priority: 'high',
  },
  {
    name: 'Task 4',
    due_date: '2025-01-05',
    status: 'completed',
    priority: 'high',
  },
  {
    name: 'Task 5',
    due_date: '2022-01-01',
    status: 'completed',
    priority: 'high',
  },
  {
    name: 'Task 6',
    due_date: '2025-01-06',
    status: 'completed',
    priority: 'high',
  },
  {
    name: 'Task 6',
    due_date: '2025-01-06',
    status: 'completed',
    priority: 'high',
  },
  {
    name: 'Task 6',
    due_date: '2025-01-06',
    status: 'completed',
    priority: 'high',
  },
  {
    name: 'Task 6',
    due_date: '2025-01-06',
    status: 'completed',
    priority: 'high',
  },
]

// priority can be high low or medium
// status can be completed , in progress or not started

export const notifications: NotificationType[] = [
  {
    name: 'Conversion',
    description: 'Dollar to naira',
  },
  {
    name: 'Company add a new task',
    description: 'Conversion',
  },
]
