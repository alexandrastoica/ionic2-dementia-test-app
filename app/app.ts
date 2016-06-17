import {Component} from "@angular/core";
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {RegistrationPage} from './pages/registration/registration';
import {LoginPage} from './pages/login/login';
import {DementiaService} from './services/dementia.service';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [DementiaService]
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform) {
	  platform.ready().then(() => {
		  // Okay, so the platform is ready and our plugins are available.
		  // Here you can do any higher level native things you might need.
		  StatusBar.styleDefault();
	  });
  }
}

ionicBootstrap(MyApp);
