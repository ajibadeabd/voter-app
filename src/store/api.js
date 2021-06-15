import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'


const getToken =async()=>{
    const token = await AsyncStorage.getItem('token')
    return `${(token)}`
}

 const Api= () => {
    return axios.create({
        baseURL:'http://192.168.43.20:1113/api/v1',
        // baseURL:'https://lasu-voter.herokuapp.com/api/v1',
    });
};
export default Api;