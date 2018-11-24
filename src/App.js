import React, { Component } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

const LockIcon = ({fill}) => (
  <svg viewBox="0 0 46 67">
    <path fill={fill} style={{fillRule: 'evenodd', clipRule: "evenodd"}} d="M34.8,27v-9c0-6.4-5.1-11.5-11.5-11.5h-0.5c-6.4,0-11.5,5.1-11.5,11.5v9H34.8z M41.3,27.1c2.7,0.6,4.7,3,4.7,5.9v27.5c0,3.3-2.7,6-6,6H6c-3.3,0-6-2.7-6-6V33c0-2.9,2-5.3,4.8-5.9V18c0-9.9,8.1-18,18-18h0.5c9.9,0,18,8.1,18,18V27.1z"/>
  </svg>
);
const FlashlightIcon = ({fill}) => (
  <svg viewBox="0 0 26 68">
    <path fill={fill} style={{fillRule: 'evenodd', clipRule: "evenodd"}} d="M13,40c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3s3,1.3,3,3C16,38.7,14.7,40,13,40z M13,26.5c-2.5,0-4.5,2-4.5,4.5v6c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5v-6C17.5,28.5,15.5,26.5,13,26.5z M0,6h26c0,9-6,12-6,18c0,0,0,13.3,0,40c0,2.2-1.8,4-4,4h-6c-2.2,0-4-1.8-4-4V24C6,18,0,15,0,6z M2,0h22c1.1,0,2,0.9,2,2v2H0V2C0,0.9,0.9,0,2,0z"/>
  </svg>
);
const CameraIcon = ({fill}) => (
  <svg viewBox="0 0 64 48">
    <path fill={fill} style={{fillRule: 'evenodd', clipRule: "evenodd"}} d="M51,17c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C53,16.1,52.1,17,51,17z M7,3.5h4c0.6,0,1,0.4,1,1V6H6V4.5C6,3.9,6.4,3.5,7,3.5z M32,41c-7.7,0-14-6.3-14-14s6.3-14,14-14s14,6.3,14,14S39.7,41,32,41z M32,38.5c6.4,0,11.5-5.1,11.5-11.5S38.4,15.5,32,15.5S20.5,20.6,20.5,27S25.6,38.5,32,38.5z M4,8h10.3c1,0,2-0.5,2.5-1.4l2.4-3.8c1.1-1.8,3-2.8,5.1-2.8h15.3c2.1,0,4,1.1,5.1,2.8l2.4,3.8C47.7,7.5,48.6,8,49.7,8H60c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V12C0,9.8,1.8,8,4,8z"/>
  </svg>
);

const getTimeForDisplay = () => {
  const date = new Date();
  return {
    timeStr: `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`,
    dateStr: `${date.getMonth() + 1}月${date.getDate()}日 ${['日','月','火','水','木','金','土'][date.getDay()]}曜日`
  }
}

const twitterNotifications = [
  { title: '佐藤さんがいいねしました:', content: '', delay: 200 },
  { title: '鈴木さんがいいねしました:', content: '', delay: 200 },
  { title: '高橋さんがいいねしました:', content: '', delay: 200 },
  { title: '田中さんがいいねしました:', content: '', delay: 200 },
  { title: '伊藤さんがいいねしました:', content: '', delay: 200 },
  { title: '渡辺さんがいいねしました:', content: '', delay: 200 },
  { title: '山本さんがいいねしました:', content: '', delay: 200 },
  { title: '中村さんがいいねしました:', content: '', delay: 200 },
  { title: '小林さんがいいねしました:', content: '', delay: 200 },
  { title: '加藤さんがいいねしました:', content: '', delay: 200 },
  { title: '吉田さんがいいねしました:', content: '', delay: 200 },
  { title: '山田さんがいいねしました:', content: '', delay: 200 },
  { title: '佐々木さんがいいねしました:', content: '', delay: 200 },
  { title: '山口さんがいいねしました:', content: '', delay: 200 },
  { title: '松本さんがいいねしました:', content: '', delay: 200 },
  { title: '井上さんがいいねしました:', content: '', delay: 200 },
  { title: '木村さんがいいねしました:', content: '', delay: 200 },
  { title: '林さんがいいねしました:', content: '', delay: 200 },
  { title: '斎藤さんがいいねしました:', content: '', delay: 200 },
  { title: '清水さんがいいねしました:', content: '', delay: 200 },
  { title: '山崎さんがいいねしました:', content: '', delay: 200 },
  { title: '森さんがいいねしました:', content: '', delay: 200 },
  { title: '池田さんがいいねしました:', content: '', delay: 200 },
  { title: '橋本さんがいいねしました:', content: '', delay: 200 },
  { title: '阿部さんがいいねしました:', content: '', delay: 200 },
  { title: '石川さんがいいねしました:', content: '', delay: 200 },
  { title: '山下さんがいいねしました:', content: '', delay: 200 },
  { title: '中島さんがいいねしました:', content: '', delay: 200 },
  { title: '石井さんがいいねしました:', content: '', delay: 200 },
  { title: '小川さんがいいねしました:', content: '', delay: 200 },
  { title: '前田さんがいいねしました:', content: '', delay: 200 },
  { title: '岡田さんがいいねしました:', content: '', delay: 200 },
  { title: '長谷川さんがいいねしました:', content: '', delay: 200 },
  { title: '藤田さんがいいねしました:', content: '', delay: 200 },
  { title: '後藤さんがいいねしました:', content: '', delay: 200 },
  { title: '近藤さんがいいねしました:', content: '', delay: 200 },
  { title: '村上さんがいいねしました:', content: '', delay: 200 },
  { title: '遠藤さんがいいねしました:', content: '', delay: 200 },
  { title: '青木さんがいいねしました:', content: '', delay: 200 },
  { title: '坂本さんがいいねしました:', content: '', delay: 200 },
  { title: '斉藤さんがいいねしました:', content: '', delay: 200 },
  { title: '福田さんがいいねしました:', content: '', delay: 200 },
  { title: '太田さんがいいねしました:', content: '', delay: 200 },
  { title: '西村さんがいいねしました:', content: '', delay: 200 },
  { title: '藤井さんがいいねしました:', content: '', delay: 200 },
  { title: '岡本さんがいいねしました:', content: '', delay: 200 },
  { title: '藤原さんがいいねしました:', content: '', delay: 200 },
  { title: '金子さんがいいねしました:', content: '', delay: 200 },
  { title: '三浦さんがいいねしました:', content: '', delay: 200 },
  { title: '中野さんがいいねしました:', content: '', delay: 200 },
  { title: '中川さんがいいねしました:', content: '', delay: 200 },
  { title: '原田さんがいいねしました:', content: '', delay: 200 },
  { title: '松田さんがいいねしました:', content: '', delay: 200 },
  { title: '竹内さんがいいねしました:', content: '', delay: 200 },
  { title: '小野さんがいいねしました:', content: '', delay: 200 },
  { title: '田村さんがいいねしました:', content: '', delay: 200 },
  { title: '中山さんがいいねしました:', content: '', delay: 200 },
  { title: '和田さんがいいねしました:', content: '', delay: 200 },
  { title: '石田さんがいいねしました:', content: '', delay: 200 },
  { title: '森田さんがいいねしました:', content: '', delay: 200 },
  { title: '上田さんがいいねしました:', content: '', delay: 200 },
  { title: '原さんがいいねしました:', content: '', delay: 200 },
  { title: '内田さんがいいねしました:', content: '', delay: 200 },
  { title: '柴田さんがいいねしました:', content: '', delay: 200 },
  { title: '酒井さんがいいねしました:', content: '', delay: 200 },
  { title: '宮崎さんがいいねしました:', content: '', delay: 200 },
  { title: '横山さんがいいねしました:', content: '', delay: 200 },
  { title: '高木さんがいいねしました:', content: '', delay: 200 },
  { title: '安藤さんがいいねしました:', content: '', delay: 200 },
  { title: '宮本さんがいいねしました:', content: '', delay: 200 },
  { title: '大野さんがいいねしました:', content: '', delay: 200 },
  { title: '小島さんがいいねしました:', content: '', delay: 200 },
  { title: '工藤さんがいいねしました:', content: '', delay: 200 },
  { title: '谷口さんがいいねしました:', content: '', delay: 200 },
  { title: '今井さんがいいねしました:', content: '', delay: 200 },
  { title: '高田さんがいいねしました:', content: '', delay: 200 },
  { title: '増田さんがいいねしました:', content: '', delay: 200 },
  { title: '丸山さんがいいねしました:', content: '', delay: 200 },
  { title: '杉山さんがいいねしました:', content: '', delay: 200 },
  { title: '村田さんがいいねしました:', content: '', delay: 200 },
  { title: '大塚さんがいいねしました:', content: '', delay: 200 },
  { title: '新井さんがいいねしました:', content: '', delay: 200 },
  { title: '藤本さんがいいねしました:', content: '', delay: 200 },
  { title: '小山さんがいいねしました:', content: '', delay: 200 },
  { title: '平野さんがいいねしました:', content: '', delay: 200 },
  { title: '河野さんがいいねしました:', content: '', delay: 200 },
  { title: '上野さんがいいねしました:', content: '', delay: 200 },
  { title: '武田さんがいいねしました:', content: '', delay: 200 },
  { title: '野口さんがいいねしました:', content: '', delay: 200 },
  { title: '松井さんがいいねしました:', content: '', delay: 200 },
  { title: '千葉さんがいいねしました:', content: '', delay: 200 },
  { title: '菅原さんがいいねしました:', content: '', delay: 200 },
  { title: '岩崎さんがいいねしました:', content: '', delay: 200 },
  { title: '久保さんがいいねしました:', content: '', delay: 200 },
  { title: '木下さんがいいねしました:', content: '', delay: 200 },
  { title: '佐野さんがいいねしました:', content: '', delay: 200 },
  { title: '野村さんがいいねしました:', content: '', delay: 200 },
  { title: '松尾さんがいいねしました:', content: '', delay: 200 },
  { title: '菊地さんがいいねしました:', content: '', delay: 200 },
  { title: '杉本さんがいいねしました:', content: '', delay: 200 },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...getTimeForDisplay(),
      notificationList: [],
      isFlashlightOn: false,
      willToggleFlashlight: false,
      flashlightIconTransform: `scale(1.0)`,
      flashlightIconBgColor: `rgba(0, 0, 0, 0.2)`,
      cameraIconTransform: `scale(1.0)`,
      cameraIconBgColor: `rgba(0, 0, 0, 0.2)`,
      isOpenExplanation: false,
      isOpenMenu: false,
      showMenuText: false
    };

    this.addNotification = this.addNotification.bind(this);
    this.startTwitterMode = this.startTwitterMode.bind(this);

    this.touchendFlashlightButton = this.touchendFlashlightButton.bind(this);
    this.touchforceFlashlightButton = this.touchforceFlashlightButton.bind(this);
    this.updateFlashlightButtonStyle = this.updateFlashlightButtonStyle.bind(this);
    this.touchendCameraButton = this.touchendCameraButton.bind(this);
    this.touchforceCameraButton = this.touchforceCameraButton.bind(this);
    this.updateCameraButtonStyle = this.updateCameraButtonStyle.bind(this);
  }

  componentDidMount() {
    // 日時更新
    window.setInterval(() => {
      this.setState({
        ...getTimeForDisplay()
      });
    }, 1000);

    window.setTimeout(() => {
      this.setState({ isOpenExplanation: true })
    }, 1000);

    // 懐中電灯ボタンとカメラボタンはおまけ
    const $flashlightButton = document.getElementById('flashlight-button');
    $flashlightButton.addEventListener('touchend', this.touchendFlashlightButton, false);
    $flashlightButton.addEventListener('touchcancel',this.touchendFlashlightButton, false);
    $flashlightButton.addEventListener('touchforcechange', this.touchforceFlashlightButton, false);
    const $cameraButton = document.getElementById('camera-button');
    $cameraButton.addEventListener('touchend', this.touchendCameraButton, false);
    $cameraButton.addEventListener('touchcancel',this.touchendCameraButton, false);
    $cameraButton.addEventListener('touchforcechange', this.touchforceCameraButton, false);
  }

  addNotification(notification) {
    notification.id = uuid();
    this.setState({
      notificationList: [notification].concat(this.state.notificationList)
    });
  }

  startTwitterMode() {
    const tweet = window.prompt('表示したい文章を入力してください')
    if (tweet) {
      this.setState({
        notificationList: [],
        isOpenMenu: false,
        isOpenExplanation: false,
        showMenuText: false
      });

      let delay = 3000;
      twitterNotifications.forEach((notification, index) =>{
        window.setTimeout(() => {
          this.addNotification({appName: 'TWITTER', appIcon: 'twitter', title: notification.title, content: notification.content || tweet});
        }, delay);
        delay += notification.delay
      })
    }
  }

  touchendFlashlightButton(e) {
    e.preventDefault();
    window.setTimeout(() => { this.updateFlashlightButtonStyle(0) }, 10);
  }
  touchforceFlashlightButton(e) {
    e.preventDefault();
    const force = e.changedTouches[0].force;
    this.updateFlashlightButtonStyle(force);

    let isFlashlightOn = this.state.isFlashlightOn;
    let willToggleFlashlight = this.state.willToggleFlashlight;
    if (force > 0.8) {
      // 0.8を超えた場合
      willToggleFlashlight = true;
    } else {
      // 前のタイミングで0.8を超えてた場合、ON/OFFを切り替える
      if (willToggleFlashlight) { isFlashlightOn = !isFlashlightOn }
      willToggleFlashlight = false;
    }
    this.setState({
      isFlashlightOn: isFlashlightOn,
      willToggleFlashlight: willToggleFlashlight
    });
  }
  updateFlashlightButtonStyle (force) {
    window.requestAnimationFrame(() => {
      this.setState({
        flashlightIconTransform: `scale(${1.0 + (force * 0.84)})`, // 1.0〜1.84
        flashlightIconBgColor: `rgba(0, 0, 0, ${0.2 + (force * 0.5)})` // 0.2〜0.7
      });
    });
  }
  touchendCameraButton(e) {
    e.preventDefault();
    window.setTimeout(() => { this.updateCameraButtonStyle(0) }, 10);
  }
  touchforceCameraButton(e) {
    e.preventDefault();
    this.updateCameraButtonStyle(e.changedTouches[0].force);
  }
  updateCameraButtonStyle (force) {
    window.requestAnimationFrame(() => {
      this.setState({
        cameraIconTransform: `scale(${1.0 + (force * 0.84)})`, // 1.0〜1.84
        cameraIconBgColor: `rgba(0, 0, 0, ${0.2 + (force * 0.5)})` // 0.2〜0.7
      });
    });
  }

  render() {
    const {
      timeStr,
      dateStr,
      isOpenMenu,
      isOpenExplanation,
      showMenuText,
      notificationList,
      isFlashlightOn,
      flashlightIconTransform,
      flashlightIconBgColor,
      cameraIconTransform,
      cameraIconBgColor
    } = this.state;

    return (
      <React.Fragment>
        <div className="background"></div>
        <CSSTransition
          in={isOpenMenu}
          timeout={600}
          classNames={{
            appear: 'modal',
            appearActive: 'modal',
            enter: 'modal',
            enterActive: 'modal is-active',
            enterDone: 'modal is-active',
            exit: 'modal',
            exitActive: 'modal',
            exitDone: 'modal',
          }}
        >
          <div className="modal">
            <div
              className="modal__background"
              onClick={() => this.setState({ isOpenMenu: false })}
            />
            <div className="modal__content">
              <div className="modal__card">
                <div className="modal__card__title">メニュー</div>
                <div className="modal__card__body">
                  <a
                    className="button"
                    onClick={this.startTwitterMode}
                  >
                    いいねたくさんモード
                  </a>
                  <small style={{color: 'grey'}}>※ 動きがカクカクする場合は「低電力モードを解除」や「他のアプリを終了」をお試しください。</small>
                </div>
              </div>
              <div className="modal__card">
                <div className="modal__card__body">
                  <p style={{ lineHeight: '40px', fontWeight: 800 }}>《録画した画面をシェアして楽しもう！》</p>
                  <p><small>「 #通知止まらんw 」をつけてツイートしてね！</small></p>
                  <br />
                  <a
                    onClick={() => this.setState({
                      isOpenMenu: false,
                      isOpenExplanation: true
                    })}
                  >
                    全画面表示にする方法
                  </a>
                  <br />
                  <a href="https://support.apple.com/ja-jp/HT207935" target="_blank">
                    iPhoneの画面を録画する方法
                  </a>
                  <br />
                  <br />
                  <a
                    href="https://twitter.com/share?url=https://bit.ly/2Bvyx3i&amp;text=+%0a%23%e9%80%9a%e7%9f%a5%e6%ad%a2%e3%81%be%e3%82%89%e3%82%93w"
                    onclick="window.open(encodeURI(decodeURI(this.href)), 'TWwindow', 'width=560, height=470, menubar=no, toolbar=no, scrollbars=yes'); return false;"
                    target="_blank"
                    className="share-tweet"
                  >
                    <span className="share-tweet-icon" />このサイトをTwitterでシェア
                  </a>
                  <br />
                  <br />
                  <small>開発者：<a href="https://twitter.com/okumura_daiki" target="_blank">@okumura_daiki</a></small>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={isOpenExplanation}
          timeout={600}
          classNames={{
            appear: 'modal',
            appearActive: 'modal',
            enter: 'modal',
            enterActive: 'modal is-active',
            enterDone: 'modal is-active',
            exit: 'modal',
            exitActive: 'modal',
            exitDone: 'modal',
          }}
        >
          <div className="modal">
            <div
              className="modal__background"
              onClick={() => this.setState({
                isOpenExplanation: false,
                showMenuText: true
              })}
              style={{ backgroundImage: null }}
            />
            <div className="modal__content">
              <div className="modal__card explanation">
                <div className="modal__card__title">はじめに</div>
                <div className="modal__card__body">
                  <p>【注意】iPhone Safariでご覧ください。<br /><small>iPhone以外では正常に動作しない場合があります。</small></p>
                  <p>① <span className="share-icon" /> から <span className="add-home-icon" /> を選択します。</p>
                  <p>② ホーム画面に追加されたアプリを開くと全画面表示になります。</p>
                  <a
                    style={{display: 'inline-block', padding: '10px', color: 'grey'}}
                    onClick={() => this.setState({
                      isOpenExplanation: false,
                      showMenuText: true
                    })}
                  >
                    × 閉じる
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
        <div className="top-right-bar"></div>
        <div className="swipe-text">上にスワイプして<br/>ロック解除</div>
        <a id="flashlight-button" className="flashlight-button">
          <div className="flashlight-icon-wrapper"
            style={{
              transform: flashlightIconTransform,
              backgroundColor: isFlashlightOn ? 'rgba(255, 255, 255, 0.7)' : flashlightIconBgColor
            }}
          >
            <FlashlightIcon fill={isFlashlightOn? '#000' : '#fff'}/>
          </div>
        </a>
        <a id="camera-button" className="camera-button">
          <div
            className="camera-icon-wrapper"
            style={{
              transform: cameraIconTransform,
              backgroundColor: cameraIconBgColor
            }}
          >
            <CameraIcon fill="#fff" />
          </div>
        </a>
        <div className="main">
          <TransitionGroup className="notification-list">
            {notificationList && notificationList.map(notification => (
              <CSSTransition
                key={notification.id}
                timeout={1000}
                unmountOnExit
                classNames={{
                  appear: 'appear',
                  appearActive: 'active-appear',
                  enter: 'enter',
                  enterActive: 'active-enter',
                  enterDone: 'done-enter',
                  exit: 'exit',
                  exitActive: 'active-exit',
                  exitDone: 'done-exit'
                }}
              >
                <div className="notification">
                  <div className="notification-card">
                    <div className="notification-card__header">
                      <div className={`notification-card__header__app-icon ${notification.appIcon || ''}`}></div>
                      <div className="notification-card__header__app-name">{notification.appName}</div>
                      <div className="notification-card__header__timestamp">今</div>
                    </div>
                    <div className="notification-card__body">
                      {notification.title && <div className="notification-card__body__title">{notification.title}</div>}
                      <div className="notification-card__body__content">{notification.content}</div>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
          <div className="lock-icon-container">
            {showMenuText &&
              <div className="menu-text">← メニュー</div>
            }
            <a
              className="lock-icon"
              onClick={() => this.setState({
                showMenuText: false,
                isOpenMenu: true
              })}
            >
              <LockIcon fill={"#fff"} />
            </a>
          </div>
          <div id="clock" className="clock">{timeStr}</div>
          <div id="date" className="date">{dateStr}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
