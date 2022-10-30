import {
  Header as MantineHeader,
  Container,
  Group,
  Button,
  Burger,
  Title,
  Text,
  Box,
  BackgroundImage,
  createStyles,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { COLOR_OLIVE, COLOR_MUD } from '../utils/constants'

const HEADER_HEIGHT = 60
const LINKS = [
  {
    label: 'Who we are',
    link: '#who-we-are',
  },
  {
    label: 'What we do',
    link: '#what-we-do',
  },
  {
    label: 'The product',
    link: '#product',
  },
  {
    label: 'Health',
    link: '#health',
  },
  {
    label: 'Contact us',
    link: '#contact',
  },
]

const useStyles = createStyles((theme) => ({
  sectionContainer: {
    height: '800px',
    width: '100vw'
  },

  header: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },

  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  button: {
    height: 30,
    color: COLOR_OLIVE,
    borderColor: COLOR_OLIVE,
    backgroundColor: '#F5F2EB',
    marginRight: '4px'
  },

  bannerContent: {
    width: '50%',
    color: COLOR_OLIVE,

    '& .mantine-Text-root': {
      fontSize: '18px',
      color: COLOR_MUD,
    },

    '& h2': {
      fontSize: '44px !important',

      '& span': {
        color: COLOR_OLIVE
      }
    }
  },
}))

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false)
  const { classes } = useStyles()
  const links = LINKS.map(({ label, link }) => (
    <a key={label} href={link} className={classes.link}>
      {label}
    </a>
  ))

  return (
    <BackgroundImage src="/banner.png" className={classes.sectionContainer}>
      <MantineHeader height={HEADER_HEIGHT} className={classes.header}>
        <Container className={classes.inner} fluid>
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              className={classes.burger}
            />
            <Title order={1} color={COLOR_OLIVE}>
              Olives
            </Title>
          </Group>
          <Group spacing={5} className={classes.links}>
            {links}
          </Group>
          <Button variant="outline" className={classes.button}>
            LET'S DO BUSINESS
          </Button>
        </Container>
      </MantineHeader>
      <Box className={classes.bannerContent} mt={250} px={16}>
        <Text>natural product</Text>
        <Title order={2} weight={400}><span>Let's do business</span> together!</Title>
        <Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Text>
      </Box>
    </BackgroundImage>
  )
}

export default Header
