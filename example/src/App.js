import React from 'react'

import {NxApiService} from 'axit-new-test-1'

const App = () => {
  return <div>
    <button onClick={() => {
      NxApiService.POST({
        url : 'login',
        data : {
          email : 'test@mail',
          password: '123'
        }
      }).then((val) => {
        console.log(val)
      });
    }} >POST</button>
    <button onClick={() => {
      NxApiService.CONFIG('prod')
    }}>
      Config
    </button>
  </div>
  
}

export default App
