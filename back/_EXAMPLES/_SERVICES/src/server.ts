// Configs
import { __PORT } from './config'

// Modules
import express from 'express'
import cookieParser from 'cookie-parser'

// Router
import routerV1 from '@routes/v1/router'

const app = express()
const cookiesSecret = process.env.COOKIES_SECRET

if (!cookiesSecret) throw new Error('❌ FATAL: COOKIES_SECRET not found')

app.use(express.json())
app.use(cookieParser(cookiesSecret))

app.use('/v1', routerV1)

app.listen(__PORT, () => {
  console.log(`<SERVICE_NAME> service started on :${__PORT}`)
})
