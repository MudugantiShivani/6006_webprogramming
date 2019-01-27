var data = {
	"questions":[
		{
			"question_text":"Earth is flat.",
			"options":[
				{
					"option":"True",
					"correct":true,
					"response":"correct answer"
				},
				{
					"option":"False",
					"correct":false,
					"response":"wrong answer"
				}
			],
			"hints":[
				"social studies basics"
			]
		},
		{
			"question_text":"There are nine planets.",
			"options":[
				{
					"option":"False",
					"correct":true,
					"response":"correct answer"
				},
				{
					"option":"True",
					"correct":false,
					"response":"wrong answer"
				}
			],
			"hints":[
				"social studies"
			]
		},
		{
			"question_text":"moon is round.",
			"options":[
				{
					"option":"True",
					"correct":true,
					"response":"correct answer"
				},
				{
					"option":"False",
					"correct":false,
					"response":"wrong answer"
				}
			],
			"hints":[
				"social studies basics"
			]
		},
	]
};
var data= JSON.stringify(data);
var obj= JSON.parse(data);
function load() {
	for (var i = 1; i <4; i++) {
		var question_id="q" + i;
		document.getElementById(question_id).innerHTML=obj.questions[i-1].question_text;
		document.getElementById(question_id+1+1).innerHTML=obj.questions[i-1].options[0].option;
		document.getElementById(question_id+2+2).innerHTML=obj.questions[i-1].options[1].option;
	}
}
function check(text) {
	var question = parseInt(text[1], 10);
	var option = parseInt(text[2], 10);
	if(obj.questions[question-1].options[option-1].correct) {
		document.getElementById("ans" + text[1]).innerHTML = '<div class = "alert alert-warning alert-dismissible correct">' + 
					'<a href="#" class="close" data-dismiss="alert" aria-label="close">&gt;&times;</a>' +
					"<b>correct: </b>" + obj.questions[question-1].options[option-1].response +
				'</div>';
	} else {
		document.getElementById("ans" + text[1]).innerHTML = '<div class = "alert alert-warning alert-dismissible incorrect">' + 
					'<a href="#" class="close" data-dismiss="alert" aria-label="close">&gt;&times;</a>' +
					"<b>Incorrect: </b>" + obj.questions[question-1].options[option-1].response +
				'</div>';
	}
}

function hint(text) {
	var question = parseInt(text[1], 10);
	document.getElementById("hint" + text[1]).innerHTML = '<div class = "alert alert-warning alert-dismissible hint">' + 
					'<a href="#" class="close" data-dismiss="alert" aria-label="close">&gt;&times;</a>' +
					"<b>Hint: </b>" + obj.questions[question-1].hints[0] +
				'</div>';

}
