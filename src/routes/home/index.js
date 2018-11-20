import React, {Component} from 'react';
import mainLayout from '../../layouts/main.layout';
import  './style.css';
import kettle from '../../resources/images/kettle2.svg';
import file from '../../resources/Прайс на 26 июня 2018 новый - ТОО ТеплоСтройАгромаш Комплект (солома).xls';
import Form from '../../components/form';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      benefit: 0
    }
  }

  componentDidMount() {
    this.setBenefit();
  }

  setBenefit = () => {
    const x = setInterval(()=> {
      this.setState(prevState => ({
        benefit: prevState.benefit + 1
      }));
      if (this.state.benefit === 40) {
        clearInterval(x);
      }
    }, 50);
  };

  render() {
    return (
      <div className="home">
        <section id="head" className="headSection">
          <div className="uk-container uk-flex">
            <div className="headSection__text uk-width-1-2@m">
              <h1 className="headSection__title">ТОО «ТСК Титан»</h1>
              <h2 className="headSection__subtitle">Экономически выгодно приобретать котлы у отечественного производителя, стоимость наших котлов до <span style={{'fontSize': 40+'px', 'lineHeight': 30+'px'}}>{this.state.benefit}%</span> ниже зарубежной продукции.</h2>
            </div>
            <div className="headSection__image uk-width-1-2@m">
              <img src={kettle} alt="" data-uk-parallax="target: #test-easing; y: 50; easing: 1"/>
            </div>
          </div>
        </section>

        <section className="infoSection" id="services">
          <div className="uk-container">
            <h1>Производим и реализуем:</h1>
            <ul className="infoSection__list">
              <li>Котлы на твердом, жидком, газообразном топливе мощностью до 30 Гкал/час (отапливаемый объем до 900 000 кубометров)</li>
              <li>Блочно-модульные котельные</li>
              <li>Экономайзеры</li>
              <li>Циклоны для газоочистки</li>
              <li>Теплообменники</li>
              <li>Бытовые печи</li>
              <li>и т. д.</li>
            </ul>
          </div>
        </section>

        <section className="priceSection" id="price">
          <div className="uk-container">
            <h1 className="priceSection__title">Прайс на июнь 2018</h1>
            <h3 className="priceSection__subtitle">До 15% гарантируем бартер: пшеница, мука, мясо, масло, сыр и другое</h3>
            <div className="uk-text-center">
              <a className="buttons__download" href={file} download={true}>СКАЧАТЬ</a>
            </div>
          </div>
        </section>

        <section className="formSection" id="form">
          <div className="uk-container">
            <Form/>
          </div>
        </section>
      </div>
    );
  }
}

export default mainLayout(Index);