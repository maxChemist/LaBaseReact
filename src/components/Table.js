import React from 'react'
import { useTable } from 'react-table'

const Table = () => {

  const data = React.useMemo(
    () => [
      {
        deliveryDate: "2021-08-03",
        idNumber: "7450-2021",
        number: "12",
        registrationTime: "1627980967571",
        sample: "Купаж",
        sampleBring: "Иванов",
        sampleRecieve: "Сташевский",
        samplingPlace: "Винцех",
        tankType: "Цистерна",
        teqStep: "Приготовление"
      },
      {
        deliveryDate: "2021-08-03",
        idNumber: "7450-2021",
        number: "12",
        registrationTime: "1627980967571",
        sample: "Купаж",
        sampleBring: "Иванов",
        sampleRecieve: "Сташевский",
        samplingPlace: "Винцех",
        tankType: "Цистерна",
        teqStep: "Приготовление"
      },
      {
        deliveryDate: "2021-08-03",
        idNumber: "7450-2021",
        number: "12",
        registrationTime: "1627980967571",
        sample: "Купаж",
        sampleBring: "Иванов",
        sampleRecieve: "Сташевский",
        samplingPlace: "Винцех",
        tankType: "Цистерна",
        teqStep: "Приготовление"
      }
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'deliveryDate 1',
        accessor: 'deliveryDate', // accessor is the "key" in the data
      },
      {
        Header: 'idNumber 2',
        accessor: 'idNumber',
      },
      {
        Header: 'sample 2',
        accessor: 'sample',
      },
      {
        Header: 'sampleBring 2',
        accessor: 'sampleBring',
      },

    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <div>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
