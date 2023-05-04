import PropTypes from 'prop-types';

export default function StatisticsTitle({title}){
  return <h2 class="title">{title}</h2>;
}

StatisticsTitle.propTypes = {
  title: PropTypes.string,
}