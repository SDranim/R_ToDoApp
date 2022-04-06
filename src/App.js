import React from "react";
import Add from "./Components/Add"
import Tasklist from "./Components/Tasklist"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks:[
        { id: Math.random(), text: "task1" },
        { id: Math.random(), text: "task2" },
        { id: Math.random(), text: "task3" },
      ],
      }
  }
 
  render() { 
    const addtodo=(text)=>{
 
      return this.setState({tasks:[...this.state.tasks, {id:Math.random(), text:text}] })
    }
    return ( 
      <div>
        <Add addtodo={addtodo}/>
        <Tasklist tasks={this.state.tasks}/>
      </div>
     );
  }
}
 
export default App;