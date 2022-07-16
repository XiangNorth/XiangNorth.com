import { MDXRemote } from 'next-mdx-remote';
import { getPostBySlug, getPostSlugList } from '../api/post';
import { Container, Spacer, Text } from '@nextui-org/react';

export default function PostItem({ post }) {
    return (
        <Container>
            <Text h1>{post.title}</Text>
            <Text>{post.date}</Text>
            <Spacer />
            <MDXRemote {...post.content} />
        </Container>
    );
}

export async function getStaticPaths() {
    const posts = getPostSlugList();
    return {
        paths: posts.map((post) => ({
            params: { slug: post },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = await getPostBySlug(params.slug);
    return { props: { post } };
}
