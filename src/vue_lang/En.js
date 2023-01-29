const contents = {
	messages: {
		// 単語
		word: {
			title:'Basic Needs Assessment',
			developer:'Developer',
			developer_name:'PEACEwith Masaki Ichikawa',
			require:'Required',
			start:'Start assessment',
			back_before:'Back',
			privacy_policy:'Privacy policy',
			complete:'Complete',
			display_result:'See the result',
			result_title:'Result of Basic Needs Assessment',
			level5:'5.Well applicable',
			level4:'4.Applicable a little',
			level3:'3.Neither',
			level2:'2.Not applicable a little',
			level1:'1.Not applicable at all',
			email:'email',
			world_area:'Residential area',
			world_area_select:[
				{id:1,name:'Africa'},
				{id:2,name:'Asia'},
				{id:3,name:'Europe'},
				{id:4,name:'South America'},
				{id:5,name:'North America'},
				{id:6,name:'Oceania'}
			],
			sex:'Gender',
			sex_select:[
				{id:1,name:'Male'},
				{id:2,name:'Female'}
			],
			birth_year:'Year of birth',
			marriage:'Marriage status',
			marriage_select:[
				{id:1,name:'Single'},
				{id:2,name:'Married'}
			],
			job:'Occupation',
			job_select:[
				{id:1,name:'Company employee'},
				{id:2,name:'Student'},
				{id:3,name:'Civil servant'},
				{id:4,name:'Self employed'},
				{id:5,name:'Part-timer'},
				{id:6,name:'Housemaker'},
				{id:7,name:'Group staff'},
				{id:99,name:'Other'}
			],
			other_job:'Other(detail)',
			birth_year_placeholder:'4-digit input',
			rtnpo_name:'The William Glasser Institute Japan',
			needs_label:['Survival','Love/Belonging','Power','Freedom','Fun/Pleasure'],
			change_locale:'日本語',
			display_graph:'Display as graph',
			display_radar:'Display on radar chart',
			display_bar2:'Display as a bar graph'
		},
		// メッセージ
		sentence: {
			start_message:'In Choice Theory, everyone has five basic needs. It explains tha the level is different for each person.\nThis assessment is a psychological test than measures the strength of those five basic needs.\nPlease check the differences with yourself and those close to you and use it as a reference for building a better relationship.\n\nI hope that many people with build better relationships and live a happy life.',
			start_title:'There are 51 questions in total (answer time: about 3 minutes).',
			start_description:'As shown below, 5 levels of answers from "well applicable" to "not applicable at all" are displayed for each question, so select the one that is most fit to you. When selected, the following questions will be displayed automatically.',
			example_question:'[Question example] I have a good understanding of my five basic needs.',
			privacy_comment:'For those who use it for the first time, there is a simple questionnaire such as birth year and occupation at the end.',
			email_note:'Be sure to register an address that can receive emails. If you do not receive the email, you may not be able to provide the test results successfully.',
			privacy_agree:'By the time you start the assessment, you agree to the handling of your personal information.',
			analyse_error:'The email may have failed to be sent. We apologize the inconvenience, but please register the correct email address and reply from the beginning.',
			questionnaire_title:'Finally, please select the one that applies to the following items.',
			copyright:'copyright(c) NPO・WGI Japan(Yusuke Baba,Tsuyoshi Seta,Masaki Ichikawa,Masaki Kakitani)',
			copyright2:'From "Choice Theory Psychology Research" 2007,pp.59-74. Created based on the permission of the author.',
			copyright3:'Use for commercial purposes without written permission is prohibited.',
			end_message:"That's all for the question. Thank you. Click the button below to see the results.",
			send_email_message:'We have sent you the URL of this screen by email.\nYou can check the result of this time at any time.',
			ct_content:'The concept of basic desire is part of the choice theory psychology advocated by William Glasser, an American psychiatrist.\nIf you are interested, please participate in the training sponsored by the Japan Reality therapy Association.',
			content_need0:'Needs related to eating and drinking,exercise,safety,savings, etc.',
			content_need1:'The needs to get closer to people, to get along with them, and to have a good relationship.',
			content_need2:'The needs to win the competition,achieve something, and be recognized by others.',
			content_need3:'The needs to be tied up, make change, decide something yourself.',
			content_need4:'Needs related to humor,curiosity,playfulness, etc.',
			result_alert:'Please note that the result value does not have to be large.\nIf you have a strong need, it may be difficult to satisfy that need.\nOn the contrary, if the need is weak, it can be said that the need is easy to satisfy.'
		},
		validate:{
			require:'{target} is a required item.',
			year:'Please enter {target} in 4 digits A.D.'
		}
	},
	//  日付フォーマット
	dateTimeFormats: {
		full: {
			year: "numeric",
			month: "short",
			day: "numeric",
			weekday: "short",
			hour: "numeric",
			minute: "numeric"
		},
		day: {
			year: "numeric",
			month: "short",
			day: "numeric"
		},
		time: {
			hour: "numeric",
			minute: "numeric"
		},
		week: {
			weekday: "long"
		}
	},
	// ナンバーフォーマット
	numberFormats: {
		currency: {
			style: 'currency',
			currency: 'USD'
		}
	}
};

export {
	contents
};