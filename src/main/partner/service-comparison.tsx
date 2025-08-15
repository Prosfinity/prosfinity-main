import { CheckCircle, Info, SearchIcon, ShieldIcon } from "lucide-react"

export function ServiceComparison() {
  const services = [
    {
      id: "ai-shieldnet",
      title: "AI ShieldNet",
      subtitle: "Real-Time AI-Powered Threat Protection Platform",
      description: "A proactive, 24/7 security monitoring system powered by AI that:",
      icon: ShieldIcon,
      color: "bg-primary-500",
      borderColor: "border-primary-200",
      bgColor: "bg-primary-50",
      features: [
        "Automatically detects cyberattacks, malware, phishing, and other threats",
        "Analyzes abnormal behavior across the entire IT infrastructure",
        "Delivers early warnings and instant responses to minimize risk and impact",
      ],
      valueTitle: "Value for Your Clients:",
      valueDescription:
        "Most SMEs lack specialized in-house cybersecurity teams. AI ShieldNet gives them enterprise-grade protection - without the cost of hiring or building new infrastructure.",
      badge: "Real-Time Protection",
    },
    {
      id: "security-audit",
      title: "Security Risk Assessment & Audit",
      subtitle: "Comprehensive Cybersecurity Checkup",
      description: "A recurring (quarterly or bi-annual) assessment service that helps businesses:",
      icon: SearchIcon,
      color: "bg-emerald-500",
      borderColor: "border-emerald-200",
      bgColor: "bg-emerald-50",
      features: [
        "Analyze all existing cybersecurity risks within their systems",
        "Audit configurations, user privileges, data infrastructure, and potential vulnerabilities",
        "Receive in-depth reports with clear, actionable recommendations",
        "Track and measure improvements in security posture over time",
      ],
      valueTitle: "Value for Your Clients:",
      valueDescription:
        "This service helps businesses accurately assess their current security landscape, understand hidden risks, and develop improvement plans tailored to their budget. Not just assessment - but hands-on guidance for real fixes.",
      badge: "Comprehensive Analysis",
    },
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {services.map((service) => {
        const IconComponent = service.icon
        return (
          <div
            key={service.id}
            className={`relative overflow-hidden border-2 ${service.borderColor} rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className={`absolute top-0 left-0 right-0 h-1 ${service.color}`} />

            <div className={`${service.bgColor} pb-6 p-6`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg ${service.color} text-white`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mb-2">
                      {service.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-700 mt-2">{service.subtitle}</p>
            </div>

            <div className="pt-6 p-6 space-y-6">
              <div>
                <p className="text-gray-700 font-medium mb-4">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-4 rounded-lg ${service.bgColor} border ${service.borderColor}`}>
                <div className="flex items-start gap-2 mb-2">
                  <Info
                    className={`h-5 w-5 mt-0.5 flex-shrink-0`}
                    style={{
                      color: service.color.replace("bg-", "").replace("-500", "") === "blue" ? "#3b82f6" : "#10b981",
                    }}
                  />
                  <h4 className="font-semibold text-gray-900">{service.valueTitle}</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">{service.valueDescription}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
