import { Grid, Text } from "@nextui-org/react";
import Main from "../components/Main";
import { getPosts } from "./api/post";

function Index({ posts }) {
  return (
    <div>
      <Grid.Container alignItems="center" direction="column" css={{
        my: '10vh',
      }}>
        <Grid>
          <Text h1>Hi, XiangNorth!</Text>
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
