interface IPokecard {
  id: number;
  name: string;
  type: string;
  base_experience: number;
}

interface IPokedex {
  pokemon: IPokecard[];
}

export type { IPokecard, IPokedex };