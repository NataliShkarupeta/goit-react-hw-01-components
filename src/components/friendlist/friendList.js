import PropTypes from 'prop-types';
import css from './friendlist.module.css';


export default function FriendList({ friends }) {
  return (
    <ul className={css.friend-list}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
    </ul>
  );
}

function FriendListItem({ avatar, name, isOnline }) {
return (
  <li className={css.item} key={name}>
    <span className={css.status}>{isOnline}</span>
    <img className={css.avatar} src={avatar} alt={name} avatar width="48" />
    <p className={css.name}>{name}</p>
  </li>
);
}
FriendListItem.PropTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
FriendList.PropTypes = {
  friends:PropTypes.arrayOf(PropTypes.shape)
};