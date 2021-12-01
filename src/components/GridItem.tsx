import { Box } from '@chakra-ui/layout'
import { Image, Badge } from '@chakra-ui/react'
import React from 'react'
import { Photo } from '../types/photos';


const GridItem = (props:{photo: Photo}) => {
  let {photo} = props;

    const property = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
      }
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" ml={5} mt={10}>
      <Image src={photo.urls.regular} alt={photo.alt_description} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            Likes: {photo.likes} 
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {photo.user.name}
        </Box>

        
      </Box>
    </Box>
    )
}

export default GridItem
