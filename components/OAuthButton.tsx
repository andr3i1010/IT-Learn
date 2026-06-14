'use client'

export function OAuthButton({
  label,
  onClick,
  children,
}: {
  label: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-border bg-white/[0.02] text-text-secondary hover:text-text-primary hover:bg-white/[0.05] hover:border-primary/20 transition-all cursor-pointer text-sm font-medium"
    >
      {children}
      {label}
    </button>
  )
}
