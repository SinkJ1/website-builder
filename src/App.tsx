import React from 'react';
import { Provider } from 'react-redux';
import SimpleCanvasExample from './SimpleCanvasExample';
import BuildedPage from './BuildedPage'

interface Props {
  store: any
}

function App({ store }: Props) {


  return (
    <>
    <Provider store={store}>
        <SimpleCanvasExample/>
        <BuildedPage/>
    </Provider>
    </>
  );
}

export default App;
