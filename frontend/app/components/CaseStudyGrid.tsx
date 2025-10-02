import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/lib/sanity'

interface CaseStudy {
  _id: string
  title: string
  slug: { current: string }
  coverImage: any
}

interface CaseStudyGridProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudyGrid({ caseStudies }: CaseStudyGridProps) {
  return (
    <section id="work" className="py-32">
      <div className="container-custom">
        <h2 className="font-futura text-4xl mb-16 uppercase">Selected Work</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link 
              href={`/case-studies/${study.slug.current}`}
              key={study._id}
              className="group relative aspect-[4/3] overflow-hidden bg-black"
            >
              <Image
                src={urlForImage(study.coverImage).url()}
                alt={study.title}
                fill
                className="object-cover image-grayscale"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-300 flex items-center justify-center">
                <h3 className="font-futura text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 text-center">
                  {study.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link href="/case-studies" className="btn-secondary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}
