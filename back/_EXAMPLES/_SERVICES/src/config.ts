// Configs
import { PrismaClient } from '../prisma/generated/client'

// Modules
import { PrismaPg } from '@prisma/adapter-pg'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(process.cwd(), '../../.env') })

const isProd = process.env.MODE === 'prod'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const PRISMA = new PrismaClient({
  adapter: adapter,
})

export const __PORT = process.env.<SERVICE_NAME>
export const cookieOptions = {
  httpOnly: true,
  sameSite: (isProd ? 'strict' : 'lax') as 'strict' | 'lax',
  secure: isProd,
  ...(isProd && { domain: process.env.DOMAIN || '.qucore.io' }),
  signed: true,
}

export default PRISMA
