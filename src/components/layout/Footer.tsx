import { Shield, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">ETH EHR</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Digitizing healthcare across Ethiopia with secure and efficient electronic health records.
            </p>
            <div className="flex gap-4">
              {/* Social links removed due to icon availability */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors">Solutions</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors">For Hospitals</Link></li>
              <li><Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors">For Clinics</Link></li>
              <li><Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors">For Government</Link></li>
              <li><Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors">For NGOs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Dire Dawa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span className="text-muted-foreground">+251 900 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-muted-foreground">info@ethehr.gov.et</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Ethiopia National EHR System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
