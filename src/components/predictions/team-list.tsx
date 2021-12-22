import React from 'react'
import { Box, HStack, VStack, Spacer, Badge } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Container as ContainerDnd,
  Draggable,
} from '@mndzielski/react-smooth-dnd'
import useOnDrop from '@/hooks/predictions/useOnDrop'
import { Team } from '@/types/predictions'

interface Props {
  teams: Team[]
  children?: React.ReactNode
}

const TeamList = (props: Props) => {
  const [items, onDrop] = useOnDrop(props.teams)

  return (
    <VStack>
      <ContainerDnd onDrop={onDrop}>
        {items.map((team: Team) => (
          <Draggable key={team.id}>
            <HStack w="100%" p={2} cursor="grab">
              {team.order + 1 === 1 || team.order + 1 === 2 ? (
                <Badge colorScheme="orange">{team.order + 1}</Badge>
              ) : team.order + 1 === items.length ||
                team.order + 1 === items.length - 1 ? (
                <Badge colorScheme="white">{team.order + 1}</Badge>
              ) : (
                <Badge>{team.order + 1}</Badge>
              )}
              <Spacer />
              <Box minW="12rem" textAlign="center">
                {team.name}
              </Box>
              <Spacer />
              <HamburgerIcon />
            </HStack>
          </Draggable>
        ))}
      </ContainerDnd>
    </VStack>
  )
}

export default TeamList
