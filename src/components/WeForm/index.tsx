import { FormProvider, useForm } from "react-hook-form";
import { Form, FormProps } from "@tarojs/components";
import React, { FC, memo, useMemo } from "react";
import { UseFormReturn } from "react-hook-form/dist/types";

type WeFormProps = {
  onSubmit?: (agr: any) => void;
  children?: React.ReactNode | undefined;
  form?: UseFormReturn
}

const WeForm: FC<WeFormProps> = (props) => {
  const {
    children
  } = props
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const methods = useMemo(() => props?.form || useForm(), [props?.form])
  const { handleSubmit, reset } = methods

  // handleSubmit((data) => setData(JSON.stringify(data)))

  const onSubmit: FormProps['onSubmit'] = () => {
    // @ts-ignore
    handleSubmit(props?.onSubmit)()
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={onSubmit} onReset={() => reset()} className="weui-form">
        <div className="weui-form__control-area">
          {children}
        </div>
      </Form>
    </FormProvider>
  )
}

export default memo(WeForm)
