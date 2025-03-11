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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M5 21V6H4V4h5V3h6v1h5v2h-1v15zm2-2h10V6H7zm2-2h2V8H9zm4 0h2V8h-2zM7 6v13z"/></svg>
                  </button>
                )}
                {onUpdate && (
                  <button
                    className="bg-[#ffc107] rounded-md px-3 py-2 m-2"
                    onClick={() => onUpdate(dataRow.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></g></svg>
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