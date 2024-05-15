import React from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid templateAreas={{
      base:`"header " " main"`,
      lg:`"header header" "aside main"`
    }}>
      <GridItem pl="5" bg="red" area={"header"}>
        header
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
