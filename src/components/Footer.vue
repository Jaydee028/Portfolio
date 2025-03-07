<template>
    <footer class="mt-8 border-t border-[#33353F] bg-gray-900 text-white py-6">
      <div class="container flex justify-center items-center">
        <img 
          class="h-14 w-[13em] transition-transform duration-300 hover:scale-105" 
          src="/image/Logo2.png" 
          alt="CodeJungler"
        />
      </div>
      <p class="text-center text-gray-500 text-sm mt-2">© {{ currentYear }} Jesse Dan P. Bancale, MIT</p>
    </footer>
  </template>
  
  <script setup>
  const currentYear = new Date().getFullYear();
  </script>
  