import React, { useState, useEffect }  from 'react'
import TableScreen from './app/Screens/TableScreen';
import LoadingScreen from './app/Screens/LoadingScreen';

const App  = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? <LoadingScreen /> : <TableScreen />;
};

export default App;
