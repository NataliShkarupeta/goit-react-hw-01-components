import PropTypes from 'prop-types';
import css from './friendlist.module.css';


export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

function FriendListItem({ avatar, name, isOnline,id }) {
  const colorActive= {
    background:'green',
  }
   const colorNotActive = {
     background: 'red',
   };

return (
  <li className={css.item} key={id}>
   <span className={css.status} style={isOnline === true ? colorActive : colorNotActive}></span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

}


FriendListItem.PropTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id:PropTypes.number.isRequired,
};
FriendList.PropTypes = {
  friends:PropTypes.arrayOf(PropTypes.shape)
};