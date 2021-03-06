import {
  LOGIN_ERROR,
  ADMIN_DASH,
  LogOut,
  ERROR,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  SUCCESS,
  USER_DATA,
  VOTEER_SUCCES,
  OTP_SUCCESS,
  OTP_ERROR,
  PRODUCT_FETCH_SUCCESS,
  VOTE_CASTED,
} from "./types";
import Api from "../api";
import axios from "axios";
import { showMessage, hideMessage } from "react-native-flash-message";


import {Display} from "../../partials/flashMessage";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const fetchVote = async (value) => {
  
  // Api()
  //   .get("/vote")
  // try {
  //   await AsyncStorage.setItem('token', value)
  // } catch (e) {  
  //   // saving error
  // }
}
export const setUserData = async (dispatch,user) => {
    // axios.defaults.headers.common['Authorization'] = (await AsyncStorage.getItem('token'))
    dispatch({type:USER_DATA,payload:user.data})
}

export const unAuthorized = async (dispatch,statusCode) => {
if(statusCode =='401'){
  logout(dispatch)
}
}
  export const getAllVote = async (dispatch) => {
  Api()
  .get("/vote/allElection",
  )
  .then(async(res) => {
    // console.log(res.data.data)
    dispatch({
      type: VOTEER_SUCCES,
      payload: {
        voter: res.data.data,
      },
    });
  })
  .catch((e) => {
    console.log(e.response.data)
  })

}
export const getCastedVote =async(dispatch) => {
  Api()
    .get("/vote/getCastedVote")
    .then((res)=>{
      // console.log(res.data.data)
    dispatch({
      type: VOTE_CASTED,
      payload: {
        voteCasted:res.data.data
      },
    });
    })
    .catch((e)=>{
      console.log(e)
    })
}
  export const Vote =async(formData, dispatch) => {
 Api()
    .post("/vote", formData,
    )
    .then((auth)=>{
      dispatch({
        type: VOTE_CASTED,
        payload: {
          voteCasted:auth.data.data
        },
      });
      showMessage({
        message: auth.data.message ,
        type: "success",
        duration:2000,
        color:'white',
        position:'bottom',
      });
    })
    .catch((e)=>{
      showMessage({
        message: e.response.data.message ,
        type: "danger",
        duration:2000,
        color:'white',
        position:'bottom',
      });
    })
}
  export const login =(formData, dispatch,navigation) => {
    Api()
    .post("/user/login", formData)
    .then(async(res) => {
      if (res.data.success === true) {
        console.log(res.data.data.user)
    await AsyncStorage.setItem('token', res.data.data.token)
    axios.defaults.headers.common['Authorization'] = `${res.data.data.token}`;
    showMessage({
      message: res.data.message ,
      type: "success",
      duration:2000,
      color:'white',
      position:'bottom',
      // backgroundColor:'green'
    });
    // await getUserProfile(dispatch)    

    dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            user: res.data.data.user,
            token: res.data.data.token,
          },
        });
        // navigation.push("Home")
    // await getUserProfile(dispatch)    
      }
    })
    .catch((e) => {
      showMessage({
        message: e.response.data.message ,
        type: "danger",
        duration:2000,
        color:'white',
        position:'bottom',
        // backgroundColor:'green'
      });
      dispatch({
        type: LogOut,
        payload: {
          user: '',
          token: '',
        },
      });
    });
};
export const logout =async (dispatch,navigation) => {
  await AsyncStorage.removeItem('token')
  showMessage({
    message: "logged out successfully" ,
    type: "success",
    duration:2000,
    color:'white',
    position:'bottom',
    // backgroundColor:'green'
  });
  dispatch({
    type: LogOut,
    payload: {
      user: '',
      token: '',
    },
  });

};
export const register = (formData, dispatch, nav) => {
  Api()
    .post("/user/register", formData)
    .then((auth) => {
      if (auth.data.success === true) {
          showMessage({
          message: auth.data.message ,
          type: "success",
          duration:2000,
          color:'white',
          position:'bottom',
          backgroundColor:'green'
        });
        nav.push("Login"
        // , {
        //   params: {
        //     email: formData.email,
        //   },
        // }
        );
        dispatch({ type: REGISTER_SUCCESS, payload: auth.data.message });
      }
    })
    .catch((e) => {
      console.log(e.response.data.message);
      showMessage({
        message: e.response.data.message ,
        type: "danger",
        duration:2000,
        color:'white',
        position:'bottom',
      });
      dispatch({ type: REGISTER_ERROR, payload: e.response?.data.message });
    });
};

export const setStateError = (dispatch) => {
  dispatch({ type: ERROR, payload: "" });
};

export const setStateSuccess = (dispatch) => {
  dispatch({ type: SUCCESS, payload: "" });
};
export const getUserProfile= async(dispatch,history,tok)=>{
  let t = await AsyncStorage.getItem('token')
      Api().get("/user/get_profile"
      )
      .then(auth=>{
    dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            user: auth.data.data.user,
            // token: res.data.data.token,
          },
        });
        return 
        // dispatch({type:USER_DATA,payload:auth.data.data,user: res.data.data.user})
      }
        )
      .catch(e=>{
    unAuthorized(dispatch,e?.response?.status)

      })
  
  }

// export const Verify_otp= (formData,dispatch,history)=>{
// console.log(formData)

//   Api().post("/user/verify_otp",formData)
//   .then(auth=>{
//     // console.log(auth)
//     if(auth.data.success===true){
//     console.log(auth.data.success)
//       dispatch({type:OTP_SUCCESS,payload:auth.data.message})
//     history.push("/")
//     }

//   })
//   .catch(e=>{
//     console.log(e.response)
//     // if(e.response.data.message='account has been activated please proceed to log in'){
//     //   dispatch({type:OTP_ERROR,payload:e.response?.data.message})
//     // history.push("/")
//     // }
//     dispatch({type:OTP_ERROR,payload:e.response?.data.message})

//   })
// }

// export const resend_otp= (formData,dispatch,history)=>{
//   console.log({formData})
//     Api().post("/user/resend_otp",formData)
//     .then(auth=>{
//       if(auth.data.success===true){
//         dispatch({type:OTP_SUCCESS,payload:auth.data.message})
//       history.push("/")
//       }

//     })
//     .catch(e=>{
//       dispatch({type:OTP_ERROR,payload:e.response?.data.message})
//       history.push("/")

//     })

//   }

//   export const create_investment= (formData,dispatch,history)=>{
//     console.log({formData})
//       Api().post("/investment/create_investment",formData)
//       .then(auth=>{
//         console.log(auth)
//         if(auth.data.success===true){
//         view_all_products(dispatch,history)

//           dispatch({type:OTP_SUCCESS,payload:auth.data.message})
//         // history.push("/")

//         }

//       })
//       .catch(e=>{
//         dispatch({type:OTP_ERROR,payload:e.response?.data.message})

//         // history.push("/")

//       })

//     }

//   export const delete_investment= (dispatch,id,history)=>{
//       Api().delete(`/investment/delete_each_product/${id}`)
//       .then(auth=>{
//         console.log(auth)
//         if(auth.data.success===true){
//           view_all_products(dispatch,history)
//         console.log(auth.data.success)
//           dispatch({type:SUCCESS,payload:auth.data.message})
//         // history.push("/")

//         }

//       })
//       .catch(e=>{
//         console.log(e.response)
//         dispatch({type:ERROR,payload:e.response?.data.message})

//         // history.push("/")

//       })

//     }

//   export const view_all_products= (dispatch,history)=>{
//       Api().get("/investment/view_all_product")
//       .then(auth=>{
//         console.log(auth.data.data)
//         if(auth.data.success===true){
//           dispatch({type:PRODUCT_FETCH_SUCCESS,
//             products:auth.data.data})
//         }

//       })
//       .catch(e=>{
//         console.log(e.response)
//         dispatch({type:OTP_ERROR,payload:e.response?.data.message})

//       })

//     }

//     export const fetch__investment= (dispatch,history)=>{
//       Api().get("/investment/fetch__investment")
//       .then(auth=>{
//         console.log(auth.data.data)
//         // if(auth.data.success===true){
//         //   dispatch({type:PRODUCT_FETCH_SUCCESS,
//         //     products:auth.data.data})
//         // }

//       })
//       .catch(e=>{
//         console.log(e.response)
//         // dispatch({type:OTP_ERROR,payload:e.response?.data.message})

//       })

//     }

//     //
//     export const adminDashboard= (dispatch,history)=>{
//       Api().get("/admin/adminDashboard")
//       .then(auth=>{
//         console.log(auth.data.data)
//         if(auth.data.success===true){
//           // {all_product: Array(24), active_user: Array(2)}
//           let activeuser = auth.data.data.active_user
//           let all_product = auth.data.data.all_product
//           console.log(all_product)
//           dispatch({type:ADMIN_DASH,
//             // payload:auth.data.message,
//             active_user:activeuser,
//             products:all_product})
//         // history.push("/")
//         return auth.data.data
//         }
//         return

//       })
//       .catch(e=>{
//         console.log(e.response)
//         // dispatch({type:OTP_ERROR,payload:e.response?.data.message})
//         // history.push("/")
//         return null

//       })

// }
