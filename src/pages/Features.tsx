import { 
  Users, 
  ClipboardList, 
  Stethoscope, 
  Microscope, 
  Pill, 
  BarChart3, 
  Lock,
  CalendarDays,
  FileText,
  ShieldAlert
} from 'lucide-react'

export function Features() {
  const features = [
    {
      title: "Patient Management",
      description: "Comprehensive digital profiles for every patient. Store and access medical history, allergies, and demographic info securely in seconds.",
      icon: Users,
    },
    {
      title: "Appointment Scheduling",
      description: "Intuitive calendar system for clinics and hospitals. Manage patient visits efficiently, reduce wait times, and automate reminders.",
      icon: CalendarDays,
    },
    {
      title: "Clinical Documentation",
      description: "Streamlined note-taking for doctors. Record diagnoses, treatments, prescriptions, and clinical notes with easy-to-use templates.",
      icon: Stethoscope,
    },
    {
      title: "Laboratory Integration",
      description: "Digital lab requests and results. Track tests from ordering to fulfillment, with instant updates to the patient's record.",
      icon: Microscope,
    },
    {
      title: "Pharmacy Management",
      description: "Digital prescriptions and medication inventory. Manage stock levels, reduce dispensing errors, and track medication usage.",
      icon: Pill,
    },
    {
      title: "Reporting & Analytics",
      description: "Real-time insights for healthcare administrators. Generate reports on patient flow, disease trends, and hospital performance.",
      icon: BarChart3,
    },
    {
      title: "Security & Access Control",
      description: "Granular role-based permissions to protect sensitive data. Ensure only authorized staff can access specific patient information.",
      icon: Lock,
    },
    {
      title: "Interoperability",
      description: "Built for connectivity. Ready to integrate with national health systems and other medical institutions for a unified view of health.",
      icon: ShieldAlert,
    }
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">System Features</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A complete suite of tools designed to modernize every aspect of your healthcare facility.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border bg-background shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Spec Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Built for Performance</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our system isn't just full of features; it's built to last. We focus on speed, offline capabilities, and high security standards to ensure your facility never stops running.
                </p>
                <ul className="space-y-4">
                  {[
                    "End-to-end data encryption",
                    "Daily automatic backups",
                    "Offline-first sync for rural areas",
                    "Multi-language support ready"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                 <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2070" 
                  alt="Medical Technology" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
