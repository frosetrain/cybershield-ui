<template>
    <div class="min-h-screen bg-gray-100 p-8 dark:bg-gray-900">
        <NuxtLink class="mb-4 block font-medium text-blue-600 dark:text-blue-400" to="/osint"
            >← Back</NuxtLink
        >
        <h1 class="pb-2 text-xl font-bold text-gray-900 dark:text-gray-100">Results</h1>

        <div v-if="osintResult.started && !osintResult.complete">
            <!-- In progress -->
            <p class="text-gray-900 dark:text-gray-100">
                Generating a summary of your personal information… ({{
                    osintResult.current_payload + 1
                }}/{{ osintResult.total_payloads }})
            </p>
        </div>
        <div v-else-if="osintResult.complete">
            <!-- Completed -->
            <article
                class="prose prose-gray dark:prose-invert mt-4 rounded-lg bg-gray-200 p-4 shadow-lg dark:bg-gray-800"
                v-html="showdownConverter.makeHtml(osintResult.result)"
            />
        </div>
        <div v-else>
            <!-- Not started yet -->
            <p class="text-gray-900 dark:text-gray-100">
                Searching the Internet for leaked information…
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import showdown from "showdown";
const osintStore = useOsintStore();
const osintResult = ref({
    started: false,
    complete: false,
    current_payload: 0,
    total_payloads: 0,
    result: "",
});
const showdownConverter = new showdown.Converter();
// if (osintStore.id === -1) {
// navigateTo("/osint");
// }
async function refresh() {
    console.log("smmdm");
    const result = await $fetch("/api/osint/status", {
        method: "GET",
        query: {
            taskId: osintStore.id,
        },
    });
    osintResult.value = result;
}
let refreshInterval: NodeJS.Timeout;
onMounted(() => {
    refreshInterval = setInterval(refresh, 3000);
});
onUnmounted(() => {
    clearInterval(refreshInterval);
});
</script>

<style></style>
