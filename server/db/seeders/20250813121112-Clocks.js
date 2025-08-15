'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clocks', [
      {
        name: 'Rolex',
        image:
          'https://spbluxwatches.ru/upload/resize_cache/iblock/fb0/465_700_12b64a3dc42b8868349dda077f089e4ff/fb00ae205dcabf2c88bebbc81f05553a.jpg',
        description:
          'Позолоченный браслет Rolex Oyster, с двойной раскладывающейся застёжкой Oysterlock и удлиняющим звеном. Серийный номер и маркировка Rolex на конечных звеньях браслета.',
          adminId:1
      },
      {
        name: 'Patek Philippe',
        image: 'https://spbluxwatches.ru/upload/resize_cache/iblock/3b1/648_1124_12b64a3dc42b8868349dda077f089e4ff/3b12fbe882a0aae669c19bdb9076d026.jpg',
        description:
          'Корпус из белого золота, эмалированный циферблат кремового оттенка и ремешок из аллигатора. Сложный календарь и лунные фазы с фирменной гравировкой.',
           adminId:1
      },
      {
        name: 'Audemars Piguet',
        image:
          'https://spbluxwatches.ru/upload/resize_cache/iblock/80e/465_700_12b64a3dc42b8868349dda077f089e4ff/80e611db9c0dbc6ece58c014dae009da.png',
        description:
          'Корпус из розового золота 18 карат с культовым восьмиугольным безелем. Браслет интегрирован в корпус, украшен сатинированием и полировкой.',
           adminId:1
      },
      {
        name: 'Vacheron Constantin',
        image: 'https://spbluxwatches.ru/upload/resize_cache/iblock/c4f/465_700_12b64a3dc42b8868349dda077f089e4ff/c4fb99d5efc180caf25b50c923a32a5d.jpg',
        description:
          'Элегантный корпус из стали, синие стрелки и индексы, а также прозрачная задняя крышка, открывающая автоматический механизм.',
           adminId:1
      },
      {
        name: 'Omega',
        image:
          'https://spbluxwatches.ru/upload/resize_cache/iblock/8ea/465_700_12b64a3dc42b8868349dda077f089e4ff/8eacdd0af99569f78e1e298693a47745.jpg',
        description:
          'Корпус из нержавеющей стали с гелиевым клапаном и керамическим безелем. Глубокая гравировка логотипа на заводной головке.',
           adminId:1
      },
      {
        name: 'Breguet',
        image:
          'https://spbluxwatches.ru/upload/resize_cache/iblock/43c/465_700_12b64a3dc42b8868349dda077f089e4ff/43cbd77f9751ffd8c6e859591bc2e262.png',
        description:
          'Тонкий корпус из платины с гильошированным циферблатом. Ультратонкий механизм с запасом хода 80 часов.',
           adminId:1
      },
      {
        name: 'IWC Schaffhausen',
        image: 'https://spbluxwatches.ru/upload/resize_cache/iblock/ebc/465_699_12b64a3dc42b8868349dda077f089e4ff/ebc702b106613c40f3e962cda9b2452a.png',
        description:
          'Стальной корпус с сапфировым стеклом, антирефлексное покрытие с обеих сторон и ремень из кожи аллигатора.',
           adminId:1
      },
      {
        name: 'Cartier',
        image: 'https://spbluxwatches.ru/upload/resize_cache/iblock/258/465_700_12b64a3dc42b8868349dda077f089e4ff/258f2b3649ba92530da77c52210dc3a6.jpg',
        description:
          'Прямоугольный корпус с золотым безелем, синяя стрелка в форме меча и фирменная гравировка Cartier.',
           adminId:1
      },
      {
        name: 'Jaeger-LeCoultre',
        image: 'https://spbluxwatches.ru/upload/resize_cache/iblock/38f/465_700_12b64a3dc42b8868349dda077f089e4ff/38f5cf4200c4a0c7ff61d1291402b27a.jpg',
        description:
          'Двойной корпус Reverso из розового золота, поворотный механизм и циферблат с гильоше.',
           adminId:1
      },
      {
        name: 'Hublot',
        image:
          'https://spbluxwatches.ru/upload/resize_cache/iblock/7b0/465_700_12b64a3dc42b8868349dda077f089e4ff/7b03dbc183cddad78f510dd95d23c3a3.jpg',
        description:
          'Корпус из керамики, интегрированный каучуковый ремешок и фирменные винты Hublot на безеле.',
           adminId:1
      },
      {
        name: 'Panerai',
        image: 'https://spbluxwatches.ru/upload/resize_cache/iblock/fc8/465_700_12b64a3dc42b8868349dda077f089e4ff/fc8b848d980b7d549e5e5657632fd725.jpg',
        description:
          'Брутальный корпус с защитой заводной головки, люминесцентные стрелки и ремень из телячьей кожи.',
           adminId:1
      },
      {
        name: 'Blancpain',
        image:
          'https://spbluxwatches.ru/upload/resize_cache/iblock/a11/465_700_12b64a3dc42b8868349dda077f089e4ff/a11ce30ab9ec0cc1892ecabdabff61a4.png',
        description:
          'Профессиональный дайверский корпус с сапфировым безелем и автоподзаводом, водонепроницаемость до 300 м.',
           adminId:1
      },
      {
        name: 'Tag Heuer',
        image:
          'https://spbluxwatches.ru/upload/resize_cache/iblock/cd4/465_700_12b64a3dc42b8868349dda077f089e4ff/cd47b4912b9aa19d67c5b484adf62c3b.jpg',
        description:
          'Хронограф Carrera с корпусом из стали и безелем из карбида титана, спортивный браслет с полировкой.',
           adminId:1
      },
      {
        name: 'Breitling',
        image: 'https://spbluxwatches.ru/upload/resize_cache/iblock/76b/465_700_12b64a3dc42b8868349dda077f089e4ff/76bff36d5d338a44e1b27133d48166be.png',
        description:
          'Пилотский хронограф с вращающимся безелем и тахиметрической шкалой, браслет из нержавеющей стали.',
           adminId:1
      },
      {
        name: 'Glashütte Original',
        image:
          'https://spbluxwatches.ru/upload/resize_cache/iblock/40e/465_700_12b64a3dc42b8868349dda077f089e4ff/40e6e9eb0b1f71a9d1a4c6b202b93ab7.png',
        description:
          'Корпус из красного золота с ручной отделкой механизма и циферблатом из серебра.',
           adminId:1
      },
      {
        name: 'Richard Mille',
        image:
          'https://spbluxwatches.ru/upload/resize_cache/iblock/5b4/465_700_12b64a3dc42b8868349dda077f089e4ff/5b4e80c1ce8681a141498d94eaf819f7.png',
        description:
          'Скелетонизированный корпус из титана с видимыми мостами механизма и эргономичной формой.',
           adminId:1
      },
      {
        name: 'Longines',
        image:
          'https://spbluxwatches.ru/upload/resize_cache/iblock/56c/465_700_12b64a3dc42b8868349dda077f089e4ff/56c1bff88a7f016f1ce4d03741ac30b2.jpg',
        description:
          'Классический корпус из стали с голубыми стрелками и ремнем из кожи аллигатора.',
           adminId:1
      },
      {
        name: 'Zenith',
        image:
          'https://spbluxwatches.ru/upload/resize_cache/iblock/44b/465_700_12b64a3dc42b8868349dda077f089e4ff/44bef346ac063d1467bd097b1a4b01be.png',
        description:
          'Легендарный хронограф El Primero с открытым балансом и корпусом из стали.',
           adminId:1
      },
      {
        name: 'Ulysse Nardin',
        image:
          'https://spbluxwatches.ru/upload/resize_cache/iblock/cb6/465_700_12b64a3dc42b8868349dda077f089e4ff/cb6b0d675f47c153a962e0580fd1e545.jpg',
        description:
          'Морской хронометр с эмалевым циферблатом и корпусом из розового золота.',
           adminId:1
      },
      {
        name: 'Chopard',
        image:
          'https://spbluxwatches.ru/upload/resize_cache/iblock/4fd/465_700_12b64a3dc42b8868349dda077f089e4ff/4fd137c5083e87a7eb6094bb4d4c2ebd.jpg',
        description: 'Корпус L.U.C из белого золота, микроротор и сертификация COSC.',
         adminId:1
      },
      {
        name: 'Montblanc',
        image: 'https://spbluxwatches.ru/upload/resize_cache/iblock/8e2/465_700_12b64a3dc42b8868349dda077f089e4ff/8e297a1c5796e753726cc0e5e6be5fd2.png',
        description:
          'Классический корпус с куполообразным стеклом и ремешком из телячьей кожи, украшенным фирменным логотипом.',
           adminId:1
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clocks', null, {});
  },
};
