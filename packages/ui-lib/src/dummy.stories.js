import { DummyCounter } from 'dummy-component/src/dummy';
import { withKnobs, number } from '@storybook/addon-knobs';
import { define } from 'hybrids';

define('simple-counter', DummyCounter);

export default { title: 'dummy', decorators: [withKnobs] };

export const withOutAttributes = () => '<simple-counter></simple-counter>';

withOutAttributes.story = {
  parameters: {
    notes: 'This is the dummy component working by default',
  },
};

export const withAttributes = () => {
  const count = number('Count', 10);
  return `<simple-counter count="${count}"></simple-counter>`;
};

withAttributes.story = {
  parameters: {
    notes: 'This is the dummy component and you can set the count parameter with the value you want',
  },
};
