import React from 'react';
import { postWithCredential } from '../data';
import { GroupItemProps } from './types';

export function GroupsListItem({ group }: GroupItemProps) {
  async function requestToJoin() {
    await postWithCredential(`/groups/${group.id}/requests`);

    alert('you request has been submitted!');
  }

  return (
    <div className="list-item">
      <div className="list-item-data">
        <h3>{group.name}</h3>
        <p>Owned by: {group.owner.fullName}</p>
        <p>{group.members.length} member</p>
      </div>
      <button onClick={requestToJoin}>Ask to Join</button>
    </div>
  );
}
