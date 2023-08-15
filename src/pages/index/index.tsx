import {useEffect} from "react";
import { Button, Input, View } from '@tarojs/components'
import { useForm } from "react-hook-form";
import Taro from "@tarojs/taro";

import BzForm from "@/components/BzForm";
import BzFormItem from "@/components/BzFormItem";

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import DatePicker from "./components/DatePicker";



const Index = () => {
  const form = useForm()

  const onSubmit = (e) => {
    console.log("onSubmit", e)
  }

  const handle = (e) => {
    console.log('e', e)
    const values = form?.getValues()
    console.log('values', values)
  }

  useEffect(() => {
    form?.setValue('name', 'useEffect')
  }, [])

  return (
    <View className="indexPage">

      <View className="container">
        <BzForm
          form={form}
          onSubmit={onSubmit}
        >
          <BzFormItem
            layout="vertical"
            required
            name="name"
            lable="客户名称"
            trigger="onInput"
            valueFormat={e => e.detail?.value}
          >
            <Input placeholder="请输入" />
          </BzFormItem>

          <BzFormItem
            required
            name="test"
            lable="客户类型"
            trigger="onInput"
            valueFormat={e => e.detail?.value}
          >
            <Input placeholder="请输入" />
          </BzFormItem>


          <BzFormItem
            layout="vertical"
            name="test2.test3"
            lable="测试层级"
            trigger="onInput"
            valueFormat={e => e.detail?.value}
          >
            <Input placeholder="请输入" />
          </BzFormItem>
          <BzFormItem
            name="name2.name3"
            lable="测试层级2"
            trigger="onInput"
            valueFormat={e => e.detail?.value}
          >
            <Input placeholder="请输入" />
          </BzFormItem>

          <BzFormItem
            name="test3"
            lable="测试弹窗"
            trigger="onChange"
            valueFormat={e => e}
            onClick={(_e, ref) => {
              ref?.current?.open()
            }}
          >
            <DatePicker title="测试弹窗" />
          </BzFormItem>


          <View style={{ marginTop: '20px' }}>
            <Button formType="submit">默认提交</Button>
            <Button formType="reset">重置</Button>
          </View>
        </BzForm>

        <Button onClick={() => form.handleSubmit(handle)()}>其他提交方式</Button>
        <Button onClick={() => Taro.navigateTo({ url: '/pages/index2/index' })}>We UI 适配</Button>
        <Button onClick={() => Taro.navigateTo({ url: '/pages/msgSuccess/index' })}>成功</Button>
      </View>
    </View>
  )
}

export default Index
