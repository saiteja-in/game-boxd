import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error,isLoading } = useGames();
  const skeletons=[1,2,3,4,5,6,8,9,10,11,12,13,14,15,16];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading && skeletons.map(skeleton=><GameCardSkeleton />)}
        {data.map((game) => (
          <ul key={game.id}>
            <GameCard key={game.id} game={game} />
          </ul>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
