import ControlledDynamicSelectTextFields from "./ControlledDynamicSelectTextFields";

const GOV_OPTIONS = [
  { label: "SSS", value: "SSS" },
  { label: "PHIC", value: "PHIC" },
  { label: "HDMF", value: "HDMF" },
  { label: "TIN", value: "TIN" },
  { label: "PhilCare", value: "PhilCare" },
  { label: "UnionBank", value: "UnionBank" },
];

export default function GovernmentRemittancesSection() {
  return (
    <ControlledDynamicSelectTextFields
      name="governmentRemittances"
      label="Government Remittances"
      selectOptions={GOV_OPTIONS}
      selectField="type"
      inputField="acc_number"
      selectPlaceholder="Select ID Type"
      inputPlaceholder="Enter ID number"
      disableSelectedOptions={true}
      maxFields={GOV_OPTIONS.length}
    />
  );
}
