import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CharacterDataService} from "../services/character-data.service";

@Component({
    selector: 'app-attributes',
    templateUrl: './attributes.component.html',
    styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent {
    fcStrength: FormControl = new FormControl(CharacterDataService.data.attributes.strength.value);
    fcDexterity: FormControl = new FormControl(CharacterDataService.data.attributes.dexterity.value);
    fcConstitution: FormControl = new FormControl(CharacterDataService.data.attributes.constitution.value);
    fcIntelligence: FormControl = new FormControl(CharacterDataService.data.attributes.intelligence.value);
    fcWisdom: FormControl = new FormControl(CharacterDataService.data.attributes.wisdom.value);
    fcCharisma: FormControl = new FormControl(CharacterDataService.data.attributes.charisma.value);

    constructor(public char: CharacterDataService) {
        this.fcStrength.valueChanges.subscribe(value => char.updateStrength(value));
        this.fcDexterity.valueChanges.subscribe(value => char.updateDexterity(value));
        this.fcConstitution.valueChanges.subscribe(value => char.updateConstitution(value));
        this.fcIntelligence.valueChanges.subscribe(value => char.updateIntelligence(value));
        this.fcWisdom.valueChanges.subscribe(value => char.updateWisdom(value));
        this.fcCharisma.valueChanges.subscribe(value => char.updateCharisma(value));
    }
}
