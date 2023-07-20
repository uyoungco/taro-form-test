import { Button, Input, View } from '@tarojs/components'
import { useForm } from "react-hook-form";

import BzForm from "@/components/BzForm";
import BzFormItem from "@/components/BzFormItem";

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'


const Index = () => {
  const form = useForm()

  const onSubmit = (e) => {
    console.log("onSubmit", e)
  }

  const handle = () => {
    const values = form?.getValues()
    console.log('values', values)
  }

  return (
    <View className="indexPage">

      <View className="container">
        <BzForm
          form={form}
          onSubmit={onSubmit}
        >
          <BzFormItem
            required
            name="name"
            lable="客户名称"
            trigger="onInput"
            valueFormat={e => e.detail?.value}
            onClick={(e, ref) => { console.log(e, ref) }}
          >
            <Input placeholder="请输入" />
          </BzFormItem>

          <BzFormItem
            name="test"
            lable="客户类型"
            trigger="onInput"
            valueFormat={e => e.detail?.value}
          >
            <Input placeholder="请输入" />
          </BzFormItem>


          <View style={{ marginTop: '20px' }}>
            <Button formType="submit">提交</Button>
            <Button formType="reset">重置</Button>
          </View>
        </BzForm>

        <Button onClick={handle}>测试</Button>
      </View>
    </View>
  )
}

export default Index
