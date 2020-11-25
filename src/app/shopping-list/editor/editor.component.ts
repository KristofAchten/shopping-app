import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredient>()

  @ViewChild('nameInput') name: ElementRef
  @ViewChild('amountInput') amount: ElementRef


  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.ingredientAdded.emit(
      new Ingredient(
        this.name.nativeElement.value, this.amount.nativeElement.value
        ))
  }

}
