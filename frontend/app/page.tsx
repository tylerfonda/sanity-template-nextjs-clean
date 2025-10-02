import { client } from '@/lib/sanity'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CaseStudyGrid from '@/components/CaseStudyGrid'
import WhySection from '@/components/WhySection'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

async function getHomepageData() {
  const homepage = await client.fetch(`*[_type == "homepage"][0]`)
  const services = await client.fetch(`*[_type == "service"] | order(slug asc)`)
  const caseStudies = await client.fetch(`*[_type == "caseStudy" && featured == true][0..5]`)
  const team = await client.fetch(`*[_type == "teamMember"] | order(order asc)`)
  
  return { homepage, services, caseStudies, team }
}

export default async function Home() {
  const { homepage, services, caseStudies, team } = await getHomepageData()
  
  return (
    <>
      <Header />
      <main>
        <Hero 
          quote={homepage.heroQuote}
          subheading={homepage.heroSubheading}
          ctaText={homepage.ctaText}
        />
        <Services services={services} />
        <CaseStudyGrid caseStudies={caseStudies} />
        <WhySection 
          mission={homepage.missionStatement}
          vision={homepage.visionStatement}
        />
        <Team members={team} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
