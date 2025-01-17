import {CELL_TYPES, FILTER_TYPES, MedTableColumnConfig} from 'med-table';
import {FIELD_TYPES, PATTERN_TYPES} from "med-dynamic-form";

export const TABLE_CONFIG: MedTableColumnConfig[] = [
  {
    key: 'cpv_code',
    label: 'CPV-код',
    filterable: true,
    editorType: FIELD_TYPES.SELECT,
    minWidth: '10rem',
  },
  {
    key: 'winner',
    label: 'Переможець',
    filterable: true,
    filterType: FILTER_TYPES.SELECT,
    cellType: CELL_TYPES.LINK,
    linkOptions: {
      url: 'urlPath',
      keyParam: 'id',
      target: '_blank',
    },
  },
  {
    label: 'Group columns',
    headCellClass: 'bg-blue-100 text-center',
    children: [
      {
        key: 'bool',
        label: 'Bool',
        filterable: true,
        filterType: FILTER_TYPES.CHECKBOX,
        editorType: FIELD_TYPES.CHECKBOX,
        headCellClass: 'bg-blue-100',
        dataCellClass: 'bg-blue-100',
      },
      {
        key: 'publisher',
        sortKey: 'publisher.name',
        label: 'Відповідальна особа за підписання',
        filterable: true,
        editorType: FIELD_TYPES.SELECT,
        filterType: FILTER_TYPES.SELECT,
        headCellClass: 'bg-blue-100',
        dataCellClass: 'bg-blue-100',
      },
      {
        key: 'responsible',
        sortKey: 'responsible.name',
        label: 'Відповідальний менеджер',
        filterable: true,
        editorType: FIELD_TYPES.SELECT,
        headCellClass: 'bg-blue-100',
        dataCellClass: 'bg-blue-100',
      },
    ],
  },

  {
    key: 'winner_edrpou',
    label: 'ЄДРПОУ переможця',
    filterable: true,
    editorType: FIELD_TYPES.TEXT,
  },

  {
    label: 'Group columns repeat',
    children: [
      {
        key: 's20',
        label: 'Доведена кількість МОЗ',
        filterable: true,
        editorType: FIELD_TYPES.NUMBER,
        defaultValue: '0',
      },
      {
        key: 'tender_quantity',
        label: 'Кількість закупівлі',
        filterable: true,
        editorType: FIELD_TYPES.NUMBER,
        defaultValue: '0',
      },
      {
        label: 'Group columns level 2',
        children: [
          {
            key: 'agreement_value',
            label: 'Сума позиції за договором',
            editorType: FIELD_TYPES.TEXT,
            pattern: PATTERN_TYPES.DECIMAL,
          },
          {
            key: 'agreement_num',
            label: 'Номер договору',
            editorType: FIELD_TYPES.TEXT,
          },
          {
            label: 'Group columns level 3',
            children: [
              {
                key: 'agreement_final_date',
                label: 'Кінцева дата дії договору',
                filterable: true,
                editorType: FIELD_TYPES.DATE,
                filterType: FILTER_TYPES.DATE,
              },
              {
                key: 'delivery_date',
                label: 'Строк поставки',
                filterable: true,
                editorType: FIELD_TYPES.DATE,
                filterType: FILTER_TYPES.DATE,
              },
            ],
          },
          {
            key: 'agreement_fact_date',
            label: 'Дата підписання договору',
            filterable: true,
            editorType: FIELD_TYPES.DATE,
            filterType: FILTER_TYPES.DATE,
          },
        ],
      },
    ],
  },
  {
    key: 'manufacturer',
    label: 'Виробник',
    filterable: true,
    editorType: FIELD_TYPES.TEXT,
  },
  {
    key: 'manufacturer_country',
    label: 'Країна виробника',
    filterable: true,
    editorType: FIELD_TYPES.TEXT,
  },
  {
    key: 'trade_name',
    label: 'Торгова назва',
    filterable: true,
    editorType: FIELD_TYPES.TEXT,
  },
  {
    key: 'tender_id',
    label: 'Посилання на Prozorro',
    filterable: true,
    editorType: FIELD_TYPES.TEXT,
    filterType: FILTER_TYPES.SELECT,
  },
  {
    key: 'api_id',
    label: 'API Prozorro',
    filterable: true,
    editorType: FIELD_TYPES.TEXT,
    filterType: FILTER_TYPES.SELECT,
  },
  {
    key: 'quantity',
    label: 'Кількість закупівлі (Додаткова угода)',
    filterable: true,
    editorType: FIELD_TYPES.NUMBER,
  },
  {
    key: 'proc_sum',
    label: 'Сума позиції (Додаткова угода)',
    filterable: true,
    editorType: FIELD_TYPES.TEXT,
    pattern: PATTERN_TYPES.LATIN_AND_NUMBER,
  },
  {
    key: 'agreement_final_date',
    label: 'Кінцева дата дії договору (Додаткова угода)',
    filterable: true,
  },
];

export const ACT_PROTECTION_TABLE_CONFIG: MedTableColumnConfig[] = [
  {
    key: 'id',
    label: 'T1 ID',
    filterable: true,
    editorType: FIELD_TYPES.NUMBER,
  },
  {
    key: 'info.id',
    label: 'ID',
    filterable: true,
    editorType: FIELD_TYPES.NUMBER,
  },
  {
    key: 'info.level.id',
    label: 'T2 ID',
    filterable: true,
    editorType: FIELD_TYPES.NUMBER,
  },
  {
    key: 'info.group_name',
    label: 'Група',
    filterable: true,
  },
  {
    key: 'info.name',
    label: 'Назва',
    filterable: true,
  },
  {
    key: 'info.dosage',
    label: 'Дозування',
    filterable: true,
  },
  {
    key: 'info.release_form',
    label: 'Форма випуску',
    filterable: true,
  },
  {
    key: 'info.unit',
    label: 'Одиниця виміру',
    filterable: true,
  },
  {
    key: 'info.trade_name',
    label: 'Торгова назва',
    filterable: true,
  },
  {
    key: 'info.multiplicity',
    label: 'Кратність',
    filterable: true,
  },
  {
    key: 'info.start_quantity',
    label: 'Кількість поставки',
    filterable: true,
  },
  {
    key: 'info.reserve',
    label: 'Резерв',
    filterable: true,
  },
  {
    key: 'info.distribution_quantity',
    label: 'Кілкість  до розподілу',
    filterable: true,
    editorType: FIELD_TYPES.NUMBER,
  },
  {
    key: 'info.balance_quantity',
    label: 'Залишок',
    filterable: true,
  },
  {
    key: 'info.distribution_units',
    label: 'Кількість упаковок',
    filterable: true,
  },
];
