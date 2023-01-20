import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import usersJson from './users.json';


interface user{
  firstName: string;
  lastName: string;
  role: string;
  fb: string;
  twitter: string;
  linkedIn: string;
  image : string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cards';
  httpdata : any=[];
  allhttpdata : any=[];
  userdata: user[] = usersJson;
  key ='';
  submitted=false;


  constructor(private http:HttpClient){}

ngOnInit(){
    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data) => {console.log(data);
    //         this.displayalldata(data);})
    //  }
 
    //  displayalldata(data:any){
    //   this.httpdata=data;
     }

    

       keyVal(value : any){
           this.key=value;  
           this.http.get('https://jsonplaceholder.typicode.com/users/'+this.key).subscribe((data) => {console.log(data);
           this.display(data);
          this.submitted=true;
         })
       }
  display(data: Object) {
      this.httpdata=data;
  }
      //  ngOnInit(){
      //   this.http.get('https://jsonplaceholder.typicode.com/users/'+this.key).subscribe((data) => {console.log(data);
      //           this.displaydata(data);
      //         })
      //    }

  


}
