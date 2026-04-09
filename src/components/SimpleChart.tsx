interface DataPoint {
  label: string
  value: number
}

interface SimpleChartProps {
  data: DataPoint[]
  title: string
  color?: string
}

export default function SimpleChart({
  data,
  title,
  color = '#818cf8',
}: SimpleChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value))
  const minValue = Math.min(...data.map((d) => d.value))
  const range = maxValue - minValue || 1

  const padding = { top: 20, right: 20, bottom: 40, left: 50 }
  const width = 600
  const height = 280
  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom

  const points = data.map((d, i) => ({
    x: padding.left + (i / (data.length - 1)) * chartWidth,
    y: padding.top + chartHeight - ((d.value - minValue) / range) * chartHeight,
    ...d,
  }))

  const linePath = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
    .join(' ')

  const areaPath = `${linePath} L ${points[points.length - 1].x} ${padding.top + chartHeight} L ${points[0].x} ${padding.top + chartHeight} Z`

  const gridLines = 5
  const gridValues = Array.from(
    { length: gridLines },
    (_, i) => minValue + (range * i) / (gridLines - 1)
  )

  return (
    <div className="rounded-2xl bg-slate-800/50 border border-slate-700/50 p-5 sm:p-6 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full min-w-[400px]"
          role="img"
          aria-label={`${title} chart`}
        >
          <defs>
            <linearGradient
              id="areaGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {gridValues.map((val, i) => {
            const y =
              padding.top +
              chartHeight -
              ((val - minValue) / range) * chartHeight
            return (
              <g key={i}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={padding.left + chartWidth}
                  y2={y}
                  stroke="#334155"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <text
                  x={padding.left - 8}
                  y={y + 4}
                  textAnchor="end"
                  fill="#94a3b8"
                  fontSize="11"
                  fontFamily="Inter, system-ui, sans-serif"
                >
                  {val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val.toFixed(0)}
                </text>
              </g>
            )
          })}

          {/* Area fill */}
          <path d={areaPath} fill="url(#areaGradient)" />

          {/* Line */}
          <path
            d={linePath}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {points.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="4" fill="#0f172a" stroke={color} strokeWidth="2.5" />
              <text
                x={p.x}
                y={padding.top + chartHeight + 24}
                textAnchor="middle"
                fill="#94a3b8"
                fontSize="11"
                fontFamily="Inter, system-ui, sans-serif"
              >
                {p.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}
