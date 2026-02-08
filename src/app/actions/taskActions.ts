"use server";

import { revalidatePath } from "next/cache";
import type { Tasks } from "../types";
import {
  getTasks,
  addTask,
  toggleTask,
  updateTask,
  deleteTask,
} from "../lib/todo";

/* タスク一覧を取得 */
export async function getTasksAction(userId: string): Promise<Tasks[]> {
  return getTasks(userId);
}

/* タスク追加 */
export async function addTaskAction(formData: FormData) {
  const task = {
    id: null,
    comp: false,
    tsk_title: formData.get("tsk_title") as string,
    dead_line: formData.get("tsk_dead_line") as string,
    priority: formData.get("tsk_priority") as string,
    createdAt: null,
    updatedAt: null,
    user_id: formData.get("user_id") as string,
  };

  addTask(task);
  revalidatePath("/tsk/sql_sample"); //ページの描写を再度行わせる命令
}

/* タスクの完了・未完了の切り替え */
export async function toggleTaskAction(formData: FormData) {
  const idValue = formData.get("tsk_id");

  if (typeof idValue !== "string") {
    throw new Error("invalid id");
  }

  const tsk_id = Number(idValue);

  //チェックボックスにチェックが入ると、trueが入る
  const tsk_comp = formData.has("tsk_comp");

  toggleTask(tsk_id, tsk_comp);
  revalidatePath("/tsk/sql_sample");
}

/* タスク内容の更新 */
export async function updateTaskAction(
  id: number,
  task: Pick<Tasks, "tsk_title" | "dead_line" | "priority">
) {
  updateTask(id, task);
  revalidatePath("/");
}

/* タスクの削除 */
export async function deleteTaskAction(formData: FormData) {
  const id = formData.get("tsk_id");
  if (typeof id != "string") {
    throw new Error("invalid form data");
  }

  deleteTask(id);
  revalidatePath("/");
}
