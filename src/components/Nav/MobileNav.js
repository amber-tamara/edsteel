import { Drawer, List, ListItem, ListItemText, Box } from "@mui/material";

export default function MobileNav({ open, toggleDrawer }) {
  console.log(open);
  console.log(toggleDrawer);
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={toggleDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          width: "100%",
          backgroundColor: "#333",
          color: "white",
        },
      }}
    >
      <Box sx={{ width: "100%" }}>
        <List>
          {["Home", "Shop", "About", "Contact"].map((text) => (
            <ListItem button key={text} onClick={toggleDrawer}>
              <ListItemText primary={text} sx={{ color: "white" }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
