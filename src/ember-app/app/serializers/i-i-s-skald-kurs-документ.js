import { Serializer as ДокументSerializer } from
  '../mixins/regenerated/serializers/i-i-s-skald-kurs-документ';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокументSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
