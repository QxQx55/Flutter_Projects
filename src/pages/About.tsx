import { Shield, Target, Eye, CheckCircle2 } from 'lucide-react'

export function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">About Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Leading the digital healthcare revolution in Ethiopia.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert mx-auto text-center mb-20">
            <p className="text-lg leading-relaxed text-muted-foreground italic">
              "We are committed to transforming healthcare in Ethiopia through digital innovation. Our Electronic Health Records system helps healthcare providers manage patient information efficiently, reduce paperwork, and improve service delivery."
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              Our solution is built with local needs in mind, ensuring accessibility, security, and ease of use across the diverse landscape of our nation's healthcare system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 p-8 rounded-2xl bg-muted/30 border border-border">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To modernize Ethiopia’s healthcare system by providing secure, accessible, and efficient digital health record solutions that empower providers and improve patient outcomes.
              </p>
            </div>
            <div className="space-y-6 p-8 rounded-2xl bg-muted/30 border border-border">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A fully digitized, connected healthcare ecosystem in Ethiopia where every patient has a secure digital health identity and every provider has the tools to deliver excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
            <p className="text-muted-foreground">The principles that guide our digital healthcare mission.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Innovation", desc: "Pushing the boundaries of what's possible in health tech." },
              { title: "Security", desc: "Unyielding commitment to protecting patient privacy." },
              { title: "Accessibility", desc: "Ensuring our system works for everyone, everywhere." },
              { title: "Efficiency", desc: "Reducing administrative burden to focus on patient care." }
            ].map((value, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border border-border shadow-sm flex flex-col items-center text-center">
                <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
