import React, {Component} from 'react';
import classes from './CreateBoard.module.css';
import styled from 'styled-components';

export default class CreateBoard extends Component {
  render() {
    return(
      <div className={classes.container}>
        <div className={classes.header}>
          <p>Creating a board...</p>
          <button type="button">Close</button>
        </div>
        
        <div className={classes.section}>
          <p> Как будет называться доска? </p>
          <input onKeyDown={this.props.enterKeyDown} type="text"/>
          <div className={classes.controls}>
            <button type="button"> Отмена </button>
            <button type="button"> Создать </button>
          </div>
        </div>
      </div>  
    )
  }
}
