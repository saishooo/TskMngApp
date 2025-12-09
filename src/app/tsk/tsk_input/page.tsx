"use client";

import Parent from "../../components/tsk/tsk_parent";
import Tsk_Input from "@/app/components/tsk/tsk_input";

export default function Tsk_Input_Page(){
    return(
        <div>
            {/* saito ここで何をやっているのか*/}
            <Parent>
                {({ tasks, setTasks }) => (
                    <Tsk_Input tasks={tasks} setTasks={setTasks} />
                )}
            </Parent>
        </div>
    );
}