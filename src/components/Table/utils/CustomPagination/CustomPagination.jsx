import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { useState } from "react";
import { Pagination } from "@mui/material";
import '../table.css'

function CustomPagination() {
  const apiRef = useGridApiContext();
  const [page, setPage] = useState(
    useGridSelector(apiRef, gridPageSelector) + 1
  );
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  const handleChange = (event, value) => {
    setPage(value);
    apiRef.current.setPage(value - 1);
  };

  return (
    <div className="flex justify-start items-center gap-2 mt-8">
      <Pagination
        size={"medium"}
        count={pageCount}
        siblingCount={0}
        boundaryCount={1}
        onChange={handleChange}
        showFirstButton
        showLastButton
        sx={{ fontSize: 20 }}
      />
      <p className="font-mont text-[12px] text-[#C4C4C4]">
        Página {page} de {pageCount}
      </p>
    </div>
  );
}

export default CustomPagination;
