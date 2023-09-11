import React, { useState } from "react";

import ChatroomInput from "../Components/ChatroomInput"
import UserList from "../Components/UserList"
import UserAvatar from "../Components/UserAvatar";
import CustomButton from "../Components/CustomButton";
import ChatBox from "../Components/ChatBox";

import SocketClient from "../utils/SocketClient";

const Socket = SocketClient({ server: 'http://localhost:3000'});

export default function Chat() {
  const [userList, setUserList] = useState([
    {
      userName: "usuario1",
      name: "Nombre del Usuario 1",
    },
    {
      userName: "usuario2",
      name: "Nombre del Usuario 2",
    },
  ]);

  const [textoEnviado, setTextoEnviado] = useState('');

  const handleTextoEnviado = (texto) => {
    setTextoEnviado(texto);
  };

  const agregarUsuario = () => {
    const nuevoUsuario = {
      userName: `usuario${userList.length + 1}`,
      name: `Nombre del Usuario ${userList.length + 1}`,
    };
    setUserList([...userList, nuevoUsuario]);
  };

  return (
    <section>
      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <UserList list={userList} />
        </div>
      </aside>

      <div className="dark:bg-gray-600 p-4 sm:ml-64 h-screen px-3 overflow-y-auto flex flex-col overflow-hidden">
        <div className="inline-flex items-center ml-3 text-sm sm:hidden">
          <CustomButton
            dataDrawerTarget="default-sidebar"
            dataDrawerToggle="default-sidebar"
            ariaControls="default-sidebar"
          >
            <kbd className="inline-flex items-center px-2 py-1.5">
              <svg className="w-5 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
              </svg>
            </kbd>
          </CustomButton>
          <UserAvatar />
        </div>
        <ChatBox textoEnviado={textoEnviado} socket={Socket} className="flex-grow overflow-auto"/>
        <button onClick={agregarUsuario}>Agregar Usuario</button>
        <ChatroomInput onTextoEnviado={handleTextoEnviado} socket={Socket} className="" />
      </div>
    </section>
  )
}