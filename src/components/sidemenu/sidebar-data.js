import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Página Inicial',
    path: '/Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Alunos',
    path: '/Alunos',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Aulas',
    path: '/Aulas',
    icon: <BsIcons.BsFillJournalBookmarkFill />,
    cName: 'nav-text'
  },
  {
    title: 'Professores',
    path: '/Professores',
    icon: <FaIcons.FaChalkboardTeacher />,
    cName: 'nav-text'
  }
];
export const SidebarDataCustom = [
  {
    title: 'Financeiro',
    path: '/Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  }
];
