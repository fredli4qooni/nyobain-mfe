import { useState } from 'react';

const CounterOne = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: '15px', border: '2px solid purple', borderRadius: '5px' }}>
      <h3>Penghitung dari MFE 1 (v1.5)</h3>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Tambah +1</button>
    </div>
  );
};

export default CounterOne;