import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Skald kurs',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Skald kurs',
          title: 'Skald kurs'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
