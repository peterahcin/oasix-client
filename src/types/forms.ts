// import { AssociatedFormPayload } from "../payload/forms";

type ControlType = 'text' | 'number' | 'dropdown' | 'float';

interface SelectOption {
    label: string;
    value: string;
}

interface FieldConfig {
    required?: string;
    maxLength?: {
        value: number;
        message: string;
    };
    minLength?: {
        value: number;
        message: string;
    };
    min?: {
        value: number;
        message: string;
    },
    max?: {
        value: number;
        message: string;
    }
}

export interface FormFields {
    label: string;
    inputType: ControlType;
    fieldName: string;
    defaultValue: string | number;
    options?: SelectOption[];
    config?: FieldConfig;
    
}

export interface Form {
    label: string;
    fields: FormFields[];
}


// export interface AssociatedForm extends AssociatedFormPayload {
//   id: number;
// }
