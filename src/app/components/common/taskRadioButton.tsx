//ラジオボタンに関する処理を行うファイル

import { Tasks } from "@/app/types";

//ラジオボタン関数の引数に使用する型
type Props = {
  output_type: "completed" | "management";
  task: Tasks;
  onToggle: (id: number) => void;
};

//ラジオボタン
export const TaskRadioButton = ({ output_type, task, onToggle }: Props) => {
  const isChecked = output_type === "completed" ? true : false;

  return (
    <div className="flex items-center justify-center w-6 h-15 px-4">
      {isChecked === true ? (
        //タスク完了ページ使用するラジオボタン
        <>
          <input
            type="radio"
            value="false"
            checked={task.comp === false}
            onChange={() => onToggle(task.id)}
          />
        </>
      ) : (
        //タスク未完了ページで使用するラジオボタン
        <>
          <input
            type="radio"
            value="true"
            checked={task.comp === true}
            onChange={() => onToggle(task.id)}
          />
        </>
      )}
    </div>
  );
};
