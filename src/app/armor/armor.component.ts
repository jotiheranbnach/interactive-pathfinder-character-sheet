import { Component } from '@angular/core';
import {CharacterDataService} from "../services/character-data/character-data.service";

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.scss']
})
export class ArmorComponent {
    constructor(public char: CharacterDataService) {
    }
}
