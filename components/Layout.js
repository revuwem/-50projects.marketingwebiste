import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Marketing Website</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
