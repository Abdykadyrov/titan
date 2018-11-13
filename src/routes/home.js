import React, {Component} from 'react';
import appLayout from '../app.layout';
import img1 from "../resources/images/full_3NJthATQ.webp";
import img2 from "../resources/images/full_tY77yfwb.webp";

class Home extends Component {
  render() {
    return (
      <div>

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
    );
  }
}

export default appLayout(Home);