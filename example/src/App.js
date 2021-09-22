import React, { useEffect, useState } from 'react'

import {NxApiService, NxAuthService} from 'axit-new-test-1'
let baseUrl = process.env.react_app_baseurl;

const App = () => {
  
  const [data, setData] = useState({
    userName: '',
    password : "",
  })
  useEffect(() => {
    console.log(baseUrl)
    NxApiService.CONFIG('prod', baseUrl);
  },[])
  return <div>

    <input onChange={(e) => {
        setData({...data, userName: e.target.value})
    }} value={data.userName} />
    <input onChange={(e) => {
        setData({...data, password: e.target.value})
    }} value={data.password} />
    <button onClick={() => {
        NxAuthService.Login({data: data}).then((resp) => {
          console.log(resp)
        })
    }}>Login</button>

    <button onClick={() => {
      console.log('11111111')
      NxApiService.GET({
        url : 'Billing/Billing/ListAllBilling',
      }).then((val) => {
        console.log(val)
      });
    }} >GET</button>
  </div>
  
}

export default App
