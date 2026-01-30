export function Sidebar() {
  const navItems = [
    { label: "Students", icon: "👥", active: false },
    { label: "Projects", icon: "📁", active: true },
    { label: "Analytics", icon: "📊", active: false },
    { label: "Settings", icon: "⚙️", active: false },
    { label: "Webhook Logs", icon: "</>", active: false },
  ];

  return (
    <aside className="flex h-full w-64 flex-col border-r border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
          <span className="text-lg">🎓</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">Admin Panel</p>
          <p className="text-xs text-slate-500">Management Dashboard</p>
        </div>
      </div>

      <nav className="flex-1 space-y-0.5 px-3 py-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
              item.active
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <span className="text-base opacity-90">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="border-t border-slate-200 px-4 py-4">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>Toggle Appearance</span>
          <span className="text-slate-400">🌙</span>
        </div>
      </div>
    </aside>
  );
}
