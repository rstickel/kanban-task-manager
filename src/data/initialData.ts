import { BoardData } from '../types';

const initialData: BoardData = {
  tasks: {
    'task-1': { id: 'task-1', title: 'Setup project structure', description: 'Create basic React app with Vite/CRA.', columnId: 'column-1' },
    'task-2': { id: 'task-2', title: 'Implement Header', description: 'Design and code the application header.', columnId: 'column-1' },
    'task-3': { id: 'task-3', title: 'Create Board component', description: 'Set up the main Kanban board layout.', columnId: 'column-1' },
    'task-4': { id: 'task-4', title: 'Develop Column component', description: 'Build individual columns for tasks.', columnId: 'column-2' },
    'task-5': { id: 'task-5', title: 'Design TaskCard', description: 'Implement drag-and-drop task cards.', columnId: 'column-2' },
    'task-6': { id: 'task-6', title: 'Integrate react-beautiful-dnd', description: 'Add drag and drop functionality for tasks.', columnId: 'column-2' },
    'task-7': { id: 'task-7', title: 'Write initial styles', description: 'Apply basic styling using Tailwind CSS.', columnId: 'column-3' },
    'task-8': { id: 'task-8', title: 'Test basic functionality', description: 'Verify task movement and display.', columnId: 'column-3' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-4', 'task-5', 'task-6'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-7', 'task-8'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;
