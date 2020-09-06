import http from 'http'

class Response extends http.ServerResponse {
  private response: http.ServerResponse

  constructor(requestObject: http.IncomingMessage, responseObject: http.ServerResponse) {
    super(requestObject)
    this.response = responseObject
    this.response.setHeader('X-Powered-By', 'sillyhacks-2020')
  }

  status(code: number = 200): Response {
    this.response.statusCode = code
    return this
  }

  json(jsonObject: any): void {
    this.response.setHeader('Content-Type', 'application/json')
    this.response.write(JSON.stringify(jsonObject))
    this.response.end()
  }

  send(stringData: string): void {
    this.response.setHeader('Content-Type', 'text/plain')
    this.response.write(stringData)
    this.response.end()
  }

  setHeader(name: string, value: string | number | string[]): void {
    this.response.setHeader(name, value)
  }
}

export default Response
