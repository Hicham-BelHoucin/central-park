import { Avatar, Box, Checkbox } from "@mui/material";
import { Typography } from "@mui/material";
import Customer from "../interfaces/customer";
import StarIcon from "@mui/icons-material/Star";
import { calculateTotalPoints, filterPointsByDate } from "../tools/helper";


interface CustomerBannerProps {
    customer: Customer;
    checkbox?: boolean;
    handleCustomerSelection?: (
        event: React.ChangeEvent<HTMLInputElement>,
        customerId: number
    ) => void;
    selectedCustomers?: number[];
}

const CustomerBanner = ({
    customer,
    checkbox = false,
    handleCustomerSelection = () => { },
    selectedCustomers = [],
}: CustomerBannerProps) => {
    return (
        <Box
            data-testid={`user-banner-${customer.id}`}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                width: "100%",
                p: {
                    xs: 1,
                    md: 2,
                },
                border: "1px solid #ccc",
                borderRadius: "10px",
                backgroundColor: "white",
                overflow: "auto",
            }
            }
        >
            {
                checkbox && (
                    <Checkbox
                        checked={selectedCustomers.includes(customer.id)}
                        onChange={(event) => handleCustomerSelection(event, customer.id)}
                        inputProps={{ "aria-label": "select customer" }}
                    />
                )
            }
            <Avatar src={``} />
            <Box>
                <Typography variant="h6">{`${customer.name.firstname} ${customer.name.lastname}`}</Typography>
                <Typography variant="body1">{customer.email}</Typography>
            </Box>
            <Box
                sx={{
                    display: {
                        xs: checkbox ? "none" : "flex",
                        sm: "flex",
                    },
                    alignItems: "center",
                    gap: 1,
                    ml: "auto",
                }}
            >
                <Typography variant="body1">
                    {calculateTotalPoints(filterPointsByDate(customer.pointsEarned, 1))}
                </Typography>
                <StarIcon color="secondary" />
            </Box>
        </Box >
    );
};

export default CustomerBanner;
