import {Component, OnInit} from '@angular/core';

import {Option} from '../option.model';
import {ThemeService} from '../theme.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();

  constructor(private readonly themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.themeService.setTheme('deeppurple-amber');
  }

  themeChangeHandler(themeToSet: string): void {
    this.themeService.setTheme(themeToSet);
  }
}
