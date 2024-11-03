import React, { useState } from 'react';
import { createPenerimaan } from '../services/api';

const PenerimaanForm = () => {
  const [form, setForm] = useState({
    TrxInNo: '',
    WhsIdf: 1,
    TrxInDate: '',
    TrxInSuppIdf: 1,
    details: [
      { TrxInDProductIdf: 1, TrxInDQtyDus: 0, TrxInDQtyPcs: 0 },
    ],
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPenerimaan(form);
      alert('Penerimaan barang berhasil dicatat');
      setForm({ ...form, TrxInNo: '', TrxInDate: '' });
    } catch (error) {
      console.error('Gagal mencatat penerimaan barang:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Form Penerimaan Barang</h3>
      <input name="TrxInNo" placeholder="No. Penerimaan" value={form.TrxInNo} onChange={handleChange} required />
      <input type="date" name="TrxInDate" value={form.TrxInDate} onChange={handleChange} required />
      <button type="submit">Simpan</button>
    </form>
  );
};

export default PenerimaanForm;