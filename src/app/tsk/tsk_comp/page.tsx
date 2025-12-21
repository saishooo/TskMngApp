import Tsk_Output_Completed from "@/app/components/tsk/tsk_output_comp";
import { UserInfo_Output } from "@/app/components/login/userinfo_output";

export default function Tsk_Completed_Page(){
  return(
    <>
    <UserInfo_Output/>
    <Tsk_Output_Completed/>
    </>
  );
}