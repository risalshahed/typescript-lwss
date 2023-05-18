export interface IsPlayer {
    name: string;
    // age: number;    // age private hoile etar dorkar nai
    readonly country: string;

    myFunc(): void;
    // Player.ts a declared private variable "age" ei getProperty() function er maddhome return kore dewa hoice (joss)
    getProperty(): number;
}