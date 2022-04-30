import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDetails } from 'src/app/models/user-details';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss']
})
export class PageMainComponent implements OnInit {
  @ViewChild('backgroundSection') backgroundSection;
  loader$ = this.dataService.loader$;

  usersDetails:UserDetails[] = [];
  oldestUsersDetails:UserDetails[] = [];
  
  refreshCounter = 0;
  
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  loadData(){
    this.oldestUsersDetails = []
    this.usersDetails = []

    this.refreshCounter = this.refreshCounter+1;
    
    if(this.refreshCounter%5===0){
      this.backgroundSection.nativeElement.className = 'background';
    }else{
      this.backgroundSection.nativeElement.className = '';
    }
    
    return this.dataService.loadData().subscribe((items:UserDetails[])=>{
      this.usersDetails = items;
      this.oldestUsersDetails = items.slice(-10)
    }); 
  }
}
