import React, {type FC, useMemo} from 'react'
import { useForm, FormProvider } from "react-hook-form"
import { Form, FormProps } from "@tarojs/components";
import {UseFormReturn} from "react-hook-form/dist/types";


type BzForm = {
  onSubmit?: (agr: any) => void;
  children?: React.ReactNode | undefined;
  form?: UseFormReturn
}

const BzForm: FC<BzForm> = (props) => {
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
      <Form onSubmit={onSubmit} onReset={() => reset()}>
        {children}
      </Form>
    </FormProvider>
  )
}

export default BzForm
