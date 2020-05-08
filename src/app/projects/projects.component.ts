import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../shared/project';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectsList: Array<Project>;
  constructor(private projectsService : ProjectsService) { 
  }


  toggle(selectedCV)
  {
    selectedCV.isExpanded = !selectedCV.isExpanded;
  }

  ngOnInit() {
    this.projectsList = this.projectsService
    .getAllProjects();

    // console.log(this.projectsList);
  }

}
