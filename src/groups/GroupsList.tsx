import React from 'react';
import { GroupsListProps } from './types';

export function GroupsList({ isLoading, groups, ListItemComponent }: GroupsListProps) {
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      {groups.map((group) => (
        <ListItemComponent key={group.id} group={group} />
      ))}
    </>
  );
}
