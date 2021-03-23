const url: string = process.env.REACT_APP_API_URL as string;

interface Character {
  id: number;
  name: string;
  affiliation: string;
  origin: string;
  race: string;
  imageUrl: string;
}


export const getCharacters = async(): Promise<Character[]> => {
  const res = await fetch(url);
  const json = await res.json();
  console.log(url)
  if(!res.ok) throw new Error('ERROR NOMAD CANNOT COMPUTE!');

  return json;
};

export const getCharacterById = async(id: number): Promise<Character> => {
  const res = await fetch(`${url}/${id}`);
  const json = await res.json();

  if(!res.ok) throw new Error('ERROR, ERROR');

  return {
    id: json.id,
    name: json.name,
    affiliation: json.affiliation,
    origin: json.origin,
    race: json.race,
    imageUrl: json.imageUrl
  };
};

export const addCharacter = (newCharacter: Object): void => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCharacter)
  })
    .then(res => res.json());
};

export const updateCharacter = (id: number, character: Character): void => {
  fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(character)
  });
};

export const deleteCharacter = (id: number): void => {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};
