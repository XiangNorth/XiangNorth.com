import { Grid } from "@nextui-org/react";
import PostCard from "./PostCard";

export default function Main({ posts }: any) {
    return (
        <Grid.Container gap={2}>
            {posts.map((post: any) => (
                <Grid xs={12} sm={4} key={post.slug}>
                    <PostCard
                        content={post} />
                </Grid>
            ))}
        </Grid.Container>
    );
}
