export interface IAttribute {
    value: number;
    modValue: number;
    modString: string;
}

export interface ICharacterData {
    attributes: {
        strength: IAttribute;
        dexterity: IAttribute;
        constitution: IAttribute;
        intelligence: IAttribute;
        wisdom: IAttribute;
        charisma: IAttribute;
    }
}