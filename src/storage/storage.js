import { get, set } from '../helpers/localStorageHelper';
const contactListKey = 'contactList';

export const saveContactsToStorage = contactList => {
  set(contactListKey, JSON.stringify(contactList));
};

export const getContactsFromStorage = () => {
  return JSON.parse(get(contactListKey));
};
