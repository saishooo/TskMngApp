"use client";

import { useTasks } from "./tsk_parent";
import { useState } from "react";
import Image from "next/image";
import {
  headerInnerClass_center,
  taskBoxBig,
  taskOutput_taskDisplayArea,
  taskOutput_deleteButton,
  taskOutput_updateButton,
} from "@/app/className";
import { useAuth } from "../log/AuthContext";
import { TaskRadioButton } from "../common/taskRadioButton";
import { useTaskFilter } from "../common/useTaskFilter";
import { SelectTaskFilter } from "../common/slectTaskFilter";

export default function Tsk_Output_Management() {
  const { tasks, updateTask, deleteTask, toggleTask } = useTasks();
  const { user } = useAuth();

  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDeadLine, setEditDeadLine] = useState("");
  const [editPriority, setEditPriority] = useState("");

  const filterOptions = [
    { value: "Normal", label: "Normal" },
    { value: "Priority-high", label: "Priority-high" },
    { value: "Priority-medium", label: "Priority-medium" },
    { value: "Priority-low", label: "Priority-low" },
  ];

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
  const management_login_user_tsk = tasks.filter(
    (task) => task.user_id === user.user_id
  );

  //未完了タスクの吸い上げ
  const management_tsks = management_login_user_tsk.filter(
    (task) => task.comp === false
  );

  const { tsk_filter, setTaskFilter, output_filtered_tsks } =
    useTaskFilter(management_tsks);

  //タスクが多く保存された時の表示方法を考える
  return (
    <div className={headerInnerClass_center}>
      <div className={taskBoxBig}>
        <h1 className="font-bold mb-3">My Tasks</h1>
        <div className="inline-flex items-center h-10">
          <h1>Filter :</h1>
          <SelectTaskFilter
            value={tsk_filter}
            options={filterOptions}
            onChange={setTaskFilter}
          />
        </div>

        <div className="pt-3 overflow-y-auto max-h-[490px]">
          {output_filtered_tsks.length === 0 ? (
            <p>There are no unfinished tasks.</p>
          ) : (
            output_filtered_tsks.map((task) => (
              <div key={task.id} className="flex">
                {editingTaskId !== task.id && (
                  <div className="flex">
                    <TaskRadioButton
                      output_type="management"
                      task={task}
                      onToggle={toggleTask}
                    />
                    <div
                      className={taskOutput_taskDisplayArea}
                      onClick={() => {
                        setEditingTaskId(task.id);
                        setEditTitle(task.tsk_title);
                        setEditDeadLine(task.dead_line);
                      }}
                    >
                      <div className="w-70">
                        <p className="font-semibold">{task.tsk_title}</p>
                        <p className="text-sm text-gray-700">
                          {task.dead_line}
                        </p>
                        <p className="text-sm text-gray-700">{task.priority}</p>
                      </div>
                    </div>

                    <div className={taskOutput_deleteButton}>
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
                  <div className="flex">
                    <TaskRadioButton
                      output_type="management"
                      task={task}
                      onToggle={toggleTask}
                    />

                    <div
                      className={taskOutput_taskDisplayArea}
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

                    <div className={taskOutput_updateButton}>
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
