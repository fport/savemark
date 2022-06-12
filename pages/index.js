import Bookmarks from "../components/bookmarks"
import Layout from "../components/layout"
import Seo from "@c/seo";
import { useRouter } from 'next/router'

import { useDispatch, useSelector } from "react-redux";
import { getSampleData } from "../redux/actions/sampleAction";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch();
  const userInfoData = useSelector((state) => state.userInfo);
  const { userInfo, loading } = userInfoData;

  useEffect(() => {
    dispatch(getSampleData());
  }, [dispatch]);

  useEffect(() => {
    if (!userInfo?.email && !loading) {
      router.push('/auth/login')
    }
  }, [userInfoData])

  return (
    <Layout>
      <Seo title="Home" />
      <Bookmarks />
    </Layout>
  )
}