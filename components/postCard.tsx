import { useTheme, Card, Col, Text } from "@nextui-org/react";
import Link from "next/link";

export default function PostCard({ post }: any) {
    const { theme } = useTheme();
    return (
        <Link href={{
            pathname: '/post/[slug]',
            query: { slug: post.slug },
        }}>
            <Card
                isPressable
                isHoverable
            >
                <Card.Header css={{ position: 'absolute', top: 0, mt: 20 }}>
                    <Col>
                        <Text color={theme?.colors.primary.value}>{post.data.description}</Text>
                        <Text h3 color="#fff">{post.data.title}</Text>
                    </Col>
                </Card.Header>
                <Card.Image src={post.data.thumbnail} objectFit="cover"
                    width="100%"
                    height={340}
                    alt="Card image background" />
            </Card>
        </Link >
    );
}


