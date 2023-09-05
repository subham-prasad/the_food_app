import React from "react";

class Profile extends React.Component {

    constructor(props){
        super(props);
    

    this.state ={
        count: 0,
    }
}

  render() {
    return (
        <div>
            <h1> Profile Class Component</h1>
            <h2>{this.props.name}</h2>
            <h2>{this.props.abc}</h2>
            <h2>Count: {this.state.count}</h2>
            
            <button onClick={() =>
            this.setState ({
                count:1,
            })}> Hi </button>
        </div>
    )
  }
}

export default Profile;
