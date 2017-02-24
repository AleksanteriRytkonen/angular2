import { Component, OnInit } from '@angular/core';

import { SkillService } from '../service/skill.service'
import {HttpService} from "../service/http.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [SkillService, HttpService]
})
export class SkillsComponent implements OnInit {

  languages:string[] = ['html', 'CSS', 'Javascript', 'Java', 'Python', 'PHP'];
  frameworks:string[] = ['Angular 2', 'Django', 'Ionic 2', 'express.js', 'Spring', 'bootstrap 3', 'foundation 6'];
  softwares:string[] = ['Adobe Photoshop', 'Adobe illustrator', 'Jetbrains products', 'Eclipse', 'Git', 'Atom'];
  operatingSystems:string[] = ['Windows XP', 'Windows Vista', 'Windows 8.1', 'Windows 10', 'Debian', 'Ubuntu', 'Xubuntu', 'CentOS'];
  skillName:string = "";
  skillValue:number = 0;

  items: any[] = [];


  constructor(private skillService: SkillService, private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (data: any) => console.log(data)
      );
  }

  onSubmit(username: string, email: string) {
    this.httpService.sendData({username: username, email: email})
      .subscribe(
        data => console.log(data)
      );
  }

  onGetData(){
    this.httpService.getOwnData()
      .subscribe(
        data => {
          const myArray = [];
          for(let key in data) {
            myArray.push(data[key]);
          }
          this.items = myArray
        }
      );
  }

  skill(name:string){
    this.skillName = name;
    //this.skillValue = value;
  }

  onLog(value: string) {
    this.skillService.writeToLog(value);
  }

}
