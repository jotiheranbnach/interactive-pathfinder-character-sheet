import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CharacterDataService} from "../services/character-data.service";
import {Attribute} from "../services/CharacterData.class";

@Component({
    selector: 'app-attributes',
    templateUrl: './attributes.component.html',
    styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent {
    char = CharacterDataService.data;
    fcStrength: FormControl = new FormControl(CharacterDataService.data.attributes.strength.value);
    fcDexterity: FormControl = new FormControl(CharacterDataService.data.attributes.dexterity.value);
    fcConstitution: FormControl = new FormControl(CharacterDataService.data.attributes.constitution.value);
    fcIntelligence: FormControl = new FormControl(CharacterDataService.data.attributes.intelligence.value);
    fcWisdom: FormControl = new FormControl(CharacterDataService.data.attributes.wisdom.value);
    fcCharisma: FormControl = new FormControl(CharacterDataService.data.attributes.charisma.value);

    constructor(private character: CharacterDataService) {
        this.fcStrength.valueChanges.subscribe((value) => {
            CharacterDataService.data.attributes.strength = new Attribute(value);
        });
        this.fcDexterity.valueChanges.subscribe((value) => {
            CharacterDataService.data.attributes.dexterity = new Attribute(value);
        });
        this.fcConstitution.valueChanges.subscribe((value) => {
            CharacterDataService.data.attributes.constitution = new Attribute(value);
        });
        this.fcIntelligence.valueChanges.subscribe((value) => {
            CharacterDataService.data.attributes.intelligence = new Attribute(value);
        });
        this.fcWisdom.valueChanges.subscribe((value) => {
            CharacterDataService.data.attributes.wisdom = new Attribute(value);
        });
        this.fcCharisma.valueChanges.subscribe((value) => {
            CharacterDataService.data.attributes.charisma = new Attribute(value);
        });
    }


    private getAttributeModifier(attributeValue: number = 10): number {
        return Math.floor((+attributeValue - 10) / 2);
    }

    private getAttributeModifierString(atrtributeModifier: number): string {
        return (atrtributeModifier > 0 ? '+' : '') + atrtributeModifier;
    }

    getAttributeMod(formControl: FormControl): string {
        return this.getAttributeModifierString(this.getAttributeModifier(formControl.value));
    }
}
