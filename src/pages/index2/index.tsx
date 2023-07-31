import {Button, Input, Textarea, View} from '@tarojs/components'
import WeForm from "@/components/WeForm";
import WeFormItem from "@/components/WeFormItem";
import WeFormGroupItem from "@/components/WeFormGroupItem";

import {useForm} from "react-hook-form";
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

const Index2 = () => {
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
        <WeForm
          form={form}
          onSubmit={onSubmit}
        >
          <WeFormGroupItem title="表单组标题">
            <WeFormItem
              clear
              trigger="onInput"
              valueFormat={e => e.detail?.value}
              name="weixinhao"
              lable="微信号"
            >
              <Input className="weui-input" />
            </WeFormItem>
            <WeFormItem
              clear
              trigger="onInput"
              valueFormat={e => e.detail?.value}
              name="weixinhao2"
              lable="微信号2"
              onClick={(e, ref) => console.log(e, ref)}
            >
              <Input className="weui-input" />
            </WeFormItem>
          </WeFormGroupItem>
          <WeFormGroupItem title="表单组标题">
            <WeFormItem
              desc="测试一下"
              required
              trigger="onInput"
              valueFormat={e => e.detail?.value}
              name="weixinhao3"
              lable="微信号"
              ft={<Button className="weui-btn_reset weui-btn_icon"><i className="js_target weui-icon-info-circle"></i></Button>}
            >
              <Input placeholder="请输入金额" className="weui-input" />
            </WeFormItem>
          </WeFormGroupItem>

          <WeFormGroupItem title="问题">
            <WeFormItem
              layout="vertical"
              trigger="onInput"
              valueFormat={e => e.detail?.value}
              name="weixinhao4"
              lable="问题描述"
            >
              <Textarea className="weui-textarea" placeholder="请描述你所发生的问题" />
            </WeFormItem>
          </WeFormGroupItem>

          <Button onClick={handle}>测试</Button>
        </WeForm>
      </View>
    </View>
  )
}

export default Index2
