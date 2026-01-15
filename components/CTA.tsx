import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className='flex cta-section'>
      <div className='cta-badge'>Start Learning your way.</div>
      <h2 className='text-3xl font-bold'>
        Build and personalize learning Companion
      </h2>
      <p>Pick a name, Subject, voice and personality - and start learning
        through voice conversations that natural and fun.
      </p>
      <Image src="images/cta.svg" alt="cta"
        height={232} width={362}></Image>
      <button className='btn-primary'>
        <Image src="/icons/plus.svg" alt="plus"
          width={12} height={12} />
          <Link href="/companion/new">
          <p>Build a New Companion</p>
          </Link>
      </button>
    </section>
  )
}

export default CTA