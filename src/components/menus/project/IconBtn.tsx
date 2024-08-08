import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { Colors } from "../../../styles/colors";
import { FontSize } from "../../../styles/fontSize";

type Props = Omit<IconButtonProps, "onClick"> & {
  children: React.ReactNode;
  variant?: "primary" | "outlined";
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const IconBtn = ({
  children,
  variant = "primary",
  mt,
  mb,
  ml,
  mr,
  style,
  onClick,
  ...rest
}: Props) => {
  const outlinedStyles = {
    height: "36px",
    width: "36px",
    border: `2px solid ${Colors.white}`,
    borderRadius: "4px",
    boxSizing: "border-box",
  };
  const variantStyle = variant === "outlined" ? outlinedStyles : {};

  return (
    <IconButton
      style={{
        fontFamily: "Inter",
        fontSize: FontSize.xs,
        color: Colors.black,
        marginTop: mt ? mt : "",
        marginBottom: mb ? mb : "",
        marginLeft: ml ? ml : "",
        marginRight: mr ? mr : "",
        ...variantStyle,
        ...style,
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </IconButton>
  );
};

export default IconBtn;
