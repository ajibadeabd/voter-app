import { showMessage, hideMessage } from "react-native-flash-message";

const Display =async ({message,type})=>{
  showMessage({
  message: message ,
  type: "success",
  duration:2000,
  color:'white',
  position:'bottom',
  backgroundColor:type
});
}


export  {Display};
