import Tsk_Output_Completed from "@/app/components/tsk/tsk_output_comp";
import { LogInfo_Output } from "@/app/components/log/loginfo_output";

export default function Tsk_Completed_Page() {
  return (
    <>
      <LogInfo_Output />
      <Tsk_Output_Completed />
    </>
  );
}
