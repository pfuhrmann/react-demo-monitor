import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const makeId = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

export const getDataIcon = (data, prevData) => {
  if (data > prevData) {
    return <FontAwesomeIcon icon="sort-up" color="green" />;
  }
  if (data < prevData) {
    return <FontAwesomeIcon icon="sort-down" color="red" />;
  }
  return null;
}
