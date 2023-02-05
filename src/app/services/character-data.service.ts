import {Injectable} from '@angular/core';
import {IAttribute, IAttributes, ICharacterData} from "./ICharacterData.interface";
import {Attribute, CharacterData} from "./CharacterData.class";

@Injectable({
    providedIn: 'root'
})
export class CharacterDataService {
    static readonly storageKey: string = 'characterData';
    static data: ICharacterData;

//    static _data: ICharacterData;
//    static get data(): ICharacterData {
//        if (CharacterDataService._data) {
//            return CharacterDataService._data;
//        } else {
//            const data = localStorage.getItem(CharacterDataService.storageKey);
//            if (data) {
//                CharacterDataService._data = JSON.parse(data);
//            } else {
//                CharacterDataService._data = new CharacterData();
//            }
//            return CharacterDataService._data
//        }
//    }
//
//    static set data(value: ICharacterData) {
//        CharacterDataService._data = value;
//    }

    get attributes() {
        return CharacterDataService.data.attributes;
    }

    set attributes(attributes: IAttributes) {
        CharacterDataService.data.attributes = attributes;
    }

    get savingThrows() {
        return CharacterDataService.data.savingThrows;
    }

    constructor() {
        const data = localStorage.getItem(CharacterDataService.storageKey);
        if (data) {
            CharacterDataService.data = {...new CharacterData(), ...JSON.parse(data)};
        } else {
            CharacterDataService.data = new CharacterData();
        }

        this.updateAttributeMods();
        this.updateSavingThrows();

        setInterval(() => {
            localStorage.setItem(CharacterDataService.storageKey, JSON.stringify(CharacterDataService.data));
        }, 1000)
    }

    updateStrength(value: number) {
        this.attributes.strength.value = value;
        this.updateAttributeMods();
    }

    updateDexterity(value: number) {
        this.attributes.dexterity.value = value;
        this.updateAttributeMods();
    }

    updateConstitution(value: number) {
        this.attributes.constitution.value = value;
        this.updateAttributeMods();
    }

    updateIntelligence(value: number) {
        this.attributes.intelligence.value = value;
        this.updateAttributeMods();
    }

    updateWisdom(value: number) {
        this.attributes.wisdom.value = value;
        this.updateAttributeMods();
    }

    updateCharisma(value: number) {
        this.attributes.charisma.value = value;
        this.updateAttributeMods();
    }

    updateAttributeMods() {
        this.attributes = {
            strength: new Attribute(this.attributes.strength.value),
            dexterity: new Attribute(this.attributes.dexterity.value),
            constitution: new Attribute(this.attributes.constitution.value),
            intelligence: new Attribute(this.attributes.intelligence.value),
            wisdom: new Attribute(this.attributes.wisdom.value),
            charisma: new Attribute(this.attributes.charisma.value),
        };
    }

    updateReflexBaseBonus(value: number) {
        this.savingThrows.reflex.baseBonus = value;
        this.updateSavingThrows();
    }

    updateWillBaseBonus(value: number) {
        this.savingThrows.will.baseBonus = value;
        this.updateSavingThrows();
    }

    updateFortitudeBaseBonus(value: number) {
        this.savingThrows.fortitude.baseBonus = value;
        this.updateSavingThrows();
    }

    updateSavingThrows() {
        this.savingThrows.reflex.sum = this.savingThrows.reflex.baseBonus
            + this.attributes.dexterity.mod
            + this.savingThrows.reflex.magicMod
            + this.savingThrows.reflex.miscMod
            + this.savingThrows.reflex.tempMod

        this.savingThrows.will.sum = this.savingThrows.will.baseBonus
            + this.attributes.wisdom.mod
            + this.savingThrows.will.magicMod
            + this.savingThrows.will.miscMod
            + this.savingThrows.will.tempMod

        this.savingThrows.fortitude.sum = this.savingThrows.fortitude.baseBonus
            + this.attributes.constitution.mod
            + this.savingThrows.fortitude.magicMod
            + this.savingThrows.fortitude.miscMod
            + this.savingThrows.fortitude.tempMod
    }
}
