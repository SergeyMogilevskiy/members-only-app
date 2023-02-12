import React from 'react';

export interface MessageInfo {
  _id: string;
  userName: string;
  text: string;
}

interface MessagesListItemProps {
  message: MessageInfo;
}

export function MessagesListItem({ message }: MessagesListItemProps) {
  return (
    <div className="list-item">
      <div className="list-item-data">
        <h3>{message.userName}</h3>
        <p>{message.text}</p>
      </div>
    </div>
  );
}
