import { Tasks } from "@/app/types";

type Props = {
  output_type: "completed" | "management";
  task: Tasks;
  onToggle: (id: number) => void;
};

//ラジオボタン
export const TaskRadioButton = ({ output_type, task, onToggle }: Props) => {
  const isChecked = output_type === "completed" ? true : false;

  return (
    <div className="flex w-10 h-15 px-4">
      {isChecked === true ? (
        <>
          <input
            type="radio"
            value="false"
            checked={task.comp === false}
            onChange={() => onToggle(task.id)}
          />
        </>
      ) : (
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
