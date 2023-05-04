// import propTypes from 'prop-types';
import StatisticsTitle from './StatisticsTitle';
import StatisticsElement from './StatisticsElement';

export default function Statistics ({title, stats}){
return <section class="statistics">
{title && <StatisticsTitle title={title} />}
<ul class="stat-list">
{stats.map(item => {
  return <StatisticsElement label={item.label} percentage={item.percentage}/>
})}
</ul>
</section>
}