import Shatabdi from './lib/shatabdi'

const app = new Shatabdi()

/**
 * Edge case of root url
 */
app.get('/', (req: any, res: any) => {
  res.json({
    error: false,
    message: 'this is the root directory',
  })
})

/**
 * Setting custom headers from nth layer
 */
app.get(
  '/home',
  (req: any, res: any) => {
    res.setHeader('x-author-name', 'YashKumarVerma')
    res.setHeader('x-author-email', 'yk.verma2000@gmail.com')
  },
  (req: any, res: any) => res.send('Check Headers'),
)

/**
 * Using multiple layers and sending headers from each layer
 */
app.get(
  '/multiple',
  (req: any, res: any) => {
    res.setHeader('x-middleware-1', 'true')
    res.setHeader('x-middleware-2', 'true')
    return
  },
  (req: any, res: any) => {
    res.setHeader('x-middleware-3', 'true')
    res.setHeader('x-middleware-4', 'true')
    return
  },
  (req: any, res: any) => {
    res.setHeader('x-middleware-5', 'true')
    res.json({ finished: true })
  },
)

/**
 * Demonstrate data extraction from wildcard routes
 */
app.get('/params/:one/:two/:three/end', (req: any, res: any) => {
  res.json(req.params)
})

/**
 * Demonstrate sending custom response code
 */
app.get('/response', (req: any, res: any) => {
  res.status(401).json({ status: 'unauthorized' })
})

/**
 * Demonstrate that router doesn't break when no layer provided
 */
app.get('/something')

/**
 * Export to be consumed by server.ts
 */
export default app
