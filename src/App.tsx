import React from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <Grid templateAreas={{
      base:`"header " " main"`,
      lg:`"header header" "aside main"`
    }}>
      <GridItem area={"header"}>
        <NavBar />
      </GridItem>
      <Show above='lg'>
      <GridItem pl="5" bg="green" area={"aside"}>
        aside
      </GridItem>
      </Show>
      <GridItem pl="5" bg="yellow" area={"main"}>
        main
      </GridItem>
    </Grid>
  );
};

export default App;
