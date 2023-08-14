import React, {
  type FC, ReactNode,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  memo,
  useRef
} from 'react'
import { type ITouchEvent,  Label, View } from "@tarojs/components";
import type {
  UseControllerProps,
  RegisterOptions
} from "react-hook-form";
import { useController, useFormContext } from "react-hook-form";
import {UseControllerReturn} from "react-hook-form/dist/types/controller";
import cx from 'classnames'
import './index.scss'

type BzFormItemProps = {
  layout?: 'vertical' | 'horizontal'
  name: string;
  lable?: string;
  children?: ReactNode;
  rules?: UseControllerProps['rules'];
  trigger?: string;
  validateTrigger?: string;
  valueFormat?: (value: any, name: string | Array<string | number>) => any;
  defaultValue?: string;
  valueKey?: string;
  required?: RegisterOptions['required'];
  onClick?: (e: ITouchEvent, ref?: React.MutableRefObject<any>) => void;
}

const BzFormItem: FC<BzFormItemProps> = (props) => {
  const {
    required = false,
    layout = 'horizontal',
    name,
    lable,
    children,
    rules,
    trigger = 'onChange',
    valueKey = 'value',
    defaultValue,
    valueFormat,
    onClick,
  } = props

  const widgetRef = useRef<any>(null)
  const { control, unregister } = useFormContext()
  const controllerProps = useController({
    name,
    defaultValue,
    control,
    rules: required ? { required: `${lable}必填`, ...rules } : { ...rules }
  })

  const defaultValueFormat = useCallback((e, _name) => {
    return e.detail
  }, [])

  const isWeappInput =
    isValidElement(children) &&
    children?.type === 'input' &&
    process.env.TARO_ENV === 'weapp'

  const valueFormat_ = valueFormat || defaultValueFormat


  const getControlled = useCallback((state: UseControllerReturn) => {

    const { onChange, onBlur, value } = state.field

    const handleChange = (e: any) => {
      const result = valueFormat_(e, name)
      // 兼容注入的Promise
      if (result?.then && result?.catch) {
        if (isWeappInput) {
          console.warn(
            `微信端Input组件请尽量不要异步函数处理，由于FormItem代理的Input会基于微信端做性能优化，
              请查阅https://developers.weixin.qq.com/miniprogram/dev/component/input.html`,
          )
        }
        result.then((v) => {
          onChange(v)
        })
      } else {
        onChange(result)
        if (isWeappInput) {
          // 微信端Input输入存在性能问题，微信2.1版本后基于bindInput返回值做优化
          return result
        }
      }
    }

    return {
      [trigger]: handleChange,
      [valueKey]: value,
      onBlur,
      ref: widgetRef,
      name
    }
  }, [name, trigger])

  const renderChildren = useMemo(() => {
      if (isValidElement(children)) {
        return cloneElement(children, getControlled(controllerProps))
      }
      return children
    },
    [children, controllerProps, getControlled],
  )


  useEffect(() => {
    return () => {
      // 组件销毁时注销name
      unregister(name)
    }
  }, [])

  const message = useMemo(() => controllerProps.fieldState.error?.message, [controllerProps.fieldState.error?.message])


  return (
    <View
      onClick={onClick && (e => onClick(e, widgetRef))}
      className={cx('bz-form-item_conainer', {
        ['bz-form-item_conainer']: !!props?.onClick
      })}
    >
      <View className={`bz-form-item_layout ${layout}`}>
        <View
          className={cx(
            'bz-form-item_title',
            { ['bz-form-item_required']: required }
          )}
        >
          <Label for={name}>{lable}</Label>
        </View>
        <View className="bz-form-item_input">
          { renderChildren }
        </View>
        {
          message ? (
            <View className="bz-form-item_message">
              { message }
            </View>
          ) : null
        }
      </View>
    </View>
  )
}

export default memo(BzFormItem);
