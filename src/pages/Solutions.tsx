import { Building2, Home, Landmark, HeartPulse, ArrowRight } from 'lucide-react'
import { Button } from '@blinkdotnew/ui'
import { Link } from '@tanstack/react-router'

export function Solutions() {
  const solutions = [
    {
      title: "For Hospitals",
      icon: Building2,
      description: "Comprehensive management for large-scale medical centers. Handle high patient volumes, multiple departments, and complex workflows with ease.",
      items: [
        "Multi-department coordination",
        "Bed and ward management",
        "Advanced surgical scheduling",
        "Comprehensive financial reporting"
      ]
    },
    {
      title: "For Clinics",
      icon: HeartPulse,
      description: "Agile solutions for private clinics and health centers. Simplify your operations, focus on patient care, and grow your practice efficiently.",
      items: [
        "Rapid patient registration",
        "Simplified clinical notes",
        "Inventory tracking for basic meds",
        "Easy appointment booking"
      ]
    },
    {
      title: "For Government",
      icon: Landmark,
      description: "Data-driven tools for public health administration. Gain a birds-eye view of national health trends and optimize resource allocation.",
      items: [
        "Regional health dashboards",
        "Disease outbreak monitoring",
        "Resource utilization tracking",
        "Standardized reporting across facilities"
      ]
    },
    {
      title: "For NGOs",
      icon: Home,
      description: "Specialized tracking for health programs and community outreach. Monitor project outcomes and ensure every beneficiary is accounted for.",
      items: [
        "Program-specific data fields",
        "Field outreach sync tools",
        "Donor reporting automation",
        "Patient outcome tracking"
      ]
    }
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Solutions for Every Need</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tailored digital health solutions to meet the specific requirements of your organization.
          </p>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {solutions.map((solution, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <solution.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold">{solution.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {solution.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm font-medium">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link to="/request-demo">
                      <Button className="group">
                        Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-3xl border border-border bg-muted overflow-hidden aspect-video shadow-xl">
                     <img 
                      src={`https://images.unsplash.com/photo-${i === 0 ? '1538108149393-fbbd81895907' : i === 1 ? '1519494026892-80bbd2d6fd0d' : i === 2 ? '1526256262350-7da7584cf5eb' : '1504813184591-01594feb41b5'}?auto=format&fit=crop&q=80&w=2070`} 
                      alt={solution.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Empowering Ethiopia's Healthcare</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 space-y-4">
              <div className="text-4xl font-bold text-primary">99%</div>
              <p className="text-muted-foreground">Accuracy in patient identification and record retrieval.</p>
            </div>
            <div className="p-8 space-y-4">
              <div className="text-4xl font-bold text-primary">40%</div>
              <p className="text-muted-foreground">Reduction in administrative paperwork and processing time.</p>
            </div>
            <div className="p-8 space-y-4">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <p className="text-muted-foreground">Reliable access to medical data across authorized facilities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
