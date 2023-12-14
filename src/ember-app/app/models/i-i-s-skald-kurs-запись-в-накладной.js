import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаписьВНакладнойMixin
} from '../mixins/regenerated/models/i-i-s-skald-kurs-запись-в-накладной';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаписьВНакладнойMixin, Validations, {
});

defineProjections(Model);

export default Model;
