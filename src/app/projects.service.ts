import { Injectable, OnInit } from '@angular/core';
// import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Project } from './shared/project';
import { ɵNullViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  getAllProjects(): Project[] {

    let projects = new Array<Project>();
    // this.firestore.collection("projects", ref => ref.orderBy('id'))
    // .stateChanges()
    //   .subscribe(
    //     projectsFromFB =>
    //       projectsFromFB
    //       .forEach(proj => projects.push(
    //         this.createProjectFromFirebaseItem(proj as DocumentChangeAction<Project>)
    //       ))
    //   );
    return projects.reverse();
  }

  private createProjectFromFirebaseItem(): Project {
    let newProject = new Project();
    // newProject.id = input.payload.doc.data().id;
    // newProject.name = input.payload.doc.data().name;
    // newProject.company = input.payload.doc.data().company;
    // newProject.shortDesc = input.payload.doc.data().shortDesc;
    // newProject.technologies = input.payload.doc.data().technologies;
    // newProject.isExpanded = newProject.id === 1 ? true : false;
    // newProject.from = input.payload.doc.data().from;
    // newProject.to = input.payload.doc.data().to;
    // newProject.subProjects = input.payload.doc.data().subProjects;
    console.log(newProject);
    return newProject;

  }

}
