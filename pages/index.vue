<template>
    <div class="flex min-h-screen flex-col gap-4 bg-gray-100 px-4 py-8 dark:bg-gray-900">
        <h1 class="text-center text-4xl font-bold text-gray-900 dark:text-gray-100">CyberShield</h1>
        <p class="text-center text-gray-700 dark:text-gray-300">A website to prevent scams :D</p>
        <div
            class="mt-4 flex w-full flex-col justify-center gap-2 text-gray-900 sm:flex-row dark:text-gray-100"
        >
            <div class="grow rounded-lg bg-emerald-200 p-4 sm:max-w-lg dark:bg-emerald-800">
                <p class="text-lg font-bold">Scam Website Checker</p>
                <p>
                    Have you been sent a fishy-looking link from an unknown person? Don’t click it!
                    Paste the link into our Sus Detector to see if it’s a scam.
                </p>
                <NuxtLink
                    to="/webcheck"
                    class="mt-4 block w-min rounded-md bg-green-600 px-3 py-2 font-semibold text-gray-100 shadow transition hover:scale-110 hover:bg-green-400"
                    >Visit</NuxtLink
                >
            </div>
            <div class="grow rounded-lg bg-sky-200 p-4 sm:max-w-lg dark:bg-sky-800">
                <p class="text-lg font-bold">Personal Information Finder</p>
                <p>
                    We reveal our personal details in various places on the internet. This tool
                    finds it for you so you can delete your personal details to protect your
                    privacy.
                </p>
                <NuxtLink
                    to="/osint"
                    class="mt-4 block w-min rounded-md bg-sky-600 px-3 py-2 font-semibold text-gray-100 shadow transition hover:scale-110 hover:bg-sky-400"
                    >Visit</NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
