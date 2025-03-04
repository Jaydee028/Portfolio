<template>
    <section class="text-white mt-6" id="skills">
        <!-- <div class="absolute right-0 top-[163rem] h-full w-full justify-end z-0">
            <span class="flex opacity-20 z-0">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div> -->
        <div class="md:grid md:grid-cols-12 gap-8 items-start py-8 px-4 xl:gap-16 xl:px-16">

            <!-- Skills Section -->
            <div class="md:col-span-6 grid grid-cols-2 gap-6 md:gap-8" data-aos="flip-left">
                <!-- Skill Level Title -->
                <div class="col-span-2 mb-4">
                    <h2 class="text-4xl font-bold text-white text-left mb-4">
                        My
                        <span
                            class="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Skills</span>
                    </h2>
                </div>

                <div v-for="skill in Skills" :key="skill.id" class="mt-1 flex flex-col items-start "> <!--space-y-1 -->
                    <!-- Skill Name -->
                    <h4 class="text-xl font-bold uppercase text-white">
                        {{ skill.name }}
                    </h4>
                    <!-- Stars for rating -->
                    <div class="flex items-center">
                        <span v-for="n in 5" :key="n" class="text-xl mr-1"
                            :class="n <= skill.rating ? 'text-yellow-500' : 'text-gray-500'">
                            ★
                        </span> <span class="pl-1 text-sm text-primary">
                            ({{ ratingLabel(skill.rating) }})
                        </span>
                    </div>
                    <!-- Display rating label -->

                </div>
            </div>

            <!-- Experiences Section -->
            <div class="md:col-span-6" data-aos="flip-left">
                <h2 class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8">My Experiences</h2>
                <div class="space-y-8 py-8" data-aos="fade-left">
                    <div v-for="element in Experiences" :key="element.id"
                        class="flex items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]">
                        <div class="w-1/4">
                            <div class="bg-white p-2 inline-block rounded-[5%] shadow-md">
                                <img src="/image/tadeco.png" alt="lawyer" class="w-full h-auto" />
                            </div>

                            <!-- https://img.icons8.com/ios-filled/100/ffffff/lawyer.png -->
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3
                                class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                                {{ element.role }}
                            </h3>
                            <p class="text-white">{{ element.company }}</p>
                            <p class="text-white">{{ element.date }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 xl:px-16" data-aos="fade-up">
            <h2 class="text-4xl font-bold text-white text-left mb-8 mt-8 md:text-center md:mt-0">Badges</h2>

            <div class="bg-[#111a3e] py-8 sm:py-6">
                <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-2">
                    <div
                        class="grid mx-auto gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
                        <a v-for="tool in tools" :key="tool.id" :href="tool.link" target="_blank"
                            rel="noopener noreferrer">
                            <img :src="tool.loc" alt="Tool" class="max-w-full h-auto object-contain mx-auto" width="158"
                                height="48" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

// Map skill ratings to labels
const ratingLabel = (rating) => {
    const labels = ["Beginner", "Novice", "Intermediate", "Proficient", "Expert"];
    return labels[rating - 1];
};

const Skills = ref([
    { id: 1, name: "Data Analysis", rating: 5 },
    { id: 2, name: "SQL Management", rating: 4 },
    { id: 3, name: "Front-End Dev", rating: 2 },
    { id: 4, name: "Back-End Dev", rating: 4 },
    { id: 5, name: "Advance Excel & VBA", rating: 5 },
]);

const Experiences = ref([
    {
        id: 1,
        role: "Data Analyst & Web Developer",
        company: "Tagum Agricultural Development Co., Inc.",
        date: `September 2019 - ${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getFullYear()}`,
    },
]);


const tools = ref([
    // { id: 1, loc: require('@/assets/sql-server-logo-white.png'), description: 'SQL Server' },
    { id: 1, loc: "/image/badge1.png", link: "https://www.credly.com/badges/4a5442fe-8f16-4d9c-a0a3-a1378f1dff94/public_url" },
    { id: 4, loc: "/image/badge4.png", link: "https://www.credly.com/badges/94ffe539-2bda-43e1-bb03-4fd1958ad95a/public_url" },
    { id: 2, loc: "/image/badge2.png", link: "https://www.credly.com/badges/309d8f0b-7d22-4d5a-ba06-5aecda58ae14/public_url" },
    { id: 3, loc: "/image/badge3.png", link: "https://www.credly.com/badges/442390f9-bdc8-4f15-974e-24992cfb007a/public_url" },


]);
</script>
