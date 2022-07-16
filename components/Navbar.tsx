import { useTheme, Avatar, Container, Grid, Text, Link } from "@nextui-org/react";

export default function Navbar() {
    const { theme } = useTheme();
    return (
        <nav style={{
            position: "sticky",
            top: 0,
            padding: '10px',
            zIndex: 1,
            backgroundColor: '#fff',
        }}>

            <Grid.Container wrap="nowrap" justify="space-between">
                <Grid>
                    <Grid.Container gap={2}>
                        <Grid>
                            <Link href="/">
                                <Text color={theme?.colors.primary.value} b>Home</Text>
                            </Link>
                        </Grid>
                        <Grid>
                            <Link href="/about">
                                <Text color={theme?.colors.primary.value} b>About</Text>
                            </Link>
                        </Grid>
                        <Grid>
                            <Link href="/links">
                                <Text color={theme?.colors.primary.value} b>Links</Text>
                            </Link>
                        </Grid>
                    </Grid.Container>
                </Grid>
                <Grid>
                    <Avatar size="lg" src="/profile.webp" color="primary" bordered squared zoomed />
                </Grid>
            </Grid.Container>
        </nav >
    );
}
