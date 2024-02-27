<script>
import Project from "./projects/+page.svelte"
import Newsletter from "./newsletter/+page.svelte"
import About from "./about/+page.svelte"
</script>
<div class="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-8 mb-40 mt-40">
    <div class="flex flex-col text-3xl prompt-regular mr-0 sm:mr-10">
    <p class = "text-5xl mb-5">I am Arnav.</p>
    <p class = "mb-3">An Ambitious <b>Coder</b></p>
    <p class = "mb-3">A LifeLong <b>Learner</b></p>
    <p class = "mb-3">A Passionate <b>Writer</b></p>
    <p class = "mb-5">An Aspiring <b>Entrepreneur</b></p>
    <hr>
    <p class = "text-xl mt-10 mb-3">If you want to explore the field of DSA,<br>Check out my Newsletter, <a href = "/newsletter">Trillingo</a></p>
    <iframe title = "news"  src="https://embeds.beehiiv.com/b4d502eb-1c82-4018-a782-e8d6c0e712b8?slim=true" data-test-id="beehiiv-embed" height="120" frameborder="0" scrolling="no" style="margin: 0; border-radius: 0px !important; background-color: transparent;"></iframe>
</div>
<img src="/images/me.png" class="max-w-md w-full h-auto rounded-md" alt="Not Loaded!">
</div>
<hr class="mb-5">
<div class = "flex flex-col items-center bg-slate-100 mt-5">
 <p class = "text-6xl anta-regular mb-2">Check out my <a href = "./projects">Projects</a></p>
    <Project/>
</div>
<Newsletter/>
<div class = "mt-20"></div>
<About/>