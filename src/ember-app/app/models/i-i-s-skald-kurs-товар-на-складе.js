import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТоварНаСкладеMixin
} from '../mixins/regenerated/models/i-i-s-skald-kurs-товар-на-складе';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТоварНаСкладеMixin, Validations, {
});

defineProjections(Model);

export default Model;
