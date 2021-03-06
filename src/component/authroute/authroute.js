import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Toast } from "antd-mobile";
import { connect } from "react-redux";
import { saveUserData } from "../../redux/user.redux";
@withRouter
@connect(
  null,
  { saveUserData }
)
class AuthRoute extends Component {
  componentDidMount() {
    const publicList = ["/login", "/register"];
    const pathname = this.props.location.pathname;
    if (publicList.indexOf(pathname) > -1) {
      return null;
    }
    axios.get("/user/info").then(res => {
      if (res.status === 200) {
        console.log(res.data);
        if (res.data.code === 0) {
          this.props.saveUserData(res.data.data);
          // 有登录信息
        } else {
          console.log("this.props.history", this.props.history);
          this.props.history.push("/login");
        }
      }
    });
    /*
        是否登录
        根据当前地址 判断是否需要跳转
      */
  }
  render() {
    return null;
  }
}
export default AuthRoute;
