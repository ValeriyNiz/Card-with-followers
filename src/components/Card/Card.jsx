import { useState } from 'react';
import css from './Card.module.css';

export const Card = () => {
  const [active, setActive] = useState(false);
  const [buttonText, setButtonText] = useState('FOLLOW');
  const handleClick = () => {
    setActive(!active);
    setButtonText(!buttonText);
  };

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
          <p className={css.followers}>100,500 FOLLOWERS</p>
        </div>
        <div className={css.btnCont}>
          <button
            onClick={handleClick}
            style={{ backgroundColor: active ? '#5cd3a8' : '#ebd8ff' }}
            className={css.followBtn}
          >
            {buttonText ? 'FOLLOW' : 'FOLLOWING'}
          </button>
        </div>
      </div>
    </div>
  );
};
