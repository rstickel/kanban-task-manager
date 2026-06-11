import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Column as ColumnType, Task } from '../types';
import TaskCard from './TaskCard';

interface ColumnProps {
  column: ColumnType;
  tasks: Task[];
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <div className="flex flex-col flex-shrink-0 w-80 bg-gray-100 rounded-lg p-4 mx-2 shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-4">{column.title}</h2>
      <Droppable droppableId={column.id} type="task">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`
              flex-grow min-h-[100px] p-2 rounded-md
              ${snapshot.isDraggingOver ? 'bg-blue-50' : 'bg-gray-50'}
              transition-colors duration-200
            `}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
