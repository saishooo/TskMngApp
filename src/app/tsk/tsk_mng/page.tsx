"use client";

import Tsk_Parent from "@/app/components/tsk/tsk_parent";
import Tsk_Output_Management from "@/app/components/tsk/tsk_output_mg";

export default function Tsk_Management_Page() {
  return (
    <Tsk_Parent>
      {({ tasks, setTasks }) => (
        <Tsk_Output_Management tasks={tasks} setTasks={setTasks}/>
      )}
    </Tsk_Parent>
  );
}