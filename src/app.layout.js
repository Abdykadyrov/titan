import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

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
            <Component {...this.props} />
            <Footer />
          </div>
        );
      }
    }
  );
};

export default appLayout;
