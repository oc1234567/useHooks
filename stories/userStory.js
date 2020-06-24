import { storiesOf } from '@storybook/react';
import React from 'react';

import { userHooks } from '../src/index';

const Demo = () => {
  const result = userHooks();
  return (
    <div>
      <p>{result}</p>
    </div>
  );
};

storiesOf('user', module).add('Demo', Demo);