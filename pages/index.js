import Bookmarks from "../components/bookmarks"
import Layout from "../components/layout"
import Seo from "@c/seo";

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" />
      <Bookmarks />
    </Layout>
  )
}