import { useState } from 'react';

const CounterTwo = () => {
  const [count, setCount] = useState(100);
  return (
    <div style={{ padding: '15px', border: '2px solid teal', borderRadius: '5px' }}>
      <h3>Penghitung dari MFE 2 (v1.5)</h3>
      <h2>{count}</h2>
      <button onClick={() => setCount(c => c + 5)}>Tambah +5</button>
    </div>
  );
};

export default CounterTwo;