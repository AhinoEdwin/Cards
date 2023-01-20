import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcards',
  templateUrl: './allcards.component.html',
  styleUrls: ['./allcards.component.css']
})
export class AllcardsComponent implements OnInit{
  public httpdata : any=[];
  constructor(public http:HttpClient){}
  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data) => {console.log(data);
            this.displaydata(data);
          })
     }
  displaydata(data: any) {
    this.httpdata=data;
  }

}
