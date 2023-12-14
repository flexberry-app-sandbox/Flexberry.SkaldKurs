import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  email: DS.attr('string'),
  имя: DS.attr('string'),
  отчество: DS.attr('string'),
  табельныйНомер: DS.attr('number'),
  телефон: DS.attr('string'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  email: {
    descriptionKey: 'models.i-i-s-skald-kurs-сотрудник.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-skald-kurs-сотрудник.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-skald-kurs-сотрудник.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  табельныйНомер: {
    descriptionKey: 'models.i-i-s-skald-kurs-сотрудник.validations.табельныйНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-skald-kurs-сотрудник.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-skald-kurs-сотрудник.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-skald-kurs-сотрудник', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    email: attr('Email', { index: 4 }),
    табельныйНомер: attr('Табельный номер', { index: 5 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-skald-kurs-сотрудник', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    email: attr('Email', { index: 4 }),
    табельныйНомер: attr('Табельный номер', { index: 5 })
  });
};
