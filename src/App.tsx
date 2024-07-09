import React from 'react';
import Layout from './components/layout';
import createData from './tools/create_data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import PromotionChat from './pages/chat';
import { useDispatch } from 'react-redux';
import { customersReceived } from './features/customers/customerSlice';
import { Box, CircularProgress } from '@mui/material';
import './App.css';

function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
}

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const data = await createData();
        if (data && data.length > 0) {
          dispatch(customersReceived(data));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })()
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        {loading ? <Loading /> : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/text-promotions" element={<PromotionChat />} />
          </Routes>
        )}
      </Layout>
    </Router>
  );
}

export default App;
