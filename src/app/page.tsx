//最初に表示される紹介ージ

const descriptions = [
  "Development of TskManagerApp started on 2025-12-06 at 00:06.",
  "We have created a task management tool.",
  "Please log in or sign up first, then start adding your tasks.",
  "You can also add tasks as a guest.",
  "You can organize your daily tasks and easily track your progress.",
];

const headerInner_className = "fixed top-16 flex justify-center";
const documentBase_output = "items-center pt-20 pl-10";
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
