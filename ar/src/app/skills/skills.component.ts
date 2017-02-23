import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillName:string = "";
  skillValue:number = 0;


  constructor() { }

  ngOnInit() {
  }

  skill(name:string, value:number){
    this.skillName = name;
    this.skillValue = value;
  }

}
