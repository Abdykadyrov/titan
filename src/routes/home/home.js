import React, {Component} from 'react';
import mainLayout from '../../layouts/main.layout';
import  './style.css';
import kettle from '../../resources/images/kettle2.svg';
import img1 from "../../resources/images/full_3NJthATQ.webp";
import img2 from "../../resources/images/full_tY77yfwb.webp";

class Home extends Component {
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
    }, 10);
  };

  render() {
    return (
      <div className="home">
        <section id="head">
          <div className="headSection">
            <div className="uk-container uk-flex">
              <div className="headSection__text uk-width-1-2@m">
                <h1 className="headSection__title">ТОО «ТСК Титан»</h1>
                <h2 className="headSection__subtitle">Экономически выгодно приобретать котлы у отечественного производителя, стоимость наших котлов до <span style={{'fontSize': 40+'px', 'lineHeight': 30+'px'}}>{this.state.benefit}%</span> ниже зарубежной продукции.</h2>
              </div>
              <div className="headSection__image uk-width-1-2@m">
                <img src={kettle} alt="" data-uk-parallax="target: #test-easing; y: 50; easing: 1"/>
              </div>
            </div>
          </div>
        </section>

        <section className="infoSection">
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

        <section className="sliderSection">
          <div className="uk-container">
            <div className="uk-position-relative uk-visible-toggle uk-light"
                 data-uk-slider="clsActivated: uk-transition-active; center: true">

              <ul className="uk-slider-items uk-grid">
                <li className="uk-width-3-4">
                  <div className="uk-panel">
                    <img src={img1} alt="" />
                    <div
                      className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                      <h3 className="uk-margin-remove">Bottom</h3>
                      <p className="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </li>
                <li className="uk-width-3-4">
                  <div className="uk-panel">
                    <img src={img2} alt="" />
                    <div
                      className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                      <h3 className="uk-margin-remove">Bottom</h3>
                      <p className="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </li>
                <li className="uk-width-3-4">
                  <div className="uk-panel">
                    <img src={img2} alt="" />
                    <div
                      className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                      <h3 className="uk-margin-remove">Bottom</h3>
                      <p className="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </li>
                <li className="uk-width-3-4">
                  <div className="uk-panel">
                    <img src={img1} alt="" />
                    <div
                      className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                      <h3 className="uk-margin-remove">Bottom</h3>
                      <p className="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </li>
                <li className="uk-width-3-4">
                  <div className="uk-panel">
                    <img src={img2} alt="" />
                    <div
                      className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                      <h3 className="uk-margin-remove">Bottom</h3>
                      <p className="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </li>
              </ul>

              <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous=""
                 data-uk-slider-item="previous"></a>
              <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next=""
                 data-uk-slider-item="next"></a>

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default mainLayout(Home);