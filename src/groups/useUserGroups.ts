import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { Group } from './types';

export function useUserGroups() {
  const [isLoading, setIsLoading] = useState(true);
  const [userGroups, setUserGroups] = useState<Group[]>([]);

  useEffect(() => {
    async function loadUserGroups() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        setUserGroups([]);
        setIsLoading(false);
        return;
      }
      console.log(user.uid);
      const groups = await fetch(`/users/${user.uid}/groups`, {
        headers: {
          AuthToken: await user.getIdToken(),
        },
      }).then<Group[]>((response) => response.json());
      setUserGroups(groups);
      setIsLoading(false);
      console.log('asdasdda', groups);
    }

    loadUserGroups();
  }, []);

  return { isLoading, userGroups };
}
