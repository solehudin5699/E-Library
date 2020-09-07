import React from "react";
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";

class PrivateRoute extends React.Component
{

  render(){
    const { component:Component,authAPI,...rest } = this.props;
    return(
    <Route
    {...rest}
    render={
      
      (props)=>{

        if(authAPI.statusLogin===200){
          return <Component {...props}/>
        } else {
          return <Redirect to={
            {
              pathname:"/login",
              state:props.location
            }
          }/>
        }
      }
    }
    />
  )
};}

const mapStateToProps = (state) =>{
  const {authAPI} = state;
  return{
    authAPI
  }
}

export default connect(mapStateToProps)(PrivateRoute);