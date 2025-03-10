<template>
    <section class="text-white mt-5" id="contact">
        <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">Let's Connect</h2>
        <div class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-10">
            <div>
                <p class="text-lg text-[#adb7be] leading-relaxed mb-6 text-justify">
                    Are you looking for someone to <span class="font-bold text-yellow-500">turn your data</span> into
                    meaningful <span class="font-bold text-yellow-500">insights</span> and provide
                    <span class="font-bold text-yellow-500">effective solutions</span>? Do you need <span
                        class="font-bold text-yellow-500">dynamic reports</span> that bring <span
                        class="font-bold text-yellow-500">clarity</span> and guide <span
                        class="font-bold text-yellow-500">smarter decisions</span>?
                    Perhaps you're seeking advanced <span class="font-bold text-yellow-500">Excel automation</span> with
                    <span class="font-bold text-yellow-500">VBA</span> to streamline your workflow, or a skilled <span
                        class="font-bold text-yellow-500">back-end developer</span> to power your applications? Or maybe
                    you
                    need
                    a <span class="font-bold text-yellow-500">SQL database expert</span> to manage and organize your
                    data
                    efficiently? I’m here to help you tackle challenges, achieve your goals, and bring your <span
                        class="font-bold text-yellow-500">ideas to reality</span>. Let’s work together to make it
                    happen—<span class="text-yellow-500 font-bold">reach out today</span>!
                </p>

                <div class="col-lg-4 col-md-4 mb-lg-0 mt-5">
                    <div class="flex mb-10 items-center">
                        <div
                            class="p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border-2 border-[#111a3e] backdrop-blur-lg">
                            <img src="/image/new-post.png" alt="new-post" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Email</h4>
                            <p>jessedanbancale@gmail.com</p>
                        </div>
                    </div>

                    <!-- <div class="flex mb-10 items-center">
                        <div
                            class="p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border-2 border-[#111a3e] backdrop-blur-lg">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="phone" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Phone</h4>
                            <p>+639169819865</p>
                        </div>
                    </div> -->

                    <div class="flex mb-10 items-center">
                        <div
                            class="p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border-2 border-[#111a3e] backdrop-blur-lg">
                            <img src="/image/linkedin.png" alt="linkedin" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>LinkedIn</h4>
                            <p><a href="https://www.linkedin.com/in/jesse-dan-bancale-276971188/" target="_blank"
                                    class="text-xl underline decoration-[-1px] underline-offset-6">Jesse Dan Bancale</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Form Container with background only for email form section -->
            <div class="bg-[#111a3e] w-full rounded-2xl overflow-hidden border-2 border-[#111a3e] backdrop-blur-lg">
                <form @submit.prevent="handleSubmit" class="flex flex-col p-4">
                    <div class="mb-6">
                        <label for="email" class="text-white block mb-2 text-sm font-medium">Email</label>
                        <input v-model="email" type="email" id="email"
                            class="bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="email@gmail.com" required>
                    </div>

                    <div class="mb-6">
                        <label for="subject" class="text-white block mb-2 text-sm font-medium">Subject</label>
                        <input v-model="subject" type="text" id="subject"
                            class="bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Subject" required>
                    </div>

                    <div class="mb-6">
                        <label for="message" class="text-white block mb-2 text-sm font-medium">Message</label>
                        <textarea v-model="message" id="message"
                            class="bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..." required rows="6"></textarea>
                    </div>

                    <button type="submit"
                        class="z-1 w-full px-6 py-3 rounded-full sm:w-max flex justify-center text-white bg-primary border-2 border-transparent">
                        Send Message
                    </button>
                </form>
            </div>

            <div
                class="bg-linear-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 translate-1/2">
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

const email = ref("");
const subject = ref("");
const message = ref("");
const error = ref("");
const successMessage = ref("");

const toast = useToast();

const handleSubmit = async () => {
    try {
        error.value = "";
        successMessage.value = "";

        if (!email.value || !subject.value || !message.value) {
            error.value = "All fields are required.";
            toast.error(error.value);
            return;
        }
        console.log(email.value);
        const templateParams = {
            email: email.value,
            subject: subject.value,
            message: message.value,
        };

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const userId = import.meta.env.VITE_EMAILJS_USER_ID;

        await emailjs.send(serviceId, templateId, templateParams, userId);

        successMessage.value = "Your message has been sent successfully!";
        toast.success(successMessage.value);

        email.value = "";
        subject.value = "";
        message.value = "";
    } catch (err) {
        error.value = "Failed to send the message. Please try again.";
        toast.error(error.value);
        console.error(err);
    }
};

</script>

<style scoped>
p {
    font-size: 1.125rem;
    line-height: 1.75;
}
</style>
