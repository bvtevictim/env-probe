import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()
const PATTERNS = ['KEY','TOKEN','API','SECRET','CRED','PASS','AUTH','DSN','CONN','AWS','GOOGLE','AZURE','GCP','OPENAI','ANTHROPIC','DEEPSEEK','CLAUDE','GEMINI','JWT','SESSION','DB','REDIS','MONGO','KUBE','SERVICE','SLOT','HOST','ENDPOINT']

app.get('/health', (c) => c.text('ok'))
app.get('/envnames', (c) => {
  const all = Object.keys(process.env)
  const names = all.filter((k) => PATTERNS.some((p) => k.toUpperCase().includes(p))).sort()
  return c.json({ count: all.length, names })
})
serve({ fetch: app.fetch, port: 3001 })
