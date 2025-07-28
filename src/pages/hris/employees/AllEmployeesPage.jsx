import { useEffect, useState } from "react";
import { useHeader } from "@/context/HeaderContext";
import { Button } from "@/components/ui/button";
import { employeesData } from "@/mocks/employeesMockData";
import { employeeColumns } from "@/components/table/columns/employeesColumns";
import DataTable from "@/components/table/table-components/DataTable";
import { FILTER_TYPES } from "@/components/filters/types";
import { useNavigate } from "react-router-dom";
import FilterIcon from "@/assets/icons/FilterIcon";
import ArrowHeadDownIcon, {
  ArrowHeadUpIcon,
} from "@/assets/icons/ArrowHeadIcon";
import FilterSidebar from "@/components/filters/FilterSidebar";
import CanAccess from "@/utils/CanAccess";

const filters = [
  {
    key: "status",
    label: "Status",
    type: FILTER_TYPES.CHECKBOX,
    options: [
      { value: "active", label: "Regular" },
      { value: "inactive", label: "Probationary" },
    ],
  },
  {
    key: "date_range",
    type: FILTER_TYPES.DATE_RANGE,
    label: "Date Hired",
    defaultValue: [null, null],
  },
];

const AllEmployeesPage = () => {
  const { setHeaderConfig } = useHeader();
  const navigate = useNavigate();

  useEffect(() => {
    setHeaderConfig({
      title: "All Employees",
      description: "Manage all employees",
      button: (
        <CanAccess feature={"Add employee"}>
          <Button
            className="cursor-pointer !text-sm !text-white !bg-[#609899] hover:!bg-[#67a2a3] border-none"
            onClick={() => {
              navigate("/add-employee");
            }}
        >
          + Add Employee
        </Button></CanAccess>
      ),
    });
  }, []);

  const handleApplyFilters = (appliedFilters) => {
    console.log("Filters applied:", appliedFilters);
  };
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => setShowFilters((prev) => !prev);

  const [localFilters, setLocalFilters] = useState({});

  useEffect(() => {
    const defaultValues = {};
    filters.forEach((filter) => {
      defaultValues[filter.key] =
        filter.defaultValue ||
        (filter.type === "range" ? [filter.min, filter.max] : []);
    });
    setLocalFilters(defaultValues);
  }, [filters]);

  // Check if any filter differs from its default value
  const hasFiltersApplied = filters.some((filter) => {
    const current = localFilters[filter.key];
    const defaultVal =
      filter.defaultValue ||
      (filter.type === "range" ? [filter.min, filter.max] : []);

    // Shallow comparison for array values
    if (Array.isArray(current) && Array.isArray(defaultVal)) {
      return (
        current.length !== defaultVal.length ||
        current.some((val, idx) => val !== defaultVal[idx])
      );
    }

    return current !== defaultVal;
  });

  const handleReset = () => {
    const reset = {};
    filters.forEach((filter) => {
      reset[filter.key] =
        filter.defaultValue ||
        (filter.type === "range" ? [filter.min, filter.max] : []);
    });
    setLocalFilters(reset);
    onApply(reset);
  };
  return (
    <div className="w-full">
      {/* Filter toggle sa mobile */}
      <div className="lg:hidden mb-4 flex justify-end text-sm font-medium text-primary-color">
        <div
          onClick={toggleFilters}
          className="flex items-center gap-1 cursor-pointer select-none"
        >
          <FilterIcon /> <span>Filters</span>
          {showFilters ? <ArrowHeadUpIcon /> : <ArrowHeadDownIcon />}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 w-full">
        {showFilters && (
          <div className="block lg:hidden w-full">
            <FilterSidebar
              filters={filters}
              onApply={handleApplyFilters}
              localFilters={localFilters}
              setLocalFilters={setLocalFilters}
              hasFiltersApplied={hasFiltersApplied}
              handleReset={handleReset}
            />
          </div>
        )}

        <div className="w-full lg:w-[80%] bg-white shadow-xs rounded-lg p-5">
          <DataTable
            columns={employeeColumns}
            data={employeesData}
            searchKeys={[
              "employee_id",
              "email",
              "job_title",
              (item) =>
                `${item.first_name} ${item.middle_name || ""} ${
                  item.last_name
                }`.trim(),
              (item) =>
                `${item.first_name} ${item.last_name} ${
                  item.middle_name || ""
                }`.trim(),
              (item) =>
                `${item.last_name} ${item.first_name} ${
                  item.middle_name || ""
                }`.trim(),
            ]}
            onRowClick={(row) => console.log("Clicked row:", row)}
          />
        </div>

        <div className="hidden lg:block lg:w-[20%] min-w-[180px] max-w-sm">
          <FilterSidebar
            filters={filters}
            onApply={handleApplyFilters}
            localFilters={localFilters}
            setLocalFilters={setLocalFilters}
            hasFiltersApplied={hasFiltersApplied}
            handleReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
};

export default AllEmployeesPage;
