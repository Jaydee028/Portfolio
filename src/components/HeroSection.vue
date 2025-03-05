<template>
    <section class="relative w-full" data-aos="zoom-in-up">
        <!-- Background Gradients -->
        <div class="absolute top-0 inset-x-0 h-64 flex items-start">
            <div class="h-24 w-2/3 bg-linear-to-br from-[#570cac] blur-2xl opacity-40"></div>
            <div class="h-20 w-3/5 bg-linear-to-r from-[#670ccf] opacity-40 blur-2xl"></div>
        </div>

        <!-- Content -->
        <div
            class="w-full px-5 sm:px-8 md:px-12 lg:px-10 max-w-(--breakpoint-lg) lg:max-w-(--breakpoint-xl) mx-auto relative">
            <div class="grid lg:grid-cols-2 gap-6 xl:gap-[2em] relative pt-24 lg:max-w-none md:max-w-xl mx-auto">
                <!-- Text Section -->
                <div class="lg:py-6">
                    <div class="text-center lg:text-left">
                        <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                            Hi, I'm <span
                                class="text-transparent bg-clip-text bg-linear-to-r from-primary to-pink-500">Jesse
                                Dan</span>!
                        </h1>
                    </div>
                    <p class="text-gray-200 pt-8 text-justify lg:text-justify mx-auto max-w-xl lg:text-lg indent-8">
                        With over five years of experience in <strong>Data Analysis</strong> and <strong>Web
                            Development</strong>, I specialize in transforming complex data into easy-to-understand
                        insights.</p>
                    <p class="text-gray-200 text-justify lg:text-justify mx-auto max-w-xl lg:text-lg indent-8 mt-1">
                        As a key contributor to the <strong>development</strong> and <strong>maintenance</strong> of the
                        <span class="text-blue-400 font-semibold">Agricultural and Geographical Information
                            Systems</span>
                        for the <strong>world-class quality <span class="text-green-500">banana
                                industry</span></strong>,
                        I’ve leveraged my skills in various technologies to create solutions that drive impactful
                        results.
                    </p>
                    <p class="text-gray-200 text-justify lg:text-justify mx-auto max-w-xl lg:text-lg indent-8 mt-1">
                        These tools, which feature <em>interactive maps and charts</em> for <strong>data
                            visualization</strong>, have enhanced <strong>decision-making</strong> and delivered
                        exceptional
                        outcomes, such as improved banana harvests for global export.</p>
                    <p class="text-gray-200 text-justify lg:text-justify mx-auto max-w-xl lg:text-lg indent-8 mt-1">
                        If you’re looking for someone who combines <strong>technical expertise</strong> with a
                        passion for
                        <span class="italic text-yellow-500">innovation</span>, let’s connect and explore how I can take
                        your projects to the next level.
                    </p>

                    <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                        <!-- Hire Me Button -->
                        <button
                            class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center bg-primary text-white hover:scale-105 transition-transform ease-in-out">
                            Hire Me
                        </button>
                        <!-- Download Resume Button -->
                        <button
                            class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center hover:scale-105 transition-transform ease-in-out">
                            <div class="flex items-center justify-center">
                                <svg class="download-icon" width="18" height="22" viewBox="0 0 18 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 9L9 13M9 13L5 9M9 13V1" stroke="#f59e0b" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                                        stroke="#f59e0b" stroke-width="2" stroke-linecap="round" />
                                </svg>
                                <a href="/Bancale Resume.pdf" download="Bancale Resume.pdf"
                                    class="pl-2 text-primary">Download Resume</a>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Image Section -->
                <div class="lg:h-full md:flex">
                    <div class="flex w-full h-96 min-h-[24rem] lg:w-full lg:h-full items-center relative">
                        <div
                            class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-linear-to-tr opacity-25 from-[#570cac] to-primary blur-2xl">
                        </div>
                        <div
                            class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-10 md:right-[11rem] sm:right-16 rounded-full shadow-lg border border-primary">
                            <img src="/image/top_picture.jpg" alt="Hero pic" width="500" height="auto" loading="lazy"
                                class="w-full h-full rounded-full object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
</script>