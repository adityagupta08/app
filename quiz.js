$(document).ready(function(){

	$("#showbutton").hide();
	$("#quest").hide();
	$("#nav").hide();
	$("#showbutton").hide();
	$("#submit").hide();
})



function validateCredentials()
{
	var uname= document.getElementById("txtEmail").value;
	var pass= document.getElementById("txtPass").value;
	
	$.get("credentials.json",
			
		function(data,status)
		{
			//var users = JSON.parse(data);
			for(user of data)
			{
				if(user.user1==uname && user.password==pass)
				{
					$("#div1").load("TermsandCondition.html");
							
				}
		
			}
			})

}


function showQuiz()
{
	$("#showbutton").show();
	$("#quest").show();
	$("#nav").show();
	$("#rules").hide();
	$("#button1").hide();

	$.get("questions.json",
			
		function(data,status)
			{
		//var queQ = JSON.parse(data);
		//alert(data);
		document.getElementById("quest").innerHTML=data[0].question;
		document.getElementById("span1").innerHTML=data[0].choice1;
		document.getElementById("span2").innerHTML=data[0].choice2;
		document.getElementById("span3").innerHTML=data[0].choice3;
		document.getElementById("span4").innerHTML=data[0].choice4;
			
			});

}
var t=0;
function nextQ()
{	
	document.getElementById("prevs").disabled = false;

	$.get("questions.json",
	
		function(data,status)
		{ 
			t++;
			if(t==data.length)

			{	
				$("#nxt").hide();
				$("#submit").show();

				
			}
			

		document.getElementById("quest").innerHTML=data[t].question;
		document.getElementById("span1").innerHTML=data[t].choice1;
		document.getElementById("span2").innerHTML=data[t].choice2;
		document.getElementById("span3").innerHTML=data[t].choice3;
		document.getElementById("span4").innerHTML=data[t].choice4;
		
		})

}

function prevQ()
{	
	$("#nxt").show();
	$("#submit").show();
	document.getElementById("nxt").value="Next"

	$.get("questions.json",
	
		function(data,status)
		{ t--;

		document.getElementById("quest").innerHTML=data[t].question;
		document.getElementById("span1").innerHTML=data[t].choice1;
		document.getElementById("span2").innerHTML=data[t].choice2;
		document.getElementById("span3").innerHTML=data[t].choice3;
		document.getElementById("span4").innerHTML=data[t].choice4;
		if(data[t].qid==0)
		{
			document.getElementById("prevs").disabled = true;
			
		}

		})
}

function calculateScore()
{
	

	$.get("questions.json",
	
		function(data)
		{
			var jsonObj = JSON.parse(data);
			if(document.getElementById("btn1").checked==true)
			{
				if(document.getElementById("btn1").value== jsonObj[0].correct)
				{
					counter++;
				}
			}

			if(document.getElementById("btn2").checked==true)
			{
				if(document.getElementById("btn1").value== jsonObj[1].correct)
				{
					counter++;
				}
			}
			if(document.getElementById("btn3").checked==true)
			{
				if(document.getElementById("btn1").value== jsonObj[2].correct)
				{
					counter++;
				}
			}
			if(document.getElementById("btn4").checked==true)
			{
				if(document.getElementById("btn1").value== jsonObj[3].correct)
				{
					counter++;
				}
			}


			alert(counter);
		}
	)


	

}

