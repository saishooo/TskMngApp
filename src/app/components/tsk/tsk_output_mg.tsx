"use client";

import { useTasks } from "./tsk_parent";
import { useState } from "react";
import Image from "next/image";
import {
  taskOutput_deleteButton_className,
  taskOutput_updateButton_className,
  headerInnerCenterBase_className,
  headerInnerCenterLg_className,
  taskBoxBigBase_className,
  taskBoxBigLg_className,
  taskBoxBigMd_className,
  overflowBase_className,
  overflowLg_className,
  overflowMd_className,
  taskOutput_taskDisplayAreaBase_className,
  taskOutput_taskDisplayAreaLg_className,
  taskOutput_taskDisplayAreaMd_className,
} from "@/app/className";
import { useAuth } from "../Auth/AuthContext";
import { TaskRadioButton } from "../common/taskRadioButton";
import { useTaskFilter } from "../common/useTaskFilter";
import { SelectTaskFilter } from "../common/slectTaskFilter";
import { useTaskSort } from "../common/useTaskSort";
import { filterOptions, sortOptions } from "../common/taskOption";

export default function Tsk_Output_Management() {
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
  const management_login_user_tsk = tasks.filter(
    (task) => task.user_id === user.user_id
  );

  //未完了タスクの吸い上げ
  const management_tsks = management_login_user_tsk.filter(
    (task) => task.comp === false
  );

  //フィルターをかけた結果
  const { tsk_filter, setTaskFilter, output_filtered_tsks } =
    useTaskFilter(management_tsks);

  const [sortValue, setSortValue] = useState("");
  //フィルターにかけたタスクをさらに、ソートする
  const output_filtered_sort_tsks = useTaskSort(
    output_filtered_tsks,
    sortValue
  );

  //タスクが多く保存された時の表示方法を考える
  return (
    <>
      <div className="flex">
        <div
          className={`
          ${headerInnerCenterBase_className}
          ${headerInnerCenterLg_className}
          `}
        >
          <div
            className={`
            ${taskBoxBigBase_className}
            ${taskBoxBigLg_className}
            ${taskBoxBigMd_className}
            `}
          >
            <h1 className="font-bold mb-3">未達成タスク</h1>

            <div className="flex flex-col h-10 md:flex-row md-0">
              <div className="flex items-center">
                <h1 className="w-16 md:w-16 me-2 whitespace-nowrap">
                  絞り込み:
                </h1>
                <SelectTaskFilter
                  value={tsk_filter}
                  options={filterOptions}
                  onChange={setTaskFilter}
                />
              </div>

              <div className="flex items-center md:ml-8">
                <h1 className="w-16 md:w-16 mr-2 whitespace-nowrap">
                  並び替え:
                </h1>
                <SelectTaskFilter
                  value={sortValue}
                  options={sortOptions}
                  onChange={setSortValue}
                />
              </div>
              {/*
          <div className="flex items-center ml-20 hrounded hover:bg-gray-200">
            <button>
              <Image src="/search.svg" alt="search" width={30} height={30} />
            </button>
          </div>
          */}
            </div>

            <div
              className={`
              ${overflowBase_className}
              ${overflowLg_className}
              ${overflowMd_className}
              `}
            >
              {output_filtered_sort_tsks.length === 0 ? (
                <p>未達成のタスクはありません。</p>
              ) : (
                //表示タスクがある場合
                output_filtered_sort_tsks.map((task) => (
                  <div key={task.id} className="flex">
                    {editingTaskId !== task.id && (
                      //タスク表示状態
                      <div className="flex">
                        <TaskRadioButton
                          output_type="management"
                          task={task}
                          onToggle={toggleTask}
                        />
                        <div
                          className={`
                            ${taskOutput_taskDisplayAreaBase_className}
                            ${taskOutput_taskDisplayAreaLg_className}
                            ${taskOutput_taskDisplayAreaMd_className}
                            `}
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
                            <p className="text-sm text-gray-700">
                              {task.priority}
                            </p>
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
                          <p className="text-xs mt-1">削除</p>
                        </div>
                      </div>
                    )}
                    {editingTaskId === task.id && (
                      //タスク編集状態
                      <div className="flex">
                        <TaskRadioButton
                          output_type="management"
                          task={task}
                          onToggle={toggleTask}
                        />

                        <div
                          className={`
                            ${taskOutput_taskDisplayAreaBase_className}
                            ${taskOutput_taskDisplayAreaLg_className}
                            ${taskOutput_taskDisplayAreaMd_className}
                            `}
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
                              <option value="">選択</option>
                              <option value="high">高</option>
                              <option value="medium">中</option>
                              <option value="low">低</option>
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
                          <p className="text-xs mt-1">更新</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
