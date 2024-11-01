<script lang="ts">
import type { PodUI } from './PodUI';
  import { router } from 'tinro';

export let object: PodUI;

function openDetails() {
  router.goto(`/kubernetes/pods/${encodeURI(object.name)}/${encodeURI(object.namespace)}/summary`);
}
</script>

<button class="hover:cursor-pointer flex flex-col max-w-full" on:click={() => openDetails()}>
  <div class="text-[var(--pd-table-body-text-highlight)] max-w-full overflow-hidden text-ellipsis">
    {object.name}
  </div>
  <div class="flex flex-row text-sm gap-1">
    {#if object.node}
      <div class="text-[var(--pd-table-body-text-sub-secondary)]">
        {object.node}
      </div>
    {/if}
    <div class="font-extra-light text-[var(--pd-table-body-text)]">{object.namespace}</div>
  </div>
</button>
