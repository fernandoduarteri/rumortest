import React from 'react'
import { BsArrowUpRight, BsGrid, BsSun, BsBookmark } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { Box, List, ListItem, ListIcon, Flex, Spacer, Text } from '@chakra-ui/layout'
import { Icon } from "@chakra-ui/react"


const LeftMenu = () => {
    return (
        <div>

            <Flex direction="column" h="100vh" alignSelf="start" w="250px" backgroundColor="gray.200">

                <Box w="95%">
                    <List spacing={4} pt={4} ml={4}>
                        <ListItem>
                            <ListIcon as={BsArrowUpRight} color="gray.500" />
                            Explore
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsGrid} color="gray.500" />
                            Topics
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsSun} color="gray.500" />
                            Digest
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsBookmark} color="gray.500" />
                            Bookmark
                        </ListItem>
                    </List>
                </Box>
                <Spacer />
                <Box >
                    <List spacing={4} pt={4} mb={4} ml={4}>
                        <ListItem color="gray.500">
                            Blog
                        </ListItem>
                        <ListItem color="gray.500">

                            About
                        </ListItem>
                        <ListItem color="gray.500">

                            Join the beta group
                        </ListItem>
                        <ListItem color="gray.500">
                            <Flex alignItems="center" mr={4}>
                                <Text fontSize="3xl">Curated</Text>
                                <Spacer />
                                <Icon as={FaTwitter} />
                            </Flex>
                            
                        </ListItem>
                    </List>

                </Box>
            </Flex>

        </div>
    )
}

export default LeftMenu
