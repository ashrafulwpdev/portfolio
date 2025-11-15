import Link from 'next/link'
import { LayoutDashboard, FolderGit2, Wrench, Briefcase, Palette, Home } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Projects', href: '/admin/projects', icon: FolderGit2 },
    { name: 'Skills', href: '/admin/skills', icon: Wrench },
    { name: 'Experience', href: '/admin/experience', icon: Briefcase },
    { name: 'Theme', href: '/admin/theme', icon: Palette },
  ]

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card hidden md:block">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <span className="gradient-text">Admin Panel</span>
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to Site
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 border-b bg-card flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold">Portfolio Admin</h1>
          <ThemeToggle />
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  )
}
