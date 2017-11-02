import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Project } from './project.model';


@Injectable()
export class DatabaseService {
  projects: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects')
  }

  getProjects() {
    return this.projects;
  }

  newProject(newProject: Project) {
    this.projects.push(newProject)
  }

  getProjectById(id: string){
    return this.database.object('projects/' + id);
  }

  editProject(project) {
  var selectedProject = this.getProjectById(project.$key);
  selectedProject.update({name: project.name,
                  creators: project.creators,
                  description: project.description,
                  fundGoal: project.fundGoal,
                  doWithFunds: project.doWithFunds,
                  perks: project.perks,
                  category: project.category,
                  type: project.type
                });
}

deleteProject(project){
  let firebaseProject = this.getProjectById(project.$key);
  firebaseProject.remove();
}

}
