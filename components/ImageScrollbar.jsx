import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleleft, FaArrowAltcircleRight } from "react-icons/fa";
const ImageScrollbar = () => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}></ScrollMenu>
);
