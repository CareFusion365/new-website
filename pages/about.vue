<script setup lang="ts">
import {
  PhAsclepius,
  PhCalendar,
  PhCheck,
  PhCheckFat,
  PhCpu,
  PhHospital,
  PhMagnifyingGlass,
  PhVault,
} from "@phosphor-icons/vue";
import { ChevronLeft, ChevronRight, SearchIcon } from "lucide-vue-next";
import aboutHospitalBg from "@/assets/img/about-hospital-bg.png";
import aboutHospitalBg2 from "@/assets/img/bg-2.png";
import aboutHospitalBg3 from "@/assets/img/bg-3.png";

// const carouselRef = useTemplateRef("carousel-items");
// const carouselPrevButtonRef = useTemplateRef("carousel-prev-button");
// const carouselNextButtonRef = useTemplateRef("carousel-next-button");
// const carouselNextButtonLgRef = useTemplateRef("carousel-next-button-lg");
const currentIndex = ref(0);
const slideWidth = ref(0);
const totalSlides = ref(0);
// const waitlistSectionRef = useTemplateRef("waitlist-section");

// onMounted(() => {
//   slideWidth.value = (
//     window.document.querySelector(".carousel-item") as any
//   )?.offsetWidth;
//   totalSlides.value = window.document.querySelectorAll(".carousel-item").length;

//   carouselPrevButtonRef.value!.addEventListener("click", () => {
//     currentIndex.value = Math.max(0, currentIndex.value - 1);
//     updateCarousel();
//   });

//   carouselNextButtonRef.value!.addEventListener("click", () => {
//     currentIndex.value = Math.min(
//       totalSlides.value - 1,
//       currentIndex.value + 1,
//     );
//     updateCarousel();
//   });

//   carouselNextButtonLgRef.value!.addEventListener("click", () => {
//     currentIndex.value = Math.min(
//       totalSlides.value - 1,
//       currentIndex.value + 3,
//     );
//     updateCarousel();
//   });
// });

// function updateCarousel() {
//   currentIndex.value = Math.max(
//     0,
//     Math.min(currentIndex.value, totalSlides.value - 1),
//   );
//   const scrollAmount = currentIndex.value * slideWidth.value;
//   carouselRef.value!.scrollTo({
//     left: scrollAmount,
//     behavior: "smooth",
//   });
// }
</script>

<template>
  <div class="AboutPage text-primary flex flex-col items-center">
    <div class="container bg-white">
      <Navbar />

      <main class="mb-32">
        <!-- hero section -->
        <section
          id="hero-section"
          class="relative w-full lg:h-[740px] flex flex-col lg:flex-row flex-nowrap section-x-padding !pe-0 ps-0 lg:ps-16 bg-[#E8FDF6] overflow-hidden"
        >
          <div class="bg-[#E8FDF6] flex-1"></div>
          <div class="h-fit lg:h-full lg:w-[601px] mt-8 lg:mt-0">
            <img
              src="~/assets/img/hero-bg.png"
              class="h-[348px] lg:h-full w-full object-cover object-top lg:object-top"
              alt="female doctor with stethoscope"
            />
          </div>

          <div
            class="hidden lg:flex flex-col justify-end w-2/3 container absolute top-1/2 transform"
          >
            <h1 class="h1 text-primary-heading">About Us</h1>
        </div>
        </section>

        <!-- services section -->
        <section
          id="services-section"
          class="mt-16 lg:mt-32 section-x-padding flex justify-center services-section"
          :style="{
            backgroundImage: `url(${aboutHospitalBg3})`,
            backgroundSize: '70%',
            backgroundPosition: '70vw 80%',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'color-dodge',
          }"
        >
          <div class="container overflow-hidden">
            <div class="flex">
              <div class="flex-1">
                <div class="">
                  <p class="text-[20px]">
                    At Carefusion, we believe that accessing healthcare
                    should be simple, seamless, and stress-free. Our platform
                    connects you with trusted hospitals, clinics, and
                    specialists, allowing you to find the right doctor, compare
                    verified reviews, and book appointments—both virtual and
                    in-person—with ease.
                    <br />
                    <br />
                    We bridge the gap between patients and healthcare providers,
                    ensuring that you get the right care at the right time
                    without the usual hassles of long waits, unclear options, or
                    complicated processes.
                    <br />
                    <br />
                    Whether you need a quick virtual consultation or a
                    specialized in-person appointment, we put control in your
                    hands—helping you make informed healthcare decisions with
                    confidence.
                  </p>
                </div>

                <div class="mt-52">
                  <h3 class="h3 text-[32px]">Our Vision</h3>
                  <p class="mt-4 text-[#334155CC]">
                    To be the go-to digital healthcare platform, ensuring that
                    everyone, regardless of location, has access to trusted,
                    high-quality medical care anytime, anywhere.
                  </p>
                </div>

                <div class="mt-16">
                  <h3 class="h3 text-[32px]">Our Mission</h3>
                  <div class="mt-4">
                    <ul class="text-[#334155CC]">
                      <li class="flex items-start gap-2 mb-4">
                        <PhCheck class="text-[#10B981] size-6" />
                        Make healthcare easily accessible by connecting patients
                        with verified hospitals, clinics, and specialists.
                      </li>
                      <li class="flex items-start gap-2 mb-4">
                        <PhCheck class="text-[#10B981] size-6" />
                        Empower patients with clear, transparent information to
                        make informed decisions.
                      </li>
                      <li class="flex items-start gap-2 mb-4">
                        <PhCheck class="text-[#10B981] size-6" />
                        Eliminate barriers to care, whether through virtual
                        consultations or in-person visits.
                      </li>
                      <li class="flex items-start gap-2 mb-4">
                        <PhCheck class="text-[#10B981] size-6" />
                        Enhance the patient experience by providing a fast,
                        secure, and user-friendly booking system.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="flex-1 w-[601px]"></div>
            </div>
          </div>
        </section>

        <!-- values section -->
        <section
          class="mt-16 lg:mt-32 section-x-padding bg-[var(--bg-light)] py-16 lg:py-25 flex justify-center"
        >
          <div class="container">
            <div class="flex flex-col">
              <h3 class="h3 text-primary-heading text-[32px]">Our Core Values</h3>
            </div>
            <div
              class="mt-8 lg:mt-4 flex flex-col lg:flex-row flex-wrap gap-x-6 gap-y-6 w-full"
            >
              <div
                class="flex flex-col p-4 bg-white rounded-2xl w-full lg:w-[26.33rem]"
              >
                <span class="bg-green-500/10 p-2 rounded-full w-fit">
                  <PhMagnifyingGlass
                    :size="32"
                    weight="duotone"
                    class="text-green-500"
                  />
                </span>
                <h4 class="title mt-20 lg:mt-24">Patient-Centered Care</h4>
                <p class="p mt-4">
                  Everything we do is designed to prioritize your health and
                  convenience.
                </p>
              </div>
              <div
                class="flex flex-col p-4 bg-white rounded-2xl w-full lg:w-[26.33rem]"
              >
                <span class="bg-green-500/10 p-2 rounded-full w-fit">
                  <PhCalendar
                    :size="32"
                    weight="duotone"
                    class="text-green-500"
                  />
                </span>
                <h4 class="title mt-20 lg:mt-24">Trust &amp; transparency</h4>
                <p class="p mt-4">
                  We ensure that all doctors and hospitals on our platform are
                  fully verified and reviewed.
                </p>
              </div>
              <div
                class="flex flex-col p-4 bg-white rounded-2xl w-full lg:w-[26.33rem]"
              >
                <span class="bg-green-500/10 p-2 rounded-full w-fit">
                  <PhAsclepius
                    :size="32"
                    weight="duotone"
                    class="text-green-500"
                  />
                </span>
                <h4 class="title mt-20 lg:mt-24">
                  Innovation &amp; Efficiency
                </h4>
                <p class="p mt-4">
                  We constantly improve our platform to make healthcare access
                  smarter and simpler.
                </p>
              </div>
              <!-- <div class="hidden lg:flex flex-basis-full w-full"></div> -->
              <div
                class="flex flex-col p-4 bg-white rounded-2xl w-full lg:w-[26.33rem]"
              >
                <span class="bg-green-500/10 p-2 rounded-full w-fit">
                  <PhCpu :size="32" weight="duotone" class="text-green-500" />
                </span>
                <h4 class="title mt-20 lg:mt-24">Security &amp; Privacy</h4>
                <p class="p mt-4">
                  Your medical information is protected with the highest
                  standards of security.
                </p>
              </div>
              <div
                class="flex flex-col p-4 bg-white rounded-2xl w-full lg:w-[26.33rem]"
              >
                <span class="bg-green-500/10 p-2 rounded-full w-fit">
                  <PhVault :size="32" weight="duotone" class="text-green-500" />
                </span>
                <h4 class="title mt-20 lg:mt-24">Accessibility for All</h4>
                <p class="p mt-4">
                  Healthcare should be available to everyone, no matter where
                  they are.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- team section -->
        <section
          class="mt-16 lg:mt-16 section-x-padding py-16 lg:py-8 flex justify-center"
        >
          <div class="container">
            <div class="flex flex-col">
              <h3 class="h3 text-primary-heading text-[32px]">Who We Are</h3>
            </div>

            <div
              class="mt-8 lg:mt-8 flex flex-col lg:flex-row flex-wrap gap-x-6 gap-y-3 w-full"
            >
              <div
                class="flex flex-col bg-[var(--bg-light)] rounded-2xl w-[calc(25% - 4rem)] lg:w-[26.33rem]"
              >
                <img src="~/assets/img/eli.png" alt="Elijah" class="h-[30rem] rounded-tl-2xl rounded-tr-2xl object-cover object-top" />
                <div class="p-4 space-y-2">
                  <h4 class="subtitle text-[24px]">Elijah Ahianyo</h4>
                  <p class="text-[16px] text-[#334155CC]">Co-Founder</p>
                </div>
              </div>
              <div
                class="flex flex-col bg-[var(--bg-light)] rounded-2xl w-[calc(25% - 4rem)] lg:w-[26.33rem]"
              >
                <img src="~/assets/img/eli.png" alt="Elijah" class="h-[30rem] rounded-tl-2xl rounded-tr-2xl object-cover object-top" />
                <div class="p-4 space-y-2">
                  <h4 class="subtitle text-[24px]">Elijah Ahianyo</h4>
                  <p class="text-[16px] text-[#334155CC]">Co-Founder</p>
                </div>
              </div>
              <div
                class="flex flex-col bg-[var(--bg-light)] rounded-2xl w-[calc(25% - 4rem)] lg:w-[26.33rem]"
              >
                <img src="~/assets/img/eli.png" alt="Elijah" class="h-[30rem] rounded-tl-2xl rounded-tr-2xl object-cover object-top" />
                <div class="p-4 space-y-2">
                  <h4 class="subtitle text-[24px]">Elijah Ahianyo</h4>
                  <p class="text-[16px] text-[#334155CC]">Co-Founder</p>
                </div>
              </div>
              <div
                class="flex flex-col bg-[var(--bg-light)] rounded-2xl w-[calc(25% - 4rem)] lg:w-[26.33rem]"
              >
                <img src="~/assets/img/eli.png" alt="Elijah" class="h-[30rem] rounded-tl-2xl rounded-tr-2xl object-cover object-top" />
                <div class="p-4 space-y-2">
                  <h4 class="subtitle text-[24px]">Elijah Ahianyo</h4>
                  <p class="text-[16px] text-[#334155CC]">Co-Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  </div>
</template>

<style>
.AboutPage {
  background-color: #f0f0f0;
}

.services-section {
  background: url(aboutHospitalBg) no-repeat center center;
  background-size: cover;
  background-position: center;
}
</style>
