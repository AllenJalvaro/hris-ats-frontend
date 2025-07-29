import { Form } from "@/components/ui/form";

const FormLayout = ({ form, onSubmit, children }) => (
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 w-full mb-5">
      {children}
    </form>
  </Form>
);

export default FormLayout;