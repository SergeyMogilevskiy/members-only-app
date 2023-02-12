import React from 'react';

export interface RequestInfo {
  _id: string;
  id: string;
  groupId: string;
  userName: string;
}

interface RequestListItemProps {
  request: RequestInfo;
  onAccept: (requestId: string) => void;
  onReject: (requestId: string) => void;
}

export function RequestListItem({ request, onAccept, onReject }: RequestListItemProps) {
  return (
    <div>
      <h3>{request.userName}</h3>
      <button onClick={() => onAccept(request.id)}>Accept</button>
      <button onClick={() => onReject(request.id)}>Reject</button>
    </div>
  );
}
