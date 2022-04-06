import React from "react";

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            text:""
         }
    }
   
    render() { 
        return ( 
            <div>
<input type="text" onChange={(event)=>this.setState({text: event.target.value} )} value={this.state.text} />
<button onClick={()=>{ 
    this.props.addtodo(this.state.text); 
    this.setState({text:""})} }>
    add</button>
            </div>
         );
    }
}
 
export default Add;