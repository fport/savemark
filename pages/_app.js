import '../styles/globals.css'
import { wrapper, store } from "../redux/store";
import { Provider } from "react-redux";
import ErrorBoundary from '@c/error-boundary'
import ErrorFallback from '@c/error-boundary/error'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);