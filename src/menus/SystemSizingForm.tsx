import React, { useState, useEffect } from "react";
// import { ErrorMessage } from "@hookform/error-message";
import { FormProvider, useForm } from "react-hook-form";
// import { FormWithEditableGroupFormIDAndNoAssociatedYear } from "../FormGenerator";
import { DynamicFormInputControl } from "../components/forms/DynamicFormInputControl";
// import { createData, editData } from "../../api/rest/data";
// import { DataPayload } from "../../api/models/payload/data";
// import { fetchTemplate } from "../../api/rest/forms";
import { FormEntryObject } from "../types/data";
import { FormFields } from "../types/forms";
import { FormConfigFile } from "../components/forms/data";
import * as S from "../components/forms/Form.styled";

export const SystemSizingForm = () => {
  const formMethods = useForm();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = formMethods;
  const [selectedForm, setSelectedForm] = useState<any>(FormConfigFile[0]);
  const onSubmit = async (data: FormEntryObject) => {
    console.log("form data is", data);
    // const payload: DataPayload = { group_form_id: selectedForm.group_form_id };

    // selectedForm.fields.forEach((field: FormFields) => {
    //   if (data.hasOwnProperty(field.fieldName as keyof DataPayload)) {
    //     payload[field.fieldName] =
    //       //this is needed to send 0 to the database
    //       field.inputType === "number"
    //         ? data[field.fieldName]
    //         : data[field.fieldName]
    //         ? data[field.fieldName]
    //         : null;
    //   }
    // });
    // console.log("payload is", payload);
    try {
      // const response = await createData(selectedForm.label, selectedEntry.id, payload)
      // console.log("response from creating or editing is", response);
      reset();
    } catch (error) {
      console.error("Error creating or updating data.", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line
  }, [selectedForm]);

  return (
    <S.InfoSection>
      <S.Form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
        <S.GridContainer>
          <FormProvider {...formMethods}>
            {selectedForm &&
              selectedForm.fields.map((d: FormFields, i: number) => (
                <div key={`${d.fieldName}-${i}`}>
                  <S.InfoItem>
                    <DynamicFormInputControl
                      closed={false}
                      {...d}
                      // selectedEntry={selectedEntry ? selectedEntry : null}
                    />
                  </S.InfoItem>
                  {/* <S.RedErrorMessageContainer>
                    <ErrorMessage errors={errors} name={d.fieldName} />
                  </S.RedErrorMessageContainer> */}
                </div>
              ))}
          </FormProvider>
        </S.GridContainer>
        <S.ButtonContainer>
          <S.Button
            id="right"
            type="submit"
            // create={true}
            // disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </S.Button>
        </S.ButtonContainer>
      </S.Form>
    </S.InfoSection>
  );
};
