import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DateReducer from './DateReducer';
import { Container, Table, Row, Col, } from 'react-bootstrap';


function RateList() {
  const [ratesList, setRatesList] = useState([]);

  useEffect(() => {
    getRates();
  }, []);

  const getRates = async () => {
    const res = await axios.get('https://api.exchangeratesapi.io/latest');
    const { rates } = res.data;

    const ratesTemp = [];
    for (const [symbol, rate] of Object.entries(rates)) {
      ratesTemp.push({ symbol, rate });
    }
    setRatesList(ratesTemp);
  };

  return (
    <Container fluid="xl">
      <Row>
        <Col>
    <Table
      stripped
      bordered
      hover
      variant="dark"
      style={{ maxWidth: '25%', marginLeft: '35rem'}}
    >
      <thead>
        <tr>
          <th colSpan="2">
            <h3>Legfrissebb: <DateReducer /></h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <td>
          <tr>
            {ratesList.map((d) => (
              <tr><h6>{d.symbol}</h6></tr>
            ))}
          </tr>
        </td>
        <td>
          <tr>
            {ratesList.map((d) => (
              <tr><h6>{d.rate}</h6></tr>
            ))}
          </tr>
        </td>
      </tbody>
    </Table>
    (wider)</Col>
    </Row>
    </Container>
  );
}

export default RateList;
