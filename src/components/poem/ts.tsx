import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function StyledLink() {
  return (
    <Typography
      variant="h6" // Matn kattaligini belgilash
      gutterBottom
      sx={{
        textAlign: "center", // Matnni markazga joylash
        color: "#1976d2", // Matn rangini o'rnatish (masalan, Material-UI asosiy ko‘k rangi)
        "& a": {
          textDecoration: "none", // Ostidan chiziqni olib tashlash
          color: "#1976d2", // Havola rangi
          fontWeight: "bold", // Matn qalinligi
        },
        "& a:hover": {
          color: "#1565c0", // Hoverdagi rang
          textDecoration: "underline", // Hoverda ostki chiziq
          transition: "color 0.3s", // Silliq o‘tish effekti
        },
      }}
    >
      <Link to="/support">Qo'llab-quvvatlash sahifasiga o'tish</Link>
    </Typography>
  );
}
