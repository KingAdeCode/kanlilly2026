<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const activeSection = ref('home')
let observer = null

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id
                }
            })
        },
        { rootMargin: '-50% 0px -50% 0px' }
    )

    const sections = document.querySelectorAll('header[id], section[id]')
    sections.forEach((section) => observer.observe(section))
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})

const portfolioImages = Array.from({ length: 29 }, (_, i) => `/images/kanlilly-image${i + 2}.webp`)

const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const openLightbox = (index) => {
    currentImageIndex.value = index
    lightboxOpen.value = true
}

const closeLightbox = () => {
    lightboxOpen.value = false
}

const nextImage = (e) => {
    if (e) e.stopPropagation()
    currentImageIndex.value = (currentImageIndex.value + 1) % portfolioImages.length
}

const prevImage = (e) => {
    if (e) e.stopPropagation()
    currentImageIndex.value = (currentImageIndex.value - 1 + portfolioImages.length) % portfolioImages.length
}
const services = [
    {
        id: '01',
        title: 'Makeup Services',
        description: 'Expert artistry tailored for every occasion. From soft glam to high-fashion editorial, we craft bespoke looks that elevate your unique features.',
        items: [
            'BRIDAL MAKEUP',
            'ENGAGEMENT / TRADITIONAL WEDDING MAKEUP',
            'PARTY / OWAMBE MAKEUP',
            'BIRTHDAY MAKEUP',
            'SOFT GLAM & FULL GLAM MAKEUP',
            'EDITORIAL MAKEUP',
            'FASHION MAKEUP',
            'RUNWAY MAKEUP',
            'COMMERCIAL / ADVERTISING MAKEUP',
            'PHOTOSHOOT / BEAUTY SHOOT MAKEUP',
            'CREATIVE MAKEUP',
            'GRADUATION MAKEUP',
            'MALE GROOMING'
        ]
    },
    {
        id: '02',
        title: 'Hair Service',
        description: 'Sculptural styling with precision and care. Whether it\'s a seamless wig installation or an elegant updo, we ensure your hair is a masterpiece.',
        items: [
            'WIG INSTALLATION',
            'HAIR STYLING (CURLS, STRAIGHTENING, PACKING GEL, ETC.)',
            'BRAIDS & PROTECTIVE STYLES',
            'REVAMPING OF WIGS',
            'HAIR TREATMENT & WASHING'
        ]
    },
    {
        id: '03',
        title: 'Bridal Packages Services',
        description: 'Your dream day demands perfection. We offer comprehensive bridal support from the initial consultation down to the final glow on your wedding day.',
        items: [
            'FULL BRIDAL GLAM (MAKEUP)',
            'BRIDAL CONSULTATION & TRIAL SESSION',
            'BRIDAL TRAIN MAKEUP'
        ]
    }
]
</script>

<template>
    <div>
        <!-- TopNavBar -->
        <nav
            class="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-xl shadow-2xl shadow-[#ebbb4d]/5 border-b border-transparent md:border-transparent transition-colors duration-300">
            <div class="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto relative z-50">
                <div>
                    <img src="/images/kanlilly-white.svg" class="w-28" />
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-12">
                    <a :class="['font-notoSerif text-lg hover:scale-105 transition-all transition-transform duration-300', activeSection === 'home' ? 'text-[#ebbb4d] border-b border-[#ebbb4d]/30 pb-1' : 'text-white/70 hover:text-[#ebbb4d]']"
                        href="#home">Home</a>
                    <a :class="['font-notoSerif text-lg hover:scale-105 transition-all transition-transform duration-300', activeSection === 'services' ? 'text-[#ebbb4d] border-b border-[#ebbb4d]/30 pb-1' : 'text-white/70 hover:text-[#ebbb4d]']"
                        href="#services">Services</a>
                    <a :class="['font-notoSerif text-lg hover:scale-105 transition-all transition-transform duration-300', activeSection === 'portfolio' ? 'text-[#ebbb4d] border-b border-[#ebbb4d]/30 pb-1' : 'text-white/70 hover:text-[#ebbb4d]']"
                        href="#portfolio">Portfolio</a>
                    <a :class="['font-notoSerif text-lg hover:scale-105 transition-all transition-transform duration-300', activeSection === 'about' ? 'text-[#ebbb4d] border-b border-[#ebbb4d]/30 pb-1' : 'text-white/70 hover:text-[#ebbb4d]']"
                        href="#about">About</a>
                    <a :class="['font-notoSerif text-lg hover:scale-105 transition-all transition-transform duration-300', activeSection === 'contact' ? 'text-[#ebbb4d] border-b border-[#ebbb4d]/30 pb-1' : 'text-white/70 hover:text-[#ebbb4d]']"
                        href="#contact">Contact</a>
                </div>

                <div class="flex items-center gap-4">
                    <a href="https://wa.me/2347085360145" target="_blank" rel="noopener noreferrer"
                        class="bg-primary-container text-on-primary-container px-4 md:px-6 py-2 font-label text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 active:scale-95 inline-block">
                        Book Online
                    </a>
                    <!-- Mobile Menu Toggle Button -->
                    <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                        class="md:hidden text-[#ebbb4d] p-2 ml-2 focus:outline-none focus:ring-2 focus:ring-[#ebbb4d] rounded-lg transition-colors bg-white/5 hover:bg-white/10">
                        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <transition enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-4">
                <div v-show="isMobileMenuOpen"
                    class="md:hidden absolute top-full left-0 w-full bg-[#131313]/95 backdrop-blur-2xl border-t border-[#ebbb4d]/10 z-40 pb-8 pt-4 px-6 flex flex-col space-y-6 shadow-2xl">
                    <a @click="isMobileMenuOpen = false"
                        :class="['text-xl font-notoSerif transition-colors transition-transform duration-300', activeSection === 'home' ? 'text-[#ebbb4d]' : 'text-white/70 hover:text-[#ebbb4d]']"
                        href="#home">Home</a>
                    <a @click="isMobileMenuOpen = false"
                        :class="['text-xl font-notoSerif transition-colors transition-transform duration-300 pt-2 border-t border-white/5', activeSection === 'services' ? 'text-[#ebbb4d]' : 'text-white/70 hover:text-[#ebbb4d]']"
                        href="#services">Services</a>
                    <a @click="isMobileMenuOpen = false"
                        :class="['text-xl font-notoSerif transition-colors transition-transform duration-300 pt-2 border-t border-white/5', activeSection === 'portfolio' ? 'text-[#ebbb4d]' : 'text-white/70 hover:text-[#ebbb4d]']"
                        href="#portfolio">Portfolio</a>
                    <a @click="isMobileMenuOpen = false"
                        :class="['text-xl font-notoSerif transition-colors transition-transform duration-300 pt-2 border-t border-white/5', activeSection === 'about' ? 'text-[#ebbb4d]' : 'text-white/70 hover:text-[#ebbb4d]']"
                        href="#about">About</a>
                    <a @click="isMobileMenuOpen = false"
                        :class="['text-xl font-notoSerif transition-colors transition-transform duration-300 pt-2 border-t border-white/5', activeSection === 'contact' ? 'text-[#ebbb4d]' : 'text-white/70 hover:text-[#ebbb4d]']"
                        href="#contact">Contact</a>
                </div>
            </transition>
        </nav>
        <!-- Hero Section -->
        <header id="home" class="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 z-0">
                <img alt="High-end editorial makeup portrait" class="w-full h-full object-cover opacity-60"
                    data-alt="Editorial portrait showing high-end makeup artistry" src="/images/kanlilly1.jpg" />
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
            </div>
            <div class="relative z-10 text-center px-6">
                <span class="font-label text-sm tracking-[0.5em] text-primary mb-6 block uppercase">Welcome to</span>
                <h1 class="text-7xl md:text-9xl font-headline   text-on-background tracking-tighter mb-8">
                    KANLILLY
                </h1>
                <p
                    class="max-w-xl mx-auto text-lg md:text-xl font-body text-on-surface-variant font-light leading-relaxed">
                    Defining modern luxury through the art of makeup and hair curation.
                </p>
            </div>
            <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                <span class="font-label text-[10px] tracking-widest text-outline uppercase">Scroll to Explore</span>
                <div class="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
            </div>
        </header>
        <!-- Services Overview -->
        <section id="services" class="py-12 md:py-32 px-6 md:px-12 bg-surface">
            <div class="max-w-screen-2xl mx-auto">
                <div class="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
                    <div class="max-w-2xl">
                        <span class="font-label text-xs tracking-[0.3em] text-primary uppercase mb-4 block">Our
                            Services</span>
                        <h2 class="text-3xl lg:text-4xl font-headline text-on-background leading-tight">Mastering the
                            craft of
                            <br /><span class="italic text-primary">ethereal beauty.</span>
                        </h2>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-px bg-outline-variant/20">
                    <div v-for="service in services" :key="service.id"
                        class="bg-surface-container-low p-6 md:p-10 group hover:bg-surface-container-high transition-colors duration-500 flex flex-col h-full">
                        <span class="font-headline italic text-4xl text-outline-variant mb-10 block">{{ service.id
                        }}</span>
                        <h3 class="text-2xl lg:text-3xl font-headline text-on-background mb-6">{{ service.title }}</h3>
                        <p class="text-on-surface-variant font-body leading-loose mb-10">
                            {{ service.description }}
                        </p>
                        <ul class="space-y-3 mb-12 flex-grow">
                            <li v-for="(item, index) in service.items" :key="index"
                                class="flex items-start gap-3 text-sm font-label tracking-wide text-on-surface items-center">
                                <span
                                    class="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">check_circle</span>
                                {{ item }}
                            </li>
                        </ul>
                        <a class="inline-flex items-center gap-4 text-primary font-label text-sm tracking-widest uppercase group-hover:gap-6 transition-all mt-auto"
                            href="https://wa.me/2347085360145" target="_blank" rel="noopener noreferrer">
                            Inquire <span class="material-symbols-outlined">trending_flat</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Video Showcase Section -->
        <section class="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-[#131313]">
            <video class="absolute inset-0 w-full h-full object-cover" autoplay loop muted playsinline
                src="https://res.cloudinary.com/dn786s1zr/video/upload/v1776100618/LOOP_wj3mns.mp4"></video>
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        </section>

        <!-- Portfolio Gallery -->
        <section id="portfolio" class=" py-12 md:py-32 bg-surface-container-lowest overflow-hidden">
            <div class="max-w-screen-2xl mx-auto px-6 md:px-0">
                <div class="text-center mb-12 md:mb-24">
                    <span class="font-label text-xs tracking-[0.3em] text-primary uppercase mb-4 block">The
                        Curation</span>
                    <h2 class="text-3xl lg:text-4xl  font-headline italic">Recent Works</h2>
                </div>
                <!-- Grid of 3 images without gap -->
                <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div v-for="(image, index) in portfolioImages" :key="index" @click="openLightbox(index)"
                        class="aspect-square relative group cursor-pointer overflow-hidden bg-surface-container-high">
                        <img :src="image" :alt="`Portfolio Image ${index + 1}`" loading="lazy"
                            class="w-full h-full object-cover   transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" />
                        <div
                            class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span
                                class="text-white font-label tracking-widest uppercase text-sm border border-white/50 px-6 py-2 backdrop-blur-sm shadow-xl">View
                                Work</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- About Section -->
        <section id="about" class="py-12 md:py-32 px-6 md:px-12 bg-background">
            <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                <div class="relative">
                    <div class="aspect-[4/5] bg-surface-container-high overflow-hidden">
                        <img alt="Portrait of the artist" class="w-full h-full object-cover"
                            data-alt="Professional portrait of the lead artist at work" src="/images/damilola.jpeg" />
                    </div>
                    <div class="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 backdrop-blur-3xl -z-10"></div>
                </div>
                <div>
                    <span class="font-label text-xs tracking-[0.3em] text-primary uppercase mb-6 block">About
                        Me.</span>
                    <h2 class="text-5xl font-headline mb-2 leading-tight">Oluwadamilola Badmus </h2>
                    <p>

                        Founder, Kanlilly Beauty Studio
                    </p>

                    <br />

                    <div class="space-y-6 text-on-surface-variant font-body text-lg leading-relaxed">

                        <p>
                            With over a decade in the beauty industry, I bring expertise and creativity as a freelance
                            makeup artist and hairstylist. I’ve had the privilege of beautifying brides and bridal
                            parties, perfecting makeup for headshots, crafting timeless looks for special occasions,
                            film, and editorial work, and teaching makeup lessons.


                        </p>

                        <p>
                            Passionate about skincare and the health of the skin, I combine the best makeup techniques
                            with proven skincare practices, empowering my clients with knowledge to achieve their
                            personal beauty goals. Every look I create is personalized, professional, and designed to
                            enhance confidence, ensuring every client feels radiant and empowered.
                        </p>

                    </div>

                </div>
            </div>
        </section>
        <!-- CTA Section (Glassmorphism) -->
        <section id="contact" class="py-20 md:py-40 px-6">
            <div
                class="max-w-5xl mx-auto relative overflow-hidden bg-surface-container-high/40 backdrop-blur-2xl p-16 md:p-32 text-center rounded-xl shadow-2xl shadow-primary/5 border border-primary/5">
                <div
                    class="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2">
                </div>
                <div
                    class="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2">
                </div>
                <div class="relative z-10">
                    <h2 class="text-5xl md:text-7xl font-headline italic mb-12">Reserve Your <br />Experience</h2>
                    <p class="text-on-surface-variant text-xl font-body max-w-xl mx-auto mb-16 font-light">
                        Experience the magic of Kanlilly Beauty Studio.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-6">
                        <!-- <button
                            class="bg-primary-container text-on-primary-container px-10 py-5 font-label text-sm uppercase tracking-widest hover:scale-105 transition-all">
                            Book Online Now
                        </button> -->
                        <a href="https://wa.me/2347085360145" target="_blank" rel="noopener noreferrer"
                            class="border border-outline-variant/80 text-primary px-10 py-5 font-label text-sm uppercase tracking-widest hover:bg-primary/5 transition-all inline-block">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer -->
        <footer class="bg-[#131313] w-full border-t border-[#ebbb4d]/10">
            <div
                class="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full max-w-screen-2xl mx-auto">
                <div>
                    <img src="/images/kanlilly-white.svg" class="w-28" />
                </div>
                <div class="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
                    <a class="font-manrope text-sm tracking-loose text-white/50 hover:text-[#ebbb4d] transition-colors"
                        href="#">Instagram</a>
                    <a class="font-manrope text-sm tracking-loose text-white/50 hover:text-[#ebbb4d] transition-colors"
                        href="#">Pinterest</a>
                    <a class="font-manrope text-sm tracking-loose text-white/50 hover:text-[#ebbb4d] transition-colors"
                        href="#">Facebook</a>
                    <a class="font-manrope text-sm tracking-loose text-white/50 hover:text-[#ebbb4d] transition-colors"
                        href="#">Terms</a>
                    <a class="font-manrope text-sm tracking-loose text-white/50 hover:text-[#ebbb4d] transition-colors"
                        href="#">Privacy</a>
                </div>
                <div class="font-manrope text-xs tracking-widest text-white/30 uppercase">
                    © 2026 KANLILLY. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
        <!-- Lightbox -->
        <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="lightboxOpen"
                class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-md"
                @click="closeLightbox">
                <button class="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
                    @click="closeLightbox">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <button
                    class="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all p-2 md:p-4 hover:scale-110 z-50"
                    @click.stop="prevImage">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-12 md:w-12" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    class="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all p-2 md:p-4 hover:scale-110 z-50"
                    @click.stop="nextImage">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-12 md:w-12" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div class="px-16 md:px-32 relative h-full w-full flex items-center justify-center p-8" @click.stop>
                    <img :src="portfolioImages[currentImageIndex]"
                        class="max-h-[85vh] max-w-[100%] object-contain rounded-sm shadow-2xl shadow-primary/10 select-none border border-white/5" />
                </div>
            </div>
        </transition>
    </div>
</template>

<style>
html {
    scroll-behavior: smooth;
}
</style>
