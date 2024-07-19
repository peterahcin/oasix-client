import { Form } from "../types/forms"

export const FormConfigFile: Form[] = 
[
  {
    label: "project",
    fields: [
      {
        fieldName: "name",
        inputType: "text",
        label: "Project name",
        defaultValue: "",
        config: {
          required: "Required",
          maxLength: {
            value: 128,
            message: "Maximum length is 15 characters"
          },
          minLength: {
            value: 2,
            message: "Minimum length is 2 characters"
          }
        }
      },
      {
        fieldName: "description",
        inputType: "text",
        label: "Description",
        defaultValue: "",
        config: {
          required: "Required",
          maxLength: {
            value: 512,
            message: "Maximum length is 15 characters"
          },
          minLength: {
            value: 2,
            message: "Minimum length is 2 characters"
          }
        }
      },
      {
        fieldName: "owner",
        inputType: "text",
        label: "Owner",
        defaultValue: "",
        config: {
          required: "Required",
          maxLength: {
            value: 128,
            message: "Maximum length is 15 characters"
          },
          minLength: {
            value: 2,
            message: "Minimum length is 2 characters"
          }
        }
      }
    ]
  }

]
