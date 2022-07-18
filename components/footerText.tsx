import { Grid, Text } from "@nextui-org/react";

export default function FooterText() {
    return (
        <footer>
            <Grid.Container gap={1} direction="column" css={{
                my: '10vh',
            }}>
                <Grid xs={12} justify='center'>
                    <Text>
                        Powered by <a href="https://nextjs.org/">Next.js</a>. Styled By <a href="https://nextui.org">NextUI</a>.
                    </Text>
                </Grid>
                <Grid xs={12} justify='center'>
                    <Text>
                        © 2022 XiangNorth. All rights reserved.
                    </Text>
                </Grid>
            </Grid.Container>
        </footer >
    );
}
