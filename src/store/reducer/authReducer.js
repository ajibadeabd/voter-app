import {LOGIN_ERROR,ERROR,SUCCESS,PRODUCT_FETCH_SUCCESS,LogOut,
    REGISTER_SUCCESS,REGISTER_ERROR,OTP_SUCCESS,ADMIN_DASH,VOTE_CASTED,
    USER_DATA,LOGIN_SUCCESS, OTP_ERROR,VOTEER_SUCCES} from '../action/types'
import {initialState} from '../state/stateManagement'
const auth=(state=initialState,action)=>{
switch(action.type){
        case VOTE_CASTED:
        return{
            ...state,
            voteCasted:action.payload.voteCasted,
        }
        case LOGIN_ERROR:
        return{
            ...state,
            error:action.payload,
        }
        case VOTEER_SUCCES:
        return{
            ...state,
            voter:action.payload.voter,
        }
        case ERROR:
          
        return{
            ...state,
            error:action.payload,
        }
        case USER_DATA:
        return{
            ...state,
            userData:action.payload,
        }
        case REGISTER_SUCCESS:
          
        return{
            ...state,
            success:action.payload,
        }
        
        case LOGIN_SUCCESS:
            return{
                ...state,
                token:action.payload.token,
                userData:action.payload.user
            }
            case LogOut:
                return{
                    token:'',
                    userData:''
                }    
        case SUCCESS:
        return{
            ...state,
            success:action.payload,
        }
        case OTP_SUCCESS:
                return{
                    ...state,
            success:action.payload,
                }
        case OTP_ERROR:
               return{
                    ...state,
            error:action.payload,
                }
        case REGISTER_ERROR:
            
        return{
            ...state,
            error:action.payload,
        }
        case ADMIN_DASH:
            console.log(action)
            return{
                ...state,
                active_user:action.active_user,
                // error:action.payload,
                products:action.products
            }
        case PRODUCT_FETCH_SUCCESS:
            console.log(action.products.product)
            return {
                ...state,
                success:action.payload,
                products:action.products.product
        }
    default:
        return state
  }
}
export default auth