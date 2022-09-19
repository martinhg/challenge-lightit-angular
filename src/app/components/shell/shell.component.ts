import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  showMessage(button: string): void {
    console.log(`${button}, clicked!`);

  }

}
