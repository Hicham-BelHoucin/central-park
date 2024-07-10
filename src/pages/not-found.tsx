import { Button, Typography, Link, Box } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function NotFound() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "90vh",
                gap: 4,
            }}
        >
            <img src="/404.svg" alt="404" />
            <Typography variant="h3">Page not found</Typography>
            <Typography variant="h6">
                Oops! Looks like you followed a bad link. If you think this is a problem
                with us, please tell us.
            </Typography>
            <Button
                aria-label="arrow-back"
                startIcon={<ArrowBack />}
                variant="contained"
            >
                <Link href="/" color="inherit">
                    Go back to the homepage
                </Link>
            </Button>
        </Box>
    );
}