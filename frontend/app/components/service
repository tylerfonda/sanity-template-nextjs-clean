interface Service {
  title: string
  promise: string
  slug: string
}

interface ServicesProps {
  services: Service[]
}

export default function Services({ services }: ServicesProps) {
  const accentColors = ['hot-pink', 'electric-blue', 'acid-yellow']
  
  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={service.slug}
              className="group cursor-pointer"
            >
              <h3 className={`font-futura text-2xl mb-4 transition-colors duration-300 group-hover:text-${accentColors[index]}`}>
                {service.title}
              </h3>
              <p className="text-base leading-relaxed">
                {service.promise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
