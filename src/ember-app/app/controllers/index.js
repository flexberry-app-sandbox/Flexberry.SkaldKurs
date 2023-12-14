import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.skald-kurs.caption'),
          title: i18n.t('forms.application.sitemap.skald-kurs.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.skald-kurs.сотрудник.caption'),
            title: i18n.t('forms.application.sitemap.skald-kurs.сотрудник.title'),
            children: [{
              link: 'i-i-s-skald-kurs-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.skald-kurs.сотрудник.i-i-s-skald-kurs-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.skald-kurs.сотрудник.i-i-s-skald-kurs-сотрудник-l.title'),
              icon: 'briefcase',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.skald-kurs.товар-на-складе.caption'),
            title: i18n.t('forms.application.sitemap.skald-kurs.товар-на-складе.title'),
            children: [{
              link: 'i-i-s-skald-kurs-товар-l',
              caption: i18n.t('forms.application.sitemap.skald-kurs.товар-на-складе.i-i-s-skald-kurs-товар-l.caption'),
              title: i18n.t('forms.application.sitemap.skald-kurs.товар-на-складе.i-i-s-skald-kurs-товар-l.title'),
              icon: 'folder',
              children: null
            }, {
              link: 'i-i-s-skald-kurs-склад-l',
              caption: i18n.t('forms.application.sitemap.skald-kurs.товар-на-складе.i-i-s-skald-kurs-склад-l.caption'),
              title: i18n.t('forms.application.sitemap.skald-kurs.товар-на-складе.i-i-s-skald-kurs-склад-l.title'),
              icon: 'phone',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.skald-kurs.информация-о-заказе.caption'),
            title: i18n.t('forms.application.sitemap.skald-kurs.информация-о-заказе.title'),
            children: [{
              link: 'i-i-s-skald-kurs-накладная-l',
              caption: i18n.t('forms.application.sitemap.skald-kurs.информация-о-заказе.i-i-s-skald-kurs-накладная-l.caption'),
              title: i18n.t('forms.application.sitemap.skald-kurs.информация-о-заказе.i-i-s-skald-kurs-накладная-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-skald-kurs-заказ-l',
              caption: i18n.t('forms.application.sitemap.skald-kurs.информация-о-заказе.i-i-s-skald-kurs-заказ-l.caption'),
              title: i18n.t('forms.application.sitemap.skald-kurs.информация-о-заказе.i-i-s-skald-kurs-заказ-l.title'),
              icon: 'phone',
              children: null
            }, {
              link: 'i-i-s-skald-kurs-документ-l',
              caption: i18n.t('forms.application.sitemap.skald-kurs.информация-о-заказе.i-i-s-skald-kurs-документ-l.caption'),
              title: i18n.t('forms.application.sitemap.skald-kurs.информация-о-заказе.i-i-s-skald-kurs-документ-l.title'),
              icon: 'list',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})