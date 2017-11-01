import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ DatabaseService ]
})
export class ListComponent implements OnInit {
  currentRoute: string = this.router.url;
  projects: FirebaseListObservable<any[]>;
  constructor(private router: Router, private databaseService: DatabaseService){}

  ngOnInit(){
  this.projects = this.databaseService.getProjects();
  }

}
