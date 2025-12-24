import Tsk_Output_Management from "@/app/components/tsk/tsk_output_mg";
import { LogInfo_Output } from "@/app/components/log/loginfo_output";

export default function Tsk_Management_Page() {
  return (
    <>
    <LogInfo_Output/>
    <Tsk_Output_Management/>
    </>
  );
}