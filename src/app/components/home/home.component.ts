import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  searchValue="";
  searchResults = {};

  ngOnInit(): void {
  }

  search() : void{
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    const requestOptions = {
      headers: new Headers(headerDict),
    };

    if(this.searchValue != null || this.searchValue != "")
    {
      for (var i=0;i<10;i++)
      {
        // this.http.post<any>(`${environment.apiUrl}/simpleuser/search/`, {"value" : this.searchValue,"type" : i},requestOptions)
        //   .subscribe(resp => {
        //     this.searchResults[i]=resp;
        //   });
      }
    }
  }
  setValue(event : any):void
  {
    this.searchValue = event.target.value;
  }

}
