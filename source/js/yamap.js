ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938631, 30.323055],
          zoom: 18
      }, {
          searchControlProvider: 'yandex#search'
      })

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Mishka',
          balloonContent: 'г. Санкт-Петербург, ул. Большая Конюшенная, д. 198, офис 101'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/icon-map-pin.svg',
          // Размеры метки.
          iconImageSize: [66, 100],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-20, -120]
      })

  myMap.geoObjects
      .add(myPlacemark);
});
