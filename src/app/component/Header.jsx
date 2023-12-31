"use client";
import { Chat, Search } from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {
  AppBar,
  Stack,
  Typography,
  Box,
  TextField,
  Badge,
  MenuItem,
  IconButton,
  Avatar,
  Menu,
  InputBase,
  InputAdornment,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.jpg";
import { useState } from "react";

export default function Header() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar sx={{ padding: "8px 15px" }}>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            minHeight={"40px"}
            minWidth={"40px"}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <Link href={"/"}>
              <Image
                src={logo}
                alt="LOGO"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                width="40px"
                height="40px"
              />
            </Link>
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "flex" } }}
            flexDirection={"row"}
            gap={2}
            alignItems={"center"}
          >
            <Link href={"/"}>
              <Image
                src={logo}
                alt="LOGO"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </Link>
            <Link href={"/"}>
              <Typography>Link 1</Typography>
            </Link>
            <Link href={"/"}>
              <Typography>Link 2</Typography>
            </Link>
            <Link href={"/"}>
              <Typography>Link 3</Typography>
            </Link>
          </Box>
          <TextField
            id="filled-search"
            label="Search..."
            type="search"
            variant="filled"
            sx={{ background: "white", borderRadius: "10px" }}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <Search position="end">kg</Search>
                </IconButton>
              ),
            }}
          />
          <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
            <Badge badgeContent={4} color={"warning"}>
              <NotificationsNoneIcon />
            </Badge>
            <Badge badgeContent={4} color={"warning"}>
              <Chat />
            </Badge>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">LogIn</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Register</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Stack>
        </Stack>
      </AppBar>
    </>
  );
}
