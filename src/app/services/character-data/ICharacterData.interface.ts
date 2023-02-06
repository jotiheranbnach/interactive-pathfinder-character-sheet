export interface IAttribute {
    value: number;
    mod: number;
    modString: string;
}

export interface IAttributes {
    strength: IAttribute;
    dexterity: IAttribute;
    constitution: IAttribute;
    intelligence: IAttribute;
    wisdom: IAttribute;
    charisma: IAttribute;
}

export interface ISavingThrow {
    sum: number;
    baseBonus: number;
    magicMod: number;
    miscMod: number;
    tempMod: number;
}

export interface ISavingThrows {
    reflex: ISavingThrow;
    will: ISavingThrow;
    fortitude: ISavingThrow;
}

export interface ICharacterData {
    attributes: IAttributes;
    savingThrows: ISavingThrows;
}