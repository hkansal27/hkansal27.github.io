import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public selectedLanguage = 'en';
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.initializeTranslation();
  }

  private initializeTranslation() {
    this.translate.addLangs(['en', 'hi']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');
    this.selectedLanguage = browserLang.match(/en|hi/) ? browserLang : 'en';
  }

  public changeLanguage() {
    this.translate.use(this.selectedLanguage);
  }
}
