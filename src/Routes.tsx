import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

interface RouteProp {
  path: string;
  Component: React.ReactNode;
}
const routes: RouteProp[] = [
  {
    path: '/',
    Component: <h1>title</h1>,
  },
];

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.Component} />
        ))}
      </Routes>
    </Router>
  );
};
