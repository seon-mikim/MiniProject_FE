import { rest } from 'msw';
import annualData from './annualData.json'
import dutyData from './dutyData.json'
export const handlers = [
  rest.get('/api/admin/annual/request', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ annualData }));
  }),
  rest.get('/api/admin/duty/request', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ dutyData }));
  }),
];

