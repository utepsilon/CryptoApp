import { Badge, HStack, Progress, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const CustomBar = ({high,low}) => {
  return (
    <VStack w={"full"}>
        <Progress w={"full"} colorScheme={'teal'} value={50}></Progress>
        <HStack justifyContent={"space-between"} w={"full"}>
          <Badge children={low} colorScheme={'red'}></Badge>
          <Text size={"sm"}>24H Range</Text>
          <Badge children={high} colorScheme={'green'}></Badge>
        </HStack>
    </VStack>
  )
}

export default CustomBar