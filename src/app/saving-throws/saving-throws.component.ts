import { Component } from '@angular/core';
import {CharacterDataService} from "../services/character-data.service";

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.scss']
})
export class SavingThrowsComponent {
    char = CharacterDataService.data;

    constructor(private character: CharacterDataService) {
    }
}
