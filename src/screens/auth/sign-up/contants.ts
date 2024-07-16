interface InputField {
  label: string;
  placeholder: string;
  field: string;
  secureTextEntry?: boolean;
  required?: boolean;
}

const inputFields: InputField[] = [
  {
    label: "Name*",
    placeholder: "Enter your Name",
    field: "name",
    required: true,
  },
  { label: "Date Of Birth", placeholder: "Enter your DOB", field: "dob" },
  {
    label: "Email*",
    placeholder: "xyz@gmail.com",
    field: "email",
    required: true,
  },
  {
    label: "Password*",
    placeholder: "Enter your Password",
    field: "password",
    secureTextEntry: true,
    required: true,
  },
];
