//最初に表示されるhomeページ

import { headerInnerChgSixe_className } from "./className";

const descriptions = [
  "Development of TskManagerApp started on 2025-12-06 at 00:06.",
  "We have created a task management tool.",
  "Please log in or sign up first, then start adding your tasks.",
  "You can also add tasks as a guest.",
  "You can organize your daily tasks and easily track your progress.",
];

export default function Introduction() {
  return (
    <div className={headerInnerChgSixe_className}>
      {/* Desktopサイズ時はサイドバーを表示する */}
      <div className="hidden md:block items-center pt-16 pl-74">
        {descriptions.map((text,index)=>(
          <p key={index}>
            {text}
          </p>
        ))}
      </div>
  

      {/* Mobileサイズ時は下にメニューを表示する */}
      <div className="md:hidden items-center pt-16 pl-10">
        {descriptions.map((text,index)=>(
          <p key={index}>
            {text}
          </p>
        ))}
      </div>

    </div>
  );
}
