import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class Todolist extends Component {

  // 构造函数 constructor
  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleItemClick(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            deleteItem = {this.handleItemClick} 
            key        = {index} 
            content    = {item} 
            index      = {index}
          />
        )
      })
    )
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button className='red-btn' style={{background:'red'}} onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }

}

export default Todolist;
