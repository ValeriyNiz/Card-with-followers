import { useEffect, useMemo, useState } from 'react';
import {
  getFollowingFromStorage,
  saveFollowingToStorage,
} from '../../storage/storage';
import css from './Card.module.css';

const initialFollowersCount = 100500;

export const Card = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
    saveFollowingToStorage(isFollowing);
  };

  useEffect(() => {
    const storageIsFollowing = getFollowingFromStorage();
    if (storageIsFollowing) {
      setIsFollowing(storageIsFollowing);
    }
  }, []);

  const followersCount = useMemo(() => {
    return isFollowing ? initialFollowersCount + 1 : initialFollowersCount;
  }, [isFollowing]);

  return (
    <div className={css.container}>
      <div className={css.userCard}>
        <div className={css.logo}>
          <img src="/images/Logo.png" alt="logo" />
        </div>
        <div className={css.bgPic}>
          <img src="/images/BgPicture.png" alt="BG" />
        </div>
        <div className={css.line}></div>
        <div className={css.userPic}>
          <img src="/images/Boy.png" alt="boy" height="80" width="80" />
        </div>
        <div className={css.tweetsFollCont}>
          <p className={css.tweets}>777 TWEETS</p>
          <p className={css.followers}>{followersCount} FOLLOWERS</p>
        </div>
        <div className={css.btnCont}>
          <button
            onClick={handleClick}
            style={{ backgroundColor: isFollowing ? '#5cd3a8' : '#ebd8ff' }}
            className={css.followBtn}
          >
            {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
          </button>
        </div>
      </div>
    </div>
  );
};

// const handleClick = () => {
//   setIsFollowing(!isFollowing);
//   localStorage.setItem('isFollowing', JSON.stringify(!isFollowing));
// };

// useEffect(() => {
//   const storageIsFollowing = JSON.parse(localStorage.getItem('isFollowing'));
//   if (storageIsFollowing) {
//     setIsFollowing(storageIsFollowing);
//   }
// }, []);
