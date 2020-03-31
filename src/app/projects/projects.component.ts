import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects;
  constructor(private projectsService : ProjectsService) { 
    this.projects = projectsService.getAllProjects();
  }


  toggle(selectedCV)
  {
    // this.projects.forEach(element => {
    //   element.isExpanded = false;
    // });
    selectedCV.isExpanded = !selectedCV.isExpanded;
  }

  ngOnInit() {
  }

}
