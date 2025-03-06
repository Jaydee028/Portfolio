<template>
    <header
        class="flex justify-between items-center px-6 py-2 fixed top-0 left-0 w-full z-50 bg-[#111827] border-b-2 border-yellow-500">
        <div class="text-white text-xl md:text-2xl poppins-text pt-1">
            JESSE DAN P BANCALE
        </div>

        <!-- <img class="h-10 w-[11em]" src="/image/Logo3.png" alt="menu"> -->
        <!-- Mobile Toggle Button -->
        <div class="md:hidden z-30">
            <button type="button" class="block focus:outline-hidden" @click="isMenuOpen = !isMenuOpen">
                <span v-if="isMenuOpen" class="text-5xl">
                    <img src="/image/delete-sign.png" alt="close" width="50" height="50">
                </span>
                <span v-else class="text-5xl">
                    <img src="/image/menu--v6.png" alt="menu" width="50" height="50">
                </span>
            </button>
        </div>

        <!-- Navbar Link -->
        <nav :class="[
            'fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row',
            isMenuOpen ? 'block' : 'hidden'
        ]">
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                <li v-for="item in Menu" :key="item.name">
                    <a :href="item.href"
                        class="block text-white transition hover:text-primary ease-linear text-2xl md:text-base"
                        @click="scrollToSection(item.href)">
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script setup>
import { ref } from 'vue';

const Menu = ref([
    { name: 'Services', href: '#services' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
]);

const isMenuOpen = ref(false)
const scrollToSection = (href) => {
    isMenuOpen.value = false;

    const section = document.querySelector(href);
    const navbarHeight = document.querySelector('header').offsetHeight;

    if (section) {
        // Get the target section's position relative to the document
        const sectionPosition = section.offsetTop;

        // Use setTimeout to delay the scroll adjustment slightly
        setTimeout(() => {
            window.scrollTo({
                top: sectionPosition - navbarHeight - 25, // Adjust position with navbar height
                behavior: 'smooth',
            });
        }, 0); // A small delay to ensure the first scroll completes
    }
};

</script>

<style scoped>
section {
    padding-top: 60px;
    /* Adjust based on your navbar height */
}
.poppins-text {
  font-family: 'Poppins', sans-serif;
}
</style>
