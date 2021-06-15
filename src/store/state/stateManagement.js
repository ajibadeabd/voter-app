import AsyncStorage from "@react-native-async-storage/async-storage"

const initialState ={
        userData:"",
        error:'',
        success:'',
        token:(async()=>{
            let tok = !!(await AsyncStorage.getItem('token'))
        return JSON.stringify(tok)
        }),
        products:[],
        active_user:[],
        voter:[]
    }


export { initialState}
