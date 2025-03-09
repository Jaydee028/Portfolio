<template>
  <footer class="mt-8 border-t border-[#33353F] bg-gray-900 text-white py-6">
    <div class="flex w-full justify-center items-center">
      <img class="h-14 w-[13em] transition-transform duration-300 hover:scale-105" src="/image/Logo2.png"
        alt="CodeJungler" />
    </div>
    <p class="text-center text-gray-500 text-sm mt-2">
      © {{ currentYear }} Jesse Dan P. Bancale, MIT
    </p>
    <!-- <p class="text-center text-gray-500 text-xs mt-1">
      Visitor Count: {{ visitorCount }}
    </p> -->
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const currentYear = new Date().getFullYear();
const visitorCount = ref(0);

// Load from .env
const BIN_ID = import.meta.env.VITE_BIN_ID;
const API_KEY = '$2a$10$wtqvFX6bX6lJ2EGZmY3aV.YXoR8MB7gJe...P/FQVWxutgasC35t2';//import.meta.env.VITE_API_KEY;
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

onMounted(async () => {
  try {
    // Fetch visitor count from JSONBin
    const response = await axios.get(JSONBIN_URL, {
      headers: { "X-Master-Key": API_KEY }
    });

    visitorCount.value = response.data.record.visitorCount + 1;

    // Update the visitor count in JSONBin
    await axios.put(
      JSONBIN_URL,
      { visitorCount: visitorCount.value },
      { headers: { "X-Master-Key": API_KEY } }
    );

  } catch (error) {
    console.error("Error updating visitor count:", error);
  }
});
</script>
