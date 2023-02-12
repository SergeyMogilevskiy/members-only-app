import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

interface RecurseState<T> {
  data: T;
  isLoading: boolean;
  setData: (data: T) => void;
}

export function useProtectedResource<T>(url: string, defaultValue: T): RecurseState<T> {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T>(defaultValue);

  useEffect(() => {
    async function loadUserGroups() {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        setData(defaultValue);
        setIsLoading(false);
        return;
      }

      const data = await fetch(url, {
        headers: {
          AuthToken: await user.getIdToken(),
        },
      }).then<T>((response) => response.json());
      setData(data);
      setIsLoading(false);
    }

    loadUserGroups();
  }, []);

  return { data, isLoading, setData };
}
