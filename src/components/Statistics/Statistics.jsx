import {
  StatisticsSection,
  Title,
  StatList,
  StatItem,
  ItemLabel,
  ItemPercentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(item => {
          return (
            <StatItem bgColor={getRandomHexColor} key={item.id}>
              <ItemLabel>{item.label}</ItemLabel>
              <ItemPercentage> {item.percentage}%</ItemPercentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
