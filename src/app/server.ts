import express, { Application, NextFunction, Request, Response } from 'express';
import serverless from 'serverless-http';

const app: Application = express();

// @ts-expect-error
app.get('/api/ping', (_req: Request, res: Response) => {
  return res.json({
    success: true,
    message: 'Endpoint is working ' + process.env.APP_KEY,
  });
});

export const handler = serverless(app, { provider: 'aws' });
