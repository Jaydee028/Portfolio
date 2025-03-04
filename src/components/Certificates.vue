<template>
    <section class="text-white mt-24" id="certificates">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white"> My Certificates</h2>
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
                    <button class="hover:text-primary" 
                        v-for="certificate in ['All', 'Analytics', 'Programming', 'Others']"
                        :key="certificate" 
                        :class="{ 'font-bold': certificate === selectedCert }"
                        @click="selectedCert = certificate">
                        {{ certificate }}
                    </button>
                </div>
            </div>
            <ul class="px-4 sm:py-16 xl:pr-16 pb-0 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
                data-aos="fade-right">
                <div v-for="project in filteredCertificates" :key="project.id">
                    <div class="relative group w-full"
                        :style="{ backgroundImage: 'url(' + project.image + ')', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', paddingTop: '56.25%' }">
                        <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818]/50 bg-opacity-0
                            transition-all duration-500"
                            :class="{ 'flex bg-opacity-80': showIcon === project.id, 'hidden group-hover:flex group-hover:bg-opacity-80': showIcon !== project.id }"
                            @click="toggleIcon(project.id)">
                            <a class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                                :href="project.webURL" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="text-white rounded-b-xl mt-3 bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4">
                        <h3 class="text-lg font-semibold uppercase lg:text-xl"> {{ project.title }}</h3>
                        <p class="text-[#ADB7BE] text-justify">{{ project.description }}</p>
                    </div>
                </div>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const selectedCert = ref('All');
const showIcon = ref(null); // Tracks the clicked certificate ID

const Certificates = ref([
    {
        id: 1,
        certificate: 'Analytics',
        image: '/certificates/Cert1.jpg',
        title: 'Data Analytics Essentials Course',
        description: 'CISCO Networking Academy',
        webURL: 'https://www.credly.com/badges/4a5442fe-8f16-4d9c-a0a3-a1378f1dff94'
    },
    {
        id: 2,
        certificate: 'Analytics',
        image: '/certificates/Cert2.jpg',
        title: 'Google Digital Marketing & E-commerce',
        description: 'Google',
        webURL: 'https://coursera.org/share/079df4e15396cc2dfe2b0a007cf72a5a'
    },
    {
        id: 3,
        certificate: 'Programming',
        image: '/certificates/Cert8.jpg',
        title: 'The Complete Vue.JS Course for Beginners: Zero to Mastery',
        description: 'Udemy',
        webURL: 'https://www.udemy.com/certificate/UC-88ddfd8d-87d1-4a28-a788-e2e4766b38f8/'
    },
    {
        id: 4,
        certificate: 'Others',
        image: '/certificates/Cert9.jpg',
        title: 'Cybersecurity Essentials Course',
        description: 'CISCO Networking Academy',
        webURL: 'https://www.credly.com/badges/442390f9-bdc8-4f15-974e-24992cfb007a'
    },
    {
        id: 5,
        certificate: 'Others',
        image: '/certificates/Cert12.jpg',
        title: 'Critical Thinking Skills for the Professional',
        description: 'University of California, Davis',
        webURL: 'https://coursera.org/share/5a5fdac44557c482301874846d1a59ed'
    }
]);

const filteredCertificates = computed(() => {
    if (selectedCert.value === 'All') {
        return Certificates.value;
    }
    return Certificates.value.filter(project => project.certificate.toLowerCase() === selectedCert.value.toLowerCase());
});

// Function to toggle the visibility of the eye icon
const toggleIcon = (id) => {
    showIcon.value = showIcon.value === id ? null : id;
};
</script>
