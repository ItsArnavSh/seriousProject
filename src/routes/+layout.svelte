<script>
    import "../app.css";
</script>
<div class="bg-white flex flex-col items-center mt-10 mb-20">
  <nav class="flex justify-between w-full max-w-2xl">
    <a href="/" class="font-bold text-4xl">ItsArnav</a>
    <span class="space-x-10 text-xl anta-regular">
    <a class = "" href="/about">About</a>
      <a href="https://medium.com/@itsarnavsh">myBlog</a>
      <a href="/projects">Projects</a>
      <a href="/newsletter" class="bg-green-400 text-white rounded-md p-4 hover:bg-green-500 transi duration-200">Newsletter</a>
    </span>
  </nav>
</div>
  <slot />
  <footer>
    <hr/>
    <p class = "text-center mt-10 anta-regular">Made by Arnav</p>
  </footer>
  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>