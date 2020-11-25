import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>()
 
  recipes: Recipe[] = [
    new Recipe('Hamburger', 'Lettuce, tomato and juicy juicy meat', 'https://www.readersdigest.ca/wp-content/uploads/2015/11/gourmet-burger-1024x666.jpg'),
    new Recipe('Big Boy', 'Just a bigger and juicier burger', 'https://www.readersdigest.ca/wp-content/uploads/2015/11/gourmet-burger-1024x666.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }

}
