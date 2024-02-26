<script>
    export let num;
    export let name="Sample Project";
    export let emoji = "🧐";
    export let link = "https://github.com/ItsArnavSh";
    export let display=undefined;
    export let about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
   </script>
   <div class = "anta-regular text-center rounded-md text-xl p-1 flex flex-row {num == 0 ? 'flex-row-reverse' : 'flex-row'} items-center border-b-2 ">
       <div class = "min-w-40">
        <p class = "text-3xl p-5">{name}</p>
       <a href = {link} class = "bg-green-400 text-white p-1 rounded-md hover:bg-green-500 transi duration-200">View on Github</a>
       <br>
       {#if display!=undefined}
       <a href = {link}>View</a>
       {:else}
       <p>...</p>
       {/if}
       </div>
       <div class = "">
        <p class = "max-h-20">{emoji}  {about}</p>
       </div>
   </div>
