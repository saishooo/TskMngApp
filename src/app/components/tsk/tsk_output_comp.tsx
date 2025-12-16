"use client";

import { useTasks } from "./tsk_parent";
import { useState } from "react";
import Image from "next/image";

export default function Tsk_Output_Completed() {
  const { tasks, updateTask, deleteTask, toggleTask } = useTasks();
  
  const [ isEnditing, setIsEditing ] = useState( false );
  const [ editTitle,  setEditTitle ] = useState( "" );
  const [ editDeadLine, setEditDeadLine ] = useState( "" );

  const Local_UpdateTask = ( id: number, newTitle: string, newDeadLine: string )=>{
    setIsEditing( false );
    updateTask( id, newTitle, newDeadLine );
  };

  const completed_tsk = tasks.filter( task => task.comp === true);
  
  return (
  <div className="fixed top-25 left-64 right-64 h-[350px] flex justify-center">
    <div className="w-150 p-4 border border-gray-300 rounded">
        <h1 className="font-bold mb-3">Completed Tasks</h1>    
            { completed_tsk.length === 0 ? (
                <p>完了済みタスクはありません</p>
                ) : (
                completed_tsk.map(( task ) => (
                  <div key={ task.id } className="flex">
                      {!isEnditing && (
                        <div className="flex">
                          <div className="flex w-10 h-15 px-4">
                            <input
                              type="radio"
                              value="false"
                              checked={ task.comp === false }
                              onChange={() => toggleTask( task.id )}
                              />
                          </div>
    
                          <div className="flex items-center justify-between w-110 px-4 my-2 hover:bg-gray-200 rounded" 
                            onClick = {() => setIsEditing( true )}
                            >
                            
                            <div>
                              <p className="font-semibold">{ task.tsk_title }</p>
                              <p className="text-sm text-gray-700">{ task.dead_line }</p>
                            </div>
                          </div>
    
                          <div className="flex flex-col items-center justify-center w-20 rounded hover:bg-red-200">
                              <button
                              onClick={() => deleteTask( task.id )}
                              >
                                <Image 
                                className="mt-1" 
                                src="/trash.svg" 
                                alt="delete" 
                                width={24} 
                                height={24} />
                              </button>
                              <p className="text-xs mt-1">delete</p>
    
                          </div>
                        </div>
                      )}
                      {isEnditing && (
                        <div className="flex">
                          <div className="flex w-10 h-15 px-4">
                            <input
                              type="radio"
                              value="true"
                              checked={ task.comp === false }
                              onChange={() => toggleTask( task.id )}
                              />
                          </div>
    
                          <div className="flex items-center justify-between w-110 px-4 my-2 hover:bg-gray-200 rounded"
                          onClick = {() => setIsEditing( false )}>
                            
                            <div>
                              <input
                              className="block font-semibold h-10"
                              value={ editTitle }
                              placeholder={ task.tsk_title }
                              onChange = { ( e ) => setEditTitle( e.target.value ) }
                              onClick  = { ( e ) => e.stopPropagation()}
                              />
                              <input
                              className="block text-sm text-gray-700 h-10"
                              type="date"
                              value={editDeadLine}
                              placeholder={ task.dead_line }
                              onChange = { ( e ) => setEditDeadLine( e.target.value ) }
                              onClick  = { ( e ) => e.stopPropagation()}
                              />
                            </div>
                          </div>
    
                          <div className="flex flex-col items-center justify-center w-20 rounded hover:bg-green-200">
                            <button
                              onClick={ () => Local_UpdateTask( task.id, editTitle, editDeadLine ) }
                              >
                                <Image 
                                  className="mt-1" 
                                  src="/update.svg" 
                                  alt="delete" 
                                  width={24} 
                                  height={24} />
                              </button>
                              <p className="text-xs mt-1">Update</p>
                            </div>
                          </div>            
                      )}
                    </div>
                ))
              )}
            </div>
          </div>
    );
}