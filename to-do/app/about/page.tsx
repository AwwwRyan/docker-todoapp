import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-foreground">
                TaskFlow
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/tasks" className="text-foreground hover:text-primary">
                Tasks
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary font-medium">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About TaskFlow</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            TaskFlow is designed to help you stay organized and productive with a simple, clean interface that focuses
            on what matters most - getting things done.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                Simple & Effective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                No complicated features or overwhelming interfaces. Just add tasks, check them off, and stay focused on
                your goals.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5 text-primary" />
                Fast & Responsive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Built with modern web technologies to ensure a smooth, fast experience across all your devices.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Heart className="mr-2 h-5 w-5 text-primary" />
              Built with Care
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription className="mb-4">
              TaskFlow was created with the belief that productivity tools should be simple, beautiful, and focused on
              helping you achieve your goals without getting in the way.
            </CardDescription>
            <p className="text-sm text-muted-foreground mb-6">
              Whether you&#39;re managing daily tasks, planning projects, or just trying to stay organized, TaskFlow
              provides the essential features you need in a clean, distraction-free environment.
            </p>
            <Button asChild>
              <Link href="/tasks">Start Using TaskFlow</Link>
            </Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">Made with ❤️ using Next.js, React, and Tailwind CSS</p>
        </div>
      </main>
    </div>
  )
}
