// import React from 'react';
import { HiUser, 
    // HiPlusCircle,
    //  HiNewspaper, 
    // HiChatAlt, 
    // HiChartPie
 } from 'react-icons/hi';
import Layout from './views/Layout';
import Dashboard from './views/Dashboard/Dashboard';
import EditProfil from './views/Profil/Edit';

// import Profil from './views/Profil';
// import AddPost from './views/AddPost';
// import Post from './views/Post';
// import Message from './views/Message';
// import Dashboard from './views/Dashboard';

const BackofficeRoutes = [
  {
    path: '/backoffice/',
    icon: HiUser,
    component: Dashboard,
  },
  {
    path: '/backoffice/dashboard',
    icon: HiUser,
    component: Dashboard,
  },
//   {
//     path: '/backoffice/addPost',
//     icon: HiPlusCircle,
//     component: AddPost,
//   },
//   {
//     path: '/backoffice/post',
//     icon: HiNewspaper,
//     component: Post,
//   },
//   {
//     path: '/backoffice/message',
//     icon: HiChatAlt,
//     component: Message,
//   },
  {
    path: '/backoffice/profil',
    component: EditProfil,
  },
  
];

export default BackofficeRoutes;
