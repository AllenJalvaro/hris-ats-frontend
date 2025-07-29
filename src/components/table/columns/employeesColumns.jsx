export const employeeColumns = [
      {
    accessorKey: "employee_id",
    header: "ID",
    cell: ({ row }) => {
      const employeeId = row.original.employee_id;
      return <span className="text-xs">{employeeId || "N/A"}</span>;
    }
  },
  {
    accessorKey: "employee",
    header: "Employee",
    cell: ({ row }) => {
      const employee = row.original;
      const fullName = `${employee.first_name} ${employee.middle_name} ${employee.last_name}`;

      return (
        <div className="flex items-center gap-2 mr-10">
          <img
            src={employee.profile_picture || "https://media.licdn.com/dms/image/v2/D4E03AQE9_e2ch1jbPQ/profile-displayphoto-shrink_200_200/B4EZcaXxzwHsAY-/0/1748494130866?e=2147483647&v=beta&t=5v8OZvy7SDPiHXtuukKAa6UNTG6bBfiCe2TV3bf3kX4"}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <span className="text-xs font-medium">{fullName}</span>
            <span className="text-xs text-gray-500 ">{employee.email}</span>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "job_title",
    header: "Job Title",
    cell: ({ row }) => {
      const jobTitle = row.original.job_title;
      return <span className="text-xs">{jobTitle || "N/A"}</span>;
    },
  },
  {
    accessorKey: "date_hired",
    header: "Date Hired",
    cell: ({ row }) => {
      const dateHired = row.original.date_hired;
      return <span className="text-xs">{dateHired || "N/A"}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return <span className="text-xs">{status || "N/A"}</span>;
    },
  },
  {
    accessorKey: "regularization_date",
    header: "Regularization Date",
    cell: ({ row }) => {
      const regularizationDate = row.original.regularization_date;
      return <span className="text-xs">{regularizationDate || "N/A"}</span>;
    },
  },
];

