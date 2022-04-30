import { Component, Input, OnInit } from '@angular/core';
import { AgeGroup } from 'src/app/models/age-group';
//import { ChartDataset } from 'chart.js';
import { UserDetails } from 'src/app/models/user-details';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  _usersDetails: UserDetails[];
  @Input() set usersDetails(details:UserDetails[]){
    this._usersDetails = details;
    this.assignPeopleToAgeGroup()
  }
   get usersDetails(){
    return this._usersDetails;
  }
  numberOfPeoplePerAgeGroup:Partial<Record<AgeGroup,number>> = {}; 

  chartOptions = {
    responsive: true
  };

  chartType = 'bar';

  chartData = []

  chartLabels:AgeGroup[];
  
  constructor() { }

  ngOnInit() {
    this.chartLabels = Object.values(AgeGroup).filter(x => typeof x === 'string') as AgeGroup[];
  }

  assignPeopleToAgeGroup(){
    this.numberOfPeoplePerAgeGroup = this.usersDetails.reduce((result,element)=>{
      const age = element.dob.age;
      if(age<30){
        result[AgeGroup.Twenty] = this.addPersonToGroup(result[AgeGroup.Twenty])
      }else if(age<40){
        result[AgeGroup.Thirty] = this.addPersonToGroup(result[AgeGroup.Thirty])
      }else if(age<50){
        result[AgeGroup.Forty] = this.addPersonToGroup(result[AgeGroup.Forty])
      }else if(age<60){
        result[AgeGroup.Fifty] = this.addPersonToGroup(result[AgeGroup.Fifty])
      }else if(age<70){
        result[AgeGroup.Sixty] = this.addPersonToGroup(result[AgeGroup.Sixty])
      }else if(age<80){
        result[AgeGroup.Seventy] = this.addPersonToGroup(result[AgeGroup.Seventy])
      }else if(age<90){
        result[AgeGroup.Eighty] = this.addPersonToGroup(result[AgeGroup.Eighty])
      }else if(age<100){
        result[AgeGroup.Ninety] = this.addPersonToGroup(result[AgeGroup.Ninety])
      }
      return result;
    },{} as Record<AgeGroup,number>)
    this.assignChartOptions()
  }

  addPersonToGroup(peopleNumber: number){
    return peopleNumber!==undefined ? peopleNumber+1:1
  }

  assignChartOptions(){
    this.chartData = [
      {
        data: Object.entries(this.numberOfPeoplePerAgeGroup).map(item=>item[1]),
        label: 'Number of people'
      },
    ]
  }
}
