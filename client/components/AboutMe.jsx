import React from 'react'

import Nav from './Nav'

import { Link } from 'react-router-dom'
import {
  Image,
  createStyles,
  Center,
  Grid,
  useMantineTheme,
} from '@mantine/core'

const useStyles = createStyles((theme) => ({
  header: {
    fontFamily: 'Bayon, sans-serif',
  },

  para: {
    fontFamily: 'Monaco, Courier, monospace',
  },
  container: {
    backgroundColor: '#BAC8FF',
    minHeight: '100vh',
    padding: theme.spacing.xl,
  },
}))
const ImageWrapper = ({ src, alt, caption }) => {
  const theme = useMantineTheme()
  const { classes } = useStyles({ theme })

  return (
    <Grid.Col span={4}>
      <Image
        maw={360}
        mx="auto"
        radius="md"
        src={src}
        alt={alt}
        caption={caption}
        className={classes.image}
      />
    </Grid.Col>
  )
}

export default function App() {
  const theme = useMantineTheme()
  const { classes } = useStyles({ theme })

  return (
    <div className={classes.container}>
      <Nav />
      <Center>
        <h1 className={classes.header}>Welcome to my portfolio!</h1>
      </Center>
      <Grid>
        <ImageWrapper src="/1.jpeg" alt="Helen in NYC" caption="Helen in NYC" />
        <ImageWrapper
          src="/4.JPG"
          alt="Helen, the Best Dancer"
          caption="Helen, the Best Dancer"
        />
        <ImageWrapper
          src="/5.JPG"
          alt="Helen Bullying the Bull"
          caption="Helen Bullying the Bull"
        />
      </Grid>
      <Center>
        <h3 className={classes.para}>
          Hi there! Thanks for checking out my portfolio.
        </h3>
      </Center>

      <Center>
        <h3 className={classes.para}>
          My name is Helen Lee, a dedicated software developer wanting to
          contribute myself to wonderful things out there.
        </h3>
      </Center>

      <Center>
        <p className={classes.para}>
          Here&apos;s everything you need to know about me:
        </p>
        <ul className={classes.para}>
          <li>
            I was born in South Korea. My time at NZ began in 2017 with my
            family.
          </li>
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
      </Center>

      <Center>
        <h3 className={classes.para}>
          In this portfolio, I showcase some of my projects I worked on during
          my time at Dev Academy
        </h3>
      </Center>
      <Center>
        <h3 className={classes.para}>
          If you would like to get in touch with me, please email me at
          helenheajilee@gmail.com or call on 021-165-3595.
        </h3>
      </Center>

      <Center>
        <Link to="http://www.linkedin.com/in/helen-heaji-lee" target="_blank">
          Click here to visit my LinkedIn profile
        </Link>
      </Center>
    </div>
  )
}
