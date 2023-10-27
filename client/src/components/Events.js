import React from 'react';

export function Events({ events }) {
  return (
    <ul>
    {
      events.map((text, index) =>
        <li key={ index }>{ text }</li>
      )
    }
    </ul>
  );
}
