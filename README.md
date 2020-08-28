# Who Wants To Be A Platinum Rank Adventurer?

[Test your skills!](https://chrisoney.github.io/who-wants-to-be-an-adventurer/)

### About

A trivia game based on the popular TV show "Who Wants To Be A Millionaire, but with a fantasy theme. Answer all the Dungeons & Dragons-inspired questions to achieve fame in the adventurer's guild as a Platinum-Ranked Hero!

<img src="./public/gifs/full-screen.png" width=800 height=auto>

### Languages/Technologies

Javascript
Svelte.js

### Sneak Peaks

<img src="./public/gifs/animations.gif" width=800 height=auto>

The built-in animations were a lot of fun to work with and helped make a simple layout more fun to interact with.


```
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
{/if}
```
Conditionals and loops inside the html help to surgically alter the displayed content quickly and easily

