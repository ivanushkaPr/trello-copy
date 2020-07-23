import React, {Component} from 'react';
import initialData from './initialData';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';


class App extends Component {
  state = initialData;

  onDragStart = (start, provided) => {
    console.log(start, provided)
  }

  onDragEnd = result => {
    const {draggableId, source, destination} = result;

    if(destination === null) {
      return;
    }
    
    if(source.index === destination.index && source.droppableId === destination.droppableId) {
      return;
    }
    console.log(result);
    const column = this.state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);

    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn
      }
    }

    this.setState(newState)
  }

  render() {
    return (
      <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
        {
          this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
      
          return <Column key={column.id} column={column} tasks={tasks}/>
          })
        }

      </DragDropContext>
      
    )
  }
}



export default App;
