"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaPhone, FaMapMarkerAlt, FaPaw } from "react-icons/fa";

export default function Home() {
  const router = useRouter();

  const advantages = [
    {
      title: "專業犬貓泌尿與脊椎外科",
      description:
        "由具備豐富臨床經驗的獸醫師親自診治，專注犬貓泌尿系統、骨盆與脊椎相關問題。",
    },
    {
      title: "夜間急診與住院照護",
      description:
        "提供急診與住院照護服務，協助飼主在毛孩需要即時照護時，能獲得穩定支援。",
    },
    {
      title: "一站式寵物服務",
      description:
        "結合醫療、美容、旅館與寵物用品，滿足毛孩從健康到日常生活的多元需求。",
    },
    {
      title: "諾亞高壓氧保養",
      description:
        "透過高壓氧照護輔助術後恢復、慢性問題管理與日常健康維護。",
    },
  ];

  const services = [
    {
      label: "寵物醫療",
      treatments: [
        "提供內科、外科、眼科、牙科、皮膚科等犬貓診療服務。",
      ],
    },
    {
      label: "寵物保健",
      treatments: [
        "從疫苗、驅蟲、健康檢查到慢性病追蹤，建立完整健康管理。",
      ],
    },
    {
      label: "寵物美容",
      treatments: [
        "提供洗澡、剪毛與基礎美容服務，維持毛孩清爽與舒適。",
      ],
    },
    {
      label: "寵物百貨",
      treatments: [
        "精選日常用品、營養食品與照護用品，滿足毛孩生活需求。",
      ],
    },
  ];

  return (
    <main className="bg-[#E6D6CC] text-gray-900">
      {/* 🔹 關於我們 */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
            <FaPaw className="text-yellow-500" />
            關於我們
          </h2>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            宏愛犬貓專科醫院秉持「人性化、現代化、專業化」的理念，以專業的醫療服務與誠摯的照護態度，守護每一位毛孩的健康。作為在地犬貓專科醫院，我們致力於提供穩定、細心且完整的醫療照護，讓飼主與寵物都能感受到信賴與安心。
            <br />
            <br />
            本院專注於犬貓健康照護，服務範圍涵蓋內科、外科、眼科、牙科、皮膚科、預防醫學與慢性病追蹤等多項領域，並依照毛孩的身體狀況與飼主需求，提供合適的治療與照護建議。
            <br />
            <br />
            院內亦提供寵物美容、旅館與百貨用品等延伸服務，讓飼主能在同一個地方完成毛孩日常生活與健康照護需求。同時，宏愛亦提供寵物識別晶片植入服務，協助毛孩建立完善的身份識別與安全保障。
            <br />
            <br />
            我們深信，醫療服務不只是治療疾病，更是一段陪伴與理解的過程。宏愛團隊重視與飼主的溝通，將每一次看診視為守護生命的承諾，期盼與您一同守護毛孩健康的每一天。
          </p>
        </div>
      </section>

      {/* 🔹 我們的優勢 */}
      <section id="advantages" className="max-w-6xl mx-auto pb-16 px-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10">
          <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
            <FaPaw className="text-yellow-500" />
            我們的優勢
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-[#F5F1ED] rounded-2xl shadow-md p-6 text-center h-full"
              >
                <h3 className="text-xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
                  <FaPaw className="text-yellow-500" />
                  {advantage.title}
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 院長資訊 */}
      <section id="director" className="max-w-6xl mx-auto pb-16 px-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
            <FaPaw className="text-yellow-500" />
            院長資訊
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mt-8">
            宏愛犬貓專科醫院由蔡志森院長帶領，長期深耕雲林西螺地區犬貓醫療照護。蔡院長以專業、細心與負責的態度，重視每一位毛孩的健康狀況，也重視與飼主之間清楚、安心的溝通，讓每一次看診都能建立在信任與理解之上。
            <br />
            <br />
            在臨床診療上，宏愛犬貓專科醫院專注於犬貓健康照護，從日常健康檢查、預防保健、內外科診療到慢性病追蹤，皆以穩定評估與完整照護為核心。蔡院長相信，好的動物醫療不只是治療疾病，更是陪伴飼主一起理解毛孩的身體變化，並做出最合適的照護選擇。
            <br />
            <br />
            宏愛犬貓專科醫院希望成為雲林在地飼主值得信賴的動物醫療夥伴，提供兼具專業、耐心與溫度的診療服務，讓毛孩在就醫過程中獲得妥善照顧，也讓飼主能更安心地面對每一個健康決策。
          </p>
        </div>
      </section>

      {/* 🔹 主治項目 */}
      <section id="services" className="max-w-6xl mx-auto pb-16 px-6">
        <div className="bg-[#9D8575] text-white shadow-xl rounded-2xl p-8 md:p-10">
          <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
            <FaPaw className="text-yellow-500" />
            主治項目
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#E6D6CC] text-gray-800 rounded-2xl shadow-md p-6 h-full"
              >
                <h3 className="text-xl font-bold text-[#5A4032] flex items-center gap-2">
                  <FaPaw className="text-yellow-500" />
                  {service.label}
                </h3>

                <ul className="list-disc list-inside space-y-2 text-base text-gray-700 mt-4 leading-relaxed">
                  {service.treatments.map((treatment, i) => (
                    <li key={i}>{treatment}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div
              onClick={() => router.push("/oxygen")}
              className="bg-[#E6D6CC] text-gray-800 rounded-2xl shadow-md p-6 cursor-pointer hover:bg-[#d5c3b8] transition h-full"
            >
              <h3 className="text-xl font-bold text-[#5A4032] flex items-center gap-2">
                <FaPaw className="text-yellow-500" />
                諾亞寵物高壓氧
              </h3>

              <p className="text-base mt-4 text-gray-700 leading-relaxed">
                點擊了解高壓氧療法如何輔助毛孩恢復、保養與健康照護。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 聯絡方式 */}
      <section id="contact" className="max-w-6xl mx-auto pb-20 px-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10">
          <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
            <FaPaw className="text-yellow-500" />
            聯絡方式
          </h2>

          <div className="bg-[#E6D6CC] shadow-lg rounded-2xl p-8 mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* 聯絡資訊 */}
              <div className="text-lg text-gray-800 space-y-4">
                <h3 className="text-2xl font-bold text-[#5A4032] mb-4">
                  醫院資訊
                </h3>

                <p className="flex items-start gap-2 leading-relaxed">
                  <FaMapMarkerAlt className="text-blue-500 mt-1 shrink-0" />
                  <span>地址：648雲林縣西螺鎮大園里光復東路59號</span>
                </p>

                <p className="flex items-center gap-2">
                  <FaPhone className="text-green-500 shrink-0" />
                  <span>電話：05-5877081</span>
                </p>
              </div>

              {/* 門診時間 */}
              <div className="text-lg text-gray-800">
                <h3 className="text-2xl font-bold text-[#5A4032] mb-4">
                  門診時間
                </h3>

                <ul className="leading-relaxed space-y-1">
                  <li>星期一：09:00 – 12:00，14:00 – 21:00</li>
                  <li>星期二：09:00 – 12:00，14:00 – 21:00</li>
                  <li>星期三：09:00 – 12:00，14:00 – 21:00</li>
                  <li>星期四：09:00 – 12:00，14:00 – 21:00</li>
                  <li>星期五：09:00 – 12:00，14:00 – 21:00</li>
                  <li className="text-red-700 font-bold">星期六：休息</li>
                  <li className="text-red-700 font-bold">星期日：休息</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Google 地圖 */}
          <div className="w-full mt-8 overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title="宏愛犬貓專科醫院 Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.562907720335!2d120.4703782!3d23.798574299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346eb5741d623913%3A0x9f97488b4a394dd!2z5a6P5oSb54qs6LKT5bCI56eR6Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1782181331629!5m2!1szh-TW!2stw"
              className="w-full h-[320px] md:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}