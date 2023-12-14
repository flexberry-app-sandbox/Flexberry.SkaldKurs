import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостояниеЗаказаEnum from '../enums/i-i-s-skald-kurs-состояние-заказа';

export default FlexberryEnum.extend({
  enum: СостояниеЗаказаEnum,
  sourceType: 'IIS.SkaldKurs.СостояниеЗаказа'
});
