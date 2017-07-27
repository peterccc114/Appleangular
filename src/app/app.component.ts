import { Component } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './products.service';
//import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: '<div>Hello</div>',
  providers: [ProductService]
 // templateUrl: `app/app.component.html`,
})
export class AppComponent  
{
  //  name = 'Angular'; 
  //  appTitle:string   = 'welcome';
  //  appStatus:boolean = true;
  //  appList: any[] = [{
  //    "ID": "1",
  //    "Name": "one",
  //    "url": 'app/Images/images_download.jpg'
  //   },
  //   {
  //     "ID":"2",
  //     "Name": "Two",
  //     "url": 'app/Images/images_download.jpg'
  //   }];
   iproducts: IProduct[];
   constructor(private _product: ProductService) {
   }
   
   ngOnInit() : void {
      this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
   }
  //MetaData\
}
