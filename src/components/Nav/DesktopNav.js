import { List, ListItem, Typography } from "@mui/material";

export default function DesktopNav({ menuOpen }) {
  return (
    <List sx={{ display: { xs: "none", md: menuOpen ? "none" : "flex" } }}>
      {["Home", "Shop", "About", "Contact"].map((text) => (
        <ListItem key={text} sx={{ width: "auto" }}>
          <Typography color="white">{text}</Typography>
        </ListItem>
      ))}
    </List>
  );
}
