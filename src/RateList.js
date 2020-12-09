import React, { useState, useEffect } from 'react';
import axios from 'axios'
import DateReducer from './DateReducer';
import {Table} from 'react-bootstrap'

function RateList() {
  const [ratesList, setRatesList] = useState([])
  
  useEffect(() => {
    getRates();
  }, [])

  const getRates= async() =>{
    const res= await axios.get('https://api.exchangeratesapi.io/latest');
    const {rates}=res.data;

    const ratesTemp=[];
    for (const [symbol, rate] of Object.entries(rates)) {
      ratesTemp.push({symbol,rate})
    }
    setRatesList(ratesTemp);
  }


  return (
    <div className="RateList">  
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th colSpan="2">Legfrissebb: <DateReducer /></th>
          </tr>
        </thead>
        <tbody>
          <td>
            <tr>
          {ratesList.map((d)=>
            <tr>{d.symbol}</tr>
          )}
            </tr>
          </td>
          <td>
            <tr>
          {ratesList.map((d)=>
            <tr>{d.rate}</tr>
          )}
            </tr>
          </td>
        </tbody>
        

      </Table>

      
    </div>
      
    );
}

export default RateList