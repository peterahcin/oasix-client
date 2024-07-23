export const FormConfigFile = 
{
  newProject: {
    label: "start_new_project",
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
  },
  systemSizing: {
    label: "system_sizing",
    fields: [
        {
          fieldName: "cold_storage_capacity",
          inputType: "float",
            label: "Cold storage capacity",
            defaultValue: 0,
            config: {
                required: "Required",
                min: {value: 0, "message": "Should be greater or equal than 0"},
                max: {
                    value: 1e9,
                    message: "Value has to be smaller than 1,000,000,000",
                },
            },
        },
        {
            fieldName: "hot_storage_capacity",
            inputType: "float",
            label: "Hot storage capacity",
            defaultValue: 0,
            config: {
                required: "Required",
                min: {value: 0, message: "Should be greater or equal than 0"},
                max: {
                    value: 1e9,
                    message: "Value has to be smaller than 1,000,000,000",
                },
            },
        },
        {
            fieldName: "heat_pump_size",
            inputType: "float",
            label: "Heat pump size",
            defaultValue: 0,
            config: {
                required: "Required",
                min: {"value": 0, "message": "Should be greater or equal than 0"},
                max: {
                    value: 1e9,
                    message: "Value has to be smaller than 1,000,000,000",
                },
            },
        },
    ],
},

  simulationParameters: {
    label: "simulation_parameters",
    fields: [
        {
            fieldName: "load_profile",
            inputType: "dropdown",
            label: "Load profile",
            defaultValue: "",
            options: [
              {value: 1, label: 'test'}
          ],
            config: {"required": "Required"},
        },
        {
            fieldName: "hot_water",
            inputType: "float",
            label: "Hot water",
            defaultValue: 0,
            config: {
                required: "Required",
                min: {value: 0, message: "Should be greater or equal than 0"},
                max: {
                    value: 1e9,
                    message: "Value has to be smaller than 1,000,000,000",
                },
            },
        },
        {
            fieldName: "space_heating",
            inputType: "float",
            label: "Space heating",
            defaultValue: 0,
            config: {
                required: "Required",
                min: {value: 0, message: "Should be greater or equal than 0"},
                max: {
                    value: 1e9,
                    message: "Value has to be smaller than 1,000,000,000",
                },
            },
        },
        {
            fieldName: "cooling",
            inputType: "float",
            label: "Cooling",
            defaultValue: 0,
            config: {
                required: "Required",
                min: {value: 0, message: "Should be greater or equal than 0"},
                max: {
                    value: 1e9,
                    message: "Value has to be smaller than 1,000,000,000",
                },
            },
        },
    ],
}

}
