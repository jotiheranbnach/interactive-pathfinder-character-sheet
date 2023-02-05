import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-attributes',
    templateUrl: './attributes.component.html',
    styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent {
    fcST: FormControl = new FormControl(22);
    fcGE: FormControl = new FormControl(14);
    fcKO: FormControl = new FormControl(14);
    fcIN: FormControl = new FormControl(10);
    fcWE: FormControl = new FormControl(8);
    fcCH: FormControl = new FormControl(5);

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
