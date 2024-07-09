import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, FormGroup, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { enqueueSnackbar } from 'notistack';
import CustomerBanner from '../components/user-banner';
import NotFound from '../components/not-found';



const PromotionChat: React.FC = () => {
    const customers = useSelector((state: RootState) => state.customers)
    const [message, setMessage] = useState('');
    const [selectedCustomers, setSelectedCustomers] = useState<number[]>([]);


    const handleCustomerSelection = (event: React.ChangeEvent<HTMLInputElement>, customerId: number) => {
        if (event.target.checked) {
            setSelectedCustomers([...selectedCustomers, customerId]);
        } else {
            setSelectedCustomers(selectedCustomers.filter(id => id !== customerId));
        }
    };

    const handleSendPromotion = () => {
        // window.alert(`Sending promotion to customers: ${selectedCustomers.join(', ')}`);
        enqueueSnackbar('Promotion sent successfully', { variant: 'success' });
        setMessage('');
        setSelectedCustomers([]);
        // This is where you would integrate backend functionality
    };

    return (
        <Box sx={{
            width: "100%",
            height: "100%",
        }}>
            <Card>
                <CardContent>
                    <Typography variant="h6">Send Promotion</Typography>
                    <TextField
                        fullWidth
                        label="Promotion Message"
                        multiline
                        rows={8}
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        variant="outlined"
                        margin="normal"
                    />
                    <Typography variant="subtitle1">Select Customers:</Typography>
                    <FormGroup sx={{
                        display: "grid",
                        gap: 1,
                    }}>
                        {
                            customers.length > 0 ? customers.map(customer => (
                                <CustomerBanner
                                    key={customer.id}
                                    customer={customer}
                                    checkbox
                                    handleCustomerSelection={handleCustomerSelection}
                                    selectedCustomers={selectedCustomers}
                                />
                            )) : (
                                <NotFound
                                    title="No customers found"
                                    width={200}
                                />
                            )
                        }
                    </FormGroup>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSendPromotion}
                        disabled={!message || selectedCustomers.length === 0}
                        sx={{
                            mt: 2
                        }}
                    >
                        Send Promotion
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default PromotionChat;
