import { FIELD_TYPES, PATTERN_TYPES } from 'med-dynamic-form';

import { CELL_TYPES } from './cellTypes';
import { FILTER_TYPES } from './filterTypes';

export interface MedTableColumnConfig {
  key?: string // not important if use property "children"
  label: string
  sortKey?: string
  headCellClass?: string
  dataCellClass?: string
  defaultValue?: any // default '–'
  minWidth?: string // default: '15rem'
  maxWidth?: string // default: '20rem'
  filterable?: boolean // visible filter
  filterType?: FILTER_TYPES // default: FILTER_TYPES.TEXT
  editorType?: FIELD_TYPES
  cellType?: CELL_TYPES // default: CELL_TYPES.TEXT
  linkOptions?: {
    url: string
    keyParam?: string
    target?: string // default: '_self'
  }
  pattern?: PATTERN_TYPES
  hideExport?: boolean // hide column in export file
  inputMask?: string
  visibleEditorHandler?: (data: any) => boolean // default: () => true
  viewHandler?: (data: any) => any
  children?: MedTableColumnConfig[] // property 'key' should be empty string
}
