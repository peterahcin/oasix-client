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
        fieldName: "heat_pump_size",
        inputType: "text",
        label: "Heat Pump Size",
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
        fieldName: "hot_storage_size",
        inputType: "text",
        label: "Hot Storage Size",
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
        fieldName: "hot_storage_kilos",
        inputType: "text",
        label: "Hot Storage Kilos",
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
        fieldName: "cold_storage_size",
        inputType: "text",
        label: "Cold Storage Size",
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
        fieldName: "cold_storage_kilos",
        inputType: "text",
        label: "Cold Storage Kilos",
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
  simulationParameters: {
    label: "simulation_parameters",
    fields: [
      {
        fieldName: "heating_required_per_year",
        inputType: "text",
        label: "Heating Required Per Year",
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
        fieldName: "cooling_required_per_year",
        inputType: "text",
        label: "Cooling Required Per Year",
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
      }
    ]
  }

}
