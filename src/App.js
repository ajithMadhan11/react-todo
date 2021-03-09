import logo from './logo.svg'
import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      newItem: "",
      list : []
    }
  }

addItem(todoValue){
  if(todoValue !==""){
    const newItem={
      id:Date.now(),
      value:todoValue,
      isDone:false
    };
    const list=[...this.state.list];
    list.push(newItem);
    
    this.setState({
      list,
      newItem:""
    })
  }
}

deleteItem(id){
  const list =[...this.state.list];
  const updatedlist = list.filter(item=> item.id!==id)
  this.setState({list:updatedlist})
}

updateInput(input){
this.setState({newItem:input});
}

  render() {
    return (
      <div>
          <img src={logo} width="100" height="100" className="logo"/>
          <h1 className="app-title">My ToDo App</h1>
          <div className="container">
            Add an Item...
            <br/>
            <input type="text" className="input-text" placeholder="write a TODO" value={this.state.newItem} onChange = {e=>this.updateInput(e.target.value)} required/>
            <button className="add-btn" onClick={()=>this.addItem(this.state.newItem)} disabled={!this.state.newItem.length}>Add Todo</button>
            <div className="list"> 
            <ul>
              {this.state.list.map(item =>{
                return (<li key={item.id}>
                  <input type="checkbox" />
                  {item.value}
                  <button className="btn" onClick={()=>this.deleteItem(item.id)}> Delete</button>
                </li>
                );
              })}
              <li>
                <input type="checkbox"/>
                Learn at LCO
                <button className="btn">Delete</button>
              </li>
            </ul>
            </div>
          </div>
      </div>
    );
  }
}





export default App;
