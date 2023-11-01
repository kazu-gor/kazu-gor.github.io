import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';
import { sns } from '@/config/sns';

function HorizontalLine() {
  return <div className="h-0.5 bg-stone-400 w-4/6"></div>;
}

function IconName() {
    return <div className="vstack items-center gap-2">
      <Link href="/posts/page/1" passHref>
        <Image
          className="object-cover w-28 h-28 rounded-full"
          alt="avatar"
          src="/assets/author.jpg"
        />
      </Link>
      <h1 className="text-2xl font-semibold text-primary-1">kazu-gor</h1>
    </div>
}

function HobbyIcon() {
    return <p className="text-2xl text-primary-1">
        🧖 ☕️ 🪴
    </p>

}

function SnsIcon() {
    return <div className="flex gap-4">
      {sns.map(({ href, icon, label }) => (
        <Link key={href} href={href} passHref>
          <a className="text-primary-1" aria-label={label}>
            {icon}
          </a>
        </Link>
      ))}
    </div>
}

function ContentTitle({ title }: { title: string }) {
    return <div className="gap-4 items-center">
          <h1 className="text-1xl font-semibold text-primary-1">{title}</h1>
      </div>
}

export const Profile = () => (
  <div className="select-none vstack items-center gap-5 p-6 bg-primary-1">

    <IconName />

    <HobbyIcon />

    <SnsIcon />

    <HorizontalLine />

    <ContentTitle title="趣味" />
    <p className="text-primary-1 text-center w-3/5">
        coming soon...
    </p>

    <ContentTitle title="経歴" />
    <p className="text-primary-1 text-center w-3/5">
        coming soon...
    </p>


    <ContentTitle title="プログラミング略歴" />
    <p className="text-primary-1 text-center w-3/5">
        coming soon...
    </p>

    <ContentTitle title="研究内容" />
    <p className="text-primary-1 text-left w-3/5">
        研究目的は歯科パノラマX線写真から石灰化領域を効率的に検出し、
        動脈硬化の兆候を早期に発見するための自動化システムの開発することです。<br />
        石灰化領域は頸動脈付近によく現れ、動脈硬化の兆候として知られています。<br />
        また、これが脳卒中や脳梗塞といった急死する病の原因となることが知られています。
        <br /><br />

        よってこの歯科パノラマX線写真から石灰化領域を検出できれば、
        患者へ専門の医科への受診を促し、早期発見、早期治療へ繋げることができます。<br />
        しかし、歯科医は動脈硬化の専門医ではないため、
        石灰化領域の好発部位である頸動脈に注目する機会がないことが問題点として挙げられています。<br />
        したがって、比較的受診機会の多い歯科で撮影するパノラマX線写真から、
        石灰化領域を効率的に検出できる自動化システムの開発を行うことが研究目的となります。
        <br /><br />

        先行研究との違いは、石灰化領域の性質を加味し、新たにネットワークアーキテクチャを考案していることです。<br />
        先行研究では検出のためにFasterRCNNやYOLOv3といった既存モデルを学習し、評価を行っています。<br />
        対して、我々は石灰化領域が様々な輝度や形状、大きさによって構成されるといった性質を加味した上でアーキテクチャを定義し、評価していることが大きく異なる点だと考えられます。

        <br /><br />
        SISA2023で発表した提案手法の工夫点としては、
        従来の手法ではセグメンテーションを用いて石灰化領域の推定性能を向上させていましたが、
        我々の本来の目的は石灰化があるかどうかの2値を推定することであるという本来の目的に注目し、
        石灰化の領域推定を行うセグメンテーションモデルと、
        石灰化の有無を識別する識別器にそれぞれタスクを分割するようなアーキテクチャを考案しました。<br />
        またタスクを分割して学習することによって起こるトレードオフの問題を、
        Multi-Task Learningの手法を導入して解消した点も工夫した点の1つとなります。

        <br /><br />
        検証方法は、訓練、評価、テストと数千のデータを3分割したことによって得られるデータセットを用いて、
        単純な正解率を評価及び、適合率と再現率の調和平均であるF値を用いました。<br />
        2つの評価指標を用いる理由は、
        医用分野においては異常データをどれだけ正しく異常であると分類できているかどうかが重要な評価項目となるためです。
        <br /><br />

        検証結果は、従来のセグメンテーションでは面積や輝度値といった
        ハンドクラフトな要素を用いて判別していた要素を識別器に任せることによって、
        セグメンテーションよりも高精度の結果を得ることができました。
        <br /><br />

        今後の課題としては、大規模データセット、大規模モデルが流行となっている
        自然画像の領域とは異なり、医用画像分野は依然として比較的少ないデータセットでの
        精度向上を目指す必要があるため、他分野の先行研究とはアプローチが異なることが挙げられます。<br />
        しかしながら、fine-tuningによる医用画像への転用の可能性なども考えうるため、
        他領域の先行研究も加味しながら精度向上に努める必要があると考えております。
    </p>

  </div>
);
