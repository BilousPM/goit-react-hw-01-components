import PropTypes from 'prop-types'

export default function FrendListItem({name, avatar, status}) {
  return (
    <li class="item">
      <span class="status">{status}</span>
      <img
        class="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p class="name">{name}</p>
    </li>
  );
}

FrendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  status: PropTypes.bool,
};