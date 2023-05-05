import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export default function StatisticsTitle({title}){
  return <h2 className={css.title}>{title}</h2>;
}

StatisticsTitle.propTypes = {
  title: PropTypes.string,
}