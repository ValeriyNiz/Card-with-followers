import { get, set } from '../helpers/localStorageHelper';

export const saveFollowingToStorage = isFollowing => {
  set('isFollowing', JSON.stringify(!isFollowing));
};

export const getFollowingFromStorage = () => {
  return JSON.parse(get('isFollowing'));
};
