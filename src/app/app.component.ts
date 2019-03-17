import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';

import {ThemeSelectorComponent} from './core/theme-selector/theme-selector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  selectedThemeClass: string;
  @ViewChild(ThemeSelectorComponent) themeSelector;
  currentThemeClass: string;


  constructor(private overlayContainer: OverlayContainer) {
  }

  ngAfterViewInit() {
    this.currentThemeClass = this.themeSelector.defaultTheme;
  }

  setColorThem(className) {
    this.overlayContainer.getContainerElement().classList.remove(this.currentThemeClass);

    this.selectedThemeClass = className;
    this.overlayContainer.getContainerElement().classList.add(this.selectedThemeClass);
    this.currentThemeClass = className;

    console.log(className);
  }

}
