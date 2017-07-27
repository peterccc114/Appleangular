import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
})
export class AppComponent  
{
   name = 'Angular'; 
   appTitle:string   = 'welcome';
   appStatus:boolean = true;
   appList: any[] = [{
     "ID": "1",
     "Name": "one"
    },
    {
      "ID":"2",
      "Name": "Two"
    }];
}
