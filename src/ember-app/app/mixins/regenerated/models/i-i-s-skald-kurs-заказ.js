import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаОплаты: DS.attr('date'),
  датаОтгрузки: DS.attr('date'),
  статус: DS.attr('i-i-s-skald-kurs-состояние-заказа'),
  цена: DS.attr('decimal'),
  сотрудник: DS.belongsTo('i-i-s-skald-kurs-сотрудник', { inverse: null, async: false }),
  строкаЗаказа: DS.hasMany('i-i-s-skald-kurs-строка-заказа', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  датаОплаты: {
    descriptionKey: 'models.i-i-s-skald-kurs-заказ.validations.датаОплаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОтгрузки: {
    descriptionKey: 'models.i-i-s-skald-kurs-заказ.validations.датаОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-skald-kurs-заказ.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-skald-kurs-заказ.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-skald-kurs-заказ.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  строкаЗаказа: {
    descriptionKey: 'models.i-i-s-skald-kurs-заказ.validations.строкаЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-skald-kurs-документ'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-skald-kurs-заказ', {
    датаОплаты: attr('Дата оплаты', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    датаОтгрузки: attr('Дата отгрузки', { index: 2 }),
    статус: attr('Статус', { index: 3 }),
    сотрудник: belongsTo('i-i-s-skald-kurs-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фамилия' }),
    строкаЗаказа: hasMany('i-i-s-skald-kurs-строка-заказа', 'Строка заказа', {
      нДС: attr('НДС', { index: 0 }),
      количество: attr('Количество', { index: 1 }),
      сумма: attr('Сумма', { index: 2 }),
      товар: belongsTo('i-i-s-skald-kurs-товар', 'Товар', {
        название: attr('Название', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-skald-kurs-заказ', {
    датаОплаты: attr('Дата оплаты', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    датаОтгрузки: attr('Дата отгрузки', { index: 2 }),
    статус: attr('Статус', { index: 3 }),
    сотрудник: belongsTo('i-i-s-skald-kurs-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
