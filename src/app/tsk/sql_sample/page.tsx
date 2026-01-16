import { getTasksAction } from "@/app/actions/taskActions";
import { Tasks } from "@/app/types";

export default async function SQLPage() {
    const userId = "sai.shooo"; //後でユーザーIDと差し替える

    const tasks: Tasks[]=await getTasksAction(userId);
    
    return (
        <main className="mt-30 ml-60">
            <h1 className="text-xl font-bold mb-4">Task List</h1>
            <ul className="space-y-2">
                {tasks.map(task => (
                    <li
                    key={task.id}
                    className="border p-3 rounded flex justify-between"
                    >
                        <div>
                            <p className="font-semibold">{task.tsk_title}</p>
                            <p className="text-sm text-gray-500">
                                期限: {task.dead_line || "未設定"}
                            </p>
                            <p className="text-sm">
                                優先度: {task.priority||"未設定"}
                            </p>
                        </div>
                        <div>
                            {task.comp ? "☑︎":"◻︎"}
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}