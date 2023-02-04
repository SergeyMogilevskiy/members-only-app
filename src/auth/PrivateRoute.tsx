import React from 'react';
import { Outlet, Navigate, RouteProps } from 'react-router-dom';

interface PrivateRouteProps {
  isAuthed: boolean;
  isLoading: boolean;
}
export function PrivateRoute({ isAuthed, isLoading, ...props }: PrivateRouteProps & RouteProps) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return isAuthed ? <Outlet /> : <Navigate to="/sign-in" />;
}
