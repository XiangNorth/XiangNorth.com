import { Container, Grid } from "@nextui-org/react";
import Post from "./Post";

export default function Main({ posts }) {
    return (
        <Container>
            <Grid.Container gap={1}>
                {posts.map(post => (
                    <Grid xs={12} sm={4} key={post.slug}>
                        <Post
                            content={post} />
                    </Grid>
                ))}
            </Grid.Container>
        </Container>
    );
}
