import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-skald-kurs-запись-в-накладной', 'Unit | Model | i-i-s-skald-kurs-запись-в-накладной', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
