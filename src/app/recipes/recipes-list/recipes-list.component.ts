import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('test Recipe ','test desc', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/3/1/0/FNM_040111-WN-Dinners-010_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371595358244.jpeg')
];
  constructor() { }

  ngOnInit(): void {
  }

}
