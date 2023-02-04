import React from 'react';
import { useUser } from './auth';
import { AppRoutes } from './Routes';

function App() {
  const { isLoading, user } = useUser();
  return (
    <div className="App">
      <AppRoutes isLoading={isLoading} user={user} />
    </div>
  );
}

export default App;
