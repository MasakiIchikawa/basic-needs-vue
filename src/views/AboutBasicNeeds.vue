<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

const {t} = useI18n()
const store = useStore()
const router = useRouter()

const getLocale = () => {
	return store.state.lang
}
</script>

<template>
	<div id="bnt-body">
	<lp-header />
	<main class="py-4"><div class="container form-group">
		<div class="card card-main">
			<div class="card-body" style="white-space:pre-line;">
				<div v-if="getLocale() == 'ja'" class="typo pc">
					<img class="typo-top" src="../assets/img/main_top_img_pc.jpg" />
				</div>
				<div v-if="getLocale() == 'ja'" class="typo sp">
					<img class="typo-top" src="../assets/img/main_top_img_sp.jpg" />
				</div>
			</div>
		</div>
		<div style="overflow:hidden;width:100%;"><div class="bg-explain"><div class="text-center explain">
			選択理論心理学では全ての人が<br />
			５つの基本的欲求を持っており、<br />
			そのレベルは人それぞれ異なると説明しています。<br />
			この５つの基本的欲求の強さを測る<br />
			心理テストを無料で提供しています。<br />
			ご自身や身近な方々との違いを確認し、<br />
			より良い関係を作るための参考として<br />
			ご活用ください。
		</div></div></div>
		<div class="recommendation"><img src="../assets/img/recommendation.png" /></div>
		<div class="bg-white px-4">
			<div class="sp">
				<div class="row">
					<div class="col-4">
						<img class="text-start" width="100" src="../assets/img/illust_01_sp.png" />
					</div>
					<div class="col-8 d-flex align-items-center">自分の性格や個性を<br />知りたいと思っている方</div>
				</div>
				<div class="row">
					<div class="col-7 d-flex align-items-center ps-3">恋人や夫婦の間で、<br />お互いのことをよりよく<br />知りたい方</div>
					<div class="col-5">
						<img class="text-start" width="100" src="../assets/img/illust_02_sp.png" />
					</div>
				</div>
				<div class="row">
					<div class="col-4">
						<img class="text-start" width="100" src="../assets/img/illust_03_sp.png" />
					</div>
					<div class="col-8 d-flex align-items-center">お子さんの特性を知って、<br />より良い子育てをしたいと<br />考えている方</div>
				</div>
				<div class="text-center">
					<router-link to="/" class="btn btn-success btn-start">基本的欲求診断を<br />無料で始める</router-link>
				</div>
			</div>
			<div class="pc recommendation-content container">
				<div class="row">
					<div class="col-4">自分の性格や個性を<br />知りたいと思っている方</div>
					<div class="col-4">恋人や夫婦の間で、<br />お互いのことをよりよく<br />知りたい方</div>
					<div class="col-4">お子さんの特性を知って、<br />より良い子育てをしたいと<br />考えている方</div>
				</div>
			</div>
		</div>
		<div class="bg-pink p-4 text-center container">
			<div class="row">
				<div class="col-md-6">
					<a href="#needs" class="btn btn-light">
						5つの基本的欲求とは？
					</a>
				</div>
				<div class="col-md-6">
					<a href="#bnt" class="btn btn-light">
						基本的欲求診断とは？
					</a>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<a href="#achievement" class="btn btn-light">
						<div>
							詳細な分析や組織での<br />
							活用をご検討の方へ
						</div>
					</a>
				</div>
				<div class="col-md-6">
					<a href="#develop" class="btn btn-light">
						<div>
							さらなる開発に向けて<br />
							協力者を募集しています
						</div>
					</a>
				</div>
			</div>
		</div>
		<div id="needs" class="bg-white text-center">
			<div class="needs-title fs-4 mx-auto">
				<div class="attention"><img src="../assets/img/attention01_pc.png" /></div>
				<div style="z-index:1;">
					<span class="text-top">5</span>つの
					<span class="text-dot">基</span>
					<span class="text-dot">本</span>
					<span class="text-dot">的</span>
					<span class="text-dot">欲</span>
					<span class="text-dot">求</span>とは？
				</div>
				<div class="underline">　</div>
			</div>
			<div class="text-center text-body">
				5つの基本的欲求とは、<br />
				選択理論心理学の概念の一部として、<br />
				ウィリアム・グラッサーによって<br />
				提唱されたものです。
			</div>
			<img class="img-center sp" src="../assets/img/circle_sp.png" />
			<div class="text-center pc">
				<img class="img-center my-4" src="../assets/img/circle_pc.png" style="width:500px;" />
			</div>
			<div class="sp">
				<div class="row mb-3">
					<div class="col-3 text-center need">生存</div>
					<div class="col-9">飲食や運動、安全性、貯蓄などに関わる欲求</div>
				</div>
				<div class="row mb-3">
					<div class="col-3 text-center need">愛・所属</div>
					<div class="col-9">人に近づきたい、仲良くしたい、良い関係でいたいという欲求</div>
				</div>
				<div class="row mb-3">
					<div class="col-3 text-center need">力</div>
					<div class="col-9">競争に勝ちたい、何かを達成したい、人に認めてほしいといった欲求</div>
				</div>
				<div class="row mb-3">
					<div class="col-3 text-center need">自由</div>
					<div class="col-9">束縛されたくない、変化がほしい、自分自身が選択したいといった欲求</div>
				</div>
				<div class="row mb-3">
					<div class="col-3 text-center need">楽しみ</div>
					<div class="col-9">ユーモア、好奇心、遊び心などに関連した欲求</div>
				</div>
			</div>
			<div class="sp">
				<img class="img-center" src="../assets/img/img01_sp.png" />
				<div class="text-body">
					“欲求”という言葉を聞くとまず頭に浮かぶのはマズローの欲求5段階説かもしれません。<br />
					しかし、<b>グラッサーの5つの基本的欲求の概念がマズローの欲求5段階説と異なるのは階層になっていない</b>ことです。<br />
					人は常にこの5つの欲求全てが満たされた状態を目指して行動していると考えます。
				</div>
				<img class="img-center" src="../assets/img/img02_sp.png" />
				<div class="text-body">
					人それぞれこれらの欲求の強さ弱さは異なります。
					その違いが行動の違いや考え方の違いにつながっていきます。
					そして、自身の欲求が満たされないことをどんなに他者がさせようとしても、行動に移ることはないでしょう。<br />
					こうしたことを知っておくことは、<b>互いの違いを認め合う土台になります。</b><br />
					そして<b>人に無理に何かを強制する行為を手放す</b>ことにつながるでしょう。<br />
					<br />
					<br />
				</div>
			</div>
			<div class="pc container" style="width:80%;">
				<div class="row">
					<div class="col-md-3">
						<img class="img-center" style="width:100%;" src="../assets/img/img01_pc.jpg" />
					</div>
					<div class="col-md-9 text-body text-start my-auto">
						“欲求”という言葉を聞くとまず頭に浮かぶのはマズローの欲求5段階説かもしれません。<br />
						しかし、<b>グラッサーの5つの基本的欲求の概念がマズローの欲求5段階説と異なるのは階層になっていない</b>ことです。<br />
						人は常にこの5つの欲求全てが満たされた状態を目指して行動していると考えます。
					</div>
				</div>
				<div class="row">
					<div class="col-md-9 text-body text-start my-auto">
						人それぞれこれらの欲求の強さ弱さは異なります。
						その違いが行動の違いや考え方の違いにつながっていきます。
						そして、自身の欲求が満たされないことをどんなに他者がさせようとしても、行動に移ることはないでしょう。<br />
						こうしたことを知っておくことは、<b>互いの違いを認め合う土台になります。</b><br />
						そして<b>人に無理に何かを強制する行為を手放す</b>ことにつながるでしょう。<br />
					</div>
					<div class="col-md-3">
						<img class="img-center" style="width:100%;" src="../assets/img/img02_pc.jpg" />
					</div>
				</div>
			</div>
			<br />
			<br />
		</div>
		<div id="bnt" class="bg-pink whats-bnt text-center" style="position:relative;z-index:1;">
			<img class="img-center sp" src="../assets/img/ttl_sec02_sp.png" style="width:80%;" />
			<div class="pc" style="padding-left:30px;"><img class="img-center mx-auto" src="../assets/img/ttl_sec02_pc.png" style="width:400px;" /></div>
			<div class="sp">
				<img class="img-center" src="../assets/img/illust_about_pc.png" style="width:80%;" />
				<div class="text-body">
				基本的欲求診断は、5つの基本的欲求の強さ弱さをそれぞれ5段階で判定できるようになっています。
				本診断は、立正大学での馬場悠輔氏、瀬田剛氏、柿谷正期氏による研究成果をもとに作成されており、その結果の妥当性は検証済みです。
				</div>
				<span style="font-size:5px;">&lt;&lt;参考&gt;&gt; 『選択理論心理学研究』2007年10巻1号、pp.59-74</span>
				<br />
				<br />
				<div class="text-body">
					自分自身の基本的欲求の強さや弱さを知っておくこと、そして大切な人の基本的欲求との違いを知っておくことは大切です。
				</div>
			</div>
			<div class="container pc" style="width:80%;">
				<br />
				<br />
				<div class="row">
					<div class="col-md-4">
						<img class="img-center" src="../assets/img/illust_about_pc.png" style="width:100%;" />
					</div>
					<div class="col-md-8 my-auto text-start">
						<div class="text-body">
						基本的欲求診断は、5つの基本的欲求の強さ弱さをそれぞれ5段階で判定できるようになっています。
						本診断は、立正大学での馬場悠輔氏、瀬田剛氏、柿谷正期氏による研究成果をもとに作成されており、その結果の妥当性は検証済みです。
						</div>
						<span style="font-size:5px;">&lt;&lt;参考&gt;&gt; 『選択理論心理学研究』2007年10巻1号、pp.59-74</span>
					</div>
				</div>
				<br />
				<br />
				<div class="text-body">
					自分自身の基本的欲求の強さや弱さを知っておくこと、<br />そして大切な人の基本的欲求との違いを知っておくことは大切です。
				</div>
			</div>
			<br />
			<br />
			<span class="ex-title">しかし、そのことを理由に</span>
			<div class="bg-white ex-content">
				<img class="img-center" src="../assets/img/illust_people_pc.jpg" />
				<div class="text-body w-pc-60">
					と諦めることを勧めているわけではありません。
					お互いの違いを知り、受け止め、乗り越えるために自身ができることを考える機会にしていただきたいと思います。
				</div>
				<br />
				<br />
				<br />
			</div>
			<div class="text-body sp" style="margin-top:-50px;">
				<span class="impact">違いを受け止めるためには、</span><br />
				<span class="impact">違いを知ることから</span><br />
				<span class="impact">スタートです</span>
			</div>
			<div class="text-body fs-3 pc" style="margin-top:-80px;">
				<span class="impact">違いを受け止めるためには、</span><br />
				<span class="impact">違いを知ることからスタートです</span>
			</div>
			<br />
			<br />
			<div class="text-body text-start sp">
				また、人というのは5つの基本的欲求だけで診断できるほど簡単なものではありません。
				<b>大切にしたいと思う人と関わる時間を持って相手のことを常によく知る努力が大切</b>です。<br />
				大切な方とご一緒にお試しください。そしてその結果についてぜひ一緒に話し合ってみてください。<br />
			</div>
			<div class="text-body w-pc-80 pc">
				また、人というのは5つの基本的欲求だけで診断できるほど簡単なものではありません。<br />
				<b>大切にしたいと思う人と関わる時間を持って相手のことを常によく知る努力が大切</b>です。<br />
				大切な方とご一緒にお試しください。そしてその結果についてぜひ一緒に話し合ってみてください。<br />
			</div>
			<br />
			<br />
			<img class="light" src="../assets/img/icon_right_pc.png" />
			<div class="bg-white w-pc-80" style="border-radius:50px;margin-top:-40px;padding:0;">
				<div class="bg-brown" style="border-radius:50px 50px 0 0;padding:40px 0 20px 0;">
					正確な結果を得るために大切な<br /><span class="fs-1">3</span>つのポイント
				</div>
				<div class="container p-2">
					<div class="row border-brown mx-2 my-3 py-4 px-0">
						<div class="col-3 point-head bg-brown"><span style="font-size:5px;">POINT</span><br /><span class="fs-1">01</span></div>
						<div class="col-9 text-start my-auto">
							できるだけあまり考え込まずに素直に質問に答えること
						</div>
					</div>
					<div class="row border-brown mx-2 my-3 py-4 px-0">
						<div class="col-3 point-head bg-brown"><span style="font-size:5px;">POINT</span><br /><span class="fs-1">02</span></div>
						<div class="col-9 text-start my-auto">
							診断結果はあくまで自分を、そして人のことを知る一つの手段であることを知っておく
						</div>
					</div>
					<div class="row border-brown mx-2 my-3 py-4 px-0">
						<div class="col-3 point-head bg-brown"><span style="font-size:5px;">POINT</span><br /><span class="fs-1">03</span></div>
						<div class="col-9 text-start my-auto">
							ご自身のコンディションも少なからず影響を与えるので、時間を置きながら何度かチェックしてみる
						</div>
					</div>
				</div>
			</div>
			<router-link to="/">
				<img class="img-center sp" src="../assets/img/cv_btn02_sp.png" />
				<div class="pc text-center">
					<br />
					<br />
					<img class="img-center" style="width:400px;" src="../assets/img/cv_btn02_pc.png" />
				</div>
			</router-link>
		</div>
		<div id="achievement" class="bg-white text-center" style="margin-top:-50px;padding-top:50px;">
			<img class="img-center sp" src="../assets/img/ttl_sec03_sp.png" style="width:80%;padding-left:20px;" />
			<div class="pc text-center">
				<br />
				<br />
				<img class="img-center" src="../assets/img/ttl_sec03_pc.png" style="width:400px;" />
				<br />
				<br />
			</div>
			<div class="text-body text-start sp">
				より詳しく欲求の強さ、現在の満たされ度合いなどを知りたい、
				または組織として5つの基本的欲求の概念を活かして分析をしたいという方は
				アチーブメント株式会社にて有料版の診断ツールをご用意いただいていますのでそちらをご活用ください。
			</div>
			<div class="text-body pc">
				より詳しく欲求の強さ、現在の満たされ度合いなどを知りたい、<br />
				または組織として5つの基本的欲求の概念を活かして分析をしたいという方は<br />
				アチーブメント株式会社にて有料版の診断ツールをご用意いただいていますのでそちらをご活用ください。
			</div>
			<div class="container w-pc-80">
				<a href="https://bnt-web.achievement.co.jp/about" class="btn btn-out">
					5つの基本的欲求<br />サーベイWeb版
				</a>
			</div>
			<br />
			<br />
			<br />
			<div id="develop" class="bg-pink py-5 container w-pc-80 develop" style="border-radius:20px;">
				<div class="sp">
					<div class="row mx-2">
						<div class="col-3 text-center">
							<img class="my-2" src="../assets/img/icon_monitor_pc.png" style="width:100%;" />
						</div>
						<div class="col-9 text-start" style="font-size:1.1em;">さらなる開発に向けて<br />協力者を募集しています</div>
					</div>
					<div class="text-body text-start mx-2">
						幸せを広げる仕組みをたくさん作っていきたいと思っていますので、ご協力していただける方はぜひご連絡をお願いします！
					</div>
				</div>
				<div class="pc">
					<div class="row mx-2">
						<div class="col-3 text-center">
							<img class="my-2" src="../assets/img/icon_monitor_pc.png" style="width:100%;" />
						</div>
						<div class="col-9 text-start">
							<span style="font-size:1.4em;">さらなる開発に向けて協力者を募集しています</span><br />
							<br />
							<span class="text-body">
								幸せを広げる仕組みをたくさん作っていきたいと思っていますので、ご協力していただける方はぜひご連絡をお願いします！
							</span>
						</div>
					</div>
				</div>
				<br />
				<br />
				<div class="bg-white text-start" style="border-radius:10px;padding-left:10px;"><ul class="develop-list">
					<li>世界中に広げるための英語等への翻訳</li>
					<li>AIなどを使った新たなサービスの開発</li>
					<li>集まったデータを分析して論文発表</li>
				</ul></div>
				<br />
				<br />
				<div class="text-body sp">
					基本的欲求診断の結果の見方や活用方法についてご興味のある方やご相談はお気軽に<a href="#">こちらまで</a>お問い合わせください
				</div>
				<div class="text-body pc">
					基本的欲求診断の結果の見方や活用方法についてご興味のある方やご相談は<br />
					お気軽に<a href="https://peace-tea.jp/ct/contact/">こちらまで</a>お問い合わせください
				</div>
			</div>
		</div>
			<bnt-footer />
	</div></main>
	<div class="btn-flow">
		<router-link to="/">
			<img width="120" src="../assets/img/cv_fv_sp.png" />
		</router-link>
	</div>
	</div>
</template>

<style scoped>
main{
	margin-bottom:150px;
}
main > .container{
	padding-right:0;
	padding-left:0;
}
a{
	color:#ffaca4;
}
.card-main{
	margin-right:15px;
	margin-left:15px;
}
.card-body{
	padding:0 0 0 0;
}
.title{
    letter-spacing: 6px;
    color: #2c2300;
}
.subtitle{
	background-color: #ffaca4;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  margin-left: auto;
}
.bg-explain{
	background-color:white;
  width: 200%;
  margin: 0 -50%;
  padding-bottom:50px;
}
.explain{
	font-size: 4vw;
	line-height:3em;
	background-color:#f7f3f2;
	padding-bottom:50px;
  border-radius: 0 0 50% 50%;
}
.whats-bnt{
	border-radius:40px;
	margin-top:-30px;
	padding:50px 20px;
}
.text-body{
	font-size: 4vw;
	line-height:2em;
	b{
		background-color:#ffaca4;
		color:white;
		padding:5px;
		border-radius:2px;
		font-weight:300;
	}
}
.recommendation{
	width:100%;
	text-align:center;
	margin-top:-80px;
}
.recommendation img{
	width:70%;
}
.need{
	border: solid #ffaca4 2px;
    border-radius: 30px;
    padding: 10px;
    background-color: #fff8e9;
}
.bg-white{
	background-color:white;
	padding:20px;
}
.bg-brown{
	background-color:#968f7c;
	color:white;
}
.border-brown{
	border:solid #968f7c 2px;
	border-radius:30px;
}
.point-head{
	border-radius: 0 40px 40px 0;
  padding: 20px 0;
  line-height: 1;
  font-weight: 700;
  margin-top:auto;
  margin-bottom:auto;
}
.light{
	background-color:#968f7c;
	border-radius:50%;
	padding:20px;
	width:75px;
}
.btn-out{
	background-color: white;
  border: solid 2px #ffa89e;
  border-radius: 40px;
  padding: 15px 60px;
  color: #948f7b;
}
.btn-out:after{
	content: '';
  width: 8px;
  height: 8px;
  border-top: 2px solid #948f7b;
  border-right: 2px solid #948f7b;
  transform: rotate(45deg) translateY(-50%);
  position: absolute;
  top: 50%;
  right: 2em;
}
.develop-list li{
	margin-bottom:10px;
	color:#333333;
	list-style:none;
	position:relative;
}
.develop-list li:before{
	content:"●";
	color:orange;
	position:absolute;
	left:-1.5em;
}
.btn-start{
	border-radius: 50px;
  padding: 20px 70px 20px 50px;
  background-color: #ffaca4;
  border-color: #ffaca4;
  font-weight: 550;
  color:white;
}
.btn-start:before{
  content: "";
  position: absolute;
  top: 46%;
  right: 35px;
  width: 10px;
  height: 2px;
  background: #fff;
  transform: rotate(45deg);
}
.btn-start:after{
	content: "";
  position: absolute;
  top: 54%;
  right: 35px;
  width: 10px;
  height: 2px;
  background: #fff;
  transform: rotate(-45deg);
}
.bg-pink{
	background-color:#ffefef;
}
.ex-title{
	background-color: #ffaca4;
  padding: 10px 20px;
  border-radius: 25px;
  color: white;
  border: solid white 4px;
}
.ex-content{
	margin-top: -15px;
	border-radius: 20px;
}
.impact{
	background-color:black;
	color:white;
	padding:7px;
	line-height:2.3;
	border-radius:5px;
}
.btn-light{
	background-color: white;
    padding: 25px 35px;
    width: 90%;
    border:none;
    color:black;
}
.btn-light:after{
	content: '';
  width: 8px;
  height: 8px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(45deg) translateY(-50%);
  position: absolute;
  top: 50%;
  right: 2em;
}
.cursor{
	float: right;
    font-size: 1.3em;
}
.menu a::before{
    content: "▼";
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
}
.menu a{
	padding-right:60px;
}
.attention img{
	width: 35px;
    position: absolute;
    right: 10%;
}
.text-top{
	font-size: 2em;
    font-weight: 500;
}
.text-dot:before{
	content: "・";
    display: block;
    position: absolute;
    top: -23px;
    left: 0;
    right: 0;
    font-weight: 700;
    color: #ffada2;
}
.text-dot{
	position:relative;
	font-size:1.2em;
}
.underline{
	background-color: pink;
    border-radius: 3px;
    text-align: center;
    margin: -20px 20px 5px 20px;
    font-size: 0.5em;
}
.footer{
	font-size:5px;
}
@media (min-width: 768px){
	.pc{display:block;}
	.sp{display:none;}
	main .container{
		max-width:none;
	}
	.title-jp{
	    padding-top: 30px;
		font-size:52px;
	}
	.card{
		border-radius:20px;
		border:none;
	}
	.typo{
    margin: 0 auto 0 auto;
    width: 100%;
    text-align: center;
    img{
    	border-radius:20px;
		}
  }
	.typo-top{
		width:100%;
		margin:0;
		img{
			border-radius:20px;
		}
	}
	.explain{
		font-size:1em;
	}
	.recommendation img{
		width: 380px;
    margin-top: -20px;
	}
	.recommendation-content{
		height: 200px;
    width: 580px;
    background-size: 580px;
    background-repeat: no-repeat;
		background-image:url('../assets/img/persona_pc.png');
		div{
			text-align:center;
			margin-top:75px;
			font-size:10px;
			line-height:2;
		}
	}
	.btn-light{
    padding: 25px 25px 40px 25px;
	}
	.btn-light:after{
		content: '';
	  width: 8px;
	  height: 8px;
	  border-top: 2px solid #000;
	  border-right: 2px solid #000;
	  transform: rotate(135deg) translateY(-300%);
	  position: absolute;
	  left: 50%;
	}
	.needs-title{
		width:500px;
		position:relative;
	}
	.text-body{
		font-size:1em;
	}
	.btn-flow{
		position:fixed;
		top:calc( 100vh - 150px );
		right:0px;
		z-index:20;
	}
	.ex-content{
		width:80%;
		margin-left:auto;
		margin-right:auto;
		border-bottom-left-radius:50%;
		border-bottom-right-radius:50%;
		img{
			width:500px;
			margin-top:20px;
		}
		.text-body{
			margin-top:50px;
		}
	}
	.w-pc-80{
		width:80%;
		margin-left:auto;
		margin-right:auto;
	}
	.w-pc-60{
		width:60%;
		margin-left:auto;
		margin-right:auto;
	}
	.develop{
		padding:40px;
	}
}

@media (max-width:768px){
	.pc{display:none;}
	.sp{display:block;}
	.title-jp{
	    padding-top: 20px;
		font-size:15vw;
	}
	.typo{
		width:100%;
		margin:0;
		img{
			border-radius:20px;
		}
	}
	.card-main{
		aspect-ratio:690/1030;
	}
	.btn-flow{
		position:fixed;
		top:calc( 100vh - 300px );
		right:0px;
		z-index:20;
	}
	.img-center{
		width:100%;
		margin:20px auto;
	}
}
</style>
