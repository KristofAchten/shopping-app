import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() componentSelected = new EventEmitter<string>()

    onSelect (which: string) {
        this.componentSelected.emit(which)
    }

}