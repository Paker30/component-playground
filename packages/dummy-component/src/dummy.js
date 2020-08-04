import { html } from 'hybrids';

export function increaseCount(host) {
  host.count += 1;
}

export const DummyCounter = {
  count: 0,
  render: ({ count }) => html`
    <button onclick="${increaseCount}">
      Count: ${count}
    </button>
  `,
};
