import { Stack, Image, Title, Text, Box } from '@mantine/core'
import { COLOR_MUD } from '../utils/constants'
import Link from 'next/link'

interface SectionDetailsProps {
  title: string
  description: string
  ctaLabel: string
}

const SectionDetails = ({
  title,
  description,
  ctaLabel,
}: SectionDetailsProps) => {
  return (
    <Stack>
      <Box>
        <Image src="/yellow-brush.svg" width={140} />
        <Title color={COLOR_MUD}>{title}</Title>
      </Box>
      <Text>{description}</Text>
      <Link href="#">
        <Text color={COLOR_MUD}>{ctaLabel}</Text>
      </Link>
    </Stack>
  )
}

export default SectionDetails
