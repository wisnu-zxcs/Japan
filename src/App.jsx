import './index.css'
import { PiSignIn } from "react-icons/pi";
import { MdCall } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";

function App() {

  return (
    <>
      <section className="">
        <div className="relative w-full h-screen overflow-hidden">
          <img src="https://www.princehotels.co.jp/hakone-area/images/top_header_onsen_cl1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute flex justify-between w-full pt-5 px-5 text-lg text-white z-10">
            <img src='https://logos-download.com/wp-content/uploads/2017/01/Prince_Hotels_and_Resorts_logo.png' alt='' className="h-14 invert" />
            <div className="flex items-center gap-14 me-5">
              <a href="" className="flex items-center gap-3"><PiSignIn />ログイン</a>
              <a href="" className="flex items-center gap-3"><MdCall />電話での宿泊予約</a>
              <a href="" className="flex items-center gap-3"><FaBed />空室検索・予約</a>
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 bg-black bg-opacity-50 text-white">
            <span className="text-xl">「歴史・文化・自然、あなたの箱根旅は…」</span>
            <h1 className="text-5xl font-bold">Prince Grand Resort Hakone</h1>
            <span className="font-base">プリンスグランドリゾート箱根</span>
          </div>
          <div className="absolute flex left-10 bottom-10">
            <div className="flex flex-col gap-3 text-white">
              <div className="flex items-center gap-3">
                <h1 className="flex text-xl">おすすめの情報</h1>
                <CgArrowLongRight />
              </div>
              <div className="inline-block text-black overflow-x-auto snap-x snap-mandatory">
                <a href='' className="inline-block p-1.5 bg-white">
                  <img src="https://www.princehotels.co.jp/hakone-area/images/top_seasonnews_ajisai_cl2.jpg" alt="" className="w-64 object-cover" />
                  <h1 className="font-base">季節のおしらせ～あじさい</h1>
                  <span className="text-xs">プリンスグランドリゾート箱根</span>
                </a>
                <a href='' className="inline-block p-1.5 mx-1.5 bg-white">
                  <img src="https://www.princehotels.co.jp/hakone-area/images/top_history_cl2.jpg" alt="" className="w-64 object-cover" />
                  <h1 className="font-base">歴史に想いを馳せる箱根旅</h1>
                  <span className="text-xs">プリンスグランドリゾート箱根</span>
                </a>
                <a href='' className="inline-block p-1.5 bg-white">
                  <img src="https://www.princehotels.co.jp/hakone-area/images/top_nature_cl2_1.jpg" alt="" className="w-64 object-cover" />
                  <h1 className="font-base">自然とふれあう箱根旅</h1>
                  <span className="text-xs">プリンスグランドリゾート箱根</span>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 right-10">
            <img src="https://www.princehotels.co.jp/images/area/footer_seibu.png" alt="" className="h-8" />
          </div>
        </div>
      </section>

      <section className="">
        <div className="relative w-full h-screen overflow-hidden">
          <img src="https://www.princehotels.co.jp/hakone-area/images/top_header_mt.fuji_lakeashinoko_cl1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white gap-3">
            <span className="">春～Spring～</span>
            <h1 className="text-3xl">箱根に春を告げるさまざまな桜が咲き乱れます。</h1>
            <p className="text-md font-thin">
              芦ノ湖畔周辺の桜の花が満開になる4月から新緑の5月はピンク色から緑のコントラストをお楽しみいただけます。
              4月初旬よりしだれ桜が咲き始め、ソメイヨシノやマメザクラ、箱根園にある樹齢100年の湖畔の一本桜「大島桜」は4月中旬から下旬にかけて見頃を迎えます。
            </p>
            <div className="flex gap-5 mt-10">
              <div className="bg-black bg-opacity-80">
                <img src="https://www.princehotels.co.jp/hakone-area/images/top_season_spring_01_cl2.jpg" alt="" className="h-96" />
                <p className="p-3 text-sm font-thin">
                  5本の桜を寄り添わせて植えた箱根園のシンボル「一本桜」
                </p>
              </div>
              <div className="bg-black bg-opacity-80">
                <img src="https://www.princehotels.co.jp/image/oth_segweytour_01_cl2.JPG" alt="" className="h-96" />
                <p className="p-3 text-sm font-thin">
                  春咲く箱根でセグウェイ自然体体験ツアー（4月～11月開催）
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App