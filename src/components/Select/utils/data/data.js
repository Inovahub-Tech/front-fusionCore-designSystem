export function transformForSelect(data, labelField, valueField) {
  return data.map((item) => ({
    data: item,
    label: item[labelField],
    value: item[valueField],
  }));
}

export const dataOptions = [
  { id: 1, code: "op1", name: "Option 1" },
  { id: 2, code: "op2", name: "Option 2" },
  { id: 3, code: "op3", name: "Option 3" },
  { id: 4, code: "op4", name: "Option 4" },
  { id: 5, code: "op5", name: "Option 5" },
];