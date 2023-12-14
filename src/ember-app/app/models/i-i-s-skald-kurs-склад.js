import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СкладMixin
} from '../mixins/regenerated/models/i-i-s-skald-kurs-склад';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СкладMixin, Validations, {
});

defineProjections(Model);

export default Model;
