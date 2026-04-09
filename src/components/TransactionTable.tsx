interface Transaction {
  id: string
  customer: string
  amount: string
  status: 'completed' | 'pending' | 'failed'
  date: string
}

interface TransactionTableProps {
  transactions: Transaction[]
}

export default function TransactionTable({
  transactions,
}: TransactionTableProps) {
  const statusStyles = {
    completed:
      'bg-emerald-400/10 text-emerald-400',
    pending:
      'bg-amber-400/10 text-amber-400',
    failed:
      'bg-red-400/10 text-red-400',
  }

  const statusLabels = {
    completed: 'Concluido',
    pending: 'Pendente',
    failed: 'Falhou',
  }

  return (
    <div className="rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm overflow-hidden">
      <div className="p-5 sm:p-6 pb-0 sm:pb-0">
        <h3 className="text-lg font-semibold text-white">
          Ultimas transacoes
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          As 5 transacoes mais recentes
        </p>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b border-slate-700/50">
              <th
                scope="col"
                className="px-5 sm:px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider"
              >
                Cliente
              </th>
              <th
                scope="col"
                className="px-5 sm:px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider"
              >
                Valor
              </th>
              <th
                scope="col"
                className="px-5 sm:px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-5 sm:px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider"
              >
                Data
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/30">
            {transactions.map((tx) => (
              <tr
                key={tx.id}
                className="transition-colors hover:bg-slate-700/20"
              >
                <td className="px-5 sm:px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-8 rounded-full bg-primary-500/15 text-primary-400 text-xs font-semibold">
                      {tx.customer
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .slice(0, 2)}
                    </div>
                    <span className="text-sm font-medium text-white">
                      {tx.customer}
                    </span>
                  </div>
                </td>
                <td className="px-5 sm:px-6 py-4 text-sm text-slate-300">
                  {tx.amount}
                </td>
                <td className="px-5 sm:px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[tx.status]}`}
                  >
                    {statusLabels[tx.status]}
                  </span>
                </td>
                <td className="px-5 sm:px-6 py-4 text-sm text-slate-400">
                  {tx.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
