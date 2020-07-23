import React, {Component} from 'react';
import initialData from './initialData';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Board from './Board';
import CreateBoard from './CreateBoard/CreateBoard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Label = styled.div`
border: 1px solid lightgrey;
width: 200px;
display: flex;
justify-content: center;
align-items: center;
padding: 25px;
margin: 10px;
background-color: white;
`;

const Navigation = styled.nav`
`;

const List = styled.ul`
display: flex;
list-style-type: none;
`;

const Item = styled.li``;



class App extends Component {
  state = initialData;

  onDragStart = (start) => {
    
  }

  onDragUpdate = (update) => {

  }

  onDragEnd = result => {
    const {draggableId, source, destination} = result;

    if(destination === null) {
      return;
    }
    
    if(source.index === destination.index && source.droppableId === destination.droppableId) {
      return;
    }
    

    const prefix = draggableId.split('-')[0];
    const start = this.state[prefix].columns[source.droppableId];
    const finish =  this.state[prefix].columns[destination.droppableId];;

    if(start === finish) {
      const column = this.state[prefix].columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
  
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
  
      const newColumn = {
        ...column,
        taskIds: newTaskIds
      };
  
  
      const newState = {
        ...this.state,
        [prefix]: {
          ...this.state[prefix],
          columns: {
            ...this.state[prefix].columns,
            [newColumn.id]: newColumn
          }
        }
      }
  
  
    this.setState(newState);
    return;
    }

    if(start !== finish) {
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);

      const newStart = {
        ...start,
        taskIds: startTaskIds
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);

      const newFinish = {
        ...finish,
        taskIds: finishTaskIds
      };

      const newState = {
        ...this.state,
        [prefix]: {
          ...this.state[prefix],
          columns: {
            ...this.state[prefix].columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish
          }
        }
      };

      this.setState(newState);
      return;
    }

    return;
  }

  onEnterKeyHandler = (e) => {
    if(e.key === 'Enter') {
      const newState = {
        ...this.state,
        [e.target.value]: {},
      }

      this.setState(newState);

      e.target.value = '';
    }
  }

  render() {
    const nav =  Object.keys(this.state).map(label => {
      const href=`/${label}`
      return (
        <Item>
          <Link to={href}>
            <Label> { label }</Label>
          </Link>
        </Item>
      )
    })


    const boards = Object.keys(this.state).map(board => {
      const href=`/${board}`;

      return (
        <Route path={href}>
          <Link to="/"> Go home </Link>

          <Board 
          dragStart={this.onDragStart} 
          dragEnd={this.onDragEnd} 
          data={this.state[board]} 
          name={board}/>
        </Route>
      )
  })

    return (
      <Router>
        <div>
        
        {
          
     
        }

        <Switch>
          {boards} 
          <Route path='/'>
          <CreateBoard enterKeyDown={this.onEnterKeyHandler}/>
          <Navigation>
            <List>
              {nav}
            </List>
          </Navigation>
          </Route>
        </Switch>
        </div>
      </Router>
    )
  }
}



export default App;
