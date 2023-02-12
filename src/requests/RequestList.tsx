import React from 'react';
import { RequestListItem, RequestInfo } from './RequestListItem';

interface RequestListProps {
  requests: RequestInfo[];
  onAccept: (requestId: string) => void;
  onReject: (requestId: string) => void;
}
export function RequestList({ requests, onAccept, onReject }: RequestListProps) {
  return (
    <>
      <h2 className="section-heading">Join Requests</h2>
      {requests.length ? (
        requests.map((request) => (
          <RequestListItem key={request._id} request={request} onAccept={onAccept} onReject={onReject} />
        ))
      ) : (
        <p>No pending request</p>
      )}
    </>
  );
}
