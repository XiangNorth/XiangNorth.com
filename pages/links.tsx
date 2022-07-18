import { Container, Image, Text } from "@nextui-org/react";
import Head from "next/head";
import Link from "next/link";

export default function Links() {
    return (
        <Container>
            <Head>
                <title>Links | XiangNorth!</title>
            </Head>
            <Text h1 css={{
                textGradient: "270deg,#8be5ff 0,#c5eec3 32.29%,#f1e495 66.67%,#ffbc76 100%"
            }}>Links</Text>
            <Image src="/images/friends.webp" alt="links" />
            <Text>
                🕵️🧑🏻‍🍳🧑🏼‍🔧🧑🏽‍🎨🧙🏾🧑🏿‍🎤
            </Text>
            <Text h2>My cuties</Text>
            <ul>
                <li><Link href='https://diygod.me/' target='_blank'>🍬 DIYgod</Link> | My idol.</li>
                <li><Link href='https://blog.oniuo.com/' target='_blank'>😎 Ikeq Cheng</Link> | Author of the `hexo-theme-inside`.</li>
            </ul>
            <Text h3>Wanna be my friend?</Text>
            <Text>Pls feel free to comment beside here with:</Text>
            <ol>
                <li>the <Link href='https://emojipedia.org/' target='_blank'>emoji</Link> you wanna show ahead;</li>
                <li>your nickname or the title of website;</li>
                <li>links of your website;</li>
                <li>a brief description or bio.</li>
            </ol>
        </Container>
    )
}
