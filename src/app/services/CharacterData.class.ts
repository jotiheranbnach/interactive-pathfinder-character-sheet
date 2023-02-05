import {IAttribute, ICharacterData} from "./ICharacterData.interface";

export class Attribute implements IAttribute {
    value: number;
    mod: number;
    modString: string;

    constructor(attributeValue: number) {
        this.value = attributeValue;
        this.mod = Attribute.getAttributeModifier(attributeValue);
        this.modString = Attribute.getAttributeModifierString(this.mod);
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
    savingThrows = {
        reflex: {
            sum: 0,
            baseBonus: 0,
            magicMod: 0,
            miscMod: 0,
            tempMod: 0,
        },
        will: {
            sum: 0,
            baseBonus: 0,
            magicMod: 0,
            miscMod: 0,
            tempMod: 0,
        },
        fortitude: {
            sum: 0,
            baseBonus: 0,
            magicMod: 0,
            miscMod: 0,
            tempMod: 0,
        },
    }
}