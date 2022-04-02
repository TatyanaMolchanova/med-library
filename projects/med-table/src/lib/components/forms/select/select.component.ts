import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { MedSelectOption } from '../../../types/MedSelectOption';
import { FormInputMixin } from '../../../mixins/FormInputMixin';
import { MedTableService } from '../../../services/med-table.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent<T> extends FormInputMixin<string> {
  constructor(private store: MedTableService) {
    super();
  }

  @Input() fieldName: string = '';

  get selectOptions(): MedSelectOption<T>[] {
    return this.store.selectData[this.fieldName] || [];
  }
}
