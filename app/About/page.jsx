import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import '../../styles/VideoPlayer.css';
import '../../styles/About.css';

export default function About({ locale }) {
  return(
    <>
      <main>
        <div className="About">
          <div className="Content-1 grid">
            <div className="Content-1-img">
              <img src="https://gcdnb.pbrd.co/images/JUoQqxnOl2he.jpg?o=1" alt="coffeeee" className="Contentİmg-1" />
            </div>
            <div className="Content-subject-All">
              <div className="Content-title">
                <h1 className="Content-title-h1">{locale === 'tr' ? 'mükemmel kahveyi seçin' : 'choose the perfect coffee'}</h1>
              </div>
              <div className="Content-subject">
                <div className="Content-subject-1">
                  <p>{locale === 'tr' ? 'Mükemmel bir kahve deneyimi için kahve çekirdeklerini seçmek önemlidir. Taze çekilmiş kahve çekirdekleri aroma ve lezzet açısından daha zengin bir içecek sunar.' : 'For a perfect coffee experience, it is important to choose coffee beans. Freshly ground coffee beans offer a richer drink in terms of aroma and flavour.'}</p>
                </div>
                <div className="Content-subject-2">
                  <p>{locale === 'tr' ? 'Kahve türüne karar verirken, damak tadınıza en uygun olanı seçmeye özen gösterin. Hafif ve meyveli tatlar mı istersiniz, yoksa daha yoğun ve çikolatalı bir kahve mi tercih edersiniz?' : 'When deciding on the type of coffee, take care to choose the one that best suits your taste buds. Do you want light and fruity flavours, or do you prefer a more intense and chocolatey coffee?'}</p>
                </div>
                <div className="Content-subject-3">
                  <p>{locale === 'tr' ? 'Kahvenin menşei de önemlidir. Belirli bölgelerden gelen kahveler farklı lezzet profillerine sahiptir. Brezilyadan gelen kahveler genellikle ceviz ve karamel notalarına sahipken, Etiyopyadan gelen kahveler daha çiçeksi ve meyveli olabilir.' : 'The origin of the coffee is also important. Coffees from certain regions have different flavour profiles. Coffees from Brazil often have nutty and caramel notes, while coffees from Ethiopia can be more floral and fruity.'}</p>
                </div>
                <div className="Content-subject-4">
                  <p>{locale === 'tr' ? 'Son olarak, kahvenizi hazırlarken kaliteli ekipman kullandığınızdan emin olun. Kaliteli bir kahve makinesi veya demleme yöntemi, kahvenizin tadını en üst düzeye çıkarmanıza yardımcı olacaktır.' : 'Finally, make sure to use quality equipment when preparing your coffee. A quality coffee machine or brewing method will help you maximise the taste of your coffee.'}</p>
                </div>
                <div className="Content-subject-5">
                  <p>{locale === 'tr' ? 'Unutmayın, taze çekilmiş çekirdekler, damak tadınıza uygun kahve türü, kahvenin menşei ve kaliteli ekipman mükemmel bir kahve deneyimi için önemli faktörlerdir.' : 'Remember, freshly ground beans, the type of coffee that suits your taste, the origin of the coffee and quality equipment are important factors for a perfect coffee experience.'}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Content-video grid">
            <h2 className="Content-video-title ">{locale === 'tr' ? 'Kahve Demleme Yöntemleri: French Press vs Pour Over vs AeroPress ve daha fazlası!' : 'Coffee Brewing Methods: French Press vs Pour Over vs AeroPress and more!'}</h2>
            <div className="video">
              <VideoPlayer className="VideoPlayer"/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
