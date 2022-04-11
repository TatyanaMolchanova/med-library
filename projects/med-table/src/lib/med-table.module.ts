import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { MedDynamicFormModule } from 'med-dynamic-form';

import { MedTableComponent } from './med-table.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { DateRangeComponent } from './components/forms/date-range/date-range.component';
import { MedTemplateDirective } from './directives/med-template.directive';
import { FilterTextComponent } from './components/filters/filter-text/filter-text.component';
import { FilterDateComponent } from './components/filters/filter-date/filter-date.component';
import { FilterSelectComponent } from './components/filters/filter-select/filter-select.component';

@NgModule({
  declarations: [
    MedTableComponent,
    TableDataComponent,
    DateRangeComponent,
    MedTemplateDirective,
    FilterTextComponent,
    FilterDateComponent,
    FilterSelectComponent,
  ],
  imports: [
    FormsModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    BrowserModule,
    CalendarModule,
    InputTextModule,
    MultiSelectModule,
    ReactiveFormsModule,
    MedDynamicFormModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MedTableComponent,
    MedTemplateDirective,
  ]
})
export class MedTableModule { }
