import { Provider } from "react-redux";
import store from "../src/Redux/store";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import GlobalStyleRender from "../styles/GlobalStyle/GlobalStyleRender";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyleRender />
      <Header />
      <Footer />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
