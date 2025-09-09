import React, { Suspense } from 'react';

const CounterOne = React.lazy(() => import('mfe1/CounterOne'));
const CounterTwo = React.lazy(() => import('mfe2/CounterTwo'));

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dasbor Host App (v1.5)</h1>
      <p>Halaman ini menggabungkan komponen dari MFE 1 dan MFE 2.</p>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <Suspense fallback={<div>Memuat MFE 1...</div>}>
          <CounterOne />
        </Suspense>
        <Suspense fallback={<div>Memuat MFE 2...</div>}>
          <CounterTwo />
        </Suspense>
      </div>
    </div>
  );
}

export default App;