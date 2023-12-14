import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокументMixin
} from '../mixins/regenerated/models/i-i-s-skald-kurs-документ';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокументMixin, Validations, {
});

defineProjections(Model);

export default Model;
