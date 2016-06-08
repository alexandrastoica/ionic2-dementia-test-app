import {Component} from "@angular/core";
import {Sections} from '../sections/sections';
import {Profile} from '../profile/profile';
import {Tests} from '../tests/tests';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Sections;
  tab2Root: any = Profile;
  tab3Root: any = Tests;
}
