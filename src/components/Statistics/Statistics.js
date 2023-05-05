import PropTypes from 'prop-types';
import StatisticsTitle from './StatisticsTitle';
import StatisticsElement from './StatisticsElement';
import css from './Statistics.module.css';

export default function Statistics ({title, stats}){
return <section className={css.statistics}>
{title && <StatisticsTitle title={title} />}
<ul className={css.stat__list}>
{stats.map(item => {
  return <StatisticsElement 
  key={item.id} l
  label={item.label} 
  percentage={item.percentage}
  />
})}
</ul>
</section>
};

Statistics.propTyps = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
  })
  )

}