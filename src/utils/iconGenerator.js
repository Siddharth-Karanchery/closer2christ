import DataObjectIcon from "@mui/icons-material/DataObject";
import LinkIcon from "@mui/icons-material/Link";
import ImageIcon from "@mui/icons-material/Image";

export const iconGenerator = (iconName, iconColor) => {
  let icon = null;
  switch (iconName) {
    case "DataObjectIcon":
      icon = <DataObjectIcon style={{ color: iconColor }} />;
      break;
    case "ImageIcon":
      icon = <ImageIcon style={{ color: iconColor }} />;
      break;
    case "LinkIcon":
      icon = <LinkIcon style={{ color: iconColor }} />;
      break;
  }
  return icon;
};
