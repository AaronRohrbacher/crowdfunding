import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../database.service'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [DatabaseService]
})
export class DetailComponent implements OnInit {
  projectId;
  projectToDisplay;
  @Input() selectedProject
  constructor(private route: ActivatedRoute, private location: Location, private databaseService: DatabaseService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.databaseService.getProjectById(this.projectId);
  }

  fundEvent(amount) {
    this.projectToDisplay = this.databaseService.getProjectById(this.projectId);

  }

}
