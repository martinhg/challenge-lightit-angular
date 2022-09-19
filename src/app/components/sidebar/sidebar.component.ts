import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IGenericResponseDTO } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('submenu',{static: true}) submenu!: ElementRef;

  loading: boolean = false;
  categories!: IGenericResponseDTO[];
  items!: any[];
  showOptions: boolean = true;

  constructor(
    private categoriesService: CategoriesService,
  ) { }


  ngOnInit() {
  }

  openNav(option: string): void {
    this.loading = true;

    this.categoriesService.getData(option).subscribe( (response) => {
      this.categories = response;
      this.loading = false;
      this.showOptions = true;
      this.submenu.nativeElement.style.width = '400px';
    });

  }

  closeNav(): void {
    this.submenu.nativeElement.style.width = '0';
    this.showOptions = true;
  }

  getItems(optionMenu: string): void {
    this.showOptions = false;
    const option = this.categories.filter(item => item.name == optionMenu);

    this.items = option[0].items;
  }
}
