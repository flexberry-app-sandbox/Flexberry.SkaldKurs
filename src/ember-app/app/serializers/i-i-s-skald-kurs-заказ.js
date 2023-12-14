import { Serializer as ЗаказSerializer } from
  '../mixins/regenerated/serializers/i-i-s-skald-kurs-заказ';
import ДокументSerializer from './i-i-s-skald-kurs-документ';

export default ДокументSerializer.extend(ЗаказSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
