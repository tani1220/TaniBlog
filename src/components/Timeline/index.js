import styles from "./index.module.css";
import { useCallback, useState } from "react";

const Set = ({ title, year, children }) => {
  return (
    <>
      <h3 aria-label="year" className={styles.year}>
        {year}
      </h3>
      <ul>
        <li>
          <div className={styles.div}>
            <p className={styles.title}>{title}</p>
          </div>
          <p className={styles.child}>{children}</p>
        </li>
      </ul>
    </>
  );
};

const Line = () => {
  return <div className={styles.line} />;
};

const FullTimeline = () => (
  <>
    <Line />
    <Set year="2018" title="東オーストラリア制覇  ⛳">
      東オーストラリアの主要都市に滞在、観光しました。
    </Set>
    <Set title="アルバイト  🍓">
      Brisbane,Gold Coast周辺にある農場や工場で複数アルバイトを経験。
    </Set>
    <Set title="オーストラリア渡航  🇦🇺">3月,オーストラリアに渡航。</Set>
    <Set title="成人式 🏃‍♂️">成人式がありました。</Set>
    <Line />
    <Set year="2017" title="サウナーになる  🧖">
      サウナの快感に目覚めました。
    </Set>

    <Set title="アルバイト  🍕">
      ドミノ・ピザのアルバイト第一号として働きました。キッチンスタッフからデリバリー、新人のトレーニングを経験。
    </Set>
    <Line />
    <Set year="2016" title="フィリピン留学  🇵🇭">
      英語を学びに半年間フィリピン留学しました。
    </Set>
    <Set title="卒業式 🎓">高校を卒業しました。</Set>
    <Line />
    <Set year="2014-15" title="アルバイト  🍺">
      居酒屋やきとり大吉でアルバイト第一号として働きました。
    </Set>
    <Set title="成長  🏃‍♂️">
      教室に置いてあった本を読んで感動。無意識に生きることを辞め始める。
    </Set>
    <Line />
    <Set year="2013" title="アルバイト  🏪">
      セブンイレブンでアルバイトしました。
    </Set>
    <Set title="卒業、そして入学  🎓">中学校を卒業、高校に入学。</Set>
    <Set title="失恋  💔">失恋を経験しました。</Set>
    <Line />
    <Set year="2007" title="デュエルマスターになりました  👦🏼">
      おねだりして手に入れた野口英世を片手に、文房具屋のカードパックをサーチする日々。お婆ちゃん、ごめんよ…
    </Set>
    <Line />
    <Set year="1997" title="生まれる  👶🏻">
      12月、誕生しました。
    </Set>
  </>
);

export function Timeline() {
  const [isShowingFullTimeline, isShowFullTimeline] = useState(true);

  const hundleTimeline = useCallback(() => {
    isShowFullTimeline((isShowingFullTimeline) => !isShowingFullTimeline);
  }, []);

  return (
    <main className={styles.main}>
      <h2>Timeline</h2>
      <Set year="2021" title="ポートフォリオ作成開始 🏃‍♂️">
        技術スタックに Next.js + microCMS + Vercel を使って JAMStack
        のポートフォリオを作成しています。
      </Set>
      <Line />
      <Set year="2020" title="プログラミング学習開始  💻">
        11月、プログラミングの勉強を開始しました。
      </Set>
      <Set title="アルバイト  🏚">
        伯父が経営している建築屋で人手が足りないときにアルバイトしています。
      </Set>
      <Set title="ブログ作成  🧑🏻‍💻">
        wordpressでブログを作成。留学する方をターゲットにしていて、私がオーストラリアに滞在した経験や情報を発信していました。
      </Set>
      <Set title="帰国  🇯🇵">
        オーストラリア緊急事態宣言によって働いていた会社が経営困難となって解雇される。日本政府からの帰国要請も出ており5月に帰国を決意。
      </Set>
      <Line />
      <Set year="2019" title="就職  🍖">
        食肉加工場でアルバイトから正社員になりました。
      </Set>
      <Set title="Trip in Melbourn  🚃">
        約260㎞に渡って続く海岸道路（Great Ocean Road）を車で旅行。
      </Set>
      <Set title="アルバイト  🍎">
        NSW州にある農場でアルバイト。ピーナッツの木植えや果樹の手入れを経験しました。
      </Set>

      {isShowingFullTimeline ? null : <FullTimeline />}

      {isShowingFullTimeline ? (
        <button
          type="button"
          className={styles.readAll}
          onClick={hundleTimeline}
        >
          すべて見る
          <svg className={styles.svgicon} viewBox="0 0 20 20">
            <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10" />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          className={styles.readAll}
          onClick={hundleTimeline}
        >
          戻す
          <svg className={styles.svgicon} viewBox="0 0 20 20">
            <path d="M13.889,11.611c-0.17,0.17-0.443,0.17-0.612,0l-3.189-3.187l-3.363,3.36c-0.171,0.171-0.441,0.171-0.612,0c-0.172-0.169-0.172-0.443,0-0.611l3.667-3.669c0.17-0.17,0.445-0.172,0.614,0l3.496,3.493C14.058,11.167,14.061,11.443,13.889,11.611 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.692-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.383,10c0-4.07-3.312-7.382-7.383-7.382S2.618,5.93,2.618,10S5.93,17.381,10,17.381S17.383,14.07,17.383,10" />
          </svg>
        </button>
      )}
    </main>
  );
}
