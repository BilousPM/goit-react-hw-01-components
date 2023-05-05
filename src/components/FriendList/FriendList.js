
import PropTypes from 'prop-types';
import FrendListItem from "./FriendListItem";
import css from './FriendList.module.css'

export default function FriendList({friends}) {
  return (<ul className={css.friend__list}>
    {friends.map(friend => {
    return <FrendListItem key={friend.id} name={friend.name} 
    avatar={friend.avatar} status={friend.isOnline}/>})}
  </ul>);
};

FriendList.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  )
};