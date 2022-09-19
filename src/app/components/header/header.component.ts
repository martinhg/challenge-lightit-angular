import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  options = [
    {
      title: 'Guardar y salir', value: 1
    },
    {
      title: 'Salir sin guardar', value: 2
    },
    {
      title: 'Guardar y continuar', value: 3
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
