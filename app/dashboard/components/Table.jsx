export default function Table({ headers, data, onDelete, onUpdate }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="p-2 text-center">
              {header.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((dataRow) => (
          <tr key={dataRow.id_contactanos} className="odd:bg-[#f2f2f2] h-[56px]">
            {headers.map((header) => (
              <td key={`${dataRow.id_contactanos}-${header}`} className="p-2 text-center">
                {dataRow[header]}
              </td>
            ))}

            {(onDelete || onUpdate) && (
              <td key={`actions-${dataRow.id}`} className="p-2 text-center">
                {onDelete && (
                  <button
                    className="bg-[#dc3545] text-white rounded-md px-3 py-2 m-2"
                    onClick={() => onDelete(dataRow.id)}
                  >
                    Eliminar
                  </button>
                )}
                {onUpdate && (
                  <button
                    className="bg-[#ffc107] rounded-md px-3 py-2 m-2"
                    onClick={() => onUpdate(dataRow.id)}
                  >
                    Editar
                  </button>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}