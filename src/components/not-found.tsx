import { Typography, Box } from '@mui/material';


function NotFound({
    sx,
    width,
    title,
}: {
    sx?: {
        [key: string]: string | number;
    };
    width?: number;
    title: string;
}) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                ...sx,
            }}
        >
            <img
                src="/404.svg"
                alt="fourOFour"
                width={width || 300}
            />
            <Typography variant="h5">{title}</Typography>
        </Box>
    );
}


export default NotFound;