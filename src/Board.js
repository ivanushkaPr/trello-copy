import React, {Component} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Column from './Column';

const Container = styled.div`
display: flex;
`;

export default class Board extends Component {
  render() {
    console.log(this.props, 'what props')
    if(Object.keys(this.props.data).length === 0) {
      return <p> No props </p>;
    } else {
      return(
        <DragDropContext key={this.props.board} onDragStart={this.props.dragStart} onDragEnd={this.props.dragEnd}>
              <Container>
              {
                  this.props.data.columnOrder.map(columnId => {
                
                    const column =  this.props.data.columns[columnId];
                    console.log(column, 'column');
                    
                    const tasks = column.taskIds.map(taskId =>  this.props.data.tasks[taskId]);
                
                    return <Column key={column.id} column={column} tasks={tasks}/>
                    })
                
              }
              </Container>
          </DragDropContext>
      )
    }

    
  }
}