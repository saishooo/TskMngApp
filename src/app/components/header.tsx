"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header(){
  const [ sidebarOpen, setSidebarOpen ] = useState( false );
  const [ taskOpen, setTaskOpen ] = useState( false );

  const closeSidebar = () => setSidebarOpen( false );

  //menuクリック時の処理
  const menuClick = () =>{
    setSidebarOpen(!sidebarOpen);
  };

  return(
      <>
        <header className="bg-gray-600 h-16 flex items-center px-4 fixed top-0 left-0 right-0">
          <div className="flex w-full">
            <button 
              onClick={menuClick}
              >
              <Image src="/menu.svg" alt="menu" width={24} height={24} />
            </button>

            <h1 className="font-bold text-2xl text-white ml-5">Task Management</h1>

          </div>
        </header>
        
        {sidebarOpen && (
          <aside className="fixed top-16 left-0 w-64 h-full bg-gray-100">
            <nav className="space-y-2">
              <Link href="/" className="font-bold block p-2 rounded hover:bg-gray-200">
                Home
              </Link>

              <button
                className="font-bold block p-2 rounded hover:bg-gray-200 w-full text-left"
                onClick={() => setTaskOpen(!taskOpen)}
              >
                Task
              </button>
              {taskOpen && (
                <div className="block p-2">
                  <Link href="/tsk/tsk_input" className="block p-2 rounded hover:bg-gray-200">
                    Task Input
                  </Link>
                  <Link href="/tsk/tsk_mng" className="block p-2 rounded hover:bg-gray-200">
                    Task Management
                  </Link>
                  <Link href="/tsk/tsk_comp" className="block p-2 rounded hover:bg-gray-200">
                    Task Completed
                  </Link>
                </div>
              )}
            </nav> 

            <button 
              className="font-bold block p-2 rounded hover:bg-gray-200 w-full text-left"
              onClick={closeSidebar}
            >
              Menu Close
            </button>

          </aside>
        )}
      </>
    );
}