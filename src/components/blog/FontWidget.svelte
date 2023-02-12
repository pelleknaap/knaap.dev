<script>
  import uniq from "lodash.uniq";

  let webFontInput = "Roboto";
  let webFont = "Roboto";

  const calculateSize = async webFontName => {
    const res = await fetch(
      `https://fonts.googleapis.com/css2?family=${webFontName}&display=swap`,
      { method: "GET" }
    );
    const text = await res.text();
    const re = /(?<=url\()(.*)(?=\) format)/g;
    const urlMatches = [...text.matchAll(re)].map(match => match[0]);
    const uniqueUrlMatches = uniq(urlMatches);

    const reSubsetName = /(?<=\/\* )(.*)(?= \*)/g;
    const subsetNameMatches = [...text.matchAll(reSubsetName)].map(
      match => match[0]
    );
    const uniqueSubsetNameMatches = uniq(subsetNameMatches);
    let groups = await Promise.all(
      uniqueSubsetNameMatches
        .map((name, index) => {
          return {
            name: name,
            url: uniqueUrlMatches[index],
            fileSize: 0,
            index,
          };
        })
        .map(async (group, index) => {
          const res = await fetch(group.url, { method: "HEAD" });
          group.fileSize = Math.floor(
            parseInt(res.headers.get("content-length")) / 1000
          );
          return group;
        })
    );

    for (const [index, group] of groups.entries()) {
      if (group.name.includes("-ext")) {
        groups[index + 1].fileSizeExt = group.fileSize;
        groups.splice(index, 1);
      }
    }

    return groups;
  };
</script>

<div
  class="md:flex-row my-16 flex flex-col-reverse justify-between gap-y-8 text-skin-base"
>
  <div>
    <div class="space-y-8">
      {#await calculateSize(webFont)}
        <p>Loading...</p>
      {:then groups}
        {#each groups as group}
          <article>
            <h4 class="my-0 mb-2 font-semibold">
              {group.name}
              {#if group.fileSizeExt}& extended{/if}
            </h4>

            <div class="inline-flex rounded-full bg-skin-accent bg-opacity-40">
              <span
                class="z-10 block rounded-full bg-skin-accent py-2 text-center"
                style:width="{group.fileSize * 10 + 50}px"
                >{group.fileSize}kb</span
              >
              {#if group.fileSizeExt}
                <span
                  class="block rounded-r-full py-2 text-center"
                  style:width="{group.fileSize * 10 + 50}px"
                  >{group.fileSizeExt}kb</span
                >
              {/if}
            </div>
          </article>
        {/each}
      {:catch error}
        <p class="my-0">
          Error: {error.message}<br />Are you sure the font is on
          <strong>Google Fonts</strong>?
        </p>
        <p>
          Maybe try <strong>Poppins</strong> or <strong>Roboto</strong>?
        </p>
      {/await}
    </div>
  </div>

  <form on:submit|preventDefault={() => (webFont = webFontInput)}>
    <input
      type="text"
      bind:value={webFontInput}
      class="simple-input"
      name="webfont"
    />

    <label for="webfont" class="sr-only">Webfont from Google Fonts</label>

    <button type="submit">Fetch Subsets</button>
  </form>
</div>
