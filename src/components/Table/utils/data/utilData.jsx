import Button from "../../../Button/Button";

import { PlusIcon } from "@heroicons/react/24/outline";
import Toggle from "../../../Toggle/Toggle";



export const columns = [
  { field: "title1", headerName: "Title 1", width: 116 },
  { field: "title2", headerName: "Title 2", width: 116 },
  { field: "title3", headerName: "Title 3", width: 116 },
  { field: "title4", headerName: "Title 4", width: 116 },
  { field: "title5", headerName: "Title 5", width: 116 },
  {
    field: "title6",
    headerName: "Title 6",
    aling: "center",
    width: 116,
    renderCell: (params) => {
      console.log(params);
      return <Toggle label={""} />;
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 116,
    colSpan: 3,
    headerClassName: "actionsColumn menuNone",
    sortable: false,
    filterable: false,
    renderCell: (params) => {
      console.log(params);
      const handleClick = () => {
        console.log("clicked");
      };

      const actions = [
        {
          name: "action1",
          function: handleClick,
          id: "1",
        },
        {
          name: "action2",
          function: handleClick,
          id: "2",
        },
        {
          name: "action3",
          function: handleClick,
          id: "3",
        },
      ];

      return (
        <div className="flex items-start justify-start  gap-2">
          {actions.map((action, index) => {
            return (
              <Button
                key={index}
                onlyIcon
                backgroundColor="primary"
                onClick={action.function}
                id={action.id}
                color={"white"}
                size='small'
                icon={<PlusIcon />}
              />
            );
          })}
        </div>
      );
    }
  }

];

export const rows = [
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
  {
    id: 8,
    title1: "User Text",
    title2: "User Text",
    title3: "User Text",
    title4: "User Text",
    title5: "User Text",
  },
  {
    id: 9,
    title1: "User Text",
    title2: "User Text",
    title3: "User Text",
    title4: "User Text",
    title5: "User Text",
  },
  {
    id: 10,
    title1: "User Text",
    title2: "User Text",
    title3: "User Text",
    title4: "User Text",
    title5: "User Text",
  },
  {
    id: 11,
    title1: "User Text",
    title2: "User Text",
    title3: "User Text",
    title4: "User Text",
    title5: "User Text",
  },
  {
    id: 12,
    title1: "User Text",
    title2: "User Text",
    title3: "User Text",
    title4: "User Text",
    title5: "User Text",
  },
  {
    id: 13,
    title1: "User Text",
    title2: "User Text",
    title3: "User Text",
    title4: "User Text",
    title5: "User Text",
  },
  {
    id: 14,
    title1: "User Text",
    title2: "User Text",
    title3: "User Text",
    title4: "User Text",
    title5: "Util",
  },


];
