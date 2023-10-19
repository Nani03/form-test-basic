// src/setupTests.js

import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { render, screen } from '@testing-library/react';
import SampleData from './SampleData';



const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('fetchData', async () => {
  render(<SampleData />);

  // Wait for the data to be fetched and rendered
  await screen.findByText('Post 1');
  await screen.findByText('Post 2');

  // Assert that the titles are present
  expect(screen.getByText('Post 1')).toBeInTheDocument();
  expect(screen.getByText('Post 2')).toBeInTheDocument();
});