import { Box } from "@mui/material";
import { DataGrid, esES } from "@mui/x-data-grid"
import PropTypes from "prop-types";
import './utils/table.css'
import CustomPagination from "./utils/CustomPagination/CustomPagination";


const Table = ({ height, width, row, columns, pageSize, isLoading, onPageChange, ...props }) => {
  return (
    <Box sx={{ height: height, width: width }}>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={pageSize}

        loading={isLoading}
        onPageChange={onPageChange}
        disableColumnSelector
        autoHeight
        hideFooterSelectedRowCount

        rowHeight={40}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        slotProps={{
          filterPanel: null,
          pagination: CustomPagination
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
  height: PropTypes.number,
  /**
   * The width of the table
   * @param {number or string} width
   */
  width: PropTypes.number,
  /**
   * The columns of the table
   * @param {array} columns
   */
  columns: PropTypes.array.isRequired,
  /**
   * The rows of the table
   * @param {array} row
   */
  row: PropTypes.array.isRequired,

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