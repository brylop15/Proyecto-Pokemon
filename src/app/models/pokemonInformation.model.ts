export interface PokemonInformation {
    name: string;
    sprites: Artwork;
    id: string;
    weight: string;
    height: string;
}

export class Artwork {
    front_default: string;

    constructor(_front_default: string) {
        this.front_default = _front_default;
    }
}