import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignInPage } from './auth';
import { CreateGroupsPage, GroupPage, GroupsListPage } from './groups';
import { NavBar } from './navigation';

interface RouteProp {
  path: string;
  Component: () => JSX.Element;
}
const routes: RouteProp[] = [
  {
    path: '/',
    Component: GroupsListPage,
  },
  {
    path: '/groups/:id',
    Component: GroupPage,
  },
  {
    path: '/sign-in',
    Component: SignInPage,
  },
  {
    path: '/create-group',
    Component: CreateGroupsPage,
  },
];

export const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.Component />} />
        ))}
      </Routes>
    </Router>
  );
};
