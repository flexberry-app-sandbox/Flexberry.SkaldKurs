import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('string'),
  ряд: DS.attr('string'),
  этаж: DS.attr('string'),
  ячейкаТовара: DS.attr('string'),
  товар: DS.belongsTo('i-i-s-skald-kurs-товар', { inverse: null, async: false }),
  склад: DS.belongsTo('i-i-s-skald-kurs-склад', { inverse: 'товарНаСкладе', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-skald-kurs-товар-на-складе.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ряд: {
    descriptionKey: 'models.i-i-s-skald-kurs-товар-на-складе.validations.ряд.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-skald-kurs-товар-на-складе.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ячейкаТовара: {
    descriptionKey: 'models.i-i-s-skald-kurs-товар-на-складе.validations.ячейкаТовара.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-skald-kurs-товар-на-складе.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склад: {
    descriptionKey: 'models.i-i-s-skald-kurs-товар-на-складе.validations.склад.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварНаСкладеE', 'i-i-s-skald-kurs-товар-на-складе', {
    этаж: attr('Этаж', { index: 0 }),
    ряд: attr('Ряд', { index: 1 }),
    ячейкаТовара: attr('Ячейка товара', { index: 2 }),
    количество: attr('Количество', { index: 3 }),
    товар: belongsTo('i-i-s-skald-kurs-товар', 'Товар', {
      название: attr('Название', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'название' })
  });
};
