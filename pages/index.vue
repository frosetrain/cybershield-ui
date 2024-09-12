<template>
    <div>
        <h1>Amogus.</h1>
        <p>{{ data }}</p>
        <button class="rounded bg-red-500 p-2">What the sigma</button>
    </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/osint", { method: "POST", query: { foo: 1, bar: 2 } });
</script>

<style></style>
