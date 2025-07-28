import { z } from "zod";

export const employeeFormSchema = z.object({
  // Personal Info
  firstName: z.string().min(1, "required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "required"),
  nickname: z.string().optional(),
  extensionName: z.string().optional(),
  sex: z.string().min(1, "required"),
  birthdate: z.date("required"),
  birthplace: z.string().optional(),
  nationality: z.string().min(1, "required"),
  civilStatus: z.string().min(1, "required"),
  bloodType: z.string().min(1, "required"),

  // Contact Info
  personalEmail: z.string().min(1, "required"),
  phoneNumber: z.string().min(1, "required"),

  // Emergency Contacts
  emergencyContacts: z
    .array(
      z.object({
        name: z.string().optional(),
        contactNumber: z.string().optional(),
        relationship: z.string().optional(),
      })
    )
    .optional(),

  // Permanent Address
  buildingNumPermanent: z.string().optional(),
  streetPermanent: z.string().optional(),
  postalCodePermanent: z.string().min(1, "required"),
  countryPermanent: z.string().min(1, "required"),
  regionPermanent: z
    .object({
      code: z.string(),
      name: z.string(),
    })
    .catch({ code: "", name: "" })
    .refine((val) => !!val?.code, { message: "required" }),

  provincePermanent: z
    .object({
      code: z.string(),
      name: z.string(),
    })
    .catch({ code: "", name: "" })
    .refine((val) => !!val?.code, { message: "required" }),

  cityPermanent: z
    .object({
      code: z.string(),
      name: z.string(),
    })
    .catch({ code: "", name: "" })
    .refine((val) => !!val?.code, { message: "required" }),

  barangayPermanent: z
    .object({
      code: z.string(),
      name: z.string(),
    })
    .catch({ code: "", name: "" })
    .refine((val) => !!val?.code, { message: "required" }),

  // Present Address
  buildingNumPresent: z.string().optional(),
  streetPresent: z.string().optional(),
  postalCodePresent: z.string().min(1, "required"),
  countryPresent: z.string().min(1, "required"),

  regionPresent: z
    .object({
      code: z.string(),
      name: z.string(),
    })
    .catch({ code: "", name: "" })
    .refine((val) => !!val?.code, { message: "required" }),
  provincePresent: z
    .object({
      code: z.string(),
      name: z.string(),
    })
    .catch({ code: "", name: "" })
    .refine((val) => !!val?.code, { message: "required" }),
  cityPresent: z
    .object({
      code: z.string(),
      name: z.string(),
    })
    .catch({ code: "", name: "" })
    .refine((val) => !!val?.code, { message: "required" }),
  barangayPresent: z
    .object({
      code: z.string(),
      name: z.string(),
    })
    .catch({ code: "", name: "" })
    .refine((val) => !!val?.code, { message: "required" }),

  // Government Remittances
  governmentRemittances: z
    .array(
      z.object({
        type: z.string().min(1, "required"),
        acc_number: z.string().optional(),
      })
    )
    .optional(),

  // Employee Info
  employeeId: z.string().optional(),
  workEmail: z
    .email("invalid work email")
    .refine((val) => val.endsWith("@getfullsuite.com"), {
      message: "email must be a @getfullsuite.com",
    }),
  office: z.string().optional(),
  division: z.string().optional(),
  department: z.string().optional(),
  team: z.string().optional(),
  jobTitle: z.string().min(1, "required"),
  employmentStatus: z.string().min(1, "required"),
  jobLevel: z.string().min(1, "required"),
  employeeType: z.string().min(1, "required"),
  shift: z.string().min(1, "required"),
  supervisor: z
    .object({
      id: z.string(),
      email: z.string(),
      fname: z.string(),
      mname: z.string().nullable().optional(),
      lname: z.string(),
    })
    .refine((val) => !!val?.id, { message: "required" }),

  salaryBasePay: z.number().optional(),
  salaryType: z.string().optional(),
  docuUrl: z.string().optional(),

  // Employment Timeline
  dateHired: z.date().optional(),
  dateRegularized: z.date().optional(),
  dateOffboarded: z.date().optional(),
  dateSeparated: z.date().optional(),
});
