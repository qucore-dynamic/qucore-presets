// Configs
import { __PORT } from './config'

// Modules
import express from 'express'
import cookieParser from 'cookie-parser'

// Router
import routerV1_0_0 from '@routes/v1.0.0/router'

const app = express()
const cookiesSecret = process.env.COOKIES_SECRET

if (!cookiesSecret) throw new Error('❌ FATAL: COOKIES_SECRET not found')

app.use(express.json())
app.use(cookieParser(cookiesSecret))

app.use('/v1.0.0', routerV1_0_0)

app.listen(__PORT, () => {
  console.log(`<SERVICE_NAME> service started on :${__PORT}`)
})
