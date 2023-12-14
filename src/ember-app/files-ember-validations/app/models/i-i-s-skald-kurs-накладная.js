import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as НакладнаяMixin
} from '../mixins/regenerated/models/i-i-s-skald-kurs-накладная';

import ДокументModel from './i-i-s-skald-kurs-документ';

let Model = ДокументModel.extend(НакладнаяMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
