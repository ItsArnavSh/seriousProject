<script>
    import Project from "./Project.svelte"
    
    let info = [
        {num:1,
        name:"Chess",
        emoji : "♟️",
        link : "https://github.com/ItsArnavSh/chess",
        display:"https://itsarnavsh.github.io/chess/",
        about:"A two player game of Chess made with HTML, CSS and Vanilla Javascript."},
        {num:0,
        name:"Elevators",
        emoji : "🏢",
        link : "https://github.com/HeyItsArnav/ElevatorSimulation",
        display:undefined,
        about:"An Elevator Simulation that is animated with ASCII made in C++."},
        {num:1,
        name:"Wordle",
        emoji : "🔤",
        link : "https://github.com/Risha-Gupta/Wordle-in-C-1st-sem",
        display:undefined,
        about:"A command Line Version of Wordle in C and Python, for the Mini-Project"},
        {num:0,
        name:"This Website",
        emoji : "👋",
        link : "https://github.com/",
        display:undefined,
        about:"This website is coded with Svelte and Tailwind frameworks."},
        {num:1,
        name:"Portfolio",
        emoji : "👋",
        link : "https://github.com/",
        display:"https://itsarnavsh.github.io/",
        about:"My previous portfolio coded in HTML CSS. Back in the Good Old Days."}
        ]
</script>
<div class = "flex flex-col justify-center items-center space-y-5 mb-20">
{#each info as i}
    <Project {...i}/>
{/each}
</div>