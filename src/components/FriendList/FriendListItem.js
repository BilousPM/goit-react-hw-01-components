import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export default function FrendListItem({name, avatar, status}) {
  return (
    <li className={css.item}>
      <span className={status ? css.isOnline : css.isOffline}>{status}</span>
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FrendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  status: PropTypes.bool,
};