import { CheckCircle2, MonitorPlay, Zap, Lock } from 'lucide-react'
import { Button, Input, Select, SelectTrigger, SelectValue, SelectContent, SelectItem, Card, CardContent } from '@blinkdotnew/ui'
import { useState } from 'react'
import { toast } from '@blinkdotnew/ui'

export function RequestDemo() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success("Demo Requested!", { description: "A representative will contact you to schedule your session." })
      ;(e.target as HTMLFormElement).reset()
    }, 2000)
  }

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">See the System in Action</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience how our EHR system can streamline your healthcare facility's operations.
          </p>
        </div>
      </section>

      {/* Form & Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form Card */}
            <Card className="shadow-2xl border-primary/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Schedule Your Free Demo</h2>
                    <p className="text-muted-foreground text-sm">Fill out the form below and we'll reach out to schedule a personalized walkthrough.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input required placeholder="Enter your name" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Role</label>
                      <Input required placeholder="e.g. Hospital Director" className="h-11" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Organization Name</label>
                    <Input required placeholder="Hospital, Clinic or Health Center name" className="h-11" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Work Email</label>
                      <Input required type="email" placeholder="email@organization.com" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input required placeholder="+251 ..." className="h-11" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Estimated Number of Patients/Day</label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select a range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-50">0 - 50</SelectItem>
                        <SelectItem value="51-200">51 - 200</SelectItem>
                        <SelectItem value="201-500">201 - 500</SelectItem>
                        <SelectItem value="500+">500+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button disabled={loading} type="submit" className="w-full h-12 text-base font-bold shadow-lg shadow-primary/20">
                    {loading ? "Processing..." : "Request Demo Now"}
                  </Button>
                  
                  <p className="text-[11px] text-center text-muted-foreground">
                    By submitting this form, you agree to our privacy policy and consent to being contacted regarding our healthcare solutions.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-12 py-6">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">What to expect in your demo session:</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our specialists will show you exactly how the system handles real-world medical scenarios tailored to your facility type.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "Live Walkthrough",
                    desc: "See the user interface for doctors, nurses, and admins in real-time.",
                    icon: MonitorPlay
                  },
                  {
                    title: "Speed Test",
                    desc: "Experience how fast records load even on standard internet connections.",
                    icon: Zap
                  },
                  {
                    title: "Data Security Overview",
                    desc: "Understand how we protect patient privacy and comply with regulations.",
                    icon: Lock
                  },
                  {
                    title: "Q&A Session",
                    desc: "Get direct answers to your technical and operational questions.",
                    icon: CheckCircle2
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                <p className="text-sm font-medium italic text-muted-foreground">
                  "The demo showed us exactly how we could transition from paper to digital without disrupting our daily patient flow. It was the deciding factor for our hospital."
                </p>
                <p className="text-xs mt-3 font-bold">— Director, St. Mary Hospital</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
