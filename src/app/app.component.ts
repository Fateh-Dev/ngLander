import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('work') public work!: ElementRef;
  @ViewChild('pricing') public pricing!: ElementRef;
  @ViewChild('up') public up!: ElementRef;
  @ViewChild('service') public service!: ElementRef;
  @ViewChild('contact') public contact!: ElementRef;
  @ViewChild('login') public login!: ElementRef;
  @ViewChild('lock') public lock!: ElementRef;
  @ViewChild('notFound404') public notFound404!: ElementRef;
  goToLogin() {
    this.login.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  goToLock() {
    this.lock.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  goTo404() {
    this.notFound404.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  goToWork() {
    this.work.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  goUp() {
    this.up.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  goToPricing() {
    this.pricing.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  goToService() {
    this.service.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  goToContact() {
    this.contact.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  title = 'Project Title';
  public direction: any;
  showNavigation = true;
  panelOpenState = true;
  // tslint:disable-next-line: max-line-length
  constructor(
    public translate: TranslateService,
    public cookieService: CookieService,
    private ref: ChangeDetectorRef,
    private http: HttpClient
  ) {}
  // tslint:disable-next-line: typedef
  openDrawer() {
    this.panelOpenState = !this.panelOpenState;
  }
  changeDirection(dir: string, language: string) {
    this.cookieService.set('dir', dir);
    this.translate.use(language);
    this.direction = dir;
    this.ref.detectChanges();
  }
  showNav() {
    this.showNavigation = false;
  }

  ngOnInit() {
    if (this.cookieService.get('dir')) {
      this.direction = this.cookieService.get('dir');
    } else {
      this.direction = 'ltr';
    }
  }
}
