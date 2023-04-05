'use client'

import { useState } from 'react'
import { Button, Input, Logo } from 'components/atoms'
import { TbBrandGithub, TbLock, TbMail } from 'react-icons/tb'
import { signIn } from 'next-auth/react'

export default function SignIn(): JSX.Element {
  const [isFocus, setIsFocus] = useState<string>('')

  return (
    <div className='min-h-screen-sm flex justify-center py-20'>
      <div className='shadow-md p-10 flex min-w-90 justify-center'>
        <div>
          <div className='flex justify-center'>
            <Logo width={100} />
          </div>
          <Button
            onClick={() => signIn('github')}
            className='mt-10 flex items-center w-full'
            color='font-bold text-carefy'
            variant='border-gray-200 border-1'
          >
            <TbBrandGithub className='mr-1 text-lg' />
            Entrar com o GitHub
          </Button>
          <div className='flex flex-nowrap items-center'>
            <div className='h-px w-1/2 my-10 bg-gray-200' />
            <div className='mx-4 text-gray-600'>ou</div>
            <div className='h-px w-1/2 my-10 bg-gray-200' />
          </div>
          <Input
            onFocus={() => setIsFocus('email')}
            onBlur={() => setIsFocus('')}
            icon={
              <TbMail
                className={
                  isFocus === 'email' ? 'text-carefy' : 'text-gray-400'
                }
              />
            }
            id='email'
            label='E-mail'
            placeholder='Digite seu e-mail...'
          />
          <Input
            onFocus={() => setIsFocus('password')}
            onBlur={() => setIsFocus('')}
            icon={
              <TbLock
                className={
                  isFocus === 'password' ? 'text-carefy' : 'text-gray-400'
                }
              />
            }
            id='password'
            label='Senha'
            placeholder='Senha...'
            type='password'
          />
        </div>
      </div>
    </div>
  )
}
