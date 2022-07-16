import { useTheme, Card, Col, Text } from "@nextui-org/react";
import Link from "next/link";

export default function Post({ content }: any) {
    const { theme } = useTheme();
    return (
        <Link href={{
            pathname: '/post/[slug]',
            query: { slug: content.slug },
        }}>
            <Card
                isPressable
                isHoverable
            >
                <Card.Header css={{ position: 'absolute', top: 0, mt: 20 }}>
                    <Col>
                        <Text color={theme ? theme.colors.primary.value : '#000'} >{content.data.description}</Text>
                        <Text h3 color="#fff">{content.data.title}</Text>
                    </Col>
                </Card.Header>
                <Card.Image
                    src={content.data.thumbnail}
                    objectFit="cover"
                    width="100%"
                    height={340}
                    alt="Card image background"
                />
            </Card>
        </Link >
    );
}


