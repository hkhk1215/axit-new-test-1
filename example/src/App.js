import React from 'react'

import { ExampleComponent } from 'axit-new-test-1'

const App = () => {
  return <button onClick={() => {
    ExampleComponent().then((val) => {
      console.log(val)
    });
  }} >Hi</button>
}

export default App
