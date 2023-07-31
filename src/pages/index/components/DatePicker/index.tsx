import {forwardRef, memo, useImperativeHandle, useState} from "react";
import {CustomWrapper, PickerView, PickerViewColumn, PickerViewProps, View} from "@tarojs/components";
import { AtFloatLayout } from "taro-ui"
import './index.scss'

type DatePickerRef = {
  open: () => void
  close: () => void
  toggle: () => void
}

type DatePickerProps = {
  onChange?: (e?: any) => void;
  title?: string;
  value?: any;
}

const DatePicker = forwardRef<DatePickerRef, DatePickerProps>(
  (props, ref) => {
    const { value } = props
    const [index, setIndex] = useState()
    const [visible, setVisible] = useState(false)

    const actions: DatePickerRef = {
      toggle: () => {
        setVisible(v => !v)
      },
      open: () => {
        setVisible(true)
      },
      close: () => {
        setVisible(false)
      },
    }

    useImperativeHandle(ref, () => actions)


    const selector = [
      { text: '美国', id: 1 },
      { text: '中国', id: 2 },
      { text: '巴西', id: 3 },
      { text: '日本', id: 4 },
      { text: '朝鲜', id: 5 },
      { text: '俄罗斯', id: 6 },
      { text: '加拿大', id: 7 },
      { text: '印度', id: 8 },
    ]

    const translate = (val) => {
      return selector?.find(v => v?.id === val)?.text
    }

    const onConfirm = () => {
      props?.onChange?.(index)
      setVisible(false)
    }

    const onChange: PickerViewProps['onChange'] = (event) => {
      console.log('event', event)
      // @ts-ignore
      // setIndex(event.detail?.value[0] + 1)
    }

    return (
      <CustomWrapper>
        <View className="BzPickerContainer">
          <View>{ value ? translate(value) : '请选择' }</View>
          <View onClick={e => e.stopPropagation()}>
            <AtFloatLayout
              style={{ padding: 0 }}
              isOpened={visible}
              onClose={actions.close}
              scrollWithAnimation
            >
              <View className="BzPickerToolbar">
                <View className="BzPickerCanel" onClick={actions.close}>取消</View>
                {props?.title &&(
                  <View className="BzPickerTitle">{props?.title}</View>
                )}

                <View className="BzPickerConfirm" onClick={onConfirm}>确定</View>
              </View>
              <PickerView
                indicatorStyle='height: 50px;'
                style='width: 100%; height: 300px;'
                onChange={onChange}
              >

                <PickerViewColumn>
                  {
                    selector?.map((v, key) => (
                      <View
                        key={key}
                        style="line-height: 50px; text-align: center;"
                      >{v.text}</View>
                    ))
                  }

                </PickerViewColumn>
              </PickerView>
            </AtFloatLayout>
          </View>
        </View>
      </CustomWrapper>
    )
})

export default memo(DatePicker)
