import ControlledDynamicTextFields from "./ControlledDynamicTextFields";

export default function EmergencyContactsSection() {
  return (
    <ControlledDynamicTextFields
      name="emergencyContacts"
      label="Emergency Contacts"
      fieldConfigs={[
        { name: "name", placeholder: "Full Name" },
        { name: "relationship", placeholder: "Relationship" },
        { name: "contactNumber", placeholder: "Phone Number" },
      ]}
      maxFields={5}
    />
  );
}
