import React from 'react'
import { useTable } from 'react-table'

const Table = ({tableArr,signalFlag}) => {
  const arr=[...tableArr]
  const data = React.useMemo(
    () => tableArr, []
  )
    
  const columns = React.useMemo(
    () => [
      {
        Header: 'Code',
        accessor: 'sampleId', // accessor is the "key" in the data
      },
      {
        Header: 'Name',
        accessor: 'strName',
      },
      {
        Header: 'deliveryFrom',
        accessor: 'deliveryFrom',
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
      {JSON.stringify(tableArr,null,3)}
    
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

    </div> 
  )
}

export default Table
