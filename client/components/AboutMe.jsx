import React from 'react'

import { Link } from 'react-router-dom'
import { Image } from '@mantine/core'

function Me() {
  return (
    <>
      <h2>Welcome to my portfolio!</h2>
      <Image
        maw={240}
        mx="auto"
        radius="md"
        src="/1.jpeg"
        alt="Random image"
        caption="Helen in NYC"
      />
      <h5>Hi! Thanks for checking out my portfolio.</h5>
      <h5>
        My name is Helen Lee, a dedicated software developer wanting to
        contribute myself to wonderful things out there.
      </h5>
      <h5>Here&apos;s everything you need to know about me:</h5>
      <h5>
        <ul>
          <li>
            I was born in South Korea in 1996 - that makes me 26 year old.{' '}
          </li>
          <li>
            My family and I moved to New Zealand in December 2017, when I was 11
            years old.
          </li>
          <li>I&apos;ve lived in North Auckland since then.</li>
          <li>
            I have a bachelor&apos;s degree in Science, major in Chemistry.
          </li>
          <li>
            I was working as a Quality Controller before I decided to pursue my
            dreams to become a Software Developer in late 2022.
          </li>
          <li>
            I finished an intense 15-week journey becoming a software developer
            at Dev Academy Aotearoa and that 15 weeks changed my life.
          </li>
        </ul>
      </h5>
      <Link to="http://www.linkedin.com/in/helen-heaji-lee" target="_blank">
        Click here to visit my LinkedIn profile
      </Link>
    </>
  )
}

export default Me
