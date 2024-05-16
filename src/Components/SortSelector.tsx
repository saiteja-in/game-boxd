import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  
    return(
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                order by:relevance
            </MenuButton>
                <MenuList>
                    <MenuItem>dfaskjl</MenuItem>
                    <MenuItem>kjlfds</MenuItem>
                    <MenuItem>kjladfs</MenuItem>
                    <MenuItem>kjldfsa</MenuItem>
                </MenuList>
    
        </Menu>
        )
  
}

export default SortSelector
