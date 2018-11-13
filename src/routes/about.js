import React, {Component} from 'react';
import appLayout from '../app.layout';

class About extends Component {

  componentDidMount(){
    this.loadMap();
  }

  loadMap = () => {
    const script = document.createElement("script");
    script.src="https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = async() => {
      try {
        window.ymaps.ready(() => {
          const map = new window.ymaps.Map('map', {
            center: [53.211034, 63.577932],
            zoom: 15,
            controls: ['zoomControl']
          }, {
            searchControlProvider: 'yandex#search'
          });

          const myPlacemark = new window.ymaps.Placemark(
            [53.211034, 63.577932],
            {hintContent: 'ТЭК Титан'},
            {preset: 'islands#icon', iconColor: '#0095b6'},
          );
          map.geoObjects.add(myPlacemark);
        });
      } catch (err) {
        console.log('Карта не может загрузиться, так как скрипт блокируется. Возможно вам стоит открыть данную страницу не в режиме инкогнито');
      }
    }
  };

  render() {
    return (
      <div>
        <article className="uk-article">
          <div className="uk-flex">
            <div className="uk-width-1-2@l">
              <h1 className="uk-article-title">О компании</h1>
              <p>
                ТОО "ТСК ТИТАН" является одним из ведущих производителей блочно - модульных котельных в Казахстане.
                Более 20 лет ТОО ТСК ТИТАН занимается разработкой котлов и производством вспомогательного котельного оборудования. Несколько лет назад на базе компании организовалось новое структурное подразделение по изготовлению блочно - модульных котельных.
                Производственная площадь ТОО "ТСК Титан" составляет 6200 кв.м
                С каждым годом увеличивая объем производственных площадей, расширяя выпуск продукции для теплоэнергетической отрасли, - это и новые рабочие места, и социальная защита, и благополучие трудящихся.
              </p>
            </div>
            <div className="uk-width-1-2@l">
              <div id="map" style={{width: 100+'%', height: 30+'em'}}></div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default appLayout(About);
