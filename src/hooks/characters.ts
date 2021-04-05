import { useEffect, useState } from "react"
import { getCharacters } from "../sevices/trek-dex-api";

interface ListCharacter {
  id: number;
  name: string;
  imageUrl: string;
}

interface Character {
  id: number;
  name: string;
  imageUrl: string;
  origin: string;
  race: string;
  affiliation: string;
}

export const useCharacters = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [characters, setCharacters] = useState<ListCharacter[]>([]);

  useEffect(() => {
    getCharacters()
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .finally(() => setLoading(false))
  }, [])

  return {
    loading,
    characters
}
};

// export const useAddCharacter = () => {
//   const [name, setName] = useState<string>('')
//   const [imageUrl, setImageUrl] = useState<string>('')
//   const [origin, setOrigin] = useState<string>('')
//   const [race, setRace] = useState<string>('')
//   const [affiliation, setAffiliation] = useState<string>('')
// }
