import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThemeSelectorComponent {
  @Output() theme = new EventEmitter<any>();

  themes = [
    {
      primary: '#607D8B',
      bgColor: '#ffffff',
      class: 'bgrey-theme',
      iconColor: 'black',
    },

    {
      primary: '#607D8B',
      bgColor: '#424242',
      class: 'bgrey-theme-dark',
      iconColor: 'white'

    },

    {
      primary: '#CDDC39',
      bgColor: '#ffffff',
      class: 'lime-theme',
      iconColor: 'black'

    },

    {
      primary: '#CDDC39',
      bgColor: '#424242',
      class: 'lime-theme-dark',
      iconColor: 'white'

    },

    {
      primary: '#FF9800',
      bgColor: '#ffffff',
      class: 'orange-theme',
      iconColor: 'black'

    },

    {
      primary: '#FF9800',
      bgColor: '#424242',
      class: 'orange-theme-dark',
      iconColor: 'white'

    },

  ];
  defaultTheme = this.themes[0].class;
  currentTheme = this.defaultTheme;


  selectedTheme(selected) {
    this.theme.emit(selected.class);
    this.currentTheme = selected.class;
  }

}
