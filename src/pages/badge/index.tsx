import {Image} from "@tarojs/components";


const Badge = () => {

  return (
    <div className="page">
      <div className="page__hd">
        <h1 className="page__title">Badge</h1>
        <p className="page__desc">徽章</p>
      </div>

      <div className="page__bd">
        <div className="weui-cells__title">新消息提示跟摘要信息后，统一在列表右侧</div>
        <div className="weui-cells">
          <div
            role="link"
            aria-labelledby="js_cell_l1_bd js_cell_l1_tips"
            aria-describedby="js_cell_l1_note"
            className="weui-cell weui-cell_active weui-cell_access"
          >
            <div aria-hidden="true" className="weui-cell__bd" id="js_cell_l1_bd">单行列表</div>
            <div aria-hidden="true" className="weui-cell__ft" id="js_cell_l1_bd" style={{ fontSize: 0 }}>
              <span className="demo_badge_tips" id="js_cell_l1_tips">详细信息</span>
              <span id="js_cell_l1_note" aria-label="，有更新" className="weui-badge weui-badge_dot"></span>
            </div>
          </div>
        </div>

        <div className="weui-cells__title">未读数红点跟在主题信息后，统一在列表左侧</div>
        <div className="weui-cells demo_badge_cells">
          <div role="option" aria-labelledby="b1_txt1" aria-describedby="b1_n1" className="weui-cell weui-cell_active">
            <div className="weui-cell__hd" style={{ position: 'relative', marginRight: '10px' }}>
              <Image style={{ width: '50px', display: 'block' }} src="https://weui.io/images/pic_160.png" />
              <span
                style={{
                  position: 'absolute',
                  top: '-0.4em',
                  right: '-0.4em',
                }}
                className="weui-badge"
              >8</span>
            </div>
            <div className="weui-cell__bd" aria-hidden="true" id="b1_txt1">
              <span>联系人名称</span>
              <div className="demo_badge_desc">摘要信息</div>
            </div>
          </div>
          <div
            role="link"
            aria-labelledby="b2_n1"
            aria-describedby="b2_txt2"
            className="weui-cell weui-cell_active weui-cell_access"
          >
            <span className="weui-cell__bd" aria-hidden="true">
              <span className="demo_badge_title" id="b2_n1">单行列表</span>
              <span style={{ marginLeft: '5px' }} className="weui-badge" id="b2_txt2" aria-label="，8个新通知">8</span>
            </span>
            <span className="weui-cell__ft" aria-hidden="true"></span>
          </div>
          <div
            role="link"
            aria-labelledby="b3_n1 b3_n2"
            aria-describedby="b3_txt1 b3_txt1_note"
            className="weui-cell weui-cell_active weui-cell_access"
          >
            <span className="weui-cell__bd" aria-hidden="true">
              <span className="demo_badge_title" id="b3_n1">单行列表</span>
              <span style={{ marginLeft: '5px' }} className="weui-badge" id="b3_txt1" aria-label="">8</span>
              <span id="b3_txt1_note" className="weui-hidden_abs">个新通知，</span>
            </span>
            <span className="weui-cell__ft" aria-hidden="true" id="b3_n2">详细信息</span>
          </div>

          <div
            role="link"
            aria-labelledby="js_a11y_nt js_a11y_comma js_a11y_nb"
            className="weui-cell weui-cell_active weui-cell_access"
          >
            <span className="weui-cell__bd" aria-hidden="true">
              <span id="js_a11y_nt" className="demo_badge_title">单行列表</span>
              <span style={{ marginLeft: '5px' }} id="js_a11y_nb" className="weui-badge">New</span>
            </span>
            <span className="weui-cell__ft" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Badge
