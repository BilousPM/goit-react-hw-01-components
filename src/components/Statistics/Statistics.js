import PropTypes from 'prop-types';
import StatisticsTitle from './StatisticsTitle';
import StatisticsElement from './StatisticsElement';

export default function Statistics ({title, stats}){
return <section class="statistics">
{title && <StatisticsTitle title={title} />}
<ul class="stat-list">
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