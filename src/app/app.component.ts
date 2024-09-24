import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'vi']);

    const browserLang = translate.getBrowserLang();
    console.log(browserLang);
    translate.use(browserLang && (browserLang.match(/en|vi/) ? browserLang : 'en') || 'en');

    // Update the title of the document
    this.translate.get('HOME.TITLE').subscribe((title: string) => {
      document.title = title;
    });
  }
}
