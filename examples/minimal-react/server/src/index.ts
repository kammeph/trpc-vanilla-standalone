import { createHTTPHandler } from '@trpc/server/adapters/standalone';
import http from 'http';
import { pileRouter } from './pile/pile-router';
import { mergeRouters } from './utils/trpc';

// create handler
const handler = createHTTPHandler({
  router: mergeRouters(pileRouter),
});

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }
  handler(req, res);
});

server.listen(2022);
