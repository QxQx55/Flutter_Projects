import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import { Button, Input, Textarea, Card, CardContent } from '@blinkdotnew/ui'
import { useState } from 'react'
import { toast } from '@blinkdotnew/ui'

export function Contact() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success("Message sent!", { description: "We'll get back to you shortly." })
      ;(e.target as HTMLFormElement).reset()
    }, 1500)
  }

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions? We're here to help you modernize your healthcare facility.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our team is ready to discuss your needs and how the Ethiopia EHR system can transform your operations.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Our Location</h3>
                    <p className="text-muted-foreground">Dire Dawa, Ethiopia</p>
                    <p className="text-muted-foreground text-sm mt-1">Nationwide Support Center</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Call Us</h3>
                    <p className="text-muted-foreground">+251 900 000 000</p>
                    <p className="text-muted-foreground text-sm mt-1">Available Mon-Fri, 8AM - 6PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email Us</h3>
                    <p className="text-muted-foreground">info@ethehr.gov.et</p>
                    <p className="text-muted-foreground text-sm mt-1">Expect a reply within 24 hours</p>
                  </div>
                </div>
              </div>

              <Card className="bg-primary text-primary-foreground border-none overflow-hidden">
                <CardContent className="p-8 space-y-4 relative">
                  <MessageSquare className="h-12 w-12 opacity-20 absolute -right-4 -bottom-4" />
                  <h3 className="text-xl font-bold">Technical Support</h3>
                  <p className="opacity-90">Already using our system? Contact our 24/7 technical helpdesk for immediate assistance.</p>
                  <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
                    Support Center
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Full Name</label>
                  <Input required placeholder="Enter your full name" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Organization</label>
                  <Input required placeholder="Hospital or Clinic name" className="h-12" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Email Address</label>
                    <Input required type="email" placeholder="email@example.com" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Phone Number</label>
                    <Input required placeholder="+251 ..." className="h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Your Message</label>
                  <Textarea required placeholder="How can we help you?" className="min-h-[150px] resize-none" />
                </div>
                <Button disabled={loading} type="submit" className="w-full h-12 text-base">
                  {loading ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
