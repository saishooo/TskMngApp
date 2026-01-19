//タスクを入力(登録)するページ
import Tsk_Input from "@/app/components/tsk/tsk_input";
import { LogInfo_Output } from "@/app/components/Auth/loginfo_output";

export default function Tsk_Input_Page() {
  return (
    <>
      <LogInfo_Output />
      <Tsk_Input />
    </>
  );
}
