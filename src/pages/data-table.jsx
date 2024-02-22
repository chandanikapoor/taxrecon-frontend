import { Helmet } from 'react-helmet-async';
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import  { TableView }  from 'src/sections/data-table/view';

// ----------------------------------------------------------------------

export default function DataTablePage() {
  return (
    <>
      <Helmet>
        <title> User | dasd UI </title>
      </Helmet>

      <TableView />
    </>
  );
}
