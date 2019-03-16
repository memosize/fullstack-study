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
    const { isAuth ,match} = this.props
    const redirectToLogin = <Redirect to='./Login'></Redirect>
    const app =  (
      <div>
        <h1>独立团</h1>
        {isAuth?<button onClick={this.props.loginout}>注销</button>:null}
        <ul>
          <li>
            <Link to={`${match.url}/`}>一营</Link>
          </li>
          <li>
            <Link to={`${match.url}/erying`}>二营</Link>
          </li>
          <li>
            <Link to={`${match.url}/qibianlian`}>骑兵连</Link>
          </li>
        </ul>
        <Route path={`${match.url}`} exact={true} component={App}></Route>
        <Route path={`${match.url}erying`} component={Erying}></Route>
        <Route path={`${match.url}qibinglian`} component={Qibinglian}></Route>


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
  return {isAuth:state.auth.isAuth}
}
const actionCreators = {login,loginout}
DashBoard = connect(mapStatetoProps,actionCreators)(DashBoard)
export default DashBoard