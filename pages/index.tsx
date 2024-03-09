import Head from "next/head";

export default function Home() {
  const imgSrc =
    "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/4bd33ca8-2683-4128-ac62-28e8f5ddf800/rectcontain3";
  return (
    <Head>
      <meta name="fc:frame" content="vNext" />

      <meta name="fc:frame:image" content={imgSrc} />
      <meta name="fc:frame:image:aspect_ratio" content="1.91:1" />
      <meta property="og:image" content={imgSrc} />

      <meta name="fc:frame:button:1" content="Youtube" />
      <meta name="fc:frame:button:1:action" content="link" />
      <meta
        name="fc:frame:button:1:target"
        content={"https://www.youtube.com/@TheDailyGwei"}
      />

      <meta name="fc:frame:button:2" content="Substack" />
      <meta name="fc:frame:button:2:action" content="link" />
      <meta
        name="fc:frame:button:2:target"
        content={"https://thedailygwei.substack.com"}
      />

      <meta name="fc:frame:button:3" content="Twitter" />
      <meta name="fc:frame:button:3:action" content="link" />
      <meta
        name="fc:frame:button:3:target"
        content={"https://twitter.com/thedailygwei"}
      />

      <meta name="fc:frame:button:3" content="Discord" />
      <meta name="fc:frame:button:3:action" content="link" />
      <meta
        name="fc:frame:button:3:target"
        content={"https://discord.gg/4pfUJsENcg"}
      />
    </Head>
  );
}
