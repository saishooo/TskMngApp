import { db } from "./db";
import type { Tasks } from "../types";

{
  /* SQL:タスク情報を取得する */
}
export const getTasks = (userId: string): Tasks[] => {
  const stmt = db.prepare(`
        SELECT
            id,
            comp,
            tsk_title,
            dead_line,
            priority,
            created_at AS createdAt,
            updated_at AS updatedAt,
            user_id
        FROM tasks
        WHERE user_id = ?
        ORDER BY created_at DESC
        `);

  const rows = stmt.all(userId) as any[];

  return rows.map((row) => ({
    ...row,
    comp: Boolean(row.comp),
  })) as Tasks[];
};

{
  /* SQL:タスク追加 */
}
export const addTask = (
  task: Omit<Tasks, "id" | "createdAt" | "updatedAt">
) => {
  const stmt = db.prepare(`
        INSERT INTO tasks (
            tsk_title,
            dead_line,
            priority,
            user_id
        )
            VALUES(?,?,?,?)
        `);
  stmt.run(task.tsk_title, task.dead_line, task.priority, task.user_id);
};

{
  /* SQL:タスクの完了・未完了の切り替え */
}
export const toggleTask = (id: number, comp: boolean) => {
  const stmt = db.prepare(`
        UPDATE tasks
        SET
            comp = ?
            updated_at = CURRENT_TIMESTANP
        WHRE id = ?
        `);
  stmt.run(comp ? 1 : 0, id);
};

{
  /* SPL:タスク編集 */
}
export const updateTask = (
  id: number,
  task: Pick<Tasks, "tsk_title" | "dead_line" | "priority">
) => {
  const stmt = db.prepare(`
        UPDATE tasks
        SET
            tsk_title = ?,
            dead_line = ?,
            priority = ?,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
        `);
  stmt.run(task.tsk_title, task.dead_line, task.priority, id);
};

{
  /* SQL:タスク削除 */
}
export const deleteTask = (id: number) => {
  const stmt = db.prepare(`
        DELETE FROM tasks
        WHERE id = ?
        `);

  stmt.run(id);
};
