import React from 'react';
import { Column as ColumnType, Task } from '../types';
import Column from './Column';

interface BoardProps {
  columns: ColumnType[];
  tasks: { [key: string]: Task };
}

const Board: React.FC<BoardProps> = ({ columns, tasks }) => {
  return (
    <div className="flex flex-row p-4 pt-8 overflow-x-auto h-full items-start justify-start">
      {columns.map((column) => {
        const columnTasks = column.taskIds.map((taskId) => tasks[taskId]);
        return (
          <Column key={column.id} column={column} tasks={columnTasks} />
        );
      })}
    </div>
  );
};

export default Board;
