import { Typography } from "@mui/material";


interface TitleProps {
    children?: React.ReactNode;
}

function Title({ children }: TitleProps) {
    return (
        <Typography
            component="h4"
            variant={"h4"}
            color={"primary"}
        >
            {children}
        </Typography>
    );
}

export default Title;