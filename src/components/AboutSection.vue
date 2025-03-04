<template >
    <section class="text-white mt-0" id="about">
        <div class="absolute z-0 top-[130rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-linear-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-2 px-4 xl:gap-10 sm:py-16 xl:px-16 z-1">
            <div data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white text-left mb-2">My Education</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in education" :key="element.id"
                        class="flex items-center md:w-[90%] w-full py-2 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">
                        <div class="w-[20%]">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png"
                                alt="graduation-cap--v1" class="mx-auto">
                        </div>
                        <div class="w-[80%] pl-3">
                            <h3
                                class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary lg:text-xl">
                                {{ element.School }}
                            </h3>
                            <p class="text-white font-bold">{{ element.program }}</p>
                            <p class="text-white">{{ element.year }}</p>
                            <p class="text-white">{{ element.gwa }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white md:text-center text-left mb-0">More
                    <span class="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">About</span>
                    Me
                </h2>
                <p class="text-base text-justify lg:text-lg mt-8 indent-8">
                    <!-- I am a dedicated professional with a strong passion for transforming complex data into meaningful
                    insights that drive effective decision-making. My analytical thinking allows me to break down detailed
                    problems into manageable solutions, ensuring clarity and efficiency in every project I undertake. I am
                    deeply committed to continuous learning, staying updated on the latest innovations in technology, and
                    embracing opportunities to grow both personally and professionally. -->
                    I am a dedicated professional with a passion for transforming complex data into decision-driven
                    insights. My analytical skills enable me to develop efficient solutions to challenging problems,
                    ensuring clarity and impactful results. I am committed to continuous learning, staying updated on the
                    latest technological advancements, and embracing growth opportunities to enhance my expertise.
                </p>
                <p class="text-base text-justify lg:text-lg indent-8 mt-1">
                    <!-- Beyond my expertise in data analysis and programming, I have a genuine enthusiasm for tackling
                    challenges, whether from clients, friends, or family members who share issues they are facing—even
                    outside formal engagements. I see each problem as an opportunity to learn, grow, and enhance my
                    problem-solving abilities. These experiences not only sharpen my skills but also prepare me to address
                    similar challenges effectively in the future. I am always open to discussions and enjoy finding
                    collaborative solutions. -->
                    Beyond my expertise in data analysis and programming, I thrive on tackling challenges, whether from
                    clients, friends, or family. Every problem is an opportunity to learn, grow, and refine my skills,
                    preparing me to handle similar tasks in the future. I
                    value collaboration and am always open to discussions, ensuring solutions are tailored to your specific
                    needs.
                </p>
                <p class="text-base text-justify lg:text-lg indent-8 mt-1">
                    <!-- In my free time, I enjoy riding my motorcycle, particularly on mountain roads and coastal routes where I
                    can immerse myself in the beauty of nature. I have also developed a keen interest in repairing and
                    maintaining my motorcycle, which not only fuels my love for the open road but also reflects my passion
                    for hands-on problem-solving and understanding how systems work—whether in technology or on two wheels.
                    My family serves as a source of inspiration and support, grounding me and motivating me to strive for
                    excellence in all aspects of my life. -->
                    In my free time, I enjoy motorcycle rides through scenic mountain and coastal roads, immersing myself in
                    nature’s beauty. My interest in repairing and maintaining my bike reflects my passion for hands-on
                    problem-solving and understanding systems at their core. These traits, coupled with my family’s support,
                    inspire me to excel in every aspect of my life.
                </p>
                <div class="flex flex-wrap justify-center gap-4 max-w-lg pt-8 mx-auto">
                    <!-- Age Section -->
                    <div
                        class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3 flex-1 min-w-[150px]">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">{{ age }}</h3>
                        <p class="text-sm sm:text-base text-gray-300">Years Old</p>
                    </div>

                    <!-- Country Section -->
                    <div
                        class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3 flex-1 min-w-[150px]">
                        <div class="flex items-center justify-center space-x-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg"
                                alt="Philippines Flag" class="w-8 h-6 sm:w-10 sm:h-8" />
                            <h3 class="text-white font-bold text-lg sm:text-xl lg:text-2xl">PH</h3>
                        </div>
                        <p class="text-sm sm:text-base text-gray-300">Country</p>
                    </div>

                    <!-- Experience Section -->
                    <div
                        class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3 flex-1 min-w-[150px]">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">+{{ yearsExperience }}</h3>
                        <p class="text-sm sm:text-base text-gray-300">Years Experience</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, computed } from 'vue';
const education = ref([
    {
        id: 1,
        program: 'Master in Information Technology',
        School: 'Davao del Norte State College',
        year: 'School Year: 2022-2024',
        gwa: 'GWA: 1.35'
    },
    {
        id: 2,
        program: 'B.S. in Information Technology',
        School: 'University of Southeastern Philippines',
        year: 'School Year: 2016-2019',
        gwa: 'GWA: 1.94'
    }
])

// Utility Function to Calculate Years
function calculateYears(startDate) {
    const today = new Date();
    const start = new Date(startDate);
    const currentYear = today.getFullYear();
    const startYear = start.getFullYear();

    let years = currentYear - startYear;

    const hasAnniversaryPassed =
        today.getMonth() > start.getMonth() ||
        (today.getMonth() === start.getMonth() && today.getDate() >= start.getDate());
    if (!hasAnniversaryPassed) {
        years--;
    }

    return years;
}

// Dynamic Values Using Functions
const age = computed(() => calculateYears('1999-02-28'));
const yearsExperience = computed(() => calculateYears('2019-09-11'));
</script>
