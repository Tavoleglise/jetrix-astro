import { Input, Textarea } from "@nextui-org/react";

const ContactForm = () => {
  return (
    <div>
      <form action="">
        <Input type="email" label="Email" />
        <div className="flex ">
          <Input type="email" label="Email" />
          <Input type="email" label="Email" />
        </div>
        <Textarea
          label="Description"
          placeholder="Enter your description"
          className="max-w-xs"
        />
      </form>
    </div>
  );
};

export default ContactForm;
