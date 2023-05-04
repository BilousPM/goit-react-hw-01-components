
import PropTypes from 'prop-types'
import FrendListItem from "./FriendListItem"

export default function FriendList({friends}) {
  return (<ul class="friend-list">
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