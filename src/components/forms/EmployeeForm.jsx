import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { employeeFormSchema } from "./schemas/employeeSchema";
import FormLayout from "./FormLayout";
import TextField from "./fields/TextField";
import DropdownField from "./fields/DropdownField";
import DatepickerField from "./fields/DatePickerField";
import AddressFields from "./fields/AddressFields";
import FormActions from "./buttons/FormActions";
import { useState } from "react";
import GovernmentRemittancesSection from "./fields/dynamic-fields/GovernmentRemittancesSectionFields";
import EmergencyContactsSection from "./fields/dynamic-fields/EmergencyContactsSectionFields";
import EmployeeSearchCombobox from "./fields/dynamic-fields/EmployeeSearchCombobox";

const EmployeeForm = ({ onSubmit, onCancel }) => {
  const form = useForm({
    resolver: zodResolver(employeeFormSchema),
    mode: "onSubmit",
    defaultValues: {
      // Personal Info
      firstName: "",
      middleName: "",
      lastName: "",
      nickname: "",
      extensionName: "",
      sex: "",
      birthdate: undefined,
      birthplace: "",
      nationality: "",
      civilStatus: "",
      bloodType: "",

      // Contact Info
      personalEmail: "",
      phoneNumber: "",

      // Emergency Contacts
      emergencyContacts: [
        {
          name: "",
          contactNumber: "",
          relationship: "",
        },
      ],

      // Permanent Address
      countryPermanent: "",
      regionPermanent: { code: "", name: "" },
      provincePermanent: { code: "", name: "" },
      cityPermanent: { code: "", name: "" },
      barangayPermanent: { code: "", name: "" },
      postalCodePermanent: "",

      buildingNumPermanent: "",
      streetPermanent: "",

      // Present Address
      countryPresent: "",
      regionPresent: { code: "", name: "" },
      provincePresent: { code: "", name: "" },
      cityPresent: { code: "", name: "" },
      barangayPresent: { code: "", name: "" },
      postalCodePresent: "",
      buildingNumPresent: "",
      streetPresent: "",

      // Government Remittances
      governmentRemittances: [
        { type: "SSS", acc_number: "" },
        { type: "PHIC", acc_number: "" },
        { type: "HDMF", acc_number: "" },
        { type: "TIN", acc_number: "" },
      ],

      // Employee Info
      employeeId: "",
      workEmail: "",
      office: "",
      division: "",
      department: "",
      team: "",
      jobTitle: "",
      employmentStatus: "",
      jobLevel: "",
      employeeType: "",
      shift: "",
      supervisor: {id: "",
          email: "",
          fname: "",
          mname: "",
          lname:"" },
      salaryBasePay: 0,
      salaryType: "",
      docuUrl: "",

      // Employment Timeline
      dateHired: undefined,
      dateRegularized: undefined,
      dateOffboarded: undefined,
      dateSeparated: undefined,
    },
  });

  const [copy, setCopy] = useState(false);

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  return (
    <FormLayout form={form} onSubmit={onSubmit}>
      <div>
        <h2 className="text-sm font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <TextField
            name="firstName"
            label="First Name"
            control={form.control}
            required
          />
          <TextField
            name="middleName"
            label="Middle Name"
            control={form.control}
          />
          <TextField
            name="lastName"
            label="Last Name"
            control={form.control}
            required
          />
          
          <TextField name="extensionName" label="Extension Name (e.g. 'Jr.','II', etc.)" control={form.control} />
          <TextField name="nickname" label="Nickname" control={form.control} />
          <DropdownField
            name="sex"
            label="Sex"
            control={form.control}
            options={["Male", "Female"]}
            required
          />
          <DropdownField
            name="civilStatus"
            label="Civil Status"
            control={form.control}
            options={["Single", "Married", "Widowed", "Divorced"]}
            required
          />
          <DatepickerField
            name="birthdate"
            label="Birthdate"
            control={form.control}
            required
          />

          <TextField
            name="birthplace"
            label="Birthplace"
            control={form.control}
          />
          <TextField
            name="nationality"
            label="Nationality"
            control={form.control}
            required
          />

          <DropdownField
            name="bloodType"
            label="Blood Type"
            control={form.control}
            options={["A", "B", "AB", "O", "Unknown"]}
          />
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <TextField
            name="personalEmail"
            label="Personal Email"
            control={form.control}
            type="email"
            placeholder="you@gmail.com"
            required
          />
          <TextField
            name="phoneNumber"
            label="Phone Number"
            control={form.control}
            type="tel"
            placeholder="09XXXXXXXXX"
            required
          />
        </div>
      </div>

      <div>
        <EmergencyContactsSection />
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-4">Addresses</h2>

        <AddressFields
          control={form.control}
          watch={form.watch}
          setValue={form.setValue}
          trigger={form.trigger}
          prefix="permanent"
          sectionLabel="Permanent Address"
        />
        <div className="py-3"></div>
        <AddressFields
          control={form.control}
          watch={form.watch}
          setValue={form.setValue}
          trigger={form.trigger}
          prefix="present"
          sectionLabel="Current Address"
          enableCopyFrom
          copyFromPrefix="permanent"
          isCopyEnabled={copy}
          onCopyToggle={setCopy}
        />
      </div>
      <div>
        <GovernmentRemittancesSection />
      </div>
      <div>
        <h2 className="text-sm font-semibold mb-4">Employee Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <TextField
            name="employeeId"
            label="Employee ID"
            control={form.control}
            placeholder="OCCI-0000"
          />
          <TextField
            name="workEmail"
            label="Work Email"
            control={form.control}
            type="email"
            placeholder="you@getfullsuite.com"
            required
          />
          <TextField name="office" label="Office" control={form.control} />
          <TextField name="division" label="Division" control={form.control} />
          <TextField
            name="department"
            label="Department"
            control={form.control}
          />
          <TextField name="team" label="Team" control={form.control} />
          <TextField
            name="jobTitle"
            label="Job Title"
            control={form.control}
            required
          />
          <DropdownField
            name="employmentStatus"
            label="Employment Status"
            control={form.control}
            options={["Regular", "Probationary", "Internship", "Terminated"]}
            required
          />
          <DropdownField
            name="jobLevel"
            label="Job Level"
            control={form.control}
            options={["Pre-band", "Band 1", "Band 2", "Band 3"]}
            required
          />{" "}
          <DropdownField
            name="employeeType"
            label="Employee Type"
            control={form.control}
            options={["Rank", "Non-Rank"]}
            required
          />{" "}
          <DropdownField
            name="shift"
            label="Shift"
            control={form.control}
            options={[
              "DAY SHIFT (7:00 am - 4:00 pm)",
              "MID SHIFT (2:00 pm - 11:00 pm)",
              "NIGHT SHIFT (12:00 am - 9:00 am)",
            ]}
            required
          />
          <EmployeeSearchCombobox
            name="supervisor"
            control={form.control}
            required
          />
          <TextField
            name="salaryBasePay"
            label="Salary Base Pay"
            type="number"
            control={form.control}
          />
          <DropdownField
            name="salaryType"
            label="Salary Type"
            control={form.control}
            options={["STARTING", "INCREASE", "CORRECTION"]}
          />
          <TextField name="docuUrl" placeholder={"https://drive.google.com/..."} label="Document URL (Google Drive Folder Link)" type="url" control={form.control} />

        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-4">Employment Timeline</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <DatepickerField
            name="dateHired"
            label="Date Hired"
            control={form.control}
          />
          <DatepickerField
            name="dateRegularized"
            label="Date Regularized"
            control={form.control}
          />
          <DatepickerField
            name="dateOffboarded"
            label="Date Offboarded"
            control={form.control}
          />
          <DatepickerField
            name="dateSeparated"
            label="Date Separated"
            control={form.control}
          />
        </div>
      </div>
      <FormActions
        isLoading={isSubmitting}
        onCancel={onCancel}
        submitLabel="Submit"
        cancelLabel="Cancel"
        loadingLabel="Saving..."
      />
    </FormLayout>
  );
};

export default EmployeeForm;
