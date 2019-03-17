import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login,getUserData} from './Auth.redux'
import {Redirect} from 'react-router-dom'
// const mapStatetoProps = (state)=>{
//   console.log('state', state) 
//   return {isAuth:state.auth.isAuth,user:state.auth.user,age:state.auth.age}
// }
// const actionCreators = {login,getUserData}
// Auth = connect(mapStatetoProps,actionCreators)(Auth)
@connect(
  state=>({isAuth:state.auth.isAuth,user:state.auth.user,age:state.auth.age}),
  {login,getUserData}
)
 class Auth extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    this.props.getUserData()
  }
  render() {
    return (
      <div>
        <h1>我的名字是:{this.props.user},年龄{this.props.age}</h1>
        {this.props.isAuth? <Redirect to='./dashboard'/>:null}
        <h2>你需要登陆才可以查看 </h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

export default Auth

