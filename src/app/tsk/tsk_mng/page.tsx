import Tsk_Output_Management from "@/app/components/tsk/tsk_output_mg";
import { UserInfo_Output } from "@/app/components/login/userinfo_output";

export default function Tsk_Management_Page() {
  return (
    <>
    <UserInfo_Output/>
    <Tsk_Output_Management/>
    </>
  );
}