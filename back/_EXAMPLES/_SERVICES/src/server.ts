// Configs
import { __PORT, CORS_OPTIONS, HELMET_OPTIONS } from '@configs/config'

// Modules
import express, { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// Router
import routerV1 from '@routes/v1/router'

const app = express()
const cookiesSecret = process.env.COOKIES_SECRET

if (!cookiesSecret) throw new Error('❌ FATAL: COOKIES_SECRET not found')

app.set('trust proxy', 1)
app.use(cors(CORS_OPTIONS))
app.use(cookieParser(cookiesSecret))
app.use(helmet(HELMET_OPTIONS))
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

app.use('/v1', routerV1)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Internal Server Error', error: err.message })
})

app.listen(__PORT, () => {
  console.log(`<SERVICE_NAME> service started on :${__PORT}`)
})
