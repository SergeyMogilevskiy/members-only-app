import React from 'react';
import { User } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignInPage, PrivateRoute } from './auth';
import { CreateGroupsPage, GroupPage, GroupsListPage } from './groups';
import { NavBar } from './navigation';

interface AppRoutesProps {
  user: User | null;
  isLoading: boolean;
}
export const AppRoutes = ({ user, isLoading }: AppRoutesProps) => {
  return (
    <Router>
      <NavBar user={user} />
      <Routes>
        <Route element={<PrivateRoute isAuthed={!!user} isLoading={isLoading} />}>
          <Route path="/" element={<GroupsListPage />} />
          <Route path="/groups/:id" element={<GroupPage />} />
          <Route path="/create-group" element={<CreateGroupsPage />} />
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};
