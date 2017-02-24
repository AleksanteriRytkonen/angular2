import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  languages:string[] = ['html', 'CSS', 'Javascript', 'Java', 'Python', 'PHP'];
  frameworks:string[] = ['Angular 2', 'Django', 'Ionic 2', 'express.js', 'Spring', 'bootstrap 3', 'foundation 6'];
  softwares:string[] = ['Adobe Photoshop', 'Adobe illustrator', 'Jetbrains products', 'Eclipse', 'Git', 'Atom'];
  operatingSystems:string[] = ['Windows XP', 'Windows Vista', 'Windows 8.1', 'Windows 10', 'Debian', 'Ubuntu', 'Xubuntu', 'CentOS'];
  skillName:string = "";
  skillValue:number = 0;


  constructor() { }

  ngOnInit() {
  }

  skill(name:string){
    this.skillName = name;
    //this.skillValue = value;
  }

}
