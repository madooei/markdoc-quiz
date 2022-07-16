import { Option } from '../../components';

export const option = {
  render: Option,
  description: 'Display the enclosed content as an Option component inside a Quiz component',
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    correct: {
      type: Boolean,
      description: 'Whether this option is correct or not',
    },
  },
};