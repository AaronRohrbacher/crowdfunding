import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Project } from '../project.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ DatabaseService ]
})
export class ListComponent implements OnInit {
  currentRoute: string = this.router.url;
  projects: FirebaseListObservable<any[]>;
  selectedProject: Project;
  constructor(private router: Router, private databaseService: DatabaseService){}

  range: string = "all"

  ngOnInit(){
  this.projects = this.databaseService.getProjects();
  }

  viewDetail(project) {
    this.router.navigate(['projects', project.$key]);
  }

  rangeChange(range) {
    this.range = range;
  }
}
