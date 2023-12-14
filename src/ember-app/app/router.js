import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-skald-kurs-документ-l');
  this.route('i-i-s-skald-kurs-документ-e',
  { path: 'i-i-s-skald-kurs-документ-e/:id' });
  this.route('i-i-s-skald-kurs-документ-e.new',
  { path: 'i-i-s-skald-kurs-документ-e/new' });
  this.route('i-i-s-skald-kurs-заказ-l');
  this.route('i-i-s-skald-kurs-заказ-e',
  { path: 'i-i-s-skald-kurs-заказ-e/:id' });
  this.route('i-i-s-skald-kurs-заказ-e.new',
  { path: 'i-i-s-skald-kurs-заказ-e/new' });
  this.route('i-i-s-skald-kurs-накладная-l');
  this.route('i-i-s-skald-kurs-накладная-e',
  { path: 'i-i-s-skald-kurs-накладная-e/:id' });
  this.route('i-i-s-skald-kurs-накладная-e.new',
  { path: 'i-i-s-skald-kurs-накладная-e/new' });
  this.route('i-i-s-skald-kurs-склад-l');
  this.route('i-i-s-skald-kurs-склад-e',
  { path: 'i-i-s-skald-kurs-склад-e/:id' });
  this.route('i-i-s-skald-kurs-склад-e.new',
  { path: 'i-i-s-skald-kurs-склад-e/new' });
  this.route('i-i-s-skald-kurs-сотрудник-l');
  this.route('i-i-s-skald-kurs-сотрудник-e',
  { path: 'i-i-s-skald-kurs-сотрудник-e/:id' });
  this.route('i-i-s-skald-kurs-сотрудник-e.new',
  { path: 'i-i-s-skald-kurs-сотрудник-e/new' });
  this.route('i-i-s-skald-kurs-товар-l');
  this.route('i-i-s-skald-kurs-товар-e',
  { path: 'i-i-s-skald-kurs-товар-e/:id' });
  this.route('i-i-s-skald-kurs-товар-e.new',
  { path: 'i-i-s-skald-kurs-товар-e/new' });
});

export default Router;
