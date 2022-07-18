import { Grid } from "@nextui-org/react";
import PostCard from "./postCard";

export default function MainCards({ posts }: any) {
    return (
        <Grid.Container gap={2}>
            {posts.map((post: any) => (
                <Grid xs={12} sm={4} key={post.slug}>
                    <PostCard
                        post={post} />
                </Grid>
            ))}
        </Grid.Container>
    );
}
