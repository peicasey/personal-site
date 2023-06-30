import { Radio, Timeline } from 'antd';
import { useState } from 'react';

const Experience_TL = () => {
  const [mode, setMode] = useState('left');

  return (
    <>
      <Timeline
        mode={mode}
        items={[
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            children: 'Technical testing',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ]}
      />
    </>
  );
};

export default Experience_TL;