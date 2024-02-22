import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-community/styles/ag-grid.css';
import  { AgGridReact }  from 'ag-grid-react';
import React, { useState, useEffect } from 'react';


const CompanyLogoRenderer = ({ value }) => (
  <span
    style={{
      display: 'flex',
      height: '100%',
      width: '100%',
      alignItems: 'center',
    }}
  >
    {value && (
      <img
        alt={`${value} Flag`}
        src={`https://www.ag-grid.com/example-assets/space-company-logos/${value.toLowerCase()}.png`}
        style={{
          display: 'block',
          width: '25px',
          height: 'auto',
          maxHeight: '50%',
          marginRight: '12px',
          filter: 'brightness(1.1)',
        }}
      />
    )}
    <p
      style={{
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {value}
    </p>
  </span>
);

export default function TablePage() {
  const [rowData, setRowData] = useState([]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs] = useState([
    { field: 'mission', filter: true },
    { field: 'company', cellRenderer: CompanyLogoRenderer },
    { field: 'location' },
    { field: 'date' },
    { field: 'price' },
    { field: 'successful' },
    { field: 'rocket' },
  ]);

  // Fetch data & update rowData state
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json') // Fetch data from server
      .then((result) => result.json()) // Convert to JSON
      .then((res) => setRowData(res)); // Update state of `rowData`
  }, []);

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className="ag-theme-quartz"
      style={{ width: '100%', height: '100%' }}
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};
