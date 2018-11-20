import React from 'react';
import Header from '../components/header/index';
import Footer from '../components/footer/index';

const mainLayout = Component => {
  return (
    class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
      }

      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }

      handleScroll = () => {
        const toTop = document.getElementById('toTop');
        if (toTop) {
          if (window.pageYOffset > (window.outerHeight / 2))
            toTop.style.opacity = '1';
          else
            toTop.style.opacity = '0';
        }
      };

      render() {
        return (
          <div>
            <Header />
            <div className="content">
              <Component {...this.props} />
            </div>
            <a href="#" data-uk-totop data-uk-scroll data-uk-icon="chevron-up" id="toTop"></a>
            <Footer />
          </div>
        );
      }
    }
  );
};

export default mainLayout;
