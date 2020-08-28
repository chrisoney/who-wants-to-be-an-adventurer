<script>
  export let answerText;
  export let idx;
  export let answerKeys = ['A', 'B', 'C', 'D'];
</script>

<style>
  .answer-container {
    height: 50px;
    display: flex;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .answer-container:hover{
    cursor: pointer;
  }

  .answer-letter{
    width: 15%;
    text-align: left;
    color: orange;
  }
  .answer-text {
    width: 80%;
    text-align: left;
  }
  .diam {
    font-size: 5px;
    margin-right: 3px;
  }

</style>

<div class="answer-container">
  <span class='diam'>&#9830</span>
  <span class="answer-letter">{answerKeys[idx]}:</span>
  <div class="answer-text">{answerText}</div>
</div>


