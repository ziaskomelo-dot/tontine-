import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ message: 'Tontine API is running' })
})

export default app

import { Hono } from 'hono'

const app = new Hono()

// Middleware global 1 : logger
app.use('*', async (c, next) => {
  console.log(`${c.req.method} ${c.req.url}`)
  await next()
})

// Middleware global 2 : parser JSON automatique (Hono le fait déjà bien)

// Route test
app.get('/', (c) => {
  return c.json({ message: 'API OK 🚀' })
})

export default app
