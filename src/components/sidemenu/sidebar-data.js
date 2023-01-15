import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Página Inicial',
    path: '/',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'Alunos',
    path: '/Alunos',
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: 'Aulas',
    path: '/Aulas',
    icon: <BsIcons.BsFillJournalBookmarkFill />
  },
  {
    title: 'Professores',
    path: '/Professores',
    icon: <FaIcons.FaChalkboardTeacher />
  }
];
export const SidebarDataCustom = [
  {
    title: 'Financeiro',
    path: '/Home',
    icon: <AiIcons.AiFillHome />
  }
];
