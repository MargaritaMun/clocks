'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clocks', [
      {
        name: 'Rolex',
        image:
          'https://gmt-club.ru/upload/iblock/15a/15a241a951ef1c9589e47d344a37dcec.jpg',
        description:
          'Позолоченный браслет Rolex Oyster, с двойной раскладывающейся застёжкой Oysterlock и удлиняющим звеном. Серийный номер и маркировка Rolex на конечных звеньях браслета.',
      },
      {
        name: 'Patek Philippe',
        image: 'https://content.rolex.com/dam/2022/asset/patek-philippe-5320g-001.jpg',
        description:
          'Корпус из белого золота, эмалированный циферблат кремового оттенка и ремешок из аллигатора. Сложный календарь и лунные фазы с фирменной гравировкой.',
      },
      {
        name: 'Audemars Piguet',
        image:
          'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/Royal-Oak.jpg',
        description:
          'Корпус из розового золота 18 карат с культовым восьмиугольным безелем. Браслет интегрирован в корпус, украшен сатинированием и полировкой.',
      },
      {
        name: 'Vacheron Constantin',
        image: 'https://www.vacheron-constantin.com/dam/vc/medias/overview/overseas.jpg',
        description:
          'Элегантный корпус из стали, синие стрелки и индексы, а также прозрачная задняя крышка, открывающая автоматический механизм.',
      },
      {
        name: 'Omega',
        image:
          'https://www.omegawatches.com/media/catalog/product/cache/omega_image/uploads/product/image/1234/omega-seamaster.jpg',
        description:
          'Корпус из нержавеющей стали с гелиевым клапаном и керамическим безелем. Глубокая гравировка логотипа на заводной головке.',
      },
      {
        name: 'Breguet',
        image:
          'https://www.breguet.com/sites/default/files/styles/watch_zoom/public/watch_images/7737BB.jpg',
        description:
          'Тонкий корпус из платины с гильошированным циферблатом. Ультратонкий механизм с запасом хода 80 часов.',
      },
      {
        name: 'IWC Schaffhausen',
        image: 'https://www.iwc.com/content/dam/iwc/collection/iw503302.png',
        description:
          'Стальной корпус с сапфировым стеклом, антирефлексное покрытие с обеих сторон и ремень из кожи аллигатора.',
      },
      {
        name: 'Cartier',
        image: 'https://www.cartier.com/content/images/timepieces/cartier-tank.jpg',
        description:
          'Прямоугольный корпус с золотым безелем, синяя стрелка в форме меча и фирменная гравировка Cartier.',
      },
      {
        name: 'Jaeger-LeCoultre',
        image: 'https://www.jaeger-lecoultre.com/content/images/reverso.jpg',
        description:
          'Двойной корпус Reverso из розового золота, поворотный механизм и циферблат с гильоше.',
      },
      {
        name: 'Hublot',
        image:
          'https://www.hublot.com/sites/default/files/styles/watch_zoom/public/hublot-big-bang.jpg',
        description:
          'Корпус из керамики, интегрированный каучуковый ремешок и фирменные винты Hublot на безеле.',
      },
      {
        name: 'Panerai',
        image: 'https://www.panerai.com/content/dam/rcq/pan/2021/homepage/luminor.jpg',
        description:
          'Брутальный корпус с защитой заводной головки, люминесцентные стрелки и ремень из телячьей кожи.',
      },
      {
        name: 'Blancpain',
        image:
          'https://www.blancpain.com/sites/default/files/styles/watch_zoom/public/fifty-fathoms.jpg',
        description:
          'Профессиональный дайверский корпус с сапфировым безелем и автоподзаводом, водонепроницаемость до 300 м.',
      },
      {
        name: 'Tag Heuer',
        image:
          'https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dwabcdefg.jpg',
        description:
          'Хронограф Carrera с корпусом из стали и безелем из карбида титана, спортивный браслет с полировкой.',
      },
      {
        name: 'Breitling',
        image: 'https://www.breitling.com/media/image/1234/breitling-navitimer.jpg',
        description:
          'Пилотский хронограф с вращающимся безелем и тахиметрической шкалой, браслет из нержавеющей стали.',
      },
      {
        name: 'Glashütte Original',
        image:
          'https://www.glashuette-original.com/sites/default/files/2020-05/senator.jpg',
        description:
          'Корпус из красного золота с ручной отделкой механизма и циферблатом из серебра.',
      },
      {
        name: 'Richard Mille',
        image:
          'https://www.richardmille.com/sites/default/files/styles/watch_zoom/public/rm-011.jpg',
        description:
          'Скелетонизированный корпус из титана с видимыми мостами механизма и эргономичной формой.',
      },
      {
        name: 'Longines',
        image:
          'https://www.longines.com/media/catalog/product/cache/longines_image/longines-master.jpg',
        description:
          'Классический корпус из стали с голубыми стрелками и ремнем из кожи аллигатора.',
      },
      {
        name: 'Zenith',
        image:
          'https://www.zenith-watches.com/media/catalog/product/cache/zenith_image/el-primero.jpg',
        description:
          'Легендарный хронограф El Primero с открытым балансом и корпусом из стали.',
      },
      {
        name: 'Ulysse Nardin',
        image:
          'https://www.ulysse-nardin.com/sites/default/files/styles/watch_zoom/public/marine-chronometer.jpg',
        description:
          'Морской хронометр с эмалевым циферблатом и корпусом из розового золота.',
      },
      {
        name: 'Chopard',
        image:
          'https://www.chopard.com/media/catalog/product/cache/chopard_image/luc.jpg',
        description: 'Корпус L.U.C из белого золота, микроротор и сертификация COSC.',
      },
      {
        name: 'Montblanc',
        image: 'https://www.montblanc.com/content/dam/mtb/timepieces/heritage.jpg',
        description:
          'Классический корпус с куполообразным стеклом и ремешком из телячьей кожи, украшенным фирменным логотипом.',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clocks', null, {});
  },
};
