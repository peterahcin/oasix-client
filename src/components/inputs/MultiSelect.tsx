import * as chroma from "chroma.ts";

import { colourOptions } from "./colorData/data";
import Select, { StylesConfig } from "react-select";
import { ColourOption } from "../../interfaces/interfaces";

const colourStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    borderRadius: 7,
    height: 45,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma.color(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma.color(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};

const MultiSelect = () => {
  return (
    <Select
      isMulti
      closeMenuOnSelect={false}
      defaultValue={[colourOptions[0], colourOptions[1]]}
      options={colourOptions}
      styles={colourStyles}
    />
  );
};

interface MultiSelectProps {
  colourOptions: readonly ColourOption[];
  defaultValues: ColourOption[];
  colourStyles: StylesConfig<ColourOption, true>;
  handleChange: any;
}

export const MultiSelectWithOptions: React.FC<MultiSelectProps> = (
  props: MultiSelectProps
) => {
  return (
    <Select
      isMulti
      closeMenuOnSelect={false}
      defaultValue={props.defaultValues}
      options={props.colourOptions}
      styles={props.colourStyles}
      onChange={props.handleChange}
    />
  );
};

export default MultiSelect;
