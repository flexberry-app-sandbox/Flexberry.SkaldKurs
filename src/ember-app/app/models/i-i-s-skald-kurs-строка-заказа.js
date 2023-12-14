import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СтрокаЗаказаMixin
} from '../mixins/regenerated/models/i-i-s-skald-kurs-строка-заказа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СтрокаЗаказаMixin, Validations, {
});

defineProjections(Model);

export default Model;
