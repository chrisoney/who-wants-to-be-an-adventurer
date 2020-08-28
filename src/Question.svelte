<script>
  import { quintOut } from 'svelte/easing';
  export let questionText;


  function fade(node, {
		delay = 0,
		duration = 500
	}) {
		const o = +getComputedStyle(node).opacity;

		return {
			easing:quintOut,
			delay,
			duration,
			css: t => `opacity: ${t * o}`
		};
	}
</script>

<style>
  @font-face {
  font-family: 'Copperplate Gothic Light';
  font-style: normal;
  font-weight: normal;
  src: local('Copperplate Gothic Light'), url('copperplate-gothic-light.woff') format('woff');
  }
  .question {
    display:flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: 20px;
    margin-bottom: 5px;
    height: 50px;
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
</style>

<div class="question">
  {questionText}
</div>