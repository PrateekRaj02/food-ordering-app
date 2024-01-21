import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            count:0,
            count2:2,
        }
        // console.log(this.props.name+"Child Constructor");
    }

    componentDidMount(){
        // console.log(this.props.name+"Child component did mount");
    }

    render(){
        // console.log(this.props.name+"Child Render");
        return(
            <div className="user-card">
                <h1>count: {this.state.count}</h1>
                <div>
                    <UserContext.Consumer>
                        {(data)=><h2 className="font-bold">{data.logedInUser}</h2>}
                    </UserContext.Consumer>
                </div>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>Increase</button>
                <h3>Name : {this.props.name}</h3>
                <h3>Location: {this.props.location}</h3>
            </div>
        )
    }

}

export default UserClass;