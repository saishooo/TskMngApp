"use client";

import { useTasks } from "./tsk_parent";
import { useState } from "react";
import Image from "next/image";
import {
  headerInnerCenter_className,
  taskBoxBig_className,
  taskOutput_taskDisplayArea_className,
  taskOutput_deleteButton_className,
  taskOutput_updateButton_className,
} from "@/app/className";
import { useAuth } from "../Auth/AuthContext";
import { TaskRadioButton } from "../common/taskRadioButton";
import { useTaskFilter } from "../common/useTaskFilter";
import { SelectTaskFilter } from "../common/slectTaskFilter";
import { useTaskSort } from "../common/useTaskSort";
import { filterOptions, sortOptions } from "../common/taskOption";

//完了済みタスクを表示するコンポーネント
export default function Tsk_Output_Completed() {
  const { tasks, updateTask, deleteTask, toggleTask } = useTasks();
  const { user } = useAuth();

  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDeadLine, setEditDeadLine] = useState("");
  const [editPriority, setEditPriority] = useState("");

  //アップデート関数
  const Local_UpdateTask = (
    id: number,
    newTitle: string,
    newDeadLine: string,
    newPriority: string
  ) => {
    updateTask(id, newTitle, newDeadLine, newPriority);
    setEditingTaskId(null);
    setEditTitle("");
    setEditDeadLine("");
  };

  //ログインしているユーザーID別にタスクを吸い上げ
  const comp_login_user_tsks = tasks.filter(
    (task) => task.user_id === user.user_id
  );

  //完了タスクのみを吸い上げ
  const completed_tsks = comp_login_user_tsks.filter(
    (task) => task.comp === true
  );

  const { tsk_filter, setTaskFilter, output_filtered_tsks } =
    useTaskFilter(completed_tsks);

  const [sortValue, setSortValue] = useState("");
  //フィルターにかけたタスクをさらに、ソートする
  const output_filtered_sort_tsks = useTaskSort(
    output_filtered_tsks,
    sortValue
  );

  return (
    <div className={headerInnerCenter_className}>
      <div className={taskBoxBig_className}>
        <h1 className="font-bold mb-3">My Tasks Completed</h1>
        <div className="flex items-center h-10">
          <div className="flex items-center">
            <h1 className="me-2">Filter :</h1>
            <SelectTaskFilter
              value={tsk_filter}
              options={filterOptions}
              onChange={setTaskFilter}
            />
          </div>

          <div className="flex items-center ml-8">
            <h1 className="mr-2">Sorte :</h1>
            <SelectTaskFilter
              value={sortValue}
              options={sortOptions}
              onChange={setSortValue}
            />
          </div>
          <div className="flex items-center ml-20 hrounded hover:bg-gray-200">
            <button>
              <Image src="/search.svg" alt="search" width={30} height={30} />
            </button>
          </div>
        </div>
        <div className="pt-3 overflow-y-auto max-h-[490px]">
          {output_filtered_sort_tsks.length === 0 ? (
            <p>There are no completed tasks.</p>
          ) : (
            //表示するタスクがある場合
            output_filtered_sort_tsks.map((task) => (
              <div key={task.id} className="flex">
                {editingTaskId !== task.id && (
                  //タスク表示状態
                  <div className="flex">
                    <TaskRadioButton
                      output_type="completed"
                      task={task}
                      onToggle={toggleTask}
                    />
                    <div
                      className={taskOutput_taskDisplayArea_className}
                      onClick={() => {
                        setEditingTaskId(task.id);
                        setEditTitle(task.tsk_title);
                        setEditDeadLine(task.dead_line);
                      }}
                    >
                      <div>
                        <p className="font-semibold">{task.tsk_title}</p>
                        <p className="text-sm text-gray-700">
                          {task.dead_line}
                        </p>
                        <p className="text-sm text-gray-700">{task.priority}</p>
                      </div>
                    </div>

                    <div className={taskOutput_deleteButton_className}>
                      <button onClick={() => deleteTask(task.id)}>
                        <Image
                          className="mt-1"
                          src="/trash.svg"
                          alt="delete"
                          width={24}
                          height={24}
                        />
                      </button>
                      <p className="text-xs mt-1">delete</p>
                    </div>
                  </div>
                )}
                {editingTaskId === task.id && (
                  //タスク編集状態
                  <div className="flex">
                    <TaskRadioButton
                      output_type="completed"
                      task={task}
                      onToggle={toggleTask}
                    />
                    <div
                      className={taskOutput_taskDisplayArea_className}
                      onClick={() => setEditingTaskId(null)}
                    >
                      <div>
                        <input
                          className="block font-semibold text-gray-600 h-10"
                          value={editTitle}
                          placeholder={task.tsk_title}
                          onChange={(e) => setEditTitle(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                        />
                        <input
                          className="block text-sm text-gray-700 h-10"
                          type="date"
                          value={editDeadLine}
                          placeholder={task.dead_line}
                          onChange={(e) => setEditDeadLine(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                        />
                        <select
                          name="tsk_priority"
                          value={editPriority}
                          onChange={(e) => setEditPriority(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="block text-sm text-gray-700 h-10"
                        >
                          <option value="">select</option>
                          <option value="high">high</option>
                          <option value="medium">medium</option>
                          <option value="low">low</option>
                        </select>
                      </div>
                    </div>

                    <div className={taskOutput_updateButton_className}>
                      <button
                        onClick={() =>
                          Local_UpdateTask(
                            task.id,
                            editTitle,
                            editDeadLine,
                            editPriority
                          )
                        }
                      >
                        <Image
                          className="mt-1"
                          src="/update.svg"
                          alt="delete"
                          width={24}
                          height={24}
                        />
                      </button>
                      <p className="text-xs mt-1">Update</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
