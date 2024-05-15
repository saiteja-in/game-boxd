import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const SwitchForDarkMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Switch colorScheme='teal' isChecked={colorMode==='dark'} onChange={toggleColorMode}></Switch>
        <Text>Dark Mode</Text>
      </HStack>
    </>
  );
};

export default SwitchForDarkMode;
