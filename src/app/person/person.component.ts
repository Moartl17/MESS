import { Component, OnInit } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  currentAge:number;
  constructor() { }

  ngOnInit() {
    this.calculate_age(5, 17, 1977);
  }

  calculate_age(birth_month,birth_day,birth_year)
{
    var today_date = new Date();
    var today_year = today_date.getFullYear();
    var today_month = today_date.getMonth();
    var today_day = today_date.getDate();
    var age = today_year - birth_year;

    if ( today_month < (birth_month - 1))
    {
        age--;
    }
    if (((birth_month - 1) == today_month) && (today_day < birth_day))
    {
        age--;
    }
    this.currentAge = age;
}
}


