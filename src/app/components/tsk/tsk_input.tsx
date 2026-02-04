import {
  taskInputButton_className,
  headerInnerCenterBase_className,
  headerInnerCenterLg_className,
  taskBoxBase_className,
  taskBoxSm_className,
  taskBoxLg_className,
  taskBoxMd_className,
  inputBase_className,
  inputLg_className,
  inputMd_className,
} from "@/app/className";

import { addTaskAction } from "@/app/actions/taskActions";
import { Tasks } from "@/app/types";
import { getTasksAction } from "@/app/actions/taskActions";

export default async function Tsk_Input() {
  const userId = "sai.shooo"; //後で取得してきたuserIdに差し替える
  const tasks: Tasks[] = await getTasksAction(userId);

  return (
    <>
      <div className="flex justify-center">
        <div className="f">
          <div
            className={`
          ${headerInnerCenterBase_className}
          ${headerInnerCenterLg_className}
          `}
          >
            <div
              className={`
          ${taskBoxBase_className}
          ${taskBoxLg_className}
          ${taskBoxMd_className}
          ${taskBoxSm_className}
          `}
            >
              <h1 className="mb-3 font-bold">タスク入力</h1>
              <form action={addTaskAction}>
                <input type="hidden" name="user_id" value={userId} />
                <h1 className="mb-2">タスク</h1>
                <input
                  name="tsk_title"
                  type="text"
                  placeholder="タスクを入力"
                  className={`
                  ${inputBase_className}
                  ${inputLg_className}
                  ${inputMd_className}
                  `}
                />

                <h1 className="mb-2">期限</h1>
                <input
                  name="tsk_dead_line"
                  type="date"
                  placeholder="XXXX-YY-ZZ"
                  className={`
                  ${inputBase_className}
                  ${inputLg_className}
                  ${inputMd_className}
                  `}
                />

                <h1 className="mb-2">優先度</h1>
                <select
                  name="tsk_priority"
                  className={`
                  ${inputBase_className}
                  ${inputLg_className}
                  ${inputMd_className}
                  `}
                >
                  <option value="">選択</option>
                  <option value="high">高</option>
                  <option value="medium">中</option>
                  <option value="low">低</option>
                </select>

                <button className={taskInputButton_className}>追加</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
