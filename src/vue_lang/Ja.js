const contents = {
	messages: {
		// 単語
		word: {
			title:'基本的欲求診断',
			developer:'開発元',
			developer_name:'PEACEwith Masaki Ichikawa',
			require:'必須',
			start:'テストを開始する',
			back_before:'一つ戻る',
			privacy_policy:'個人情報の取り扱いについて',
			complete:'回答終了',
			display_result:'結果を見る',
			result_title:'基本的欲求テスト結果',
			level5:'5.よく当てはまる',
			level4:'4.少し当てはまる',
			level3:'3.どちらでもない',
			level2:'2.あまり当てはまらない',
			level1:'1.全く当てはまらない',
			email:'メールアドレス',
			world_area:'居住地域',
			africa:'アフリカ',
			asia:'アジア',
			europe:'ヨーロッパ',
			south_america:'南アメリカ',
			north_america:'北アメリカ',
			oceania:'オセアニア',
			sex:'性別',
			male:'男性',
			female:'女性',
			birth_year:'誕生年',
			marriage:'婚姻',
			single:'独身',
			'married':'既婚',
			job:'職業',
			company_employee:'会社員',
			student:'学生',
			civil_servant:'公務員',
			self_employed:'自営業',
			parttimer:'フリーター',
			housemaker:'専業主婦・主夫',
			group_staff:'団体職員',
			other:'その他',
			other_job:'その他の職業内容',
			birth_year_placeholder:'4桁入力',
			rtnpo_name:'日本リアリティセラピー協会',
			needs_survival:'生存',
			needs_love:'愛/所属',
			needs_power:'力',
			needs_freedom:'自由',
			needs_fun:'楽しみ',
			change_locale:'English',
			display_graph:'グラフで表示',
			display_radar:'レーダーチャートで表示',
			display_bar2:'棒グラフで表示',
			year_prepend:'西暦',
			year_append:'年',
		},
		// メッセージ
		sentence: {
			start_message:'選択理論心理学では全ての人が5つの基本的欲求を持っており、そのレベルは人それぞれ異なると説明しています。\nこのテストはその5つの基本的欲求の強さを測る心理テストです。\nご自身や身近な方々との違いを確認し、より良い関係を作るための参考としてご活用ください。\n\n多くの方がより良い人間関係を構築して幸せな人生を送られることを願っています。',
			start_title:'質問は全部で51問(回答時間：3分程度)です',
			start_description:'下記のように、それぞれの質問について「よく当てはまる」から「全く当てはまらない」の５段階の回答が表示されますので、一番当てはまるものを選択してください。選択すると自動的に次の質問が表示されます。',
			example_question:'【質問例】自身の5つの基本的欲求についてよく理解している',
			privacy_comment:'初めて利用される方は最後に誕生年・職業などの簡単なアンケートがあります。',
			email_note:'必ずメール受信できるアドレスを登録してください。メール受信できない場合、うまくテスト結果を提供できない可能性があります。',
			privacy_agree:'テストを開始した時点で個人情報の取り扱いに同意したものとします。',
			analyse_error:'メール送信に失敗した可能性があります。申し訳ありませんが正しいメールアドレスを登録の上、最初からご回答をお願いします。',
			questionnaire_title:'最後に下記の項目について当てはまるものを選択してください',
			copyright:'copyright(c)2007-2021 NPO・WGI Japan(Yusuke Baba,Tsuyoshi Seta,Masaki Ichikawa,Masaki Kakitani)',
			copyright2:'『選択理論心理学研究』2007年10巻1号、pp.59-74を基に著者の許可を得て作成。',
			copyright3:'書面での許可なく営利目的で用いることを禁じます',
			end_message:'質問は以上です。お疲れ様でした。下記ボタンをクリックすると結果が表示されます',
			send_email_message:'本画面のURLをメールでお送りしました。\nいつでも今回の結果をご確認できます。',
			ct_content:'基本的欲求の概念は、アメリカの精神科医であったウィリアム・グラッサーの提唱する選択理論心理学の一部です。\nご興味のある方は日本リアリティセラピー協会主催の研修にぜひご参加ください。',
			content_need0:'飲食や運動、安全性、貯蓄などに関わる欲求です。',
			content_need1:'人に近付きたい、仲良くしたい、良い関係でいたいという欲求です。',
			content_need2:'競争に勝ちたい、何かを達成したい、人に認めて欲しいといった欲求です。',
			content_need3:'束縛されたくない、変化が欲しい、自分で何か決めていきたいといった欲求です。',
			content_need4:'ユーモア、好奇心、遊び心などに関係した欲求です。',
			result_alert:'結果数値は大きければいいわけではないのでご注意ください。\n欲求が強いと、その欲求がなかなか満たされないこともあるでしょう。\n逆に欲求が弱いとその欲求は満たしやすいとも言えます。',
			loading:'しばらくお待ちください'
		},
		validate:{
			require:'{target}は必須項目です',
			year:'{target}は西暦4桁で入力してください'
		}
	},
	// 日付フォーマット

	dateTimeFormats: {
		full: {
			year: "numeric",
			month: "short",
			day: "numeric",
			weekday: "short",
			hour: "numeric",
			minute: "numeric",
			hour12: true
		},
		day: {
			year: "numeric",
			month: "short",
			day: "numeric"
		},
		time: {
			hour: "numeric",
			minute: "numeric",
			hour12: true
		},
		week: {
			weekday: "short"
		}
	},
	// ナンバーフォーマット
	numberFormats: {
		currency: {
			style: 'currency',
			currency: 'JPY',
			currencyDisplay: 'symbol'
		}
	},
};

export { contents };
