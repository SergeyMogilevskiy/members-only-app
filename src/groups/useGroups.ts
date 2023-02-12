import { useEffect, useState } from 'react';
import { Group } from './types';

export function useGroups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    async function loadGroups() {
      const groups = await fetch('/groups').then<Group[]>((response) => response.json());
      setGroups(groups);
      setIsLoading(false);
    }

    loadGroups();
  }, []);

  return { isLoading, groups };
}
