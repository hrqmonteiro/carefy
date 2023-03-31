'use client'

import { Button } from 'components/atoms'
import Link from 'next/link'

export default function Home() {
  return (
    <section id='hero'>
      <div className='min-h-screen-sm flex flex-wrap lg:flex-nowrap items-center py-20'>
        <div className='w-full lg:w-1/2 px-6 md:pr-6 md:pl-0 my-10'>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-medium mb-10 text-carefy'>
            Solução completa para cadastro de pacientes!
          </h1>
          <h2 className='text-lg md:text-xl lg:text-3xl font-medium mb-10'>
            Simplifique o gerenciamento de pacientes com nosso aplicativo
            médico.
          </h2>
          <p className='mb-10'>
            Registre, edite e gerencie informações de pacientes de forma fácil e
            segura
            <br />O seu aliado para uma gestão eficiente de pacientes.
          </p>
          <Link href='/signin'>
            <Button
              color='text-white font-bold'
              text='Cadastre-se agora!'
              variant='bg-carefy'
            />
          </Link>
        </div>
        <img
          className='w-full lg:w-1/2 px-6 md:pr-0 md:pl-6 my-10'
          src='/hero.jpg'
          alt='irwan-tweetbyirwan-rbDE93-0hHs-unsplash.jpg'
        />
      </div>
    </section>
  )
}
