import EmployeeForm from "@/components/forms/EmployeeForm";
import { useHeader } from "@/context/HeaderContext";
import { extractDataForSaving } from "@/utils/extractData";
import { sanitizeData } from "@/utils/sanitizeData";
import { useEffect } from "react";

const AddEmployeePage = () => {
  const { setHeaderConfig } = useHeader();

  const handleSubmit = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); //sample lang para sa saving btn
    const cleanData = sanitizeData(formData);
    const payload = extractDataForSaving(cleanData);
    console.log("emp Data:", payload);
  };

  const handleCancel = () => {
    alert("Cancelled");
  };

  useEffect(() => {
    setHeaderConfig({
      title: "Add New Employee",
      description:
        "Fill out the form below to register a new employee and assign their details.",
    });
  }, []);

  return (
    <div className="flex rounded-md bg-white p-5 w-full">
      <EmployeeForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default AddEmployeePage;
