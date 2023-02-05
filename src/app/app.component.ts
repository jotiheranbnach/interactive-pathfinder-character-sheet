import {Component} from '@angular/core';
import {CharacterDataService} from "./services/character-data.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private character: CharacterDataService) {
    }
}
