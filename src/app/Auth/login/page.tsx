import TskMngApp_Login from "@/app/components/Auth/login";
import { LogInfo_Output } from "@/app/components/Auth/loginfo_output";

export default function Tsk_Login_Page() {
  return (
    <>
      <LogInfo_Output />
      <TskMngApp_Login />
    </>
  );
}
