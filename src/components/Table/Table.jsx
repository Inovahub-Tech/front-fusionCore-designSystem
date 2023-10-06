import { Box } from "@mui/material";
import { DataGrid, esES } from "@mui/x-data-grid"
import PropTypes from "prop-types";
import './utils/styles/table.css'
import CustomPagination from "./utils/components/CustomPagination";

/**
 * Table Component
 *
 * This component renders a table to display data in organized rows and columns.
 * It provides customization options and functionalities such as sorting and pagination.
 * It also provides a set of default props that can be used to customize the table component.
 * */

const Table = ({ height, width, rows, columns, pageSize, isLoading, onPageChange, ...props }) => {

  return (
    <Box sx={{ height: height, width: width }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: pageSize },
          },
        }}

        loading={isLoading}
        onPageChange={onPageChange}
        disableColumnSelector
        disableColumnFilter
        disableSelectionOnClick

        autoHeight
        hideFooterSelectedRowCount
        onCellKeyDown={(params, event) => {
          event.stopPropagation();
        }}
        rowHeight={38}
        headerHeight={40}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        slotProps={{
          loadingOverlay: {
            style: { marginTop: "-1.1rem", zIndex: 4 },
            color: "secondary",
          },

        }}
        slots={{
          pagination: CustomPagination,
          filterPanel: null,

        }}

        {...props}
      />
    </Box>
  );
}




Table.propTypes = {
  /**
   * The height of the table
   * @param {number or string} height
   */
  height: PropTypes.string,
  /**
   * The width of the table
   * @param {number or string} width
   */
  width: PropTypes.string,
  /**
   * The columns of the table
   * @param {array} columns
   */
  columns: PropTypes.array.isRequired,
  /**
   * The rows of the table
   * @param {array} rows
   */
  rows: PropTypes.array.isRequired,

  /**
   * The page size of the table
   * @param {number} pageSize
   * @default 10
   */
  pageSize: PropTypes.number,

  /**
   * The loading state of the table
   * @param {boolean} isLoading
   */
  isLoading: PropTypes.bool,

  /**
   * The page change of the table
   * @param {function} onPageChange
   */
  onPageChange: PropTypes.func,

}

Table.defaultProps = {
  pageSize: 10,
  isLoading: false,
  onPageChange: () => { },
}

export default Table