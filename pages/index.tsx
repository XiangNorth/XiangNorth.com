import { Grid, Text } from "@nextui-org/react";
import Head from "next/head";
import MainCards from "../components/mainCards";
import { getPostsSummary } from "./api/post";

export default function Index({ posts }: any) {
  return (
    <div>
      <Head>
        <title>Hi, XiangNorth!</title>
      </Head>
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
      <MainCards posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = getPostsSummary();
  return {
    props: {
      posts,
    },
  };
}
