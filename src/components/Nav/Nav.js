import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DesktopNav from "./DesktopNav";

export default function NavBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#333", padding: "8px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Hamburger Menu (Now on the Left) */}
        {/* <Box
          sx={{
            display: { xs: "block", md: "none" },
            textAlign: "center",
          }}
        >
          <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="caption"
            sx={{ color: "white", display: "block", fontSize: "12px" }}
          >
            Menu
          </Typography>
        </Box> */}

        {/* Brand Name (Centered) */}

        {/* Desktop Navigation */}
        <DesktopNav />
      </Toolbar>

      {/* Mobile Navigation Drawer */}
    </AppBar>
  );
}
