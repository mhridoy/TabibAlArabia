"use client"

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Top right blob */}
      <div className="absolute -right-64 -top-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>

      {/* Bottom left blob */}
      <div className="absolute -left-64 -bottom-64 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float animation-delay-200"></div>

      {/* Center blob */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-400"></div>

      {/* Small floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-secondary/20 rounded-full animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-primary/20 rounded-full animate-float animation-delay-200"></div>
      <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-secondary/20 rounded-full animate-float animation-delay-400"></div>
    </div>
  )
}

