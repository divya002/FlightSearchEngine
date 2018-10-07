import { Component } from '@angular/core';
import { FlightService } from './flight.service';
import { Observable } from 'rxjs/Rx';
import { FilterpricePipe } from './filterprice.pipe';
import { filter,take, map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oneway = true;
  search = true;
  one = true;
  hidden_menu_bar = false;
  maxprice: number = 9000;
  result_Oneway = [];
  result_return = [];
  resultmain = [];
  origin = "Pune";
  destination = "Delhi";
  dDate = new Date();
  rDate = new Date();
  passenger = 1;
  search_menu() {
    if (this.hidden_menu_bar == false)
      this.hidden_menu_bar = true;
    else
      this.hidden_menu_bar = false;
  }
  title = 'throughWorksAssignments';
  constructor(private flightService: FlightService) { }
  public getFlightRecord() {
    this.result_Oneway = [];
    this.result_return = [];
    this.resultmain = [];
    //.flatMap((data) => data.epics) // [{id: 1}, {id: 4}, {id: 3}, ..., {id: N}]
    //.filter((epic) => epic.id === id) // checks {id: 1}, then {id: 2}, etc
    //.subscribe((result) => ...); // do something epic!!!
    this.flightService.getRecord()
   .pipe(take(1))
      .subscribe(
        (res) => {
          console.log(res.result);
          this.resultmain = res.result;
          this.result_Oneway = res.result
          .filter((flight)=>(flight.origin==this.origin)&&(flight.destination==this.destination))
          .sort((flight)=>flight.price);
          this.result_return = res.result
          .filter((flight)=>(flight.origin==this.destination)&&(flight.destination==this.origin))
          .sort((a,b)=> {return a.price-b.price})

        },
        (error) => {
          alert(error.message);
        },
        () => {
          console.log("completed");
        })

  }

}
