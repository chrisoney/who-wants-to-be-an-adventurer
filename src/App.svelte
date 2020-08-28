<script>
	import Question from './Question.svelte';
	import Answer from './Answer.svelte';
	import Timer from './Timer.svelte'
	import quiz from './quiz.js'
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	//audio
	let muted = false;

	function muteChange(){
		muted = !muted;
		if (muted){
			let tags = ["correct", "lose", "win"];
			tags.forEach((tag)=>{
				let ele = document.getElementById(tag);
				ele.pause();
				ele.currentTime = 0;
			});
		}
	}


	function fade(node, {
		delay = 600,
		duration = 1000
	}) {
		const o = +getComputedStyle(node).opacity;

		return {
			easing:quintOut,
			delay,
			duration,
			css: t => `opacity: ${t * o}`
		};
	}
	
	let currRank = -1;
	let gameStart = false;
	let win = false;
	let lose = false;
	export let monsters = ["slimes", "goblins", "kobolds", "bandits", "ogres",
												 "sandworms", "Githyanki", "illithids", "a beholder", "a dragon"];
	export let ranks = [
		{ 
			name: "Porcelain",
			class: "tag small"
		},
		{ 
			name: "Obsidian",
			class: "tag small"
		},
		{ 
			name: "Steel",
			class: "tag small"
		},
		{ 
			name: "Sapphire",
			class: "tag small"
		},
		{ 
			name: "Emerald",
			class: "tag small"
		},
		{ 
			name: "Ruby",
			class: "tag small"
		},
		{ 
			name: "Bronze",
			class: "tag small"
		},
		{ 
			name: "Silver",
			class: "tag small"
		},
		{ 
			name: "Gold",
			class: "tag small"
		},
		{ 
			name: "Platinum",
			class: "tag large"
		}
	];
	let quizIdx = 0;	

	let running = true;
	
	export let question = "";
	export let correctAnswer = "";
	export let answers = [];

	function selectQuestion(){
		const questionInfo = quiz[quizIdx][Math.floor(Math.random() * quiz[quizIdx].length)];
		question = questionInfo.question;
		correctAnswer = questionInfo.correctAnswer;
		answers = questionInfo.answers;
	}

	function startGame(e,choice){
		e.stopPropagation();
		if (choice === "start"){
			let audioClip = document.getElementById("win");
			audioClip.pause();
			audioClip.currentTime = 0;
			currRank = 0;
			gameStart = true;
			timeLeft = 15;
			selectQuestion();
			start();
		} else if (choice === "replay"){
			lose = false;
			win = false;
			gameStart = false;
			currRank = -1;
			quizIdx = 0;
		}
	}
	export let choiceText = '';
	export let choiceIdx = 0;
	export let final = false;

	function finalSetup (e, answerText, id) {
		e.preventDefault();
		choiceText = answerText;
		choiceIdx = id;
		final = true;
		pause();
	}

	function finalAnswer(e,choice){
		e.preventDefault();
		final = false;
		if (choice) {checkAnswerHandler(choiceText, choiceIdx)}
		else { start() }
	}

	function checkAnswerHandler(answerText, id){
		const isCorrect = answerText === correctAnswer;
		if (isCorrect) {
			document.getElementById(id).classList.add('green');
			question = 'Correct!';
			if (!muted) { 
				if (quizIdx < 9){
					document.getElementById('correct').play(); 
				} else {
					document.getElementById('win').play();
				}
			}
			setTimeout(() => {
				document.getElementById(id).classList.remove('green');
				quizIdx += 1;
				currRank += 1;
				if (quizIdx <= 9) {
					timeLeft = 15;
					start();
					selectQuestion(); 
				}
				else { win = true;}
			}, 5000)
		}
		else {
			question = 'Wrong!';
			if (!muted) { document.getElementById('lose').play(); }
			document.getElementById(id).classList.add('red');
			let otherAnswers = document.getElementsByClassName('answer');
			for (let i = 0; i < otherAnswers.length; i++){
				if (otherAnswers[i].classList.contains(correctAnswer.split(' ').join('-'))){
					otherAnswers[i].classList.add('green');
				}
			}
			setTimeout(() => {
				lose = true;
			}, 5000)
		}
	}
	//Timer

	let timeLeft = 15;
	let myInterval;

	function start() {
		myInterval = setInterval(()=>{
			timeLeft = timeLeft - 1;
		},1000)
	}

	function pause() {
		clearInterval(myInterval);
	}

</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/a229c5b13d.js" crossorigin="anonymous"></script>
</svelte:head>
<main>
	<div class="top">
		<div class="top-left">
			<img class="title" src="images/title-2.png" alt="title" />
			<Timer {timeLeft}/>
		</div>
		<div class="board">
			{#each ranks as rank, id}
				<div class="tag-area">
					{#if id === currRank}
					<div class="tag-contain curr"><div class={`${rank.class} curr-font`}>{rank.name}</div></div>
					{:else}
					<div class="tag-contain"><div class={rank.class}>{rank.name}</div></div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
	<div class="bottom" >
	{#if !(gameStart)}
		<div class="message"  in:fade>
			<div class="opener-message">Welcome to the game! Press "Start" to continue!</div>
			<button class="next" on:click={(e)=>startGame(e,"start")}>Start</button>
		</div>
	{:else if (lose)}
		<div class="message"  in:fade>
			<span class="loss-message">Uh oh! You made it to {ranks[currRank].name} Rank but then
				you were defeated by {monsters[currRank]}. Better luck next time! Click "Replay"
				to play again!
			</span>
			<button class="next" on:click={(e)=> startGame(e, "replay")}>Replay</button>
		</div>
	{:else if (win)}
		<div class="message"  in:fade>
			<span class="loss-message">You made it to Platinum Rank! You stand as a beacon of hope
				for adventuring teams across the land! Unfortunately, the fight never truly ends. Click 
				"Replay" to play again!
			</span>
			<button class="next" on:click={(e)=> startGame(e, "replay")}>Replay</button>
		</div>
	 {:else if (timeLeft === 0)}
		<div class="ignore">{pause()}</div>
		<div class="message"  in:fade>
			<span class="loss-message">Oops, you ran out of time! Click 
				"Replay" to play again!
			</span>
			<button class="next" on:click={(e)=> startGame(e, "replay")}>Replay</button>
		</div>
	 {:else}
		{#if (final)}
			<div class="message">
				<span class="final-answer">
					Is that your final answer?
				</span>
				<div class="final-buttons">
					<button class="next" on:click={(e)=> finalAnswer(e, true)}>Yes</button>
					<button class="next red" on:click={(e)=> finalAnswer(e, false)}>No</button>
				</div>
			</div>
		{:else}
			<Question questionText={question} />
		{/if}
		<div class="answers">
			{#each answers as answer, idx }
				{#if (idx % 2 === 0)}
					<button class={`${answer.split(' ').join('-')} answer`} 
									id={idx} 
									on:click={(e)=>finalSetup(e, answer, idx)}
									transition:fly="{{ x: -200, duration: 500 }}" >
						<Answer class="ans" answerText={answer} {idx} />
					</button>
				{:else}
					<button class={`${answer.split(' ').join('-')} answer`} 
									id={idx} 
									on:click={(e)=>finalSetup(e, answer, idx)}
									transition:fly="{{ x: 200, duration: 500 }}" >
						<Answer class="ans" answerText={answer} {idx} />
					</button>
				{/if}
			{/each}	
		</div>
		{/if}
	</div>
	<div class="about">
		<div class = "about-container">
			<img class="face" src="images/face.jpg" alt="face" />
			<div class="about-popup">
				<a href="https://github.com/chrisoney/"><span class="about-icon fab fa-github"></span></a>
				<a href="https://www.linkedin.com/in/christopher-oney-317b84132/"><span class="about-icon fab fa-linkedin"></span></a>
				<a href="https://angel.co/u/christopher-oney"><span class="about-icon fab fa-angellist"></span></a>
			</div>
		</div>
	</div>
	<div class={`mute-button fas ${muted ? "fa-volume-mute" : "fa-volume-up"}`}
			 on:click={muteChange}>
	</div>
	<audio src="sounds/correct.mp3" id="correct"></audio>
	<audio src="sounds/lose.mp3" id="lose"></audio>
	<audio src="sounds/win.mp3" id="win"></audio>
</main>

<style>

	audio { display:none;}

	.ignore {
		display: none;
	}
	.top {
		width: 800px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.top-left{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	.title {
		width: 350px;
		height: 350px;
	}

	.tag-area {
		display: flex;
		align-items: center;
	}
	.tag-contain {
		border: 1px solid black;
		border-radius: 30%;
		padding: 10px 20px;
		position: relative;
		outline: none;
		
		text-align: center;
		color: hsla(0,0%,20%,1);
		text-shadow: hsla(0,0%,40%,.5) 0 -1px 0, hsla(0,0%,100%,.6) 0 2px 1px;
		
		background-color: hsl(0,0%,90%);
		
		
		transition: color .2s;
		background-image: 
			-webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0)   6%, hsla(0,0%,100%, .1) 7.5%),
			-webkit-repeating-linear-gradient(left, hsla(0,0%,  0%,0) 0%, hsla(0,0%,  0%,0)   4%, hsla(0,0%,  0%,.03) 4.5%),
			-webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.15) 2.2%),
			linear-gradient(180deg, hsl(0,0%,78%)  0%,  hsl(0,0%,90%) 47%,  hsl(0,0%,78%) 53%,hsl(0,0%,70%)100%);

		}

	.small {
			width: 100px;
	}
	.large {
			width: 150px;
	}

	.bottom {
		width: 700px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.answer {
    margin: 2px;
    border: none;
    color: white;
    background-image: linear-gradient(#0332A1, #022C85, #0332A1);
		border-radius: 15px;
		border: 2px solid silver;
		-moz-box-shadow:    inset 0 0 10px #000000;
   	-webkit-box-shadow: inset 0 0 10px #000000;
		box-shadow:         inset 0 0 10px #000000;

	}

	.green{
		color: black;
		background-image: linear-gradient(green, darkgreen, forestgreen);
	}
	.red{
		color: black;
		background-image: linear-gradient(red, darkred, red);
	}

	.tag {
		z-index: 1;
  	background-color: #565656;

  	font: bold 20px arial, sans-serif;
  	color: transparent;
  	text-shadow: 2px 2px 3px rgba(255,255,255,0.5);
  	-webkit-background-clip: text;
    -moz-background-clip: text;
     background-clip: text;

		}

	.answers {
		width: 500px;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.curr {
		background-image: linear-gradient(yellow, gold, yellow);
	}
	.curr-font {
		background-color: black;
	}
	

	main {
		position: relative;
		margin: none;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		text-align: center;
		padding: 20px;

		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: url("../images/background.gif") no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}



	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}


	.board {
		width: 30%;
		align-items: center;
		display: flex;
		flex-direction: column-reverse;
	}

	.message {
		display:flex;
		flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
    margin-top: 20px;
    height: 100px;
    width: 472px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 10px;
    background-image: linear-gradient(#0332A1, #022C85, #0332A1);
		border-radius: 15px;
		border: 2px solid silver;
		-moz-box-shadow:    inset 0 0 10px #000000;
   	-webkit-box-shadow: inset 0 0 10px #000000;
   	box-shadow:         inset 0 0 10px #000000;
	}

	.next::-moz-focus-inner{
		border: 0;
		padding: 0;
	}

	.next{
		padding: 12px 30px;
  	text-transform: uppercase;
		display: inline-block;
		*display: inline;
		zoom: 1;
		margin: 0;
		cursor: pointer;
		border: 1px solid #bbb;
		overflow: visible;
		font: bold 13px arial, helvetica, sans-serif;
		text-decoration: none;
		white-space: nowrap;
		color: #555;
		
		background-color: #57a957;
  	border-color: #57a957;
		color: #fff;
		text-shadow: 0 1px 0 rgba(0,0,0,.2);
		
		background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.3)), to(rgba(255,255,255,0)));
		background-image: -webkit-linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
		background-image: -moz-linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
		background-image: -ms-linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
		background-image: -o-linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
		background-image: linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
		
		-webkit-transition: background-color .2s ease-out;
		-moz-transition: background-color .2s ease-out;
		-ms-transition: background-color .2s ease-out;
		-o-transition: background-color .2s ease-out;
		transition: background-color .2s ease-out;
		background-clip: padding-box; /* Fix bleeding */
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
		border-radius: 3px;
		-moz-box-shadow: 0 1px 0 rgba(0, 0, 0, .3), 0 2px 2px -1px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .3) inset;
		-webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, .3), 0 2px 2px -1px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .3) inset;
		box-shadow: 0 1px 0 rgba(0, 0, 0, .3), 0 2px 2px -1px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .3) inset;
		text-shadow: 0 1px 0 rgba(255,255,255, .9);
		
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.next:hover{
		background-color: #62c462;
		color: #555;
	}

	.next:active{
		margin-top: 5px;
		background: #57a957;
		position: relative;
		top: 1px;
		text-shadow: none;
		-moz-box-shadow: 0 1px 1px rgba(0, 0, 0, .3) inset;
		-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .3) inset;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .3) inset;
	}

	.red{
  background-color: #ca3535;
  border-color: #c43c35;
	}

	.red:hover{
  	background-color: #ee5f5b;
	}

	.red:active{
		background: #c43c35;
	}

	.about {
		position: absolute;
		left: 50px;
		bottom: 75px;
	}

	.about-container {
		position: relative;
	}

	.face {
		height: 50px;
  	width: 50px;
		border-radius: 50%;
		object-fit: cover;
	}
	.about-popup {
		position: absolute;
		display:none;
	}
	.about-container:hover .about-popup {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		color: white;
		bottom: 55px;
		min-height: 180px;
	}
	.about-icon {
		font-size: 50px;
		margin-bottom: 10px;
		color: white;
	}

	.mute-button{
		position: absolute;
		color: white;
		right: 50px;
		bottom: 75px;
		font-size: 40px;
	}

	.face:hover, .mute-button:hover {
		cursor:pointer;
	}

</style>