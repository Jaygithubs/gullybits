"use client";

export default function Table({ columns = [], data = [] }) {
  return (
    <div className="card overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[var(--color-primary-light)] text-left">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-sm font-semibold text-[var(--color-primary)]"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-6 text-center text-sm text-[var(--color-muted)]"
              >
                No data found
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={row._id || rowIndex}
                className="
                  border-b border-[var(--color-border)]
                  hover:bg-[var(--color-primary-light)]
                  transition-colors duration-200
                "
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="px-4 py-3 text-sm text-[var(--color-text)]"
                  >
                    {row[col.key] ?? "-"}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
