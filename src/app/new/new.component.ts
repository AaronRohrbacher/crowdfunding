import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Project } from '../project.model';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers: [DatabaseService]
})
export class NewComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
  }

  submitForm(name: string, creators: string, description: string, fundGoal: number, doWithFunds: string, perks: string, category: string, type: string) {
    var createProject: Project = new Project(name, creators, description, fundGoal, doWithFunds, perks, category, type);
    this.databaseService.newProject(createProject);
  }

}
