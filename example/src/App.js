import React, { useEffect, useState } from 'react'

import {NxApiService, NxAuthService} from 'axit-new-test-1'
let baseUrl = process.env.react_app_baseurl;
let platform = process.env.react_app_site;
const App = () => {
  
  const [data, setData] = useState({
    userName: '',
    password : "",
  })
  useEffect(() => {
    console.log(baseUrl)
    console.log(platform)
    NxApiService.CONFIG('prod', baseUrl, platform);
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
      NxApiService.DELETE({
        url : 'Platform/City/GetAllCities',
        data: {}
      })
    }}>User Info</button>

    <button onClick={() => {
      console.log('11111111')
      NxApiService.GET({
        url : 'Platform/City/GetAllCities',
      }).then((val) => {
        console.log(val)
      });
    }} >GET</button>
  </div>
  
}

export default App
