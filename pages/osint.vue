<template>
    <div class="min-h-screen bg-gray-100 p-8 dark:bg-gray-900">
        <NuxtLink class="mb-4 block font-medium text-blue-600" to="/">← Back</NuxtLink>
        <h1 class="pb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
            Personal Information Finder
        </h1>
        <p class="text-sm text-gray-700 dark:text-gray-300">
            Also known as <abbr title="Open-source intelligence">OSINT</abbr>
        </p>
        <p class="text-red-500" v-if="data.formResponse?.result">{{ data.formResponse }} Found!</p>

        <form v-enhance="enhance" method="POST" class="mt-12 max-w-md">
            <div class="mb-5">
                <label class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Your name</label
                >
                <input
                    name="targetName"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    required
                />
            </div>
            <div class="mb-5">
                <label class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Additional information about you</label
                >
                <input
                    name="additionalInfo"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    required
                />
            </div>
            <div class="mb-5">
                <label class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Your email (optional)</label
                >
                <input
                    name="email"
                    type="email"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
            </div>
            <div class="mb-5">
                <label class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Your Instagram username (optional)</label
                >
                <input
                    name="instagram"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
            </div>
            <div class="mb-5 flex items-start">
                <label class="inline-flex cursor-pointer items-center">
                    <input name="findImages" type="checkbox" value="" class="peer sr-only" />
                    <div
                        class="peer relative h-6 w-11 rounded-full bg-gray-300 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700"
                    ></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Search for photos of you</span
                    >
                </label>
            </div>
            <button
                type="submit"
                class="mt-4 w-full rounded-md bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    </div>
</template>

<script lang="ts" setup>
const { enhance, data } = await useFormAction();
</script>

<style></style>
