import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSkaldKursДокументLForm from './forms/i-i-s-skald-kurs-документ-l';
import IISSkaldKursЗаказLForm from './forms/i-i-s-skald-kurs-заказ-l';
import IISSkaldKursНакладнаяLForm from './forms/i-i-s-skald-kurs-накладная-l';
import IISSkaldKursСкладLForm from './forms/i-i-s-skald-kurs-склад-l';
import IISSkaldKursСотрудникLForm from './forms/i-i-s-skald-kurs-сотрудник-l';
import IISSkaldKursТоварLForm from './forms/i-i-s-skald-kurs-товар-l';
import IISSkaldKursДокументEForm from './forms/i-i-s-skald-kurs-документ-e';
import IISSkaldKursЗаказEForm from './forms/i-i-s-skald-kurs-заказ-e';
import IISSkaldKursНакладнаяEForm from './forms/i-i-s-skald-kurs-накладная-e';
import IISSkaldKursСкладEForm from './forms/i-i-s-skald-kurs-склад-e';
import IISSkaldKursСотрудникEForm from './forms/i-i-s-skald-kurs-сотрудник-e';
import IISSkaldKursТоварEForm from './forms/i-i-s-skald-kurs-товар-e';
import IISSkaldKursДокументModel from './models/i-i-s-skald-kurs-документ';
import IISSkaldKursЗаказModel from './models/i-i-s-skald-kurs-заказ';
import IISSkaldKursЗаписьВНакладнойModel from './models/i-i-s-skald-kurs-запись-в-накладной';
import IISSkaldKursНакладнаяModel from './models/i-i-s-skald-kurs-накладная';
import IISSkaldKursСкладModel from './models/i-i-s-skald-kurs-склад';
import IISSkaldKursСотрудникModel from './models/i-i-s-skald-kurs-сотрудник';
import IISSkaldKursСтрокаЗаказаModel from './models/i-i-s-skald-kurs-строка-заказа';
import IISSkaldKursТоварНаСкладеModel from './models/i-i-s-skald-kurs-товар-на-складе';
import IISSkaldKursТоварModel from './models/i-i-s-skald-kurs-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-skald-kurs-документ': IISSkaldKursДокументModel,
    'i-i-s-skald-kurs-заказ': IISSkaldKursЗаказModel,
    'i-i-s-skald-kurs-запись-в-накладной': IISSkaldKursЗаписьВНакладнойModel,
    'i-i-s-skald-kurs-накладная': IISSkaldKursНакладнаяModel,
    'i-i-s-skald-kurs-склад': IISSkaldKursСкладModel,
    'i-i-s-skald-kurs-сотрудник': IISSkaldKursСотрудникModel,
    'i-i-s-skald-kurs-строка-заказа': IISSkaldKursСтрокаЗаказаModel,
    'i-i-s-skald-kurs-товар-на-складе': IISSkaldKursТоварНаСкладеModel,
    'i-i-s-skald-kurs-товар': IISSkaldKursТоварModel
  },

  'application-name': 'Skald kurs',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Skald kurs',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Skald kurs',
          title: 'Skald kurs'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'skald-kurs': {
          caption: 'SkaldKurs',
          title: 'SkaldKurs',
          сотрудник: {
            caption: 'Сотрудник',
            title: 'Сотрудник',
            'i-i-s-skald-kurs-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            }
          },
          'товар-на-складе': {
            caption: 'Товар на складе',
            title: 'Товар на складе',
            'i-i-s-skald-kurs-товар-l': {
              caption: 'Товар',
              title: ''
            },
            'i-i-s-skald-kurs-склад-l': {
              caption: 'Склад',
              title: ''
            }
          },
          'информация-о-заказе': {
            caption: 'Информация о заказе',
            title: 'Информация о заказе',
            'i-i-s-skald-kurs-накладная-l': {
              caption: 'Накладная',
              title: ''
            },
            'i-i-s-skald-kurs-заказ-l': {
              caption: 'Заказ',
              title: ''
            },
            'i-i-s-skald-kurs-документ-l': {
              caption: 'Документ',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-skald-kurs-документ-l': IISSkaldKursДокументLForm,
    'i-i-s-skald-kurs-заказ-l': IISSkaldKursЗаказLForm,
    'i-i-s-skald-kurs-накладная-l': IISSkaldKursНакладнаяLForm,
    'i-i-s-skald-kurs-склад-l': IISSkaldKursСкладLForm,
    'i-i-s-skald-kurs-сотрудник-l': IISSkaldKursСотрудникLForm,
    'i-i-s-skald-kurs-товар-l': IISSkaldKursТоварLForm,
    'i-i-s-skald-kurs-документ-e': IISSkaldKursДокументEForm,
    'i-i-s-skald-kurs-заказ-e': IISSkaldKursЗаказEForm,
    'i-i-s-skald-kurs-накладная-e': IISSkaldKursНакладнаяEForm,
    'i-i-s-skald-kurs-склад-e': IISSkaldKursСкладEForm,
    'i-i-s-skald-kurs-сотрудник-e': IISSkaldKursСотрудникEForm,
    'i-i-s-skald-kurs-товар-e': IISSkaldKursТоварEForm
  },

});

export default translations;
