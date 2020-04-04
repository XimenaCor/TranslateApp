import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  langs: string[] = [];

  constructor(
    private translate: TranslateService
    ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
    this.translate.stream('HELLO')
    .subscribe((res: string) => {
        console.log(res);
        //=> 'hello world'
      });
      this.translate.stream('GREETING', {name: 'Cristian'})
      .subscribe((res: string) => {
        console.log(res);
      });
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
