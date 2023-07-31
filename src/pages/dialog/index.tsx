import { useState } from "react";

const Dialog = () => {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  const onClose = () => {
    setOpen(false)
    setOpen2(false)
  }

  return (
    <div className="page">
      <div className="page__hd">
        <h1 className="page__title">Dialog</h1>
        <p className="page__desc">对话框</p>
      </div>
      <div className="page__bd page__bd_spacing">
        <a
          className="weui-btn weui-btn_default"
          onClick={() => setOpen(!open)}
        >
          iOS Dialog样式一
        </a>
        <a
          className="weui-btn weui-btn_default"
          onClick={() => setOpen2(!open2)}
        >
          iOS Dialog样式二
        </a>
      </div>

      {
        open && (
          <div
            className="js_dialog"
            aria-hidden={`${open}`}
            aria-modal="true"
            aria-labelledby="js_title3"
            style={{ display: open ? 'block' : 'none' }}
          >
            <div className="weui-mask" onClick={onClose}></div>
            <div className="weui-dialog">
              <div className="weui-dialog__hd"><strong className="weui-dialog__title" id="js_title1">弹窗标题</strong></div>
              <div className="weui-dialog__bd">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
              <div className="weui-dialog__ft">
                <a role="button" href="javascript:" className="weui-dialog__btn weui-dialog__btn_default">辅助操作</a>
                <a role="button" href="javascript:" className="weui-dialog__btn weui-dialog__btn_primary">主操作</a>
              </div>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Dialog
