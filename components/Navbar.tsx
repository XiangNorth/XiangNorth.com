import { useTheme, Avatar, Grid, Text, Container } from "@nextui-org/react";
import Link from "next/link";

export default function Navbar() {
    const { theme } = useTheme();
    return (
        <nav style={{
            position: "sticky",
            top: 0,
            padding: '10px',
            margin: '0',
            zIndex: 1,
            backgroundColor: '#fff',
        }}>
            <Container>
                <Grid.Container wrap="nowrap" justify="space-between">
                    <Grid>
                        <Grid.Container gap={2} justify='space-between'>
                            <Grid>
                                <Text color={theme?.colors.primary.value} b>
                                    <Link href="/">Home</Link>
                                </Text>
                            </Grid>
                            <Grid>
                                <Text color={theme?.colors.primary.value} b>
                                    <Link href="/links">Links</Link>
                                </Text>
                            </Grid>
                            <Grid>
                                <Text color={theme?.colors.primary.value} b>
                                    <Link href="/about">About</Link>
                                </Text>
                            </Grid>
                        </Grid.Container>
                    </Grid>
                    <Grid>
                        <Avatar size="lg" src="/profile.webp" color="primary" bordered squared zoomed />
                    </Grid>
                </Grid.Container>
            </Container>
        </nav >
    );
}
