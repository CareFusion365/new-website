<script setup lang="ts">
import {
  PhAsclepius,
  PhCalendar,
  PhCheckFat,
  PhCpu,
  PhHospital,
  PhMagnifyingGlass,
  PhVault,
} from "@phosphor-icons/vue";
import { ChevronLeft, ChevronRight, SearchIcon } from "lucide-vue-next";

const carouselRef = useTemplateRef("carousel-items");
const carouselPrevButtonRef = useTemplateRef("carousel-prev-button");
const carouselNextButtonRef = useTemplateRef("carousel-next-button");
const carouselNextButtonLgRef = useTemplateRef("carousel-next-button-lg");
const currentIndex = ref(0);
const slideWidth = ref(0);
const totalSlides = ref(0);
const waitlistSectionRef = useTemplateRef("waitlist-section");

onMounted(() => {
  slideWidth.value = (
    window.document.querySelector(".carousel-item") as any
  )?.offsetWidth;
  totalSlides.value = window.document.querySelectorAll(".carousel-item").length;

  carouselPrevButtonRef.value!.addEventListener("click", () => {
    currentIndex.value = Math.max(0, currentIndex.value - 1);
    updateCarousel();
  });

  carouselNextButtonRef.value!.addEventListener("click", () => {
    currentIndex.value = Math.min(
      totalSlides.value - 1,
      currentIndex.value + 1
    );
    updateCarousel();
  });

  carouselNextButtonLgRef.value!.addEventListener("click", () => {
    currentIndex.value = Math.min(
      totalSlides.value - 1,
      currentIndex.value + 3
    );
    updateCarousel();
  });
});

function updateCarousel() {
  currentIndex.value = Math.max(
    0,
    Math.min(currentIndex.value, totalSlides.value - 1)
  );
  const scrollAmount = currentIndex.value * slideWidth.value;
  carouselRef.value!.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}
</script>

<template>
  <div class="HomePage text-primary flex flex-col items-center">
    <div class="container bg-white">
      <Navbar />

      <main class="mb-32">
        <!-- hero section -->
        <section
          id="hero-section"
          class="relative w-full lg:h-[880px] flex flex-col lg:flex-row flex-nowrap section-x-padding !pe-0 ps-0 lg:ps-16 bg-[var(--bg-light)] overflow-hidden"
        >
          <div class="bg-[var(--bg-light)] flex-1">
            <div class="block lg:hidden section-x-padding mt-40">
              <h1 class="h1 text-primary-heading">Data-powered healthcare</h1>
              <p class="p mt-4 subtitle">
                Carefusion is a next-gen, AI-powered healthcare service
                assistant that links patient EMR to healthcare practitioners
                with ease.
              </p>

              <div
                class="bg-white rounded-3xl w-full p-4 mt-4 shadow-lg flex flex-col gap-4"
              >
                <div class="flex flex-col gap-4">
                  <div class="flex-1">
                    <Label
                      id="cta-label"
                      for="cta-search"
                      class="text-primary-heading"
                      >What brings you here?</Label
                    >
                    <Input
                      id="cta-search"
                      aria-label="cta-label"
                      class="mt-2 rounded-full !input-bg shadow-none border-none p-6 placeholder:text-[rgba(51_65_85_0.5)]"
                      placeholder="eg: Diabetes, HIV, lab test"
                      :pre-icon="SearchIcon"
                      icon-class="text-[rgba(51_65_85_0.5)]"
                    />
                  </div>
                  <div class="flex-1">
                    <Label
                      id="cta-label"
                      for="cta-search"
                      class="text-primary-heading"
                      >Location</Label
                    >
                    <Input
                      id="cta-search"
                      aria-label="cta-label"
                      class="mt-2 rounded-full !input-bg shadow-none border-none p-6 placeholder:text-[rgba(51_65_85_0.5)]"
                      placeholder="Search location (Accra, Tema, Kumasi, etc)"
                      :pre-icon="SearchIcon"
                      icon-class="text-[rgba(51_65_85_0.5)]"
                    />
                  </div>
                </div>
                <Button
                  class="p-6 bg-[#FACC15] rounded-full text-primary-heading hover:text-white font-bold w-1/2"
                  @click="
                    () => {
                      waitlistSectionRef?.scrollIntoView({
                        behavior: 'smooth',
                      });
                    }
                  "
                >
                  Join the Waitlist
                </Button>
              </div>
            </div>
          </div>
          <div class="h-fit lg:h-full lg:w-[601px] mt-8 lg:mt-0">
            <img
              src="~/assets/img/hero-bg.jpg"
              class="h-[348px] lg:h-full w-full object-cover object-top lg:object-top"
              alt="female doctor with stethoscope"
            />
          </div>

          <div
            class="hidden lg:flex flex-col w-2/3 container absolute top-1/2 transform -translate-y-1/2"
          >
            <h1 class="h1 text-primary-heading">
              Data-powered <br />
              healthcare
            </h1>
            <p class="p w-[70%] mt-4 text-[1.25rem] leading-[1.875rem]">
              Carefusion is a next-gen, AI-powered healthcare service <br />
              assistant that links patient EMR to healthcare practitioners
              <br />
              with ease.
            </p>

            <div
              class="bg-white rounded-3xl w-[76%] p-4 mt-8 shadow-[0_21px_46px_0_rgba(0,0,0,0.05)] flex flex-col gap-4"
            >
              <div class="flex gap-2">
                <div class="flex-1">
                  <Label id="cta-label" for="cta-search" class="p"
                    >What brings you here?</Label
                  >
                  <Input
                    id="cta-search"
                    aria-label="cta-label"
                    class="mt-2 rounded-full !input-bg shadow-none border-none p-6 text-primary/50"
                    placeholder="eg: Diabetes, HIV, lab test"
                    :pre-icon="SearchIcon"
                  />
                </div>
                <div class="flex-1">
                  <Label id="cta-label" for="cta-search" class="p"
                    >Location</Label
                  >
                  <Input
                    id="cta-search"
                    aria-label="cta-label"
                    class="mt-2 rounded-full !input-bg shadow-none border-none p-6 !text-primary/50"
                    placeholder="Search location (Accra, Tema, Kumasi, etc)"
                    :pre-icon="SearchIcon"
                  />
                </div>
              </div>
              <Button
                class="px-4 py-2 bg-[#FACC15] rounded-full text-primary-heading hover:text-white w-fit shadow-none font-medium text-[0.875rem]"
                @click="
                  () => {
                    waitlistSectionRef?.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }
                "
              >
                Join the Waitlist
              </Button>
            </div>
          </div>
        </section>

        <!-- services section -->
        <section class="mt-16 lg:mt-32 section-x-padding flex justify-center">
          <div class="container overflow-hidden">
            <div class="flex flex-col items-center text-center">
              <h3 class="h3 text-primary-heading">
                Explore Our Featured<br />Medical Specialties
              </h3>
              <p class="w-full lg:w-1/2 mt-4 p">
                Find the right care for your health needs. Our network of
                <br class="hidden lg:block" />
                expert doctors covers a wide range of specialties, ensuring
                <br class="hidden lg:block" />
                you get the best treatment for your condition.
              </p>
            </div>
            <div class="mt-8 lg:mt-16 relative">
              <div
                class="flex gap-4 transition-transform duration-300 ease-in-out pe-16 overflow-x-auto hide-scrollbar"
                ref="carousel-items"
              >
                <div class="carousel-item flex-shrink-0 w-full lg:w-1/3">
                  <HealthcareServiceCard
                    title="Urgent Care"
                    description="Expert heart care from top cardiologists to keep your heart healthy and strong."
                    image="/img/cardiology.png"
                  />
                </div>
                <div class="carousel-item flex-shrink-0 w-full lg:w-1/3">
                  <HealthcareServiceCard
                    title="Primary Care"
                    description="Quality dental care, from routine cleanings to advanced procedures for a healthy smile."
                    image="/img/dental.png"
                  />
                </div>
                <div class="carousel-item flex-shrink-0 w-full lg:w-1/3">
                  <HealthcareServiceCard
                    title="Specialist Care"
                    description="Vision exams, eyewear, and eye health treatments to keep your sight sharp."
                    image="/img/optometry.png"
                  />
                </div>
                <div class="carousel-item flex-shrink-0 w-full lg:w-1/3">
                  <HealthcareServiceCard
                    title="Women's Health"
                    description="Comprehensive check-ups and preventive care for your overall well-being."
                    image="/img/womens-health.png"
                  />
                </div>
                <div class="carousel-item flex-shrink-0 w-full lg:w-1/3">
                  <HealthcareServiceCard
                    title="Ear, Nose & Throat"
                    description="Specialized care for ear, nose, and throat conditions, from allergies to hearing loss."
                    image="/img/ent.jpeg"
                  />
                </div>
              </div>
              <button
                ref="carousel-prev-button"
                class="shadow-none absolute top-1/2 transform -translate-y-1/2 shadow-gray-600 left-4 bg-[var(--bg-dark)] bg-opacity-50 text-white p-2 w-12 h-12 rounded-full flex justify-center items-center"
                v-show="currentIndex > 0"
              >
                <ChevronLeft />
              </button>
              <button
                ref="carousel-next-button"
                class="shadow-none absolute top-1/2 transform -translate-y-1/2 shadow-gray-600 right-4 bg-[var(--bg-dark)] bg-opacity-50 text-white p-2 w-12 h-12 rounded-full flex justify-center items-center lg:hidden"
                v-show="currentIndex < totalSlides - 1"
              >
                <ChevronRight />
              </button>
              <button
                ref="carousel-next-button-lg"
                class="hidden shadow-none lg:flex absolute top-1/2 transform -translate-y-1/2 shadow-gray-600 right-4 bg-[var(--bg-dark)] bg-opacity-50 text-white p-2 w-12 h-12 rounded-full justify-center items-center"
                v-show="currentIndex < totalSlides - 3"
              >
                <ChevronRight />
              </button>
            </div>
            <div class="text-center mt-8 mb-32 lg:mt-12">
              <Button class="rounded-full !py-6 lg:py-3 !px-4" size="lg"
                >Explore more services</Button
              >
            </div>
          </div>
        </section>

        <!-- how it works section -->
        <section class="mt-16 lg:mt-32 section-x-padding flex justify-center">
          <div class="container overflow-hidden">
            <div class="flex flex-col items-center text-center">
              <h3 class="h3 text-primary-heading">How It Works</h3>
              <p class="w-full lg:w-1/2 mt-4 p">
                Enjoy our friendly, simple process: find your doctor, pick a
                <br class="hidden lg:block" />
                time, and book your appointment in a few easy steps.
              </p>
            </div>
            <div
              class="mt-8 lg:mt-16 flex flex-col gap-12 lg:gap-4 md:flex-row md:gap-0"
            >
              <div class="flex flex-col border-s px-4 border-[#10B9814D]">
                <span class="bg-green-500/10 p-2 rounded-full w-fit">
                  <PhMagnifyingGlass
                    :size="32"
                    weight="duotone"
                    class="text-green-500"
                  />
                </span>
                <p class="title mt-16">Search for a Doctor</p>
                <p class="p mt-4">
                  Browse our list of top-rated doctors and specialists based on
                  your health needs.
                </p>
              </div>
              <div class="flex flex-col border-s px-4 border-[#10B9814D]">
                <span class="bg-green-500/10 p-2 rounded-full w-fit">
                  <PhCalendar
                    :size="32"
                    weight="duotone"
                    class="text-green-500"
                  />
                </span>
                <p class="title mt-16">Select a Time Slot</p>
                <p class="p mt-4">
                  Choose an available time that fits your schedule for an
                  in-person or virtual visit.
                </p>
              </div>
              <div class="flex flex-col border-s px-4 border-[#10B9814D]">
                <span class="bg-green-500/10 p-2 rounded-full w-fit">
                  <PhCheckFat
                    :size="32"
                    weight="duotone"
                    class="text-green-500"
                  />
                </span>
                <p class="title mt-16">Confirm your Appointment</p>
                <p class="p mt-4">
                  Enter your details, confirm your appointment, and get a
                  confirmation instantly.
                </p>
              </div>
              <div class="flex flex-col border-s px-4 border-[#10B9814D]">
                <span class="bg-green-500/10 p-2 rounded-full w-fit">
                  <PhHospital
                    :size="32"
                    weight="duotone"
                    class="text-green-500"
                  />
                </span>
                <p class="title mt-16">Attend Your Consultation</p>
                <p class="p mt-4">
                  Visit the clinic or join the online consultation at your
                  scheduled time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- features section -->
        <section
          class="mt-16 lg:mt-32 section-x-padding bg-[var(--bg-light)] py-16 lg:py-48 flex justify-center"
        >
          <div class="container">
            <div class="flex flex-col">
              <h3 class="h3 text-primary-heading">
                Experience A New <br />
                Kind Of Doctor&apos;s Office
              </h3>
              <p class="w-full lg:w-1/3 mt-4 p">
                At CareFusion, we are committed to providing world-class
                healthcare with a patient-first approach.
              </p>
            </div>
            <div
              class="mt-8 lg:mt-16 flex flex-col lg:flex-row flex-wrap gap-x-6 gap-y-3 w-full"
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
                <h4 class="title mt-20 lg:mt-24">
                  Find the Right Specialist, Instantly
                </h4>
                <p class="p mt-4">
                  Search and compare qualified doctors across multiple hospitals
                  by specialty, location, or condition—all in one place.
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
                <h4 class="title mt-20 lg:mt-24">
                  Book Appointments with Ease
                </h4>
                <p class="p mt-4">
                  Schedule virtual or in-person consultations with just a few
                  clicks. No long calls or wait times—simply choose a doctor and
                  book a time that works for you.
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
                  Access Trusted Hospitals &amp; Clinics
                </h4>
                <p class="p mt-4">
                  We partner with reputable hospitals and medical centers,
                  ensuring you receive high-quality care from accredited
                  professionals.
                </p>
              </div>
              <div class="hidden lg:flex flex-basis-full w-full"></div>
              <div
                class="flex flex-col p-4 bg-white rounded-2xl w-full lg:w-[26.33rem]"
              >
                <span class="bg-green-500/10 p-2 rounded-full w-fit">
                  <PhCpu :size="32" weight="duotone" class="text-green-500" />
                </span>
                <h4 class="title mt-20 lg:mt-24">
                  Verified Reviews &amp; Ratings
                </h4>
                <p class="p mt-4">
                  Read real patient reviews and ratings to make informed
                  decisions before booking your consultation.
                </p>
              </div>
              <div
                class="flex flex-col p-4 bg-white rounded-2xl w-full lg:w-[26.33rem]"
              >
                <span class="bg-green-500/10 p-2 rounded-full w-fit">
                  <PhVault :size="32" weight="duotone" class="text-green-500" />
                </span>
                <h4 class="title mt-20 lg:mt-24">
                  Secure & Hassle-Free Experience
                </h4>
                <p class="p mt-4">
                  Your health information is safe and confidential, and our
                  platform ensures a smooth, user-friendly experience from
                  search to appointment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- waitlist section -->
        <section
          id="waitlist-section"
          ref="waitlist-section"
          class="mt-16 lg:mt-32 section-x-padding flex justify-center"
        >
          <div class="container">
            <div
              class="w-full flex flex-col lg:flex-row flex-nowrap gap-12 items-center bg-[var(--bg-light)] rounded-2xl"
            >
              <div class="w-full flex-1 order-2 lg:order-1">
                <img
                  src="~/assets/img/waitlist.png"
                  class="h-[24rem] lg:h-[42rem] w-full object-cover object-right rounded-2xl"
                  alt="female doctor with stethoscope"
                />
              </div>
              <div
                class="bg-[var(--bg-light)] flex-1 order-1 lg:order-2 p-4 lg:p-none rounded-2xl"
              >
                <h2 class="h2 text-primary-heading">
                  Join the Waitlist <br />
                  Get Early Access 🥳
                </h2>
                <p class="p w-full lg:w-[60%] mt-4">
                  Be the first to experience a seamless way to find specialists
                  and book appointments across trusted hospitals. Sign up now
                  and stay updated on our launch!
                </p>

                <div class="flex flex-col lg:flex-row lg:gap-4 mt-2.5 lg:me-16">
                  <Input
                    aria-label="waitlist-label"
                    class="mt-3 rounded-full shadow-none border-none p-6 bg-white h-14 placeholder:text-[rgba(51_65_85_0.5)]"
                    placeholder="your@email.com"
                  />
                  <Button
                    class="mt-4 p-6 bg-[var(--bg-dark)] rounded-full text-white w-fit"
                  >
                    Join the Waitlist
                  </Button>
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
.HomePage {
  background-color: #f0f0f0;
}
</style>
