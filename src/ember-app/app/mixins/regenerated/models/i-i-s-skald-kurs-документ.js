import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаполнения: DS.attr('date'),
  номер: DS.attr('number')
});

export let ValidationRules = {
  датаЗаполнения: {
    descriptionKey: 'models.i-i-s-skald-kurs-документ.validations.датаЗаполнения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-skald-kurs-документ.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокументE', 'i-i-s-skald-kurs-документ', {
    датаЗаполнения: attr('Дата заполнения', { index: 0 }),
    номер: attr('Номер', { index: 1 })
  });

  modelClass.defineProjection('ДокументL', 'i-i-s-skald-kurs-документ', {
    датаЗаполнения: attr('Дата заполнения', { index: 0 }),
    номер: attr('Номер', { index: 1 })
  });
};
