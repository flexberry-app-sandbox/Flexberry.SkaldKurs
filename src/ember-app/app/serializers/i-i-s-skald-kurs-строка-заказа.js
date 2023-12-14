import { Serializer as СтрокаЗаказаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-skald-kurs-строка-заказа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СтрокаЗаказаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
