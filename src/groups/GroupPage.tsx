import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../auth';
import { postWithCredential, useProtectedResource } from '../data';
import { MessagesList, MessageInfo } from '../messages';
import { RequestInfo, RequestList } from '../requests';

interface GroupInfo {
  name?: string;
  ownerId?: string;
  owner: { fullName: string };
  messages: MessageInfo[];
  requests: RequestInfo[];
}

export function GroupPage() {
  const [messageValue, setMessageValue] = useState('');
  const { id } = useParams<{ id: string }>();
  const { user } = useUser();
  const { data: group, setData: setGroup } = useProtectedResource<GroupInfo>(`/groups/${id}`, {
    owner: { fullName: '' },
    messages: [],
    requests: [],
  });

  async function acceptRequest(requestId: string) {
    const updatedRequests = await postWithCredential<RequestInfo[]>(`/groups/${id}/requests/${requestId}/accept`);
    setGroup({
      ...group,
      requests: updatedRequests ?? [],
    });
  }

  async function rejectRequest(requestId: string) {
    const updatedRequests = await postWithCredential<RequestInfo[]>(`/groups/${id}/requests/${requestId}/reject`);
    setGroup({
      ...group,
      requests: updatedRequests ?? [],
    });
  }

  async function postMessage() {
    const updatedMessages = await postWithCredential<MessageInfo[]>(`/groups/${id}/messages`, { text: messageValue });
    setGroup({
      ...group,
      messages: updatedMessages ?? [],
    });
    setMessageValue('');
  }

  return (
    <div className="centered-container">
      <h1>{group.name}</h1>
      <p>Owned by: {group.owner.fullName}</p>
      <MessagesList messages={group.messages} />
      <div className="new-message-form">
        <input
          type="text"
          placeholder="Type message here..."
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
        />
        <button onClick={postMessage}>Submit</button>
      </div>
      {group.ownerId === user?.uid && (
        <RequestList requests={group.requests} onAccept={acceptRequest} onReject={rejectRequest} />
      )}
    </div>
  );
}
