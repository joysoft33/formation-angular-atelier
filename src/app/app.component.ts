import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lang = 'fr';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.lang);
    translate.use(this.lang);
  }

  setLang(lang: string) {
    this.translate.use(lang);
    this.lang = lang;
  }
}
