import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Link,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedimage from "../services/image-urls";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={3}>Genre</Heading>
      <List>
        {data.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedimage(genre.image_background)}
                />
                <Button
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  variant="link"
                  onClick={() => onSelectGenre(genre)}
                  fontSize={"lg"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
