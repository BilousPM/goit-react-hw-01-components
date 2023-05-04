import PropTypes from 'prop-types'

export default function StatisticsElement ({label, percentage}){
  return <li class="item">
  <span class="label">{label}</span>
  <span class="percentage">{percentage}</span>
</li>
};

StatisticsElement.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};