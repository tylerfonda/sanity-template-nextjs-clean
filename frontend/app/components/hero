import { PortableText } from '@portabletext/react'

interface HeroProps {
  quote: string
  subheading: string
  ctaText: string
}

export default function Hero({ quote, subheading, ctaText }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-custom max-w-5xl text-center">
        <blockquote className="text-lg md:text-xl mb-12 italic text-gray-600">
          "{quote}"
        </blockquote>
        
        <h2 className="text-3xl md:text-5xl font-normal mb-16 leading-relaxed">
          {subheading}
        </h2>
        
        <a href="#contact" className="btn-primary inline-block">
          {ctaText}
        </a>
      </div>
    </section>
  )
}
