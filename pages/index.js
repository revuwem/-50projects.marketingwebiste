import Layout from "../components/Layout";
import { getLandingData } from "../lib/api";

export async function getStaticProps() {
  const landingData = await getLandingData();
  return {
    props: {
      data: landingData,
    },
  };
}

export default function Home({ data }) {
  const { hero, trapdoor } = data.getLanding;

  return (
    <Layout>
      <section className="hero">
        <h2>{hero.heading}</h2>
        <p>{hero.text}</p>
        <a href={hero.cta.url} className="btn btn--primary">
          {hero.cta.label}
        </a>
        <img src="app.png" alt="" />
      </section>
      <section className="benefits">
        <ul className="list list--row">
          <li>
            <img src="icons/icon-4.svg" alt="" />
            <h3>Fully integrated</h3>
            <p>Everything that is required to build digital infrastructure </p>
          </li>
          <li>
            <img src="icons/icon-5.svg" alt="" />
            <h3>Easy to use</h3>
            <p>
              You don’t need any tech or design skills to grow app your business
            </p>
          </li>
          <li>
            <img src="icons/icon-6.svg" alt="" />
            <h3>No-code solution</h3>
            <p>Reduce the cost of digital business transformation</p>
          </li>
        </ul>
      </section>
      <section className="features">
        <img src="blue-girl.png" alt="" className="picture" />
        <h2>Get your amazing digital experience in one simple platform</h2>
        <ul className="list list--grid">
          <li>
            <img src="icons/icon.svg" alt="" />
            <h3>Business insights</h3>
            <p>
              Go further and faster with valuable customer insights and product
              perfomance reports
            </p>
          </li>
          <li>
            <img src="icons/icon-1.svg" alt="" />
            <h3>Prebuilt configurations</h3>
            <p>
              We made some templates that you can easily customize whichever
              your business needs
            </p>
          </li>
          <li>
            <img src="icons/icon-2.svg" alt="" />
            <h3>All-in-one toolkit</h3>
            <p>
              All the innovative tools you need to launch a lucrative digital
              product business in one neal package
            </p>
          </li>
          <li>
            <img src="icons/icon-3.svg" alt="" />
            <h3>Faster-improving platform</h3>
            <p>
              We release hundreds of features and improvements each year to help
              you stay ahead of industry shifts
            </p>
          </li>
        </ul>
      </section>
      <section className="trapdoor">
        <div className="left">
          <h2>{trapdoor.heading}</h2>
          <p>{trapdoor.text}</p>
        </div>
        <div className="right">
          <a href={trapdoor.cta.url} className="btn btn--primary">
            {trapdoor.cta.label}
          </a>
          <a href={trapdoor.secondaryAction.url} className="link">
            {trapdoor.secondaryAction.label}
          </a>
        </div>
      </section>
    </Layout>
  );
}
