import { Box } from "@mui/material";
import { Typography, Card, LinearProgress } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";



function Points({ count, percent, title }: any) {
    return (
        <Card sx={{ maxWidth: 500, p: 1 }}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    width: "100%",
                }}
            >
                {percent > 0 ? (
                    <NorthIcon
                        color="success"
                        sx={{
                            mb: 1,
                        }}
                    />
                ) : (
                    <SouthIcon
                        color="error"
                        sx={{
                            mb: 1,
                        }}
                    />
                )}
                <Typography variant="h6" gutterBottom>
                    {count}
                </Typography>
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                        ml: "auto",
                    }}
                >
                    {isNaN(percent) ? 0 : percent}%
                </Typography>
            </Box>
            <LinearProgress
                variant="determinate"
                // add aria value text
                aria-label={`${percent}%`}
                color={percent > 0 ? "success" : "error"}
                value={percent}
                valueBuffer={100}
            />
        </Card>
    );
}

export default Points;
