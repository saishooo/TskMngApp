"use client";

import Tsk_Parent from "../../components/tsk/tsk_parent";
import Tsk_Input from "@/app/components/tsk/tsk_input";

export default function Tsk_Input_Page(){
    return(
        <div>
            <Tsk_Parent>
                {/* ここから下がchildrenだよ！*/}
                {/* children(下記すべての関数)を受け取り、関数の引数にtasks,setTasksに数値を与える */}

                {/* tasks,SetTasksをTsk_Inputに渡している */}
                {({ tasks, setTasks }) => (
                    <Tsk_Input tasks={tasks} setTasks={setTasks} />
                )}
            </Tsk_Parent>
        </div>
    );
}