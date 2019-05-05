import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Logo from "../../component/logo/Logo";
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Radio
} from "antd-mobile";
import { connect } from "react-redux";
import { register } from "../../redux/user.redux";

@connect(
  state => state.user,
  { register }
)
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pwd: "",
      repeatpwd: "",
      type: "genius"
    };
    this.handleRegister = this.handleRegister.bind(this);
  }
  handleChange(key, val) {
    this.setState({ [key]: val });
  }
  handleRegister() {
    this.props.register(this.state);
    console.log(this.state);
  }
  render() {
    const RadioItem = Radio.RadioItem;
    const { type } = this.state;
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <WingBlank>
          <List>
            {this.props.msg ? (
              <p className="err-msg">{this.props.msg}</p>
            ) : null}
            <InputItem onChange={v => this.handleChange("user", v)}>
              用户名
            </InputItem>
            <InputItem onChange={v => this.handleChange("pwd", v)}>
              密码
            </InputItem>
            <InputItem onChange={v => this.handleChange("repeatpwd", v)}>
              确认密码
            </InputItem>
            <WhiteSpace />
            <WhiteSpace />
            <RadioItem
              checked={type === "genius"}
              onChange={() => this.handleChange("type", "genius")}
            >
              牛人
            </RadioItem>
            <RadioItem
              checked={type === "boss"}
              onChange={() => this.handleChange("type", "boss")}
            >
              BOSS
            </RadioItem>
            <WhiteSpace />
            <WhiteSpace />
            <Button type="primary" onClick={this.handleRegister}>
              注册
            </Button>
          </List>
        </WingBlank>
      </div>
    );
  }
}
export default Register;
