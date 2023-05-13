import { Box, Grid } from "@mantine/core";
import { useState } from "react";
import { useMantineTheme, Flex } from "@mantine/core";
// import Header from "./header";

import { AppShell, Navbar, Header, Footer, Aside, Text, MediaQuery, Burger } from "@mantine/core";
import HeaderDashboard from "./header";
import Chat from "./chat/chat";
import PublicGroups from "./public_groups";

export function DashboardLayout() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, md: 300, lg: 400 }}>
                    <Chat />
                </Navbar>
            }
            //   aside={
            //     <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            //       <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            //         <Text>Application sidebar</Text>
            //       </Aside>
            //     </MediaQuery>
            //   }
            //   footer={
            //     <Footer height={60} p="md">
            //       Application footerÍ
            //     </Footer>
            //   }
            header={<HeaderDashboard />}
        >
            <Box p="md">
                <PublicGroups />
            </Box>
        </AppShell>
    );
}
