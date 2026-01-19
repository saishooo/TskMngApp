//プルダウンによる、タスクフィルターを実行するファイル

//引数の一部としてもらうfilterの引数のかた
type Option = {
  value: string;
  label: string;
};

//引数の型の宣言
type Props = {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

//プルダウン表示を行う
export const SelectTaskFilter = ({ value, options, onChange }: Props) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="ml-3"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
