import { createBrowserHistory } from 'history';

export default () => {
  const history = createBrowserHistory();

  history.listen(location => {
    const digitalData = window.digitalData;
    const _satellite = window._satellite;
    if (
      digitalData &&
      digitalData.page.attributes.currentPath !== location.href
    ) {
      digitalData.page.attributes.currentPath = location.href;
      digitalData.page.attributes.pageStep = null;
      digitalData.page.attributes.pageTab = null;
      try {
        _satellite.track('routerDOMContentLoaded');
      } catch (e) {}
    }
  });

  return history;
};
