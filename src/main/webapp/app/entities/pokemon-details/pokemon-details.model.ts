export class PokemonDetails {
  name: string;
  types: Type[];
  abilities: Ability[];
  stats: Stat[];
  sprites: Sprites;
  // You can add more properties here as needed

  constructor(name: string, types: Type[], abilities: Ability[], stats: Stat[], sprites: Sprites) {
    this.name = name;
    this.types = types;
    this.abilities = abilities;
    this.stats = stats;
    this.sprites = sprites;
    // Initialize more properties here if needed
  }
}

export class Type {
  type?: {
    name: string;
  };
}

export class Ability {
  ability?: {
    name: string;
  };
}

export class Stat {
  stat?: {
    name: string;
  };
  base_stat?: number;
}

export class Sprites {
  front_default?: string;
}
