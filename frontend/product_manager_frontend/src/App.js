import React, { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import axios from 'axios';
import AddItem from './components/AddItem';

function App() {

  const [datas, setDatas] = useState([])

  useEffect(() => {
    axios.get('/getData01').then(response => {
      setDatas(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <React.Fragment>
      <Header />
      <AddItem />
      <div className="container">
        <div className="row">
          {
            datas.map((data, index) => {
              return (
                <Content
                  key={data.id}
                  data={data}
                />
              )
            })
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
