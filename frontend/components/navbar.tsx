import Link from 'next/link'

export function Navbar() {
  return (
    <header className="h-14 border-b border-border/50 bg-background">
      <div className="flex h-full items-center justify-between px-6">
        <Link href="/" className="text-base font-medium text-foreground">
          Gamify
        </Link>
        <span className="text-sm text-muted-foreground">Admin</span>
      </div>
    </header>
  )
}
