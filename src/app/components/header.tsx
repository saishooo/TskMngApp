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

  //classNameの宣言
  const sideBerButton_className =
    "block w-full pt-2 pb-2 pr-2 pl-2 text-left font-bold rounded hover:bg-gray-200";
  const logoutButton_className =
    "block w-full pb-2 pr-2 pl-2 text-left rounded hover:bg-gray-200";
  const sideBerLink_className =
    "block pb-2 pr-2 pl-2 rounded hover:bg-gray-200";

  const sideBerButtonMobile_className =
    "inline-block w-35 pt-2 pb-2 pr-2 pl-2 text-left font-bold rounded hover:bg-gray-200";

  const logoutButtonMobile_className =
    "inline-block pb-2 pr-2 pl-2 text-left rounded hover:bg-gray-200";
  const pullDownLinkMobile_className =
    "block w-[120px] pb-2 pr-2 pl-2 rounded hover:bg-gray-200";

  //LogLinkまとめ
  const logLinks = [
    { href: "/Auth/login", label: "Login" },
    { href: "/Auth/signup", label: "Sign Up" },
  ];

  //TaskLinkまとめ
  const taskLinks = [
    { href: "/tsk/tsk_input", label: "Input My Task" },
    { href: "/tsk/tsk_mng", label: "My Tasks" },
    { href: "/tsk/tsk_comp", label: "My Completed Tasks" },
    { href: "/tsk/tsk_all", label: "My All Tasks" },
  ];

  const taskLinksChgSize = [
    { href: "/tsk/tsk_input", label: "Input" },
    { href: "/tsk/tsk_mng", label: "My Tasks" },
    { href: "/tsk/tsk_comp", label: "Completed" },
    { href: "/tsk/tsk_all", label: "All" },
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
        // Desktopサイズ時はサイドバーを表示する
        <>
          <aside className="hidden lg:block fixed top-16 left-0 w-64 h-full bg-gray-100 z-50">
            <nav className="space-y-2">
              <Link
                href="/"
                className="block p-2 font-bold rounded hover:bg-gray-200"
              >
                Introduction
              </Link>

              <button
                className={sideBerButton_className}
                onClick={toggleLogMenu}
              >
                Authentication
              </button>
              {isLogMenuOpen && (
                <div className="inline-block pr-2 pl-2">
                  {logLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={sideBerLink_className}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <button className={logoutButton_className} onClick={logout}>
                    Logout
                  </button>
                </div>
              )}

              <button
                className={sideBerButton_className}
                onClick={toggleTaskMenu}
              >
                TaskList
              </button>
              {isTaskMenuOpen && (
                <div className="block pr-2 pl-2">
                  {taskLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={sideBerLink_className}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </nav>

            <div className="flex items-center justify-center pt-6">
              <button
                className="flex p-2 text-white font-bold border rounded bg-gray-600 hover:bg-gray-400"
                onClick={closeSidebar}
              >
                Menu Close
              </button>
            </div>
          </aside>

          {/*Mobileサイズ時は下にメニューを表示する*/}
          <div className="lg:hidden">
            <div className="fixed top-16 w-full bg-gray-100 z-50 flex">
              <nav className="space-y-2">
                <Link
                  href="/"
                  className="inline-block w-[120px] p-2 font-bold rounded hover:bg-gray-200"
                >
                  Introduction
                </Link>

                <div className="relative inline-block ml-2">
                  <button
                    className={sideBerButtonMobile_className}
                    onClick={toggleLogMenu}
                  >
                    Authentication
                  </button>
                  {isLogMenuOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white shadow rounded z-50">
                      {logLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={pullDownLinkMobile_className}
                        >
                          {link.label}
                        </Link>
                      ))}
                      <button
                        className={logoutButtonMobile_className}
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>

                <div className="relative inline-block ml-2">
                  <button
                    className={sideBerButtonMobile_className}
                    onClick={toggleTaskMenu}
                  >
                    TaskList
                  </button>
                  {isTaskMenuOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white shadow rounded z-50">
                      {taskLinksChgSize.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={pullDownLinkMobile_className}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
