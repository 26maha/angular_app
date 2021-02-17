import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './../model/crud';
import { CrudService } from './../service/authentication/crud.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('f') myFormData: any;
  model: any = {};
  products: Product[] = [];

  constructor(public crudService: CrudService, private router: Router,) { }

  ngOnInit() {
    this.getAll();
  }


  getAll() {
    this.crudService.getAll().subscribe((data: Product[]) => {
      console.log(data);
      this.products = data;
    })
  }

  deleteProd(id: any) {
    if (confirm("Do you want to delete the product?")) {
      this.crudService.delete(id).subscribe(res => {
        alert('Product deleted successfully!');
        this.getAll();
      });
    }

  }

  onSubmit() {
    this.crudService.create(this.myFormData.value).subscribe(res => {
      alert('Product created successfully!');
      $('#closeButton').click();
      this.getAll();
    });

  }

}
