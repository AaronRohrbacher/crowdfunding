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
    return this.database.object('list/' + id);
  }

  editProject(project) {
  var selectedProject = this.getProjectById(selectedProject.$key);
  project.update({title: selectedProject.title,
                              artist: selectedProject.artist,
                              description: selectedProject.description});
}

deleteProject(project){
  var projectEntryInFirebase = this.getProjectById(project.$key);
  projectEntryInFirebase.remove();
}


}
