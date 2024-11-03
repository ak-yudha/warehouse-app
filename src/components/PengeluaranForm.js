import React, { useState } from 'react';
import { createPengeluaran } from '../services/api';

const PengeluaranForm = () => {
  const [form, setForm] = useState({
    TrxOutNo: '',
    WhsIdf: 1,
    TrxOutDate: '',
    TrxOutSuppIdf: 1,
    details: [
      { TrxOutDProductIdf: 1, TrxOutDQtyDus: 0, TrxOutDQtyPcs: 0 },
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
      await createPengeluaran(form);
      alert('Pengeluaran barang berhasil dicatat');
      setForm({ ...form, TrxOutNo: '', TrxOutDate: '' });
    } catch (error) {
      console.error('Gagal mencatat pengeluaran barang:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Form Pengeluaran Barang</h3>
      <input name="TrxOutNo" placeholder="No. Pengeluaran" value={form.TrxOutNo} onChange={handleChange} required />
      <input type="date" name="TrxOutDate" value={form.TrxOutDate} onChange={handleChange} required />
      <button type="submit">Simpan</button>
    </form>
  );
};

export default PengeluaranForm;