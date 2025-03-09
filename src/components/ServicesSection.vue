<template >
    <section class="text-white mt-20" id="services">
        <div class="px-4 xl:pl-16">
            <h2 class="text-4xl font-bold text-white mb-4">My Services</h2>
        </div>
        <div
            class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-5 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div v-for="service in services" :key="service.id" data-aos="fade-up"
                class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">
                <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div>
                        <img :src="service.icon" alt="service icon">
                    </div>
                </div>
                <div class="text-center">
                    <h3
                        class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                        {{ service.name }}
                    </h3>
                    <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
//import a1 from '@/assets/a1.png';
const services = ref([
    {
        id: 1,
        icon: './image/a1.png',
        // icon: a1,
        name: 'Data and Marketing Analytics',
        description: 'Empower your business with data-driven decision-making. I provide detailed data and marketing analysis to uncover actionable insights, optimize strategies, and enhance performance metrics, ensuring your goals are achieved efficiently.'
    },
    {
        id: 2,
        icon: './image/a2.png',
        name: 'Back-End Development Solutions',
        description: 'Build a solid foundation for your applications with secure, scalable, and high-performing back-end solutions. I specialize in server-side logic, API development, and database integration, ensuring your systems run smoothly and effectively.'
    },
    {
        id: 3,
        icon: './image/a3.png',
        name: 'SQL Database Design and Management',
        description: 'Streamline your data operations with professionally managed and designed SQL databases. I focus on creating optimized database structures and writing efficient SQL queries to improve data accessibility, speed, and security, tailored to your unique requirements.'
    },
    {
        id: 4,
        icon: './image/a4.png',
        name: 'Advanced Excel and VBA Automation',
        description: 'Eliminate repetitive tasks and boost productivity with custom Excel solutions. I develop advanced functions and VBA tools to automate workflows, create dynamic reports, and provide insights in an easy-to-use format, saving you time and resources.'
    },
    {
        id: 5,
        icon: './image/a5.png',
        name: 'System Analysis and Optimization',
        description: 'Optimize your processes with comprehensive system analysis. I evaluate existing systems, identify inefficiencies, and design solutions that align with your goals, ensuring seamless integration and improved productivity.'
    },
    {
        id: 6,
        icon: './image/a6.png',
        name: 'Custom Software Development',
        description: 'Turn your vision into reality with custom software solutions. I deliver intuitive, scalable, and reliable software tailored to your business needs, ensuring high performance and user satisfaction from concept to completion.'
    },
])
</script>

