import axios from 'axios'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGINOUT'
const USER_DATA = 'USER_DATA'
const initState={
    isAuth:false,
    user:'李云龙',
    age:20
}
export function auth(state=initState,action){
    console.log('action', action)
    console.log('state', state)
    switch (action.type) {
        case LOGIN:
            return {...state,isAuth:true}
        case LOGOUT:
            return {...state,isAuth:false}
        case USER_DATA:
            return {...state,...action.payload}            
        default:
            return state
    }
}
// action 
export function getUserData(){
    return dispatch=>{
        axios.get('./data').then(res=>{
            console.log('res', res)
            if (res.status === 200){
              dispatch(userData(res.data))
            }
          })
    }
}
export function userData(data){
    return {type:USER_DATA,payload:data}
}
export function login(){
    return {type:LOGIN}
}
export function loginout(){
    return {type:LOGOUT}
}