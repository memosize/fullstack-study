import axios from "axios";


const REGISTER_SCUUESS = 'REGISTER_SCUUESS'
const ERROR_MSG = 'ERROR_MSG'



const initState = {
    isAuth:false,
    msg:'',
    user:'',
    pwd:'',
    type:''
}
// reducer 
 

export function user(state=initState,action){
    switch(action.type){
        case REGISTER_SCUUESS:
         return {...state,isAuth:true,msg:'',...action.payload}
        case ERROR_MSG:
        return {...state,isAuth:false,msg:action.msg}
        default:
        return state
    }
}
export function registerSuccess(data){
    return {type:REGISTER_SCUUESS,payload:data}
}
export function errMsg(msg){
    return {msg,type:ERROR_MSG}
}
export function register({user,pwd,repeatpwd,type}){
    if (!user||!pwd||!type){
        return errMsg('用户名密码必须输入')
    }
    if (pwd!==repeatpwd){
        return errMsg('两次输入密码不一致')
    }
    return dispatch => {
     axios.post('/user/register',{user,pwd,type}).then(res=>{
        if(res.status==200&&res.data.code===0){
            dispatch(registerSuccess({user,pwd,type}))
        }else{
            dispatch(errMsg(res.data.msg))
        }
     })  
    }
  
}