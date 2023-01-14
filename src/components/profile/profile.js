import PropTypes from 'prop-types'
import css from './profile.module.css';

export default function Profile({ username, tag, location, avatar,stats:{Followers,Views,Likes} }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={tag} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>{Followers}</span>
          <span className={css.quantity}>1000</span>
        </li>
        <li>
          <span className={css.label}>{Views}</span>
          <span className={css.quantity}>2000</span>
        </li>
        <li>
          <span className={css.label}>{Likes}</span>
          <span className={css.quantity}>3000</span>
        </li>
      </ul>
    </div>
  );
}
Profile.PropTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats:PropTypes.string,
};