import { useEffect, useState } from "react"
import { getCharacters } from "../sevices/trek-dex-api";

interface ListCharacter {
  id: number;
  name: string;
  imageUrl: string;
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
