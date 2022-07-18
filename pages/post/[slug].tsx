import { Button, Card, Container, Grid, Spacer, Text } from "@nextui-org/react";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { getAllSlugs, getPostBySlug } from "../api/post";

export default function Post({ post }: any) {
    return (
        <main>
            <Head>
                <title>{`${post.data.title} | XiangNorth!`}</title>
            </Head>
            <div>
                <Grid.Container alignItems="center" direction="column" css={{
                    my: '20px',
                }} xs>
                    <Card>
                        <Card.Image
                            objectFit="cover"
                            width="100%"
                            height={500}
                            alt="Card image background"
                            src={post.data.thumbnail} />
                        <Card.Footer css={{
                            position: 'absolute',
                            bottom: 0,
                            bgBlur: "#0f111466",
                        }}>
                            <Grid.Container direction="column">
                                <Text h2 css={{
                                    textGradient: '270deg,#8be5ff 0,#c5eec3 32.29%,#f1e495 66.67%,#ffbc76 100%'
                                }}>{post.data.title}</Text>
                                <Text css={{
                                    color: '#fff',
                                }}>{post.data.date}</Text>
                            </Grid.Container>
                        </Card.Footer>
                    </Card>
                </Grid.Container>
                <Grid xs={12}>
                    <div>
                        <MDXRemote {...post.content} />
                    </div>
                </Grid>
            </div>
        </main>
    );
}

export async function getStaticPaths() {
    const post = getAllSlugs();
    return {
        paths: post.map(item => ({
            params: { slug: item }
        })),
        fallback: false
    };
}

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {
    const post = await getPostBySlug(params.slug);
    return {
        props: {
            post
        }
    };
}


