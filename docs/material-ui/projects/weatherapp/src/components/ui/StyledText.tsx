import { styled } from "@mui/material";

interface StyledTextProps {
    isDisable?: boolean
}

const StyledText = styled("p")<StyledTextProps>(({ isDisable }) =>({
    fontSize: "24px",
    fontWeight: 500,
    color: isDisable ? "rgb(28, 28, 27)" : "rgb(6, 6, 37)",
    letterSpacing: "4px",
    lineHeight: "12px"
}))

export default StyledText;