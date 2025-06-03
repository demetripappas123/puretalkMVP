import { Fragment } from 'react'

import Hero from '@/modules/landing/hero/page'
import TTSDemo from '@/modules/landing/tts-section/tts-demo'
import RuthForBusinesses from '@/modules/landing/ruth-for-business/page'
/*
import RuthDemo from '@/modules/landing/ruth-demo'
import TTSSection from '@/modules/landing/tts-section'
import Enterprise from '@/modules/landing/enterprise'
import Testimonials from '@/modules/landing/testimonials'
import CallToAction from '@/modules/landing/call-to-action'
import Blog from '@/modules/landing/blog'
*/

export default function Home() {
  return (
   <Fragment>
      <Hero />
      <RuthForBusinesses />
      <TTSDemo />
   </Fragment>
  )
}

/*
      <Hero />
      <RuthDemo />
      <RuthForBusinesses />
      <TTSSection />
      <Enterprise />
      <Testimonials />
      <CallToAction />
      <Blog /> 
*/