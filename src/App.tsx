import React from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";

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
      <GridItem pl="5"  area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
