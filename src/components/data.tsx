export interface TaskType {
  name: string
  due_date: string
  status: string
  description: string
  priority: string
  notification?: boolean
  assignee?: string
  deadline?: string
  attachments?: string
  links?: string
}

export interface NotificationType {
  name: string
  description: string
  status: boolean
}

export const tasks: TaskType[] = [
  {
    name: 'Task 1',
    description:
      'Find & Download Free Graphic Resources for Letterhead Vectors, Stock Photos & PSD files. ✓ Free for commercial use ✓ High Quality Images.',
    due_date: '2025-01-07',
    status: 'completed',
    priority: 'high',
    notification: true,
    assignee: 'John Doe',
    deadline: '2025-01-07',
    attachments: 'No attachments',
    links: 'No links',
  },
  {
    name: 'Task 2',
    description:
      'Find & Download Free Graphic Resources for Letterhead Vectors, Stock Photos & PSD files. ✓ Free for commercial use ✓ High Quality Images.',

    due_date: '2025-05-01',
    status: 'in progress',
    priority: 'low',
    notification: true,
    assignee: 'John Doe',
  },
  {
    name: 'Task 3',
    description:
      'Find & Download Free Graphic Resources for Letterhead Vectors, Stock Photos & PSD files. ✓ Free for commercial use ✓ High Quality Images.',

    due_date: '2024-12-01',
    status: 'not started',
    priority: 'high',
    notification: false,
    assignee: 'John Doe',
  },
  {
    name: 'Task 4',
    description:
      'Find & Download Free Graphic Resources for Letterhead Vectors, Stock Photos & PSD files. ✓ Free for commercial use ✓ High Quality Images.',

    due_date: '2025-01-05',
    status: 'completed',
    priority: 'high',
    notification: true,
  },
  {
    name: 'Task 4',
    description:
      'Find & Download Free Graphic Resources for Letterhead Vectors, Stock Photos & PSD files. ✓ Free for commercial use ✓ High Quality Images.',

    due_date: '2025-01-05',
    status: 'completed',
    priority: 'high',
    notification: true,
  },
  {
    name: 'Task 4',
    description:
      'Find & Download Free Graphic Resources for Letterhead Vectors, Stock Photos & PSD files. ✓ Free for commercial use ✓ High Quality Images.',

    due_date: '2025-01-05',
    status: 'completed',
    priority: 'high',
    notification: false,
  },
  {
    name: 'Task 4',
    due_date: '2025-01-05',
    status: 'completed',
    priority: 'high',
    notification: true,
    description:
      'Find & Download Free Graphic Resources for Letterhead Vectors, Stock Photos & PSD files. ✓ Free for commercial use ✓ High Quality Images.',
  },
  {
    name: 'Task 5',
    due_date: '2022-01-01',
    status: 'completed',
    priority: 'high',
    notification: true,
    description: '',
  },
]

// priority can be high low or medium
// status can be completed , in progress or not started

export const notifications: NotificationType[] = [
  {
    name: 'Conversion',
    description: 'Dollar to naira',
    status: false,
  },
  {
    name: 'Company add a new task',
    description: 'Conversion',
    status: false,
  },
  {
    name: 'Company add a new task',
    description: 'Conversion',
    status: false,
  },
  {
    name: 'Company add a new task',
    description: 'Conversion',
    status: false,
  },
  {
    name: 'Company add a new task',
    description: 'Conversion',
    status: false,
  },
  {
    name: 'Company add a new task',
    description: 'Conversion',
    status: false,
  },
  {
    name: 'Company add a new task',
    description: 'Conversion',
    status: false,
  },
  {
    name: 'Company add a new task',
    description: 'Conversion',
    status: false,
  },
]
