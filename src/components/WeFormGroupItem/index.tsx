import React, { type FC, memo } from "react";

type WeFormGroupItemProps = {
  children?: React.ReactNode | undefined;
  title?: string;
  tips?: string;
}

const WeFormGroupItem: FC<WeFormGroupItemProps> = (props) => {

  return (
    <div className="weui-cells__group weui-cells__group_form">
      { props?.title ?  <div className="weui-cells__title">{props?.title}</div> : null }
      <div className="weui-cells">
        { props?.children }
      </div>
      {
        props?.tips ? (
          <div className="weui-cells__tips">
            <a className="weui-link weui-wa-hotarea">{props?.tips}</a>
          </div>
        ) : null
      }
    </div>
  )
}


export default memo(WeFormGroupItem)
