import { Serializer as НакладнаяSerializer } from
  '../mixins/regenerated/serializers/i-i-s-skald-kurs-накладная';
import ДокументSerializer from './i-i-s-skald-kurs-документ';

export default ДокументSerializer.extend(НакладнаяSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
