import { Component, Input } from '@angular/core';
import { UserDetails } from 'src/app/models/user-details';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() oldestUsersDetails!:UserDetails[];
  
  constructor() { }

}
