import 'windi.css'
import './globals.css'
import { Session } from 'next-auth'
import { headers } from 'next/headers'
import AuthContext from './auth-context'
import { Container } from 'components/atoms'
import { Navbar } from 'components/molecules'

export const metadata = {
  title: 'Carefy',
  description: 'Carefy'
}

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
    headers: {
      cookie
    }
  })

  const session = await response.json()

  return Object.keys(session).length > 0 ? session : null
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getSession(headers().get('cookie') ?? '')
  return (
    <html lang='en'>
      <head />
      <body>
        <AuthContext session={session}>
          <Navbar />
          <Container>
            <main className='py-6'>{children}</main>
          </Container>
        </AuthContext>
      </body>
    </html>
  )
}
