import React from 'react';
import Header from '../components/header/index';
import Footer from '../components/footer/index';

const appLayout = Component => {
  return (
    class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
      }

      render() {
        return (
          <div>
            <Header />
            <div className="content uk-container">
              <Component {...this.props} />
            </div>
            <Footer />
          </div>
        );
      }
    }
  );
};

export default appLayout;
