import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * The path to the folder containing the server-side build artifacts.
 */
const serverDistFolder = dirname(fileURLToPath(import.meta.url));

/**
 * The path to the folder containing the browser-side build artifacts (static assets).
 */
const browserDistFolder = resolve(serverDistFolder, '../browser');

/**
 * The Express application instance.
 */
const app = express();

/**
 * The Angular SSR engine used to handle requests and render the application.
 */
const angularApp = new AngularNodeAppEngine();

/**
 * Middleware to serve static files from the browser distribution folder.
 * Configured with a 1-year cache (maxAge) for performance.
 * @see {@link browserDistFolder}
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Catch-all route handler that renders the Angular application.
 * It uses the {@link AngularNodeAppEngine} to process the request.
 * * @param req - The incoming Express request object.
 * @param res - The Express response object.
 * @param next - The next middleware function in the stack.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Self-invoking check to start the Express server.
 * This only runs if the file is executed directly as the main module.
 * * @remarks
 * The server listens on the port defined in `process.env['PORT']` or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * The request handler used for serverless deployments (e.g., Firebase, Vercel)
 * and by the Angular CLI during development and build processes.
 * * @param request - The Node.js incoming request.
 * @param response - The Node.js outgoing response.
 * @returns A promise that resolves when the request has been handled.
 */
export const reqHandler = createNodeRequestHandler(app);
