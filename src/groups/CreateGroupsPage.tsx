import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postWithCredential } from '../data';

export function CreateGroupsPage() {
  const [nameValue, setNameValue] = useState('');
  const navigate = useNavigate();

  async function createGroup() {
    const response = await postWithCredential<{ newGroupId: string }>('/groups', { name: nameValue });

    if (response) navigate(`/groups/${response.newGroupId}`);
  }

  return (
    <div className="centered-container">
      <h1>Create Group</h1>
      <input
        type="text"
        placeholder="Enter Name for Group"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <button onClick={createGroup}>Create Group</button>
    </div>
  );
}
