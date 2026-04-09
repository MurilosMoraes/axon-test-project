interface MetricCardProps {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative' | 'neutral'
  icon: React.ReactNode
}

export default function MetricCard({
  title,
  value,
  change,
  changeType,
  icon,
}: MetricCardProps) {
  const changeColor = {
    positive: 'text-emerald-400',
    negative: 'text-red-400',
    neutral: 'text-slate-400',
  }[changeType]

  const changeBg = {
    positive: 'bg-emerald-400/10',
    negative: 'bg-red-400/10',
    neutral: 'bg-slate-400/10',
  }[changeType]

  return (
    <article className="rounded-2xl bg-slate-800/50 border border-slate-700/50 p-5 sm:p-6 backdrop-blur-sm transition-colors hover:bg-slate-800/70">
      <div className="flex items-start justify-between">
        <div className="flex items-center justify-center size-10 rounded-xl bg-primary-500/15 text-primary-400">
          {icon}
        </div>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${changeBg} ${changeColor}`}
        >
          {changeType === 'positive' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-3"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {changeType === 'negative' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-3"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.75.75 0 0 1 .75.75v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.22 3.22V2.75A.75.75 0 0 1 8 2Z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {change}
        </span>
      </div>

      <div className="mt-4">
        <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {value}
        </p>
        <p className="mt-1 text-sm text-slate-400">{title}</p>
      </div>
    </article>
  )
}
