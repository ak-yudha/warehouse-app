import React, { useEffect, useState } from 'react';
import { getStockReport } from '../services/api';

const StockReport = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const { data } = await getStockReport();
        setReport(data);
      } catch (error) {
        console.error('Gagal mendapatkan laporan stok:', error);
      }
    };
    fetchReport();
  }, []);

  return (
    <div>
      <h3>Laporan Stok</h3>
      <table>
        <thead>
          <tr>
            <th>Gudang</th>
            <th>Produk</th>
            <th>Qty Dus</th>
            <th>Qty Pcs</th>
          </tr>
        </thead>
        <tbody>
          {report.map((item, index) => (
            <tr key={index}>
              <td>{item.warehouse}</td>
              <td>{item.product}</td>
              <td>{item.qty_dus}</td>
              <td>{item.qty_pcs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockReport;