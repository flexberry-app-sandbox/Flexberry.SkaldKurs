import { Serializer as ТоварНаСкладеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-skald-kurs-товар-на-складе';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТоварНаСкладеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
