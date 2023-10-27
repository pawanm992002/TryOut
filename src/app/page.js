"use client";
import { Box, Stack } from "@mui/material";
import HeroSection from "./component/HeroSection";
import RightSection from "./component/RightSection";
import LeftSection from "./component/LeftSection";

export default function Home() {
  return (
    <>
      <Box mt={"80px"} display={"flex"} flexDirection={"row"}>
        <Box flex={1}>
          <LeftSection />
        </Box>
        <Box direction={"column"} flex={3}>
          <HeroSection />
          <HeroSection />
          <HeroSection />
        </Box>
        <Box flex={1}>
          <RightSection />
        </Box>
      </Box>
    </>
  );
}
