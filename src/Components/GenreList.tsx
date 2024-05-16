import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import { HStack, List, ListItem, Image,Text, Spinner, Link, Button } from "@chakra-ui/react";
import getCroppedimage from "../services/image-urls";

interface Props{
  onSelectGenre:(genre:Genre)=>void;
}

const GenreList = ({onSelectGenre}:Props) => {
  const { data,isLoading ,error} = useGenres();

  if(error) return null;
  if(isLoading) return <Spinner />
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
              <Button variant='link' onClick={()=> onSelectGenre(genre)} fontSize={'lg'}>{genre.name}</Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
