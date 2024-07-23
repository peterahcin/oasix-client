import {
  createTheme,
  SxProps,
  Theme,
  ThemeProvider,
} from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { ReactComponent as ExclamationIcon } from "../icons/exclamation_mark.svg";
import { ReactComponent as CheckIcon } from "../icons/check_mark.svg";
import { ReactComponent as InformationIcon } from "../icons/information_mark.svg";
import { ReactComponent as WarningIcon } from "../icons/warning_mark.svg";
import { Typography } from "@mui/material";

export const initAlertData: AlertObj = {
  type: "info",
  value: "",
};

const theme = createTheme({
  typography: {
    fontFamily: ["PoppinsRegular", "sans-serif"].join(","),
    fontSize: 16,
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "20px",
      color: "#282828",
    },
  },
  palette: {
    warning: {
      main: "#FFE7101A !important",
    },
  },
});

export interface AlertObj {
  type: "success" | "warning" | "error" | "info";
  value: string;
}

interface Alertprops {
  type: "success" | "warning" | "error" | "info";
  text: string;
  width?: number;
  sx?: SxProps<Theme>;
  open: boolean;
  onClose: () => void;
}

export default function AlertMessage({
  type,
  text,
  width = 300,
  sx,
  open,
  onClose,
}: Alertprops) {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    onClose();
  };

  const styles = {
    "&.MuiAlert-standardSuccess": {
      backgroundColor: "#E5FAE6",
    },
    "&.MuiAlert-standardInfo": {
      bgcolor: "#F3F1FF",
    },
    "&.MuiAlert-standardWarning": {
      bgcolor: "#FFE7101A",
    },
    "&.MuiAlert-standardError": {
      bgcolor: "#FFCFCF",
    },
    width: width,
    ...sx,
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        severity={type}
        sx={styles}
        iconMapping={{
          info: <InformationIcon fill="#4A52BB" />,
          success: <CheckIcon fill="#00CB14" />,
          warning: <ExclamationIcon fill="#686868" />,
          error: <WarningIcon fill="#FF2727" />,
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography> {text}</Typography>
        </ThemeProvider>
      </Alert>
    </Snackbar>
  );
}
