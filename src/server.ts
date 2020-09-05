import http from 'http'
import app from './app'
import { request } from './lib/request.interfaces'

http
  .createServer((req, res) => {
    app.engine(req as request, res as http.ServerResponse)
  })
  .listen(3000, () => {
    console.log(`Listening on port 3000`)
  })
