import React from 'react';
import { MessageInfo, MessagesListItem } from './MessagesListItem';

interface MessagesListProps {
  messages: MessageInfo[];
}
export function MessagesList({ messages }: MessagesListProps) {
  return (
    <>
      <h2 className="section-heading">Messages</h2>
      {messages.length ? (
        messages.map((message) => <MessagesListItem key={message._id} message={message} />)
      ) : (
        <p>No message in this group yet </p>
      )}
    </>
  );
}
