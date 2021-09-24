import React, { useState, useEffect }  from 'react';
import TableScreen from './Screens/TableScreen';
import LoadingScreen from './Screens/LoadingScreen';
import {Provider as AppContext} from './context';

const App  = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <AppContext>
      {loading ? <LoadingScreen /> : <TableScreen />}
    </AppContext>
  )
};

export default App;
