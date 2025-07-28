import { useController } from "react-hook-form";
import ControlledDynamicCombobox from "./ControlledDynamicComboBox";

const EMPLOYEE_OPTIONS = [
  {
    id: "OCCI-0001",
    email: "jane.doe@example.com",
    fname: "Jane",
    mname: "A.",
    lname: "Doe",
  },
  {
    id: "OCCI-0002",
    email: "john.smith@example.com",
    fname: "John",
    mname: "B.",
    lname: "Smith",
  },
  {
    id: "OCCI-0003",
    email: "maria.lopez@example.com",
    fname: "Maria",
    mname: "",
    lname: "Lopez",
  },
];

export default function EmployeeSearchCombobox({
  name,
  control,
  label = "Immediate Supervisor",
  required = false,
}) {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="space-y-1">
      <ControlledDynamicCombobox
        options={EMPLOYEE_OPTIONS}
        valueKey="id"
        label={label}
        required={required}
        value={field.value}
        onChange={field.onChange}
        getSearchable={(e) =>
          `${e.email} ${e.fname} ${e.mname} ${e.lname}`.toLowerCase()
        }
        placeholder="Select"
        error={error?.message}
      />
      {error && <p className="text-red-500 text-xs">{error.message}</p>}
    </div>
  );
}
