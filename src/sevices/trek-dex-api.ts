const url: string = process.env.REACT_APP_API_URL as string;
const secretWord = process.env.REACT_APP_SECRET_WORD as string;

interface Character {
  id: number;
  name: string;
  affiliation: string;
  origin: string;
  race: string;
  imageUrl: string;
}

interface NewCharacter {
  name: string;
  affiliation: string;
  origin: string;
  race: string;
  imageUrl: string;
}


export const getCharacters = async(): Promise<Character[]> => {
  const res = await fetch(url);
  const json = await res.json();
  
  if(!res.ok) throw new Error('ERROR NOMAD CANNOT COMPUTE!');

  return json;
};

export const getCharacterById = async(id: string): Promise<Character> => {
  const res = await fetch(`${url}/${id}`);
  const json = await res.json();

  if(!res.ok) throw new Error('ERROR, ERROR');

   return json;
 
};

export const addCharacter = (newCharacter: NewCharacter): Promise<Character> => {
 return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCharacter)
  })
    .then(res => res.json());
};

export const updateCharacter = (id: number, character: Character, oldImageUrl: string): Promise<Character> => {
  const oldImageKey: string = oldImageUrl.split('/')[3].split('.')[0]
  return fetch(`${url}/${secretWord}/${id}/${oldImageKey}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(character)
  })
  .then(res => res.json());
};

export const deleteCharacter = (id: string): void => {
  fetch(`${url}/${secretWord}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};
