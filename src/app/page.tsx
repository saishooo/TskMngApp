//最初に表示される紹介ージ

const descriptions = [
  "タスク管理アプリの開発は 2025年12月6日 00:06 に開始されました。",
  "私はタスク管理ツールを作成しました。",
  "まずはログイン、またはサインアップを行ってからタスクの追加を開始してください。",
  "ゲストとしてタスクを追加することも可能です。",
  "日々のタスクを整理し、進捗を把握できます。",
];

const headerInner_className = "fixed top-16 flex justify-center";
const documentBase_output = "items-center pt-20 pl-2 pr-2";
const documentLg_output = "lg:pt-16 lg:pl-74";

export default function Introduction() {
  return (
    <div className={headerInner_className}>
      <div
        className={`
        ${documentBase_output}
        ${documentLg_output}
        `}
      >
        {descriptions.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
}
