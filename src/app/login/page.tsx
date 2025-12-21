import TskMngApp_Login from "../components/login/login";
import { UserInfo_Output } from "../components/login/userinfo_output";

export default function Tsk_Login_Page(){
  return(
    <>
    <UserInfo_Output/>
    <TskMngApp_Login/>
    </>
  );
}