//# Point d'entrée de l'application
import app from './app'

const port = 3000

console.log(`Server running on http://localhost:${port}`)

export default {
  port,
  fetch: app.fetch,
}
