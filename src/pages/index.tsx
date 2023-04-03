import { Hero } from '../components/Home/Hero'
import Layout from "../components/Layout/Layout"
import Space from '@/components/Layout/Space'
import Container from "../components/Layout/Container"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Space/>
    </Layout>

  )
}
