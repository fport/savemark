import Bookmarks from "../components/bookmarks"
import Layout from "../components/layout"
import Seo from "@c/seo";

import { useDispatch, useSelector } from "react-redux";
import { getSampleData } from "../redux/actions/sampleAction";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const sampleListData = useSelector((state) => state.sampleData);
  const { sample } = sampleListData;

  useEffect(() => {
    dispatch(getSampleData());
  }, [dispatch]);
  return (
    <Layout>
      <Seo title="Home" />
      <Bookmarks />
    </Layout>
  )
}