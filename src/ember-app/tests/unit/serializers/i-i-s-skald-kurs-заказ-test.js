import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-skald-kurs-заказ', 'Unit | Serializer | i-i-s-skald-kurs-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-skald-kurs-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-skald-kurs-состояние-заказа',
    'transform:i-i-s-skald-kurs-состояние-накладной',

    'model:i-i-s-skald-kurs-документ',
    'model:i-i-s-skald-kurs-заказ',
    'model:i-i-s-skald-kurs-запись-в-накладной',
    'model:i-i-s-skald-kurs-накладная',
    'model:i-i-s-skald-kurs-склад',
    'model:i-i-s-skald-kurs-сотрудник',
    'model:i-i-s-skald-kurs-строка-заказа',
    'model:i-i-s-skald-kurs-товар-на-складе',
    'model:i-i-s-skald-kurs-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
