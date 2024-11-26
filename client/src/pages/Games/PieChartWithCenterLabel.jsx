import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 5, label: 'Female', color: '#7E4F0E' },
  { value: 8, label: 'Male', color: '#EB9721' },
];

const size = {
  width: 350,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  const [refresh, setRefresh] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRefresh(!refresh);
    },16000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <PieChart series={[{ data, innerRadius: 70 }]} {...size}>
        <PieCenterLabel className="text-1rem">13 Students</PieCenterLabel>
      </PieChart>
    </div>
  );
}