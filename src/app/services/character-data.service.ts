import {Injectable} from '@angular/core';
import {ICharacterData} from "./ICharacterData.interface";
import {CharacterData} from "./CharacterData.class";

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

    constructor() {
        const data = localStorage.getItem(CharacterDataService.storageKey);
        if (data) {
            CharacterDataService.data = JSON.parse(data);
        } else {
            CharacterDataService.data = new CharacterData();
        }

        setInterval(()=>{
            localStorage.setItem(CharacterDataService.storageKey, JSON.stringify(CharacterDataService.data));
        }, 1000)
    }
}
