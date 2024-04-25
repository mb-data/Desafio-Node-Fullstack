import EventIcon from "@assets/icons/event-icon.svg";
import FestivalIcon from "@assets/icons/festival-icon.svg";
import { Box, Center, Flex } from "@chakra-ui/layout";
import { Header } from "@ui/components/header/header.component";
import { MainDashboardTitle } from "@ui/screens/main-dashboard/components/header/main-dashboard-title.component";
import { MainDashboardOptionMenuButton } from "@ui/screens/main-dashboard/components/option-menu-button/main-dashboard-option-menu-button.component";

export function MainDashboardScreen() {
  return (
    <>
      <Header />
      <Center>
        <Box p={"3.25rem 5.125rem 1.5rem"}>
          <MainDashboardTitle userName="Mariana" />
          <Flex
            mt={"1.5rem"}
            gap={"1.5rem"}
            justifyContent={"center"}
            // flexWrap={"wrap"}
          >
            <MainDashboardOptionMenuButton
              buttonText="Conferir locais"
              icon={FestivalIcon}
              text="Confira todos os locais cadastrados!"
              title="Locais"
              bgColor="#2F3B28"
              href="/locais"
            />

            <MainDashboardOptionMenuButton
              buttonText="Conferir eventos"
              icon={EventIcon}
              text="Confira todos os eventos cadastrados!"
              title="Eventos"
              bgColor="#461527"
              href="/eventos"
            />
          </Flex>
        </Box>
      </Center>
    </>
  );
}
