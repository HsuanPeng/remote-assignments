function Header() {

  const show = () => {
    const aside = document.querySelector('.aside')
    aside.style.display = "block";
  }

  const close = () => {
    const aside = document.querySelector('.aside')
    aside.style.display = 'none';
  }

  return (
    <header>
      <ul className="aside">
        <a href="#" className="close-menu" onClick={close}>X</a>
        <li><a href="#">預約試駕</a></li>
        <li><a href="#">購車資訊</a></li>
        <li><a href="#">車主專區</a></li>
        <li><a href="#">了解更多</a></li>
      </ul>
      <nav>
        <div className="title">
          <h1>Volvo官網</h1>
          <img src="pic/Volvo Logo.png" alt="Volvo LOGO" />
        </div>
        <div className="show-menu" onClick={show}>
          <img src="pic/menu icon.png" alt="menu-icon" />
        </div>
        <ul className="menu">
          <li><a href="#">預約試駕</a></li>
          <li><a href="#">購車資訊</a></li>
          <li><a href="#">車主專區</a></li>
          <li><a href="#">了解更多</a></li>
        </ul>
      </nav>
    </header>
  )
}

function Main() {

  const welcome = () => {
    const h2 = document.querySelector('.welcome h2')
    h2.textContent = 'Have a Good Time!'
  }

  const moreContent = () => {
    const content2 = document.querySelector('.content2');
    content2.style.display = 'block';
  }

  return (
    <main>
      <div className="welcome">
        <h2 onClick={welcome}>"歡迎您的光臨！"</h2>
        <p>Volvo汽車是於1927年在瑞典歌德堡成立的汽車品牌，現為吉利汽車旗下公司。</p>
        <p>
          Volvo為拉丁文，意思為「滾動」，是北歐地區第一個汽車品牌，富豪汽車以車輛安全表現優秀而聞名，是三點式安全帶的發明者。
        </p>
      </div>
      <div className="content">
        <h2>更多選擇</h2>
        <ul className="content-list">
          <li>
            <p>S60 建議售價$1,845,000起</p>
            <a href="#"><img src="pic/S60.jpeg" alt="S60" /></a>
          </li>
          <li>
            <p>XC60 建議售價$2,390,000起</p>
            <a href="#"><img src="pic/XC60.jpeg" alt="S90" /></a>
          </li>
          <li>
            <p>XC40 建議售價$1,607,000起</p>
            <a href="#"><img src="pic/XC40.jpeg" alt="XC40" /></a>
          </li>
          <li>
            <p>XC90 建議售價$2,895,000起</p>
            <a href="#"><img src="pic/XC90.jpeg" alt="XC90" /></a>
          </li>
        </ul>
        <button onClick={moreContent}>Call to Action</button>
        <Footer />
      </div>
    </main>
  )
}


function Footer() {
  return (
    <footer>
      <div className="content2">
        <ul className="content-list">
          <li>
            <p>Content Box 5</p>
            <a href="#"><img src="pic/xc60-recharge-gallery-1-16x9.jpeg" alt="S60" /></a>
          </li>
          <li>
            <p>Content Box 6</p>
            <a href="#"><img src="pic/xc60-recharge-gallery-3-16x9.jpeg" alt="S90" /></a>
          </li>
          <li>
            <p>Content Box 7</p>
            <a href="#"><img src="pic/xc60-recharge-gallery-4-16x9.jpeg" alt="XC40" /></a>
          </li>
          <li>
            <p>Content Box 8</p>
            <a href="#"><img src="pic/xc60-recharge-gallery-5-16x9.jpeg" alt="XC90" /></a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="wrap">
      <Header />
      <Main />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);







