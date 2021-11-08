export type Hero = {
    nom: string;
    prenom: string;
    hp: number;
    hpMax: number;
    adress?: Adress;
}

interface Adress {
    numero: number;
    rue: string;
    ville: string;
}
