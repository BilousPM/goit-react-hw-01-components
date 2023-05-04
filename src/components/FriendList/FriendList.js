import FrendListItem from "./FriendListItem"

export default function FriendList({friends}) {
  return (<ul class="friend-list">
    {friends.map(friend => {
    return <FrendListItem name={friend.name} 
    avatar={friend.avatar} status={friend.isOnline}/>})}
  </ul>);
}