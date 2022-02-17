<script>
  import { page, layout } from "@roxi/routify";

  const hymnNo = $page.title;

  //https://mdsvex.pngwn.io/docs#frontmatter-1
  //Workaround using import because metadata isn't showing up
  //in $layout.children for some reason
  let hymnTitle;
  (async () => {
    const { metadata } = await import(/* @vite-ignore */ `./${hymnNo}.svx`);
    hymnTitle = metadata.title;
  })();
</script>

<div class="header">
  <p>
    <!-- TODO For responsiveness, don't show Title below certain width -->
    Hymn <span class="hl-text">{hymnNo}</span>: {hymnTitle}
  </p>
</div>
<div class="lyrics">
  <slot />
</div>

<style>
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 69px;
    background-color: #a496ff;
    font-size: 25px;
    color: white;
    font-weight: 700;
    padding: 8px;
  }

  .hl-text {
    color: #ffec96;
  }

  .lyrics {
    margin-left: 16px;
    padding: 8px;
    background-color: white;
  }
</style>
