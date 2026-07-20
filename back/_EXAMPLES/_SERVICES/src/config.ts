// Configs
import { PrismaClient } from '../prisma/generated/client'

// Modules
import { PrismaPg } from '@prisma/adapter-pg'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(process.cwd(), '../../.env') })

const isProd = process.env.MODE === 'prod'

export const __PORT = process.env.<SERVICE_NAME>
export const cookieOptions = {
  httpOnly: true,
  sameSite: (isProd ? 'strict' : 'lax') as 'strict' | 'lax',
  secure: isProd,
  ...(isProd && { domain: process.env.DOMAIN || '.qucore.io' }),
  signed: true,
}

const originConfig = ['http://localhost:3000', `https://<MODULE_NAME>${process.env.DOMAIN}`, `https://www.<MODULE_NAME>${process.env.DOMAIN}`]

export const CORS_OPTIONS = {
  origin: originConfig,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie', 'x-client-user-agent'],
  credentials: true,
}

export const HELMET_OPTIONS = {
  crossOriginResourcePolicy: {
    policy: 'cross-origin' as const,
  },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
      imgSrc: ["'self'", 'data:'],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      frameAncestors: ["'self'"],
    },
  },
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const PRISMA = new PrismaClient({
  adapter: adapter,
})

export default PRISMA
