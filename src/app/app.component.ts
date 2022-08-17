import { Component } from '@angular/core';
import { APIModel, Datum } from './models/api-model';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiModel!: APIModel;
  listdata: Datum[] = [];
  title = 'angular-tour-of-heroes';
  constructor(private serApi:ApiService) { }

  ngOnInit() {
    this.serApi.getUsers().subscribe(data => {
      this.apiModel = data;
      if(this.apiModel != null){
        this.listdata = this.apiModel.data;
        console.log(this.apiModel.total);
      }else{
        console.log("No hay Data");
      }
      
    });

  }

}
