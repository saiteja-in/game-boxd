import React, { useState } from "react";
import { Button, ButtonGroup, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./Components/SortSelector";

export interface GameQuery{
  genre:Genre | null;
  platform:Platform | null;
  sortOrder:string;

}

const App = () => {
  const[gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
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
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
      </GridItem>
      </Show>

      <GridItem pl="5"  area={"main"}>
        <HStack spacing={5} paddingLeft={5} marginBottom={5} >
          <PlatformSelector  selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
