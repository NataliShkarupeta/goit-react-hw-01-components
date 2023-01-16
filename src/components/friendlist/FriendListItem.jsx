import css from './friendlist.module.css';
import PropTypes from 'prop-types';

export function FriendListItem({ avatar, name, isOnline, id }) {
  const colorActive = {
    background: 'green',
  };
  const colorNotActive = {
    background: 'red',
  };

  return (
    <li className={css.item} key={id}>
      <span
        className={css.status}
        style={isOnline === true ? colorActive : colorNotActive}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};
