import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test description', 'https://cdn.pixabay.com/photo/2016/03/31/09/50/meat-1292376_960_720.jpg'),
    new Recipe('A Test Recipe', 'This is a test description', 'https://cdn.pixabay.com/photo/2016/03/31/09/50/meat-1292376_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
