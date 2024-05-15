import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import { HStack, List, ListItem, Image,Text } from "@chakra-ui/react";
import getCroppedimage from "../services/image-urls";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedimage(genre.image_background)}
              />
              <Text fontSize={'lg'}>{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
