import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ DatabaseService ]
})
export class EditComponent implements OnInit {
  @Input() selectedProject;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
  }

  editButton(projectToUpdate){
    this.databaseService.editProject(projectToUpdate);
  }

  deleteButton(project) {
    if(confirm("Are you sure you'd like to delete this?")){
    this.databaseService.deleteProject(project)
  }
}



}
