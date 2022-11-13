import { AfterViewInit, ChangeDetectorRef, Component, Injectable, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ProductControllerService } from '../../../../Controller/Services/products/product-controller.service';
import { Product } from 'src/app/Model/product';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { ProductsViewService } from './products-view.service';


@Injectable()
export class CustomizedPaginator implements MatPaginatorIntl{

  changes = new Subject<void>();
  itemsPerPageLabel: string = "Ítems por página";
  nextPageLabel: string = "Siguiente";
  previousPageLabel: string = "Anterior";
  firstPageLabel: string = "Primera";
  lastPageLabel: string = "Última";
  
  getRangeLabel(page: number, pageSize: number, length: number){
    if (length === 0) {
      return `Página 1 de 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Página ${page + 1} de ${amountPages}`;
  };

}


@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css'],
  providers: [ {provide: MatPaginatorIntl, useClass: CustomizedPaginator}]
})
export class ProductsViewComponent implements OnInit, AfterViewInit  {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  datasource!: MatTableDataSource<Product>;

  public productList: Product[] = [];
  public dataObservable!: Observable<Product[]>;


  constructor(private productControllerService: ProductControllerService, private productViewService: ProductsViewService, private changeDetector: ChangeDetectorRef) { }


  ngAfterViewInit(): void {
    let p = this.productControllerService.getAllProducts();
    p.subscribe(data => {
      let ObjStr = JSON.stringify(data);
      let ObjJson = JSON.parse(ObjStr);
      this.productList = ObjJson;
      this.datasource = new MatTableDataSource<Product>(this.productList);
      this.datasource.paginator = this.paginator;
      this.dataObservable = this.datasource.connect();
    });
  }

  ngOnInit(): void {

    this.productViewService.applyProductsFilter.subscribe(
      (value)=>{
        console.log(this.dataObservable)
        this.datasource.filter = value;
      }
    );
  }

}


