import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Customer from "../interfaces/customer";
import Title from "../components/title";
import CustomerBanner from "../components/user-banner";
import Points from "../components/points";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import NotFound from "../components/not-found";
import { calculatePercentage, calculateTotalPoints, filterPointsByDate } from "../tools/helper";

const CustomersList = ({ customers }: { customers: Customer[] }) => {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "space-between",
                width: "100%",
                padding: {
                    xs: 1,
                    md: 2,
                },
                boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.5)",
                borderRadius: "10px",
                backgroundColor: "#fff",
            }}
        >
            <Title>Customer Points Earned Today</Title>
            <Box sx={{
                display: "grid",
                gap: 2,
                maxHeight: "500px",
                overflowY: "auto",
            }}>
                {customers.length > 0 ? (
                    customers.map((user: Customer, index: number) => (
                        <CustomerBanner key={user.id} customer={user} />
                    ))
                ) : (
                    <NotFound title="No customers found" width={200} />
                )}
            </Box>
        </Box>
    );
};



function PointBanners({
    title,
    customers,
    name,
}: {
    title: string;
    customers: Customer[];
    name: "pointsEarned" | "pointsRedeemed";
}) {
    const [pointsToday, setPointsToday] = useState(0);
    const [pointsLast7Days, setPointsLast7Days] = useState(0);
    const [pointsLast30Days, setPointsLast30Days] = useState(0);

    useEffect(() => {
        if (customers) {
            const transactionsToday = customers.map((customer) =>
                filterPointsByDate(customer[name], 1)
            );
            const transactionsLast7Days = customers.map((customer) =>
                filterPointsByDate(customer[name], 7)
            );
            const transactionsLast30Days = customers.map((customer) =>
                filterPointsByDate(customer[name], 30)
            );

            setPointsToday(
                transactionsToday.reduce((acc, points) => acc + calculateTotalPoints(points), 0)
            );

            setPointsLast7Days(
                transactionsLast7Days.reduce(
                    (acc, points) => acc + calculateTotalPoints(points),
                    0
                )
            );

            setPointsLast30Days(
                transactionsLast30Days.reduce(
                    (acc, points) => acc + calculateTotalPoints(points),
                    0
                )
            );
        }
    }, [customers, name]);

    return (
        <Box
            sx={{
                display: "flex",
                gap: 4,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "space-between",
                width: "100%",
                padding: {
                    xs: 1,
                    md: 2,
                },
                boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.5)",
                borderRadius: "10px",
                backgroundColor: "#fff",
            }}
        >
            <Title>{title}</Title>
            <Grid
                container
                spacing={2}
                gap={4}
                sx={{
                    placeItems: "center",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                <Grid item xs={12} sm={4} lg={3.5}>
                    <Points
                        count={pointsToday}
                        percent={calculatePercentage(pointsToday, pointsLast7Days)}
                        title={`Customers' Points ${name.includes("Earned") ? "Earned" : "Redeemed"
                            } Today`}
                    />
                </Grid>
                <Grid item xs={12} sm={4} lg={3.5}>
                    <Points
                        count={pointsLast7Days}
                        percent={calculatePercentage(pointsLast7Days, pointsLast30Days)}
                        title={`Points ${name.includes("Earned") ? "Earned" : "Redeemed"
                            } in the Last 7 Days`}
                    />
                </Grid>
                <Grid item xs={12} sm={4} lg={3.5}>
                    <Points
                        count={pointsLast30Days}
                        percent={0}
                        title={`Points ${name.includes("Earned") ? "Earned" : "Redeemed"
                            } in the Last 30 Days`}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

function Home() {
    const customers = useSelector((state: RootState) => state.customers);

    return (
        <Box
            sx={{
                width: "100%",
                display: "grid",
                gap: 2,
            }}
        >
            <PointBanners
                title="Total Points Earned"
                customers={customers}
                name="pointsEarned"
            />
            <PointBanners
                title="Points Redeemed"
                customers={customers}
                name="pointsRedeemed"
            />
            <CustomersList customers={customers} />
        </Box>
    );
}

export default Home;
