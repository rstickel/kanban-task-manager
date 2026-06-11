import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid'; // Included for future task addition functionality

import initialData from './data/initialData';
import { BoardData, Column as ColumnType, Task } from './types';

import Header from './components/Header';
import Board from './components/Board';

const App: React.FC = () => {
  const [boardData, setBoardData] = useState<BoardData>(initialData);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // If task dropped outside a droppable area
    if (!destination) {
      return;
    }

    // If task dropped in the same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Get the source and destination columns
    const startColumn = boardData.columns[source.droppableId];
    const endColumn = boardData.columns[destination.droppableId];

    // Moving within the same column
    if (startColumn === endColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1); // Remove task from old position
      newTaskIds.splice(destination.index, 0, draggableId); // Insert task into new position

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      setBoardData({
        ...boardData,
        columns: {
          ...boardData.columns,
          [newColumn.id]: newColumn,
        },
      });
      return;
    }

    // Moving between different columns
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(endColumn.taskIds);
    endTaskIds.splice(destination.index, 0, draggableId);
    const newEndColumn = {
      ...endColumn,
      taskIds: endTaskIds,
    };

    setBoardData({
      ...boardData,
      columns: {
        ...boardData.columns,
        [newStartColumn.id]: newStartColumn,
        [newEndColumn.id]: newEndColumn,
      },
      // Update the columnId for the moved task in the tasks object itself
      tasks: {
        ...boardData.tasks,
        [draggableId]: {
          ...boardData.tasks[draggableId],
          columnId: newEndColumn.id,
        },
      },
    });
  };

  const columnsInOrder = boardData.columnOrder.map(
    (columnId) => boardData.columns[columnId]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col h-screen bg-gray-50 font-sans">
        <Header />
        <main className="flex-grow overflow-hidden">
          <Board columns={columnsInOrder} tasks={boardData.tasks} />
        </main>
      </div>
    </DragDropContext>
  );
};

export default App;
