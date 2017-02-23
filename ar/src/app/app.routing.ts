import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {CvComponent} from "./cv/cv.component";
import {SkillsComponent} from "./skills/skills.component";

const APP_ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'cv', component: CvComponent },
  { path: '', component: HomeComponent}
];


export const routing = RouterModule.forRoot(APP_ROUTES);
