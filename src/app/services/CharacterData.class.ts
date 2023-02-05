import {IAttribute, ICharacterData} from "./ICharacterData.interface";

export class Attribute implements IAttribute {
    value: number;
    modValue: number;
    modString: string;

    constructor(attributeValue: number) {
        this.value = attributeValue;
        this.modValue = Attribute.getAttributeModifier(attributeValue);
        this.modString = Attribute.getAttributeModifierString(this.modValue);
    }

    static getAttributeModifier(attributeValue: number = 10): number {
        return Math.floor((+attributeValue - 10) / 2);
    }

    static getAttributeModifierString(atrtributeModifier: number): string {
        return (atrtributeModifier > 0 ? '+' : '') + atrtributeModifier;
    }
}


export class CharacterData implements ICharacterData {
    attributes = {
        strength: new Attribute(10),
        dexterity: new Attribute(10),
        constitution: new Attribute(10),
        intelligence: new Attribute(10),
        wisdom: new Attribute(10),
        charisma: new Attribute(10),
    };
}