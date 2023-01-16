import PropTypes from 'prop-types';
import css from './friendlist.module.css';
import { FriendListItem } from './FriendListItem';


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



FriendList.propTypes = {
  friends:PropTypes.arrayOf(PropTypes.shape)
};

