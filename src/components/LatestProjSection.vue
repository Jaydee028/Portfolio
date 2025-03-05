<template>
  <section class="text-white mt-20" id="projects">
    <div class="px-4 xl:pl-16">
      <div class="mb-4 md:flex md:justify-between xl:pr-16">
        <h2 class="text-4xl font-bold text-white"> My Latest Projects</h2>
        <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
          <button class="hover:text-primary" v-for="category in ['All', 'Web Development', 'Mobile App', 'Excel VBA']"
            :key="category" :class="{ 'font-bold': category === selectedCategory }" @click="selectedCategory = category">
            {{ category }}
          </button>
        </div>
      </div>

      <!-- No projects message -->
      <div v-if="filteredProjects.length === 0" class="text-center text-white">
        <p>No projects available for this category.</p>
      </div>

      <!-- Projects List -->
      <div v-else>
        <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-14 lg:grid-cols-2">
          <!-- data-aos="fade-right" -->
          <div v-for="project in filteredProjects" :key="project.id">
            <div class="relative group w-full"
              :style="{ backgroundImage: 'url(' + project.images[0] + ')', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', paddingTop: '60%' }">
              <!-- You can add content here if needed -->


              <div
                class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                <!-- Eye Icon to Open Modal -->
                <button @click="openModal(project)"
                  class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true"
                    class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 3c6.627 0 12 4.5 12 9s-5.373 9-12 9-12-4.5-12-9 5.373-9 12-9zm0 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10z">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="text-white rounded-b-xl mt-3 bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4">
              <h3 class="text-lg font-semibold uppercase lg:text-xl"> {{ project.title }}</h3>
              <p class="text-[#ADB7BE]">
                {{ project.description.length > 100 ? project.description.substring(20, 122) + '...' :
                  project.description.substring(20, 122) }} <button @click="openModal(project)" class="text-primary">See
                  more</button>
              </p>

              <div class="flex flex-wrap p-2.5">
                <div v-for="technology in project.technologies" :key="technology"
                  class="text-center mt-1 rounded-3xl bg-[#111827]"
                  style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #111827;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                  <p class="px-1 py-2">{{ technology }}</p>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="modalProject" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div
        class="bg-white px-6 py-3 rounded-lg relative max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw] max-h-[90vh] w-full z-50 overflow-hidden">

        <!-- Title Bar -->
        <div class="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
          <h3 class="text-lg font-bold text-black sm:text-xl">{{ modalProject.title }}</h3>
          <button @click="closeModal" class="text-2xl text-gray-600 sm:text-3xl md:text-4xl">x</button>
        </div>

        <!-- Modal Body -->
        <div class="flex flex-col sm:flex-row h-[60vh]">

          <!-- Image Section -->
          <div class="w-full sm:w-[55%] flex items-center justify-center" :class="{
            'h-[40vh] sm:h-[auto]': true
          }">
            <swiper :pagination="{ type: 'fraction' }" :navigation="true" :modules="[Pagination, Navigation]"
              class="mySwiper w-full h-full">
              <swiper-slide v-for="(image, index) in modalProject.images" :key="index"
                class="bg-cover bg-center rounded-lg" :style="{
                  backgroundImage: 'url(' + image + ')',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }">
              </swiper-slide>
            </swiper>
          </div>

          <!-- Description Section -->
          <div class="w-full sm:w-[60%] flex flex-col justify-between mt-3 sm:mt-4 sm:ml-6 text-black">

            <!-- Scrollable Description -->
            <div class="overflow-y-auto sm:max-h-[50vh] max-h-[30vh]">
              <p class="mt-2 text-sm text-justify sm:text-base" v-html="modalProject.description"></p>
            </div>

            <!-- Footer - Technologies -->
            <div class="flex flex-wrap mt-2 pt-3 border-t items-center justify-start gap-2 sm:gap-1 sm:mb-2 ">
              <div v-for="technology in modalProject.technologies" :key="technology" class="text-center text-xs sm:text-sm
                 rounded-3xl bg-white text-black px-2 py-1"
                style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #111827;">
                {{ technology }}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Projects = ref([
  {
    id: 1,
    category: ['Web Development', 'Mobile App'],
    images: ['/image/pestmon1.png', '/image/pestmon2.png', '/image/pestmon3.png', '/image/pestmon4.png', '/image/pestmon5.png', '/image/pestmon6.png', '/image/pestmon7.png', '/image/pestmon8.jpg', '/image/pestmon9.jpg'],
    title: 'PestMon Mobile and Web Application',
    description: '<p class="indent-8">Pests and diseases (P&D) pose a significant threat to banana farming, leading to major losses in both yield and quality globally.</p> <p class="indent-8 mt-1">Traditional methods, such as paper-based case recording, often result in missed treatments, duplicated efforts, and delayed responses, making it difficult to manage outbreaks effectively.</p><p class="indent-8 mt-1">To solve these issues, I developed an innovative system at TADECO that includes a mobile app for real-time P&D case recording and treatment tracking, along with a web app for QR code management for P&D Cases, laboratory test requests, and graphical reports with geotagging and a spatial map to visualize the severity of P&D cases across farms, from no cases to high severity.</p><p class="indent-8 mt-1">The system also features advanced forecasting powered by a Long Short-Term Memory (LSTM) model, which accurately predicts potential outbreaks. This solution streamlines reporting, reduces errors, and ensures timely treatments, helping TADECO’s farmers protect their crops and boost productivity.</p>',
    technologies: ['HighCharts', 'OpenStreetMap', 'Vanilla JS', 'PHP', 'SQL', 'Express', 'Forecasting', 'Flutter'],
    gitURL: '',
    webURL: ''
  },
  {
    id: 2,
    category: ['Web Development'],
    images: ['/image/AIS3.jpeg', '/image/AIS4.jpeg', '/image/AIS1.jpeg', '/image/AIS2.jpeg'],
    title: 'Agricultural Information System',
    description: '<p class="indent-8">The Agriculture Information System (AIS) is a user-friendly web application developed in collaboration with my colleagues at TADECO to support banana plantations in achieving optimal productivity.</p><p class="indent-8 mt-1"> AIS simplifies the management of key aspects of banana production, from planting to box preparation, by providing clear and detailed monitoring and reporting tools.</p><p class="indent-8 mt-1"> It integrates data on banana health, weather conditions, and other critical parameters, presenting them through intuitive graphical and tabular visualizations that cover the entire 6,200-hectare area of TADECO’s plantation.</p><p class="indent-8 mt-1"> These features empower TADECO’s decision-makers to make informed, data-driven decisions to effectively address challenges like fusarium wilt, sigatoka, field loss causes, and fruit waste—issues that have significantly impacted yields and caused the closure of many plantations across the Philippines.</p><p class="indent-8 mt-1"> By addressing these challenges head-on, AIS has enabled TADECO to streamline reporting, reduce losses, and sustain its position as a leading global exporter in the banana industry, demonstrating its vital role in overcoming production obstacles and ensuring long-term success.',
    technologies: ['HighCharts', 'Vanilla JS', 'PHP', 'SQL'],
    gitURL: '',
    webURL: ''
  },
  {
    id: 3,
    category: ['Web Development'],
    images: ['/image/GIS1.jpeg', '/image/GIS2.jpeg'],
    title: 'GeoGraphical Information System',
    description: '<p class="indent-8">The Geographical Information System (GIS) is an advanced web application developed in collaboration with my colleagues at TADECO to improve the management of banana plantations through precise geospatial data analysis.</p><p class="indent-8 mt-1"> GIS provides a detailed map of TADECO’s plantation and its extensions, showing the spatial layout of the lots that make up the entire area.</p><p class="indent-8 mt-1"> The system displays real-time data on the status of these lots based on selected parameters, helping decision-makers monitor plantation conditions, track interventions, and allocate resources effectively.</p><p class="indent-8 mt-1"> By addressing critical challenges like Fusarium wilt, Sigatoka, and field losses, GIS has played a key role in enhancing operational efficiency, minimizing losses, and supporting TADECO"s leadership in the global banana industry.</p><p class="indent-8 mt-1"> This tool is essential for overcoming geographical and operational challenges, ensuring sustainable plantation management, and driving long-term success.',
    technologies: ['HighCharts', 'SVG', 'Vanilla JS', 'PHP', 'SQL'],
    gitURL: '',
    webURL: ''
  },
  {
    id: 4,
    category: ['Excel VBA'],
    images: ['/image/DataEntry1.jpeg', '/image/DataEntry2.jpeg', '/image/DataEntry3.jpeg'],
    title: 'Excel Data Entries',
    description: '<p class="indent-8">I created Excel Data Entry Tools designed to manage over 15 distinct parameters involved in banana production, covering every stage from planting to packing. Each tool is specifically developed for a single parameter, ensuring precise and efficient data input. Built with VBA (Visual Basic for Applications), these tools enable accurate data collection even in offline environments—a crucial advantage in agricultural settings where internet access can often be unreliable. The sample image highlights a selection of the templates, showcasing their user-friendly layout and functionality tailored to the needs of agricultural operations.</p><p class="indent-8 mt-1">Each template is uniquely designed to align with its respective parameter, offering a standardized and efficient way to record critical information. Several of the tools also include reports customized based on client requirements, providing actionable insights for decision-making. By integrating SQL queries, the tools ensure data validation, allow seamless CSV exports, and support quick updates to the database. Unlike web or desktop applications that rely heavily on stable network connections or require frequent updates, these Excel-based solutions are easy to implement and adapt, making them an ideal choice for TADECO’s operations. They reduce repetitive tasks, improve data accuracy, and significantly enhance productivity.</p><p class="indent-8 mt-1">These tools have enabled TADECO to make well-informed, data-driven decisions while maintaining the highest standards in banana production. This project reflects my dedication to providing innovative and practical solutions that optimize workflows and drive measurable success.</p>',
    technologies: ['Excel', 'Visual Basic App', 'SQL'],
    gitURL: '',
    webURL: ''
  },
  {
    id: 5,
    category: ['Excel VBA'],
    images: ['/image/ExcelThematicMap1.jpeg', '/image/ExcelThematicMap2.jpeg'],
    title: 'Excel Thematic Map',
    description: '<p class="indent-8">I created an Excel Thematic Map Tool designed to display the spatial distribution and variations of specific variables across banana plantations. This tool enables users to track and analyze key parameters, such as harvest ranges per parcela, and other important agricultural metrics. It features a customizable legend that allows users to adjust settings based on their needs, making it easier to interpret data from different perspectives.</p> <p class="indent-8 mt-1">Using Visual Basic for Applications (VBA), the tool automatically colors map areas based on the selected data, offering a clear and visually intuitive representation of spatial trends. This functionality helps users quickly identify patterns and make informed decisions to improve plantation management. The Excel Thematic Map Tool delivers a straightforward yet highly effective way to visualize complex agricultural data.</p> <p class="indent-8 mt-1">By bringing geographic data analysis directly into Excel, this tool eliminates the need for specialized software, making spatial insights more accessible. It bridges the gap between standard spreadsheet functionality and advanced mapping capabilities, allowing stakeholders to interpret critical information more effectively and optimize productivity across the plantation.</p>',
    technologies: ['Excel', 'Visual Basic App', 'SQL'],
    gitURL: '',
    webURL: ''
  }
]);





const selectedCategory = ref('All');

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return Projects.value;
  }
  return Projects.value.filter(project =>
    project.category.includes(selectedCategory.value)
  );
});

const modalProject = ref(null);
const openModal = (project) => {
  modalProject.value = project;
  // Disable scrolling when modal is open
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  modalProject.value = null;
  // Enable scrolling when modal is closed
  document.body.style.overflow = '';
};
</script>
<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
}

::v-deep(.swiper-pagination-fraction) {
  color: black;
  font-size: 14px;
  /* Optional, adjust if needed */
  text-shadow:
    1px 1px 0 white,
    -1px -1px 0 white,
    1px -1px 0 white,
    -1px 1px 0 white;
  /* Creates a white border around the text */
}
</style>