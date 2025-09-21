import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Plus, Users } from "lucide-react"

export default function HomePage() {
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
              <Link href="/about" className="text-foreground hover:text-primary">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Welcome to TaskFlow</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A simple and elegant task management app to help you stay organized and productive.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/tasks">
                <Plus className="mr-2 h-4 w-4" />
                Get Started
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                Simple Task Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Create, edit, and complete tasks with ease. Keep track of your daily goals and priorities.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Clean Interface
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Enjoy a clutter-free, intuitive interface designed to help you focus on what matters most.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="mr-2 h-5 w-5 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Add new tasks quickly and mark them as complete with just a click. Productivity made simple.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
