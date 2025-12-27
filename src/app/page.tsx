import { headerInnerClass } from "./className";

export default function Introduction() {
  return (
    <div className={headerInnerClass}>
      <div className="block">
        <p className="mb-3">Development of TskManagerApp started on 2025-12-06 at 00:06.</p>
        <p>We have created a task management tool.</p>
        <p>Please log in or sign up first, then start adding your tasks.</p>
        <p>You can also add tasks as a guest.</p>
        <p>You can organize your daily tasks and easily track your progress.</p>
      </div>
    </div>
  );
}
