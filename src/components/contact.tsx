import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "tobias@hammerhome.no",
      href: "mailto:tobias@hammerhome.no",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+47 96 04 02 12",
      href: "tel:+4796040212",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Norway",
      href: "#",
    },
  ]

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/tobiasrogerhammer", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/tobias-hammer-321a4624b", icon: Linkedin },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
              <p className="text-muted-foreground mb-8">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <div key={info.title} className="text-center">
                    <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{info.title}</h4>
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-6">Follow Me</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-muted hover:bg-primary/10 rounded-lg transition-colors"
                    >
                      <Icon className="h-6 w-6" />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
