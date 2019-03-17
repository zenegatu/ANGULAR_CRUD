import {NgModule} from '@angular/core';
import {ItemsService} from './items.service';
import {ThemeSelectorComponent} from './theme-selector/theme-selector.component';
import {UsedMaterialModule} from '../used-material.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [UsedMaterialModule, CommonModule],
  exports: [ThemeSelectorComponent],
  declarations: [ThemeSelectorComponent],
  providers: [ItemsService]
})
export class CoreModule {

}
