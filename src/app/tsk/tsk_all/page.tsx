//全てのタスクを表示するページ

import Tsk_Output_AllList from "@/app/components/tsk/tsk_output_all";
import { LogInfo_Output } from "@/app/components/Auth/loginfo_output";

export default function Tsk_Completed_Page() {
  return (
    <>
      <LogInfo_Output />
      <Tsk_Output_AllList />
    </>
  );
}
