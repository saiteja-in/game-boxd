import React from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";

const App = () => {
  return (
    <Grid templateAreas={{
      base:`"header " " main"`,
      lg:`"header header" "aside main"`
    }}
    templateColumns={{
      base:'1fr',
      lg:'200px 1fr'
    }}
    >
      <GridItem area={"header"}>
        <NavBar />
      </GridItem>
      <Show above='lg'>
      <GridItem pl="5"  area={"aside"} paddingX='5'>
        <GenreList />
      </GridItem>
      </Show>
      <GridItem pl="5"  area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
