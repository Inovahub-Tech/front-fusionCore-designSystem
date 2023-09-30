// import { Table } from "./Table";
// import { columns, rows } from "./utils/utilData";

// import { Button } from "../Button/Button";
import Button from "../Button/Button.jsx";
import Table from "./Table";

const columns = [
  { field: "title1", headerName: "Title 1", width: 116 },
  { field: "title2", headerName: "Title 2", width: 116 },
  { field: "title3", headerName: "Title 3", width: 116 },
  { field: "title4", headerName: "Title 4", width: 116 },
  { field: "title5", headerName: "Title 5", width: 116 },
  {
    field: "action",
    headerName: "Action",
    width: 108,
    renderCell: (params) => {
      console.log(params)
      const handleClick = () => {
        console.log("clicked");
      };

      return (
        <div className="flex items-start justify-start w-full">
          {/* <ToggleSwitch
          /> */}
          <Button
            buttonStyle="onlyIcon"
            backgroundColor={"primary"}
            onClick={handleClick}
            id="1"
          />

        </div>
      );

    },
  },
];

const rows = [
  {
    id: 1,
    title1: "User Text",
    title2: "User Text",
    title3: "User Text",
    title4: "User Text",
    title5: "User Text",
  },
  {
    id: 2,
    title1: "User Text",
    title2: "User Text",
    title3: "User Text",
    title4: "User Text",
    title5: "User Text",
  },
  {
    id: 3,
    title1: "User Text",
    title2: "User Text",
    title3: "User Text",
    title4: "User Text",
    title5: "User Text",
  },
  {
    id: 4,
    title1: "User Text",
    title2: "User Text",
    title3: "User Text",
    title4: "User Text",
    title5: "User Text",
  },
  {
    id: 5,
    title1: "User Text",
    title2: "User Text",
    title3: "User Text",
    title4: "User Text",
    title5: "User Text",
  },
  {
    id: 6,
    title1: "User Text",
    title2: "User Text",
    title3: "User Text",
    title4: "User Text",
    title5: "User Text",
  },
  {
    id: 7,
    title1: "User Text",
    title2: "User Text",
    title3: "User Text",
    title4: "User Text",
    title5: "User Text",
  },
];

export default {
  title: "components/Table",
  component: Table,
  parameters: {
    layout: "centered",
    status: {
      type: "released", // 'beta' | 'deprecated' | 'experimental' | 'released'
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/OlpApHLkO9ynQq4FfUeDkI/Fusion-Core?node-id=2%3A2173&mode=dev",
    },
  },
  // This component will have an automatically generated Autodocs page
  tags: ["autodocs"],
};

// More on writing stories with args


export const TablePrimary = {
  args: {
    height: "auto",
    width: "100%",
    row: rows,
    columns: columns,
    pageSize: 5,
  },
};

