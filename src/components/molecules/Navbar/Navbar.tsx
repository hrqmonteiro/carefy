'use client'

import { useEffect, useState } from 'react'
import { Button, Container, Logo } from 'components/atoms'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Navbar() {
  const { data: sessionData, status } = useSession()
  const [user, setUser] = useState<string>('')

  useEffect(() => {
    if (
      sessionData !== null &&
      sessionData !== undefined &&
      sessionData.user &&
      sessionData.user.name
    ) {
      setUser(sessionData.user.name)
    }
  }, [sessionData])

  return (
    <div className='sticky top-0 w-full min-h-20 shadow-lg py-4'>
      <Container>
        <div className='flex flex-wrap md:flex-nowrap justify-between items-center'>
          <Logo width={120} />
          {status === 'authenticated' ? (
            <div className='flex flex-nowrap items-center'>
              <span>Olá,</span>
              <span className='mx-1 font-medium'>{user}</span>
              <Button color='text-carefy font-medium' onClick={() => signOut()}>
                Sair
              </Button>
            </div>
          ) : (
            <Button
              color='text-white font-medium'
              onClick={() => signIn()}
              text='Entrar'
              variant='bg-carefy'
            />
          )}
        </div>
      </Container>
    </div>
  )
}
