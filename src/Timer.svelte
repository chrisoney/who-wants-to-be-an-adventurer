<script>
  
  export let timeLeft;
  
</script>

<style>
  .timer-num {
    font-size: 60px;
    color: white;
    font-family: 'Balthazar', serif;
  }

  .timer-container {
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(5,5,236,1) 100%, rgba(0,212,255,1) 100%);
		width: 100px;
		height: 100px;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items:center;
    border: 1px solid white;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0004ff, 0 0 40px #0004ff, 0 0 50px #0004ff, 0 0 60px #0004ff, 0 0 70px #0004ff;
    }
    to {
      box-shadow: 0 0 20px #fff, 0 0 30px #484bf7, 0 0 40px #484bf7, 0 0 50px #484bf7, 0 0 60px #484bf7, 0 0 70px #484bf7, 0 0 80px #484bf7;
    }
}
</style>
<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Balthazar&display=swap" rel="stylesheet">
</svelte:head>
<div class="timer-container">
  <span class="timer-num">{timeLeft}</span>
</div>