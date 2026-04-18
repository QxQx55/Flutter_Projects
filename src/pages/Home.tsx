import { Button, Card, CardContent } from '@blinkdotnew/ui'
import { Link } from '@tanstack/react-router'
import { 
  ShieldCheck, 
  Users, 
  ClipboardList, 
  Activity, 
  Microscope, 
  Pill, 
  BarChart3, 
  Lock,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                Digitizing Healthcare Across Ethiopia
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
                Modern Healthcare Management <span className="text-primary">for Ethiopia</span>
              </h1>
              <p className="max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                A complete Electronic Health Records system designed for hospitals, clinics, and healthcare providers to improve efficiency, accuracy, and patient care.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <Link to="/request-demo">
                  <Button size="lg" className="h-12 px-8 text-base shadow-lg hover:shadow-primary/20 transition-all">
                    Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-2xl border border-border bg-card p-2 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center bg-muted/50">
                 <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070" 
                  alt="Ethiopian Healthcare Professionals" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our system is specifically built to meet the unique challenges of the Ethiopian healthcare landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Local Context",
                description: "Designed specifically for Ethiopian healthcare protocols and local administrative needs.",
                icon: ShieldCheck
              },
              {
                title: "Low Bandwidth Ready",
                description: "Optimized performance to work reliably even in low-bandwidth rural environments.",
                icon: Activity
              },
              {
                title: "Data Sovereignty",
                description: "Secure and reliable patient data storage within national borders or local servers.",
                icon: Lock
              },
              {
                title: "User Friendly",
                description: "Intuitive interface designed for healthcare professionals with varying tech skills.",
                icon: Users
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Comprehensive Features</h2>
              <p className="text-muted-foreground">Everything you need to manage patient care from registration to discharge, all in one connected platform.</p>
            </div>
            <Link to="/features">
              <Button variant="link" className="text-primary font-semibold group">
                View all features <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Patient Records", icon: Users, color: "text-blue-500" },
              { title: "Appointments", icon: ClipboardList, color: "text-green-500" },
              { title: "Lab Integration", icon: Microscope, color: "text-purple-500" },
              { title: "Pharmacy Mgmt", icon: Pill, color: "text-amber-500" },
            ].map((feature, i) => (
              <Card key={i} className="group hover:border-primary/50 transition-all cursor-default">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className={`h-12 w-12 rounded-lg bg-card shadow-sm border border-border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold sm:text-5xl">Start Your Digital Transformation Today</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join hospitals and clinics across the country in providing better, faster, and more secure healthcare services.
            </p>
            <div className="pt-4">
              <Link to="/request-demo">
                <Button variant="secondary" size="lg" className="h-14 px-10 text-lg bg-white text-primary hover:bg-white/90">
                  Request a Free Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
      </section>
    </div>
  )
}
