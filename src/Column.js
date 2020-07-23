import React, {Component} from 'react';
import styled from 'styled-components';
import Task from './Task';
import {Droppable} from 'react-beautiful-dnd';

const Container = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
min-width: 250px;
display: flex;
flex-direction: column;`;
const Title = styled.h3`
padding: 8px`;
const TaskList = styled.div`
padding: 8px;
transition: background-color 0.2s ease;
background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
flex-grow: 1;
`;

export default class Column extends Component {
  render() {
    return (
      <Container>
        <Title>{ this.props.column.title }</Title>
        <Droppable droppableId={this.props.column.id}>
        {(provided, snapshot) => (
          <TaskList isDraggingOver={snapshot.isDraggingOver} {...provided.droppableProps} ref={provided.innerRef}> {this.props.tasks.map((task, index) => <Task key={task.id} task={task.id} content={task.content} index={index}/>) } 
          {provided.placeholder}
          </TaskList>
          
        )}
        </Droppable>
        
      </Container>
    )
  }
}