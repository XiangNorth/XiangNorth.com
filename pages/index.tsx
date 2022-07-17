import { Grid, Text } from "@nextui-org/react";
import Main from "../components/Main";
import { getPosts } from "./api/post";

function Index({ posts }: any) {
  return (
    <div>
      <Grid.Container alignItems="center" direction="column" css={{
        my: '10vh',
      }}>
        <Grid>
          <Text h1 css={{
            textGradient: '270deg,#8be5ff 0,#c5eec3 32.29%,#f1e495 66.67%,#ffbc76 100%'
          }}>Hi, XiangNorth!</Text>
        </Grid>
        <Grid>
          <Text>✨ Coding with Love, Exploring the World.</Text>
        </Grid>
      </Grid.Container>
      <Main posts={posts} />
    </div>
  );
}

export default Index;

export async function getStaticProps() {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
}
