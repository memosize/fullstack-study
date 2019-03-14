import React, { Component } from 'react'
import {Link,Route,Redirect} from 'react-router-dom'
import App from './App'
import { connect } from 'react-redux';
import {loginout,login} from './Auth.redux'

 class DashBoard extends Component {
    constructor(props){
        super(props)
    }

  render() {
    console.log('this.props', this.props)
    const { isAuth } = this.props
    const redirectToLogin = <Redirect to='./Login'></Redirect>
   
    const app =  (
      <div>
        <ul>
          <li>
            <Link to='/dashboard' exact='true'>一营</Link>
          </li>
          <li>
            <Link to='/dashboard/erying'>二营</Link>
          </li>
          <li>
            <Link to='/dashboard/qibinglian'>骑兵连</Link>
          </li>
        </ul>
        <Route path='/dashboard/' exact={true} component={App}></Route>
        <Route path='/dashboard/erying' component={Erying}></Route>
        <Route path='/dashboard/qibinglian' component={Qibinglian}></Route>


      </div>
    )
    if (isAuth===false) {
      return redirectToLogin
    }else{
      return app
    }
    
  }
}
function Erying(){
  return(
    <div>二营</div>
  )
}
function Qibinglian(){
  return(
    <div>骑兵连</div>
  )
}

const mapStatetoProps = (state)=>{
  console.log('state', state) 
  return {isAuth:state.auth.isAuth,loginout:state}
}
const actionCreators = {login,loginout}
DashBoard = connect(mapStatetoProps,actionCreators)(DashBoard)
export default DashBoard