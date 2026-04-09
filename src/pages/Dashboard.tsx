import { useNavigate } from 'react-router-dom'
import MetricCard from '../components/MetricCard'
import SimpleChart from '../components/SimpleChart'
import TransactionTable from '../components/TransactionTable'

const revenueData = [
  { label: 'Jan', value: 4200 },
  { label: 'Fev', value: 5800 },
  { label: 'Mar', value: 5100 },
  { label: 'Abr', value: 7200 },
  { label: 'Mai', value: 6800 },
  { label: 'Jun', value: 8400 },
  { label: 'Jul', value: 9100 },
]

const transactions = [
  {
    id: '1',
    customer: 'Ana Silva',
    amount: 'R$ 2.450,00',
    status: 'completed' as const,
    date: '09 Abr 2026',
  },
  {
    id: '2',
    customer: 'Carlos Oliveira',
    amount: 'R$ 1.890,00',
    status: 'completed' as const,
    date: '08 Abr 2026',
  },
  {
    id: '3',
    customer: 'Marina Costa',
    amount: 'R$ 3.200,00',
    status: 'pending' as const,
    date: '08 Abr 2026',
  },
  {
    id: '4',
    customer: 'Pedro Santos',
    amount: 'R$ 980,00',
    status: 'failed' as const,
    date: '07 Abr 2026',
  },
  {
    id: '5',
    customer: 'Julia Ferreira',
    amount: 'R$ 4.100,00',
    status: 'completed' as const,
    date: '07 Abr 2026',
  },
]

export default function Dashboard() {
  const navigate = useNavigate()

  function handleLogout() {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 size-96 rounded-full bg-primary-600/8 blur-3xl" />
        <div className="absolute top-1/2 -left-40 size-80 rounded-full bg-primary-500/5 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-9 rounded-xl bg-primary-500/15 text-primary-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Axon
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-full bg-primary-500/20 text-primary-300 text-sm font-semibold">
                  SC
                </div>
                <span className="text-sm font-medium text-slate-300">
                  Sarah Chen
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-white hover:bg-slate-800"
                aria-label="Sair da conta"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="hidden sm:inline">Sair</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Page title */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Visao geral do seu negocio
          </p>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <MetricCard
            title="Usuarios ativos"
            value="2.847"
            change="+12.5%"
            changeType="positive"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
                aria-hidden="true"
              >
                <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z" />
              </svg>
            }
          />
          <MetricCard
            title="Vendas do mes"
            value="1.234"
            change="+8.2%"
            changeType="positive"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
          <MetricCard
            title="Taxa de conversao"
            value="3.24%"
            change="-0.4%"
            changeType="negative"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.577 4.878a.75.75 0 0 1 .919-.53l4.78 1.281a.75.75 0 0 1 .531.919l-1.281 4.78a.75.75 0 0 1-1.449-.387l.81-3.022a19.407 19.407 0 0 0-5.594 5.203.75.75 0 0 1-1.139.093L7 10.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06l5.25-5.25a.75.75 0 0 1 1.06 0l3.046 3.045a20.904 20.904 0 0 1 5.441-5.185l-2.91.78a.75.75 0 0 1-.53-.919Z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
          <MetricCard
            title="Receita total"
            value="R$ 84.2k"
            change="+23.1%"
            changeType="positive"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.732 6.232a2.5 2.5 0 0 1 3.536 0 .75.75 0 1 0 1.06-1.06A4 4 0 0 0 6.5 8v.165c0 .364.034.728.1 1.085h-.35a.75.75 0 0 0 0 1.5H7.3c.42.89 1.108 1.622 1.943 2.086l-.47 1.564a.75.75 0 0 0 1.454.436l.338-1.126A4.03 4.03 0 0 0 11.5 14a4 4 0 0 0 3.107-1.475.75.75 0 0 0-1.164-.944A2.5 2.5 0 0 1 9.232 9.25H11.5a.75.75 0 0 0 0-1.5H8.68a4.06 4.06 0 0 1-.048-.635V7a2.5 2.5 0 0 1 .1-.768Z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
        </div>

        {/* Chart */}
        <div className="mt-6 sm:mt-8">
          <SimpleChart data={revenueData} title="Receita mensal" />
        </div>

        {/* Transactions table */}
        <div className="mt-6 sm:mt-8 pb-8">
          <TransactionTable transactions={transactions} />
        </div>
      </main>
    </div>
  )
}
