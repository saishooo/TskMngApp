"use client";

import { useState } from "react";
import { useAuth } from "./Auth/AuthContext";
import Image from "next/image";
import Link from "next/link";

//Headerコンポーネント
export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLogMenuOpen, setIsLogMenuOpen] = useState(false);
  const [isTaskMenuOpen, setIsTaskMenuOpen] = useState(false);

  const { logout } = useAuth();

  //LogLinkまとめ
  const logLinks = [
    { href: "/Auth/login", label: "Login" },
    { href: "/Auth/signup", label: "Sign Up" },
  ];

  //TaskLinkまとめ
  const taskLinks = [
    { href: "/tsk/tsk_input", label: "Input" },
    { href: "/tsk/tsk_mng", label: "My Tasks" },
    { href: "/tsk/tsk_comp", label: "Completed" },
    { href: "/tsk/tsk_all", label: "All Tasks" },
    { href: "/tsk/sql_sample", label: "SQLPage"},
  ];

  //サイドバーを閉じる
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  //ログインメニューの表示の切り替え
  const toggleLogMenu = () => {
    setIsLogMenuOpen((prev) => !prev);
  };

  //タスクメニューの表示切り替え
  const toggleTaskMenu = () => {
    setIsTaskMenuOpen((prev) => !prev);
  };

  //メニューサイドバーの表示切り替え　menuクリック時
  const toggleMenuClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 flex items-center px-4 bg-gray-600 z-50">
        <div className="flex w-full">
          <button onClick={toggleMenuClick}>
            <Image src="/menu.svg" alt="menu" width={24} height={24} />
          </button>

          <h1 className="font-bold text-2xl text-white ml-5">
            Task Management
          </h1>
        </div>
      </header>

      {isSidebarOpen && (
        <aside className="fixed top-16 z-50 bg-gray-100 w-full flex lg:left-0 lg:w-48 lg:h-full lg:block">
          <nav className="flex gap-2 lg:flex-col lg:space-y-2">
            <Link href="/" className="font-bold p-2 rounded hover:bg-gray-200">
              Introduction
            </Link>

            {/* Authentication */}
            <div className="relative">
              <button
                className="p-2 font-bold rounded hover:bg-gray-200"
                onClick={toggleLogMenu}
              >
                Authentication
              </button>

              {isLogMenuOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow rounded z-50 lg:static lg:shadow-none lg:bg-transparent">
                  {logLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block p-2 md:"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <button onClick={logout} className="block p-2">
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* TaskList */}
            <div className="relative">
              <button
                className="p-2 font-bold rounded hover:bg-gray-200"
                onClick={toggleTaskMenu}
              >
                TaskList
              </button>

              {isTaskMenuOpen && (
                <div
                  className="
              absolute top-full left-0 mt-1 bg-white shadow rounded z-50
              lg:static lg:shadow-none lg:bg-transparent
            "
                >
                  {taskLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block p-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:pt-6">
            <button
              className="flex p-2 text-white font-bold border rounded bg-gray-600 hover:bg-gray-400"
              onClick={closeSidebar}
            >
              Menu Close
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
