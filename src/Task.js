import React, {Component} from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';


const Container = styled.div`
border: 1px solid lightgrey;
padding: 8px;
margin-botton: 8px;
border-radius: 2px;
background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;

export default class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task} index={this.props.index}>
        {(provided, snapshot)=> (
          <Container isDragging={snapshot.isDragging} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{ this.props.content}</Container>
        )}
      </Draggable>
    )
  }
}