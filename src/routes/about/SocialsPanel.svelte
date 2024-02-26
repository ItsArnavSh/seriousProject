<script>
    import Socials from "./Socials.svelte"
    let socialLinks = [
        {name : "GitHub",img : "/images/github.png",link:"https://github.com/ItsArnavSh"},
        {name : "Instagram",img : "/images/instagram.png",link:"https://www.instagram.com/its.arnav.sh"},
        {name : "LinkedIn",img : "/images/linkedin.png",link:"https://www.linkedin.com/in/itsarnavsh/"}
        ]
</script>
<div class = "flex flex-row mb-60">
{#each socialLinks as social}
<Socials {...social}/>
{/each}
</div>