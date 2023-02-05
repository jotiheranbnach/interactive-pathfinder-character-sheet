import {Component} from '@angular/core';
import {CharacterDataService} from "../services/character-data.service";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-saving-throws',
    templateUrl: './saving-throws.component.html',
    styleUrls: ['./saving-throws.component.scss']
})
export class SavingThrowsComponent {
    fcReflexBaseBonus: FormControl = new FormControl(this.char.savingThrows.reflex.baseBonus);
    fcWillBaseBonus: FormControl = new FormControl(this.char.savingThrows.will.baseBonus);
    fcFortitudeBaseBonus: FormControl = new FormControl(this.char.savingThrows.fortitude.baseBonus);

    constructor(public char: CharacterDataService) {
        this.fcReflexBaseBonus.valueChanges.subscribe(value=> this.char.updateReflexBaseBonus(value));
        this.fcWillBaseBonus.valueChanges.subscribe(value=> this.char.updateWillBaseBonus(value));
        this.fcFortitudeBaseBonus.valueChanges.subscribe(value=> this.char.updateFortitudeBaseBonus(value));
    }
}
