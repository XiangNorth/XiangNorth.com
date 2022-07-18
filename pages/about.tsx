import { Container, Image, Spacer, Text } from "@nextui-org/react"
import Head from "next/head"
import Link from "next/link"

export default function About() {
    return (
        <div>
            <Head>
                <title>About | XiangNorth!</title>
            </Head>
            <Text h1 css={{
                textGradient: '270deg,#8be5ff 0,#c5eec3 32.29%,#f1e495 66.67%,#ffbc76 100%'
            }}>About</Text>
            <Image src="/images/about.webp" alt="about" />
            <Spacer />
            <Text h2>👋 Hi~</Text>
            <Text h3>Who are U?</Text>
            <Text>
                🪐 Hi, It&apos;s XiangNorth here.
            </Text>
            <ul>
                <li>🥰 XiangNorth/Xnor</li>
                <li>🤖 Gen Z</li>
                <li>😻 Aliurophile</li>
                <li>🎨 Design Lover</li>
                <li>🤓 Programming Beginner</li>
            </ul>
            <Text h3>Where am I?</Text>
            <Text>
                There is my little universe 🌌 to share the things I love.
            </Text>
            <Text>
                Inspired by love, founded in 2011, I have been improving this unique secret garden over the years with learning about programming.
            </Text>
            <Text h3>Things you may want to know</Text>
            <ul>
                <li>Blog Engine: <Link href='https://hexo.io' target='_blank'>Hexo</Link></li>
                <li>Hexo Theme: 🌈 <Link href='https://github.com/ikeq/hexo-theme-inside' target='_blank'>Inside</Link></li>
                <li>Comment System: <Link href='https://github.com/imaegoo/twikoo' target='_blank'>Twikoo</Link></li>
                <li>Hosting Service: <Link href='https://pages.github.com/' target='_blank'>GitHub Page</Link></li>
                <li>Favicon: 🏕️ in <Link href='https://twemoji.twitter.com/' target='_blank'>Twemoji</Link></li>
            </ul>
        </div>
    )
}
