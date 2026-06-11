import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Task } from '../types';

interface TaskCardProps {
  task: Task;
  index: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`
            bg-white p-3 mb-3 rounded-md shadow-sm
            border border-gray-200
            ${snapshot.isDragging ? 'border-blue-500 shadow-lg' : ''}
          `}
        >
          <h3 className="text-sm font-semibold text-gray-800 mb-1">{task.title}</h3>
          <p className="text-xs text-gray-600">{task.description}</p>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
