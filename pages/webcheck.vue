<template>
    <div class="min-h-screen bg-gray-100 p-8 dark:bg-gray-900">
        <NuxtLink class="mb-4 block font-medium text-blue-600 dark:text-blue-400" to="/"
            >← Back</NuxtLink
        >
        <h1 class="pb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
            Scam Website Checker
        </h1>
        <p class="text-sm text-gray-700 dark:text-gray-300">
            This tool may not be reliable. Please exercise your own judgement. Don’t click on any
            links if they seem suspicious!
        </p>
        <label class="mb-2 mt-12 block text-sm font-medium text-gray-900 dark:text-white"
            >Website URL</label
        >
        <input
            v-model="url"
            type="text"
            class="block w-full max-w-md rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
            @keyup.enter="submitWebcheck"
        />
        <button
            class="mb-8 mt-4 w-full rounded-md bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="submitWebcheck"
        >
            Check
        </button>
        <p v-if="oops" class="text-gray-900 dark:text-gray-100">Invalid URL.</p>
        <svg
            v-if="loading"
            aria-hidden="true"
            class="h-6 w-6 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
            />
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
            />
        </svg>
        <div
            v-if="result.label !== null"
            class="max-w-md rounded-lg bg-gray-200 p-4 text-sm shadow dark:bg-gray-800"
        >
            <p
                v-if="result.label === true"
                class="text-base font-semibold text-red-700 dark:text-red-300"
            >
                The website is very likely to be a scam!
            </p>
            <p
                v-else-if="result.label === false"
                class="text-base font-semibold text-green-700 dark:text-green-300"
            >
                The website is probably safe.
            </p>
            <p class="mt-2 text-gray-700 dark:text-gray-300">Suspiousness: {{ result.score }}%</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
const url = ref("");
const result = ref({ label: null, score: 0.0 });
const oops = ref(false);
const loading = ref(false);
async function submitWebcheck() {
    oops.value = false;
    loading.value = true;
    result.value.label = null;
    const output = await $fetch("/api/webcheck", {
        method: "GET",
        query: {
            url: url.value,
        },
    }).catch(() => {
        oops.value = true;
        loading.value = false;
        result.value.label = null;
        return;
    });
    result.value.label = output.label;
    result.value.score = Math.round(output.score * 100);
    loading.value = false;
}
</script>

<style></style>
