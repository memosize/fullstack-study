import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login} from './Auth.redux'
import {Redirect} from 'react-router-dom'
 class Auth extends Component {
  constructor(props){
      super(props)
  }
  render() {
    return (
      <div>
        {this.props.isAuth? <Redirect to='./dashboard'/>:null}
        <h2>你需要登陆才可以查看 </h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

const mapStatetoProps = (state)=>{
  console.log('state', state) 
  return {isAuth:state.auth.isAuth}
}
const actionCreators = {login}
Auth = connect(mapStatetoProps,actionCreators)(Auth)
export default Auth

