import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './components/tick.png';

class App extends Component{
  constructor(){
    super();
    this.state = {
      todoItems: [
        {title: 'Hang out with friends', isComplete: false},
        {title: 'Practise speaking', isComplete: true}
      ],
      newItem: '',
      currentFilter: 'all', 
      count: 1
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    //this.itemLeft = this.itemLeft.bind(this);
    
  }

  onItemClicked(item){
    return(event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      let len = this.state.count;
      const index = todoItems.indexOf(item);
    if(todoItems.length !== 0){
      for(let item in todoItems){
        if(!item.isComplete){
          len++;
        }
      }
    }
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index+1)
        ], count: len
    });
  }
}

  onKeyUp(event){
    if(event.keyCode === 13){
      let text = event.target.value;
      const todoItems = this.state.todoItems;
      let len = this.state.count;
      if(!text){
        return;
      }
      text = text.trim();
      if(!text){return}
      if(todoItems.length !== 0){
        for(let item in todoItems){
          if(!item.isComplete){
            len++;
          }
        }
      }
      this.setState({
        newItem: '',
        todoItems: [
          {title: text, isComplete:false},
          ...this.state.todoItems
        ],
        count: len
      });
    }
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    });
  }

  // itemLeft(){
  //   const {todoItems} = this.state;
  //   let count = 0;
  //   if(todoItems.length !== 0){
  //   for(let item in todoItems){
  //     if(!item.isComplete){
  //        count++;
  //        //console.log(count);
  //     }
  //     return count;
  //   }
  // }else{
  //   return 0;
  // }
  // }

  render(){
    const { todoItems, newItem } = this.state;
    if(todoItems.length){
      return (
        <div className="App">
          <h1>todos</h1>
          <div className="Header">
            <img src={tick} width={32} height={32} />
            <input type="text" placeholder="What you need to do?"
            value={newItem} onChange={this.onChange}
            onKeyUp={this.onKeyUp} />
          </div>
          <div className="Body">
          {todoItems.length && todoItems.map((item, index) =>
          <TodoItem
          key={index}
          item={item}
          onClick={this.onItemClicked(item)} />)
          }
          </div>
          <div className="Footer">
            <span className="Left">
              <span>{this.state.count}</span>
            </span>
            <div className="Mid">
              
            </div>
            <div className="Right">

            </div>
          </div>
        </div>
        );
    }else{
      return (
        <div className="App">Nothing here.</div>
      );
    }
  }
}

export default App;
