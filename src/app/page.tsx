'use client'

import { useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data: sessionData, status } = useSession()
  const [user, setUser] = useState<string | null | undefined>('')

  useEffect(() => {
    if (sessionData !== null && sessionData !== undefined) {
      setUser(sessionData.user?.name)
    }
  }, [sessionData])

  return (
    <main>
      {status === 'authenticated' ? (
        <>
          <div>{user}</div>
          <button onClick={() => signOut()}>Sair</button>
        </>
      ) : (
        <button onClick={() => signIn()}>Entrar</button>
      )}
    </main>
  )
}
