"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header(){
  const [ isSidebarOpen, setIsSidebarOpen ] = useState( false );
  const [ isTaskMenuOpen, setIsTaskMenuOpen ] = useState( false );
  const taskLinks = [
    { href: "/tsk/tsk_input", label: "My Task Input" },
    { href: "/tsk/tsk_mng",   label: "My Tasks" },
    { href: "/tsk/tsk_comp",  label: "My Tasks Completed" },
  ];

  //サイドバーを閉じる
  const closeSidebar = () => {
    setIsSidebarOpen( false );
  };

  //タスクメニューの表示切り替え
  //prevの意味
  const toggleTaskMenu =() => {
    setIsTaskMenuOpen( prev => !prev );
  }

  //メニューサイドバーの表示切り替え　menuクリック時
  const toggleMenuClick = () =>{
    setIsSidebarOpen( prev => !prev );
  };

  return(
      <>
        <header className="fixed top-0 left-0 right-0 h-16 flex items-center px-4 bg-gray-600">
          <div className="flex w-full">
            <button onClick = { toggleMenuClick }>
              <Image src="/menu.svg" alt="menu" width={24} height={24} />
            </button>

            <h1 className="font-bold text-2xl text-white ml-5">Task Management</h1>

          </div>
        </header>
        
        { isSidebarOpen && (
          <aside className="fixed top-16 left-0 w-64 h-full bg-gray-100">
            <nav className="space-y-2">
              <Link href="/" className="block p-2 font-bold rounded hover:bg-gray-200">
                Home
              </Link>

              <button
                className="block w-full p-2 text-left font-bold rounded hover:bg-gray-200"
                onClick={ toggleTaskMenu }
              >
                Task
              </button>
              { isTaskMenuOpen && (
                <div className="block p-2">
                  { taskLinks.map(link => (
                    <Link
                    key = { link.href }
                    href = { link.href }
                    className = "block p-2 rounded hover:bg-gray-200"
                    >
                      { link.label }
                    </Link>
                  ))}
                </div>
              )}
            </nav> 

            <button 
              className="block w-full p-2 text-left font-bold rounded hover:bg-gray-200"
              onClick={closeSidebar}
            >
              Menu Close
            </button>

          </aside>
        )}
      </>
    );
}