import { Check, X, AlertTriangle } from "lucide-react"

interface ComparisonData {
  feature: string
  aiShieldNet: {
    status: "success" | "warning" | "error"
    description: string
  }
  traditionalEDR: {
    status: "success" | "warning" | "error"
    description: string
  }
}

const comparisonData: ComparisonData[] = [
  {
    feature: "Real-time Threat Detection using LLM",
    aiShieldNet: {
      status: "success",
      description: "Detects threats via contextual understanding, even for novel attacks",
    },
    traditionalEDR: {
      status: "error",
      description: "Relies on fixed rules and patterns – blind to zero-day/fileless attacks",
    },
  },
  {
    feature: "Explains Alerts in Natural Language",
    aiShieldNet: {
      status: "success",
      description: 'Alerts include LLM-generated reasoning like "This behavior matches MITRE technique T1059"',
    },
    traditionalEDR: {
      status: "error",
      description: "Alerts are raw and require manual triage by analysts",
    },
  },
  {
    feature: "Zero-Day & Fileless Attack Prevention",
    aiShieldNet: {
      status: "success",
      description: "Flags abnormal behavior in real-time, even without prior knowledge",
    },
    traditionalEDR: {
      status: "warning",
      description: "Often fails without predefined indicators",
    },
  },
  {
    feature: "Noise Reduction / Fewer False Positives",
    aiShieldNet: {
      status: "success",
      description: "LLM understands intent and context, minimizing alert fatigue",
    },
    traditionalEDR: {
      status: "warning",
      description: "High false positive rate due to lack of semantic understanding",
    },
  },
  {
    feature: "Continuous AI Learning via Cloud",
    aiShieldNet: {
      status: "success",
      description: "No manual updates needed - model improves through ongoing cloud learning",
    },
    traditionalEDR: {
      status: "error",
      description: "Requires periodic manual signature updates",
    },
  },
  {
    feature: "Immediate Response & Containment",
    aiShieldNet: {
      status: "success",
      description: "LLM flags threats and triggers isolation automatically",
    },
    traditionalEDR: {
      status: "warning",
      description: "Often delays response waiting for human triage",
    },
  },
]

function StatusIcon({ status }: { status: "success" | "warning" | "error" }) {
  switch (status) {
    case "success":
      return <Check className="h-5 w-5 text-green-600" />
    case "warning":
      return <AlertTriangle className="h-5 w-5 text-amber-600" />
    case "error":
      return <X className="h-5 w-5 text-red-600" />
  }
}

function StatusBadge({ status }: { status: "success" | "warning" | "error" }) {
  const styles = {
    success: "bg-green-100 text-green-800 border border-green-200",
    warning: "bg-amber-100 text-amber-800 border border-amber-200",
    error: "bg-red-100 text-red-800 border border-red-200",
  }

  return (
    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
      <StatusIcon status={status} />
    </div>
  )
}

export function ComparisonTable() {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="bg-slate-50 border-b-2 border-gray-200">
              <th className="text-left font-bold text-slate-900 py-4 px-6 w-1/3">Feature</th>
              <th className="text-center font-bold text-slate-900 py-4 px-6">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  AI ShieldNet
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    LLM-first
                  </span>
                </div>
              </th>
              <th className="text-center font-bold text-slate-900 py-4 px-6">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                  Traditional EDR
                  <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded-full text-xs font-medium">
                    Rule-based
                  </span>
                </div>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors duration-200 border-b border-gray-100">
                <td className="font-semibold text-slate-900 py-6 px-6 border-r border-gray-100 align-top">
                  {row.feature}
                </td>
                <td className="py-6 px-6 border-r border-gray-100 align-top">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center">
                      <StatusBadge status={row.aiShieldNet.status} />
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{row.aiShieldNet.description}</p>
                  </div>
                </td>
                <td className="py-6 px-6 align-top">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center">
                      <StatusBadge status={row.traditionalEDR.status} />
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{row.traditionalEDR.description}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="bg-slate-50 px-6 py-4 border-t border-gray-200">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            <span className="text-slate-700 font-medium">Full Support</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <span className="text-slate-700 font-medium">Limited Support</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="h-4 w-4 text-red-600" />
            <span className="text-slate-700 font-medium">Not Supported</span>
          </div>
        </div>
      </div>
    </div>
  )
}
