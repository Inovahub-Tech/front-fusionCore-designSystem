
import Table from "./Table";
import { columns, rows } from "./utils/data/utilData";



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
      url: "https://www.figma.com/file/OlpApHLkO9ynQq4FfUeDkI/Fusion-Core?node-id=19%3A2490&mode=dev",
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
    rows: rows,
    columns: columns,
    pageSize: 7,
  },
};

