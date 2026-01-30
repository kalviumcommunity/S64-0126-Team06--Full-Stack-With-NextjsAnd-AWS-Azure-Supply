import { Sidebar } from './components/Sidebar'
import { ProjectCard } from './components/ProjectCard'

function App() {
  const tabs = [
    { label: 'All Projects', active: true },
    { label: 'In Progress', active: false },
    { label: 'Completed', active: false },
    { label: 'Archived', active: false },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        {/* Top header */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-8 py-5 shadow-sm">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-slate-800">Projects Oversight</h1>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                24 Active
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Monitor student projects, deadlines, and progress in one place.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                🔍
              </span>
              <input
                type="search"
                placeholder="Search projects..."
                className="w-64 rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-500"
            >
              <span className="text-lg leading-none">+</span>
              Create New Project Template
            </button>
          </div>
        </header>

        {/* Tabs */}
        <div className="border-b border-slate-200 bg-white px-8">
          <div className="flex items-center gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                className={`relative pb-3 pt-4 text-sm font-medium transition-colors ${
                  tab.active
                    ? 'text-slate-800'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab.label}
                {tab.active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 p-8">
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ProjectCard
              category="COMPUTER SCIENCE"
              categoryClass="bg-blue-100 text-blue-800"
              title="Neural Network Sandbox"
              description="Researching optimized backpropagation algorithms for small-scale educational datasets."
              avatars={['AB', 'CD', '+2']}
              progress={75}
              nextDeadline="Oct 24, 2023"
              statusDot="green"
              statusText="Last submission: 2h ago"
            />
            <ProjectCard
              category="DATA SCIENCE"
              categoryClass="bg-amber-100 text-amber-800"
              title="Global Climate Dashboard"
              description="Visualizing NOAA climate data using D3.js and React for interactive historical analysis."
              avatars={['EF', 'GH']}
              progress={42}
              nextDeadline="Oct 28, 2023"
              statusDot="orange"
              statusText="Pending Review"
            />
            <ProjectCard
              category="CYBERSECURITY"
              categoryClass="bg-violet-100 text-violet-800"
              title="SQL Injection Lab"
              description="Creating a secure environment to test and demonstrate SQL injection vulnerabilities and mitigations."
              avatars={['IJ', 'KL', '7']}
              progress={90}
              nextDeadline="Nov 02, 2023"
              statusDot="gray"
              statusText="Inactive: 2 days"
            />

            {/* Add new project card */}
            <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/80 p-10 transition-colors hover:border-slate-400 hover:bg-slate-100/80">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-3xl text-slate-400 shadow-sm ring-1 ring-slate-200">
                +
              </div>
              <p className="mt-4 text-base font-semibold text-slate-800">
                Add New Student Project
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Assign a team and select a template
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
