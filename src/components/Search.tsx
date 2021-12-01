import React, { FC, useEffect, useState } from 'react'
import { BsToggles, BsCheck } from "react-icons/bs";
import { Flex, Box, Input, InputGroup, Button, InputLeftElement, InputRightElement, IconButton, Spacer, Avatar } from "@chakra-ui/react"
import GridScreen from './Grid';
import { SyntheticEventData } from 'react-dom/test-utils';
import Swal from 'sweetalert2';

const Search:FC = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [maxPages, setMaxPages] = useState(2);
    
useEffect(() => {
    const getData = async()=>{
        let result = await fetch('https://rumor-test.herokuapp.com/api/search',{
            method: 'POST',
            body: JSON.stringify( {
                "key":search,
                "page": maxPages,
                "perPage": 9
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await result.json();
        setData(data.photos.response.results);

    }
    getData();
}, [maxPages])

const handleClick = async ()=>{
    let result = await fetch('https://rumor-test.herokuapp.com/api/search',{
        method: 'POST',
        body: JSON.stringify( {
            "key":search,
            "page": maxPages,
            "perPage": 9
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    let data = await result.json();
    setData(data.photos.response.results);

}

const handleChangeInput= (e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value);

}

const handleMovePage=()=>{
    if(!!search){
        setMaxPages(maxPages+1);
    }else{
        Swal.fire("UPPSS...","Tell me first what do you want to see", "error");
    }
    
}

    return (
        
            <Flex direction="column" w="100%">
                <Flex direction="row" w="100%" mt={5}  mr={5}>


                    <InputGroup w="80%" size='lg' variant="filled">
                        <Input onChange={handleChangeInput} value={search}
                            pl='6.5rem'
                            placeholder='Search Knowledege'
                        />
                        <InputLeftElement width='6.5rem' >
                            <Button onClick={handleClick} id="filter" leftIcon={<BsToggles />} ml={2} p={2} h='1.75rem' size='sm' textColor="gray.300" backgroundColor="white"> Filters
                            </Button>
                        </InputLeftElement>
                        <InputRightElement width='4.5rem' >
                            <IconButton onClick={handleMovePage}
                                h='1.75rem'
                                variant="outline"
                                colorScheme="teal"
                                aria-label="Call Sage"
                                fontSize="20px"
                                icon={<BsCheck />}
                            />
                        </InputRightElement>
                    </InputGroup>

                    <Spacer />
                    <Avatar src="https://res.cloudinary.com/torre-technologies-co/image/upload/v0/origin/starrgate/users/profile_03af4fd606a4cb9943345b50c851d54ca425be78.jpg" />

                </Flex>

                <GridScreen data ={data}/>
            </Flex>
        
    )
} 

export default Search
