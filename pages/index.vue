<script setup lang="ts">
import {
  CalendarHeartIcon,
  CalendarIcon,
  CheckIcon,
  ChevronLeft,
  ChevronRight,
  HospitalIcon,
  LockKeyholeIcon,
  SearchIcon,
  StarIcon,
} from "lucide-vue-next";

const carouselRef = useTemplateRef("carousel-items");
const carouselPrevButtonRef = useTemplateRef("carousel-prev-button");
const carouselNextButtonRef = useTemplateRef("carousel-next-button");
const currentIndex = ref(0);
const slideWidth = ref(0);
const totalSlides = ref(0);

onMounted(() => {
  slideWidth.value = (
    window.document.querySelector(".carousel-item") as any
  )?.offsetWidth;
  totalSlides.value = window.document.querySelectorAll(".carousel-item").length;

  carouselNextButtonRef.value!.addEventListener("click", () => {
    if (currentIndex.value < totalSlides.value - 3) {
      currentIndex.value += 1;
      updateCarousel();
    }
  });

  carouselPrevButtonRef.value!.addEventListener("click", () => {
    if (currentIndex.value > 0) {
      currentIndex.value -= 1;
      updateCarousel();
    }
  });
});

function updateCarousel() {
  carouselRef.value!.style.transform = `translateX(-${
    currentIndex.value * slideWidth.value
  }px)`;
}
</script>

<template>
  <div class="HomePage text-primary">
    <Navbar />

    <main class="mb-32">
      <!-- hero section -->
      <section
        class="w-full h-dvh flex flex-nowrap items-center section-x-padding !pe-0 bg-[var(--bg-light)] overflow-hidden"
      >
        <div class="bg-[var(--bg-light)] flex-1">
          <h2 class="text-6xl leading-[4.5rem] text-primary-heading">
            Data-powered<br />healthcare
          </h2>
          <p class="w-[60%] mt-4">
            Carefusion is a next-gen, AI-powered healthcare service assistant
            that links patient EMR to healthcare practitioners with ease.
          </p>

          <div class="bg-white rounded-3xl flex flex-col w-[60%] p-4 mt-4">
            <Label id="cta-label" for="cta-search" class="text-primary-heading"
              >What brings you here?</Label
            >
            <Input
              id="cta-search"
              aria-label="cta-label"
              class="mt-3 rounded-full input-bg shadow-none border-none p-6"
              placeholder="eg: Diabetes, HIV, lab test"
            />
          </div>

          <Button
            class="mt-4 p-6 bg-[#FACC15] rounded-full text-primary-heading hover:text-white font-bold"
          >
            Search for a doctor
          </Button>
        </div>
        <div class="w-full flex-1">
          <img
            src="~/assets/img/hero-bg.png"
            class="h-full w-full !object-cover object-top"
            alt="female doctor with stethoscope"
          />
        </div>
      </section>

      <!-- services section -->
      <section class="mt-32 section-x-padding overflow-hidden">
        <div class="flex flex-col items-center text-center">
          <h3
            class="text-4xl font-semibold leading-[3rem] text-primary-heading"
          >
            Explore Our Featured<br />Medical Specialties
          </h3>
          <p class="w-1/2 mt-8">
            Find the right care for your health needs. Our network of expert
            doctors covers a wide range of specialties, ensuring you get the
            best treatment for your condition.
          </p>
        </div>
        <div class="mt-16 relative">
          <div
            class="flex gap-4 transition-transform duration-300 ease-in-out pe-16"
            ref="carousel-items"
          >
            <div class="carousel-item flex-shrink-0 w-1/3">
              <HealthcareServiceCard
                title="Cardiology"
                description="Expert heart care from top cardiologists to keep your heart healthy and strong."
                image="/img/cardiology.png"
              />
            </div>
            <div class="carousel-item flex-shrink-0 w-1/3">
              <HealthcareServiceCard
                title="Dental"
                description="Quality dental care, from routine cleanings to advanced procedures for a healthy smile."
                image="/img/dental.png"
              />
            </div>
            <div class="carousel-item flex-shrink-0 w-1/3">
              <HealthcareServiceCard
                title="Optometry"
                description="Vision exams, eyewear, and eye health treatments to keep your sight sharp."
                image="/img/optometry.png"
              />
            </div>
            <div class="carousel-item flex-shrink-0 w-1/3">
              <HealthcareServiceCard
                title="Gynaecology"
                description="Comprehensive care for women’s health, from reproductive health to menopause."
                image="/img/gynaecology.png"
              />
            </div>
            <div class="carousel-item flex-shrink-0 w-1/3">
              <HealthcareServiceCard
                title="Ear, Nose & Throat"
                description="Specialized care for ear, nose, and throat conditions, from allergies to hearing loss."
                image="/img/ent.png"
              />
            </div>
          </div>
          <button
            ref="carousel-prev-button"
            class="absolute top-1/2 transform -translate-y-1/2 shadow-md shadow-gray-600 left-4 bg-[var(--bg-dark)] bg-opacity-50 text-white p-2 w-12 h-12 rounded-full flex justify-center items-center"
            v-show="currentIndex > 0"
          >
            <ChevronLeft />
          </button>
          <button
            ref="carousel-next-button"
            class="absolute top-1/2 transform -translate-y-1/2 shadow-md shadow-gray-600 right-4 bg-[var(--bg-dark)] bg-opacity-50 text-white p-2 w-12 h-12 rounded-full flex justify-center items-center"
            v-show="currentIndex < totalSlides - 3"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      <!-- how it works section -->
      <section class="mt-32 section-x-padding overflow-hidden">
        <div class="flex flex-col items-center text-center">
          <h3
            class="text-4xl font-semibold leading-[3rem] text-primary-heading"
          >
            How It Works
          </h3>
          <p class="w-1/2 mt-8">
            Enjoy our friendly, simple process: find your doctor, pick a time,
            and book your appointment in a few easy steps.
          </p>
        </div>
        <div class="mt-16 flex">
          <div class="flex flex-col border-s px-4 border-[var(--bg-dark)]">
            <span class="bg-[var(--bg-light)] p-2 rounded-full w-fit">
              <SearchIcon class="w-8 h-8 text-green-500" />
            </span>
            <h4 class="mt-16 text-xl font-semibold text-primary-heading">
              Search for a Doctor
            </h4>
            <p class="mt-4">
              Browse our list of top-rated doctors and specialists based on your
              health needs.
            </p>
          </div>
          <div class="flex flex-col border-s px-4 border-[var(--bg-dark)]">
            <span class="bg-[var(--bg-light)] p-2 rounded-full w-fit">
              <CalendarIcon class="w-8 h-8 text-green-500" />
            </span>
            <h4 class="mt-16 text-xl font-semibold text-primary-heading">
              Select a Time Slot
            </h4>
            <p class="mt-4">
              Choose an available time that fits your schedule for an in-person
              or virtual visit.
            </p>
          </div>
          <div class="flex flex-col border-s px-4 border-[var(--bg-dark)]">
            <span class="bg-[var(--bg-light)] p-2 rounded-full w-fit">
              <CheckIcon class="w-8 h-8 text-green-500" />
            </span>
            <h4 class="mt-16 text-xl font-semibold text-primary-heading">
              Confirm your Appiontment
            </h4>
            <p class="mt-4">
              Enter your details, confirm your appointment, and get a
              confirmation instantly.
            </p>
          </div>
          <div class="flex flex-col border-s px-4 border-[var(--bg-dark)]">
            <span class="bg-[var(--bg-light)] p-2 rounded-full w-fit">
              <HospitalIcon class="w-8 h-8 text-green-500" />
            </span>
            <h4 class="mt-16 text-xl font-semibold text-primary-heading">
              Attend Your Consultation
            </h4>
            <p class="mt-4">
              Visit the clinic or join the online consultation at your scheduled
              time.
            </p>
          </div>
        </div>
      </section>

      <!-- features section -->
      <section class="mt-32 section-x-padding bg-[var(--bg-light)] py-48">
        <div class="flex flex-col">
          <h3
            class="text-4xl font-semibold leading-[3rem] text-primary-heading"
          >
            Experience A New <br />
            Kind Of Doctor&apos;s Office
          </h3>
          <p class="w-1/3 mt-4">
            At Carefusion365, we are committed to providing world-class
            healthcare with a patient-first approach.
          </p>
          <div class="flex gap-4 mt-8">
            <Button class="rounded-full p-6">Book a consultation</Button>
            <Button class="rounded-full p-6" variant="outline"
              >Find a doctor</Button
            >
          </div>
        </div>
        <div class="mt-16 flex flex-wrap gap-4 w-full">
          <div class="w-1/4 flex flex-col p-4 bg-white rounded-2xl">
            <span class="bg-[var(--bg-light)] p-2 rounded-full w-fit">
              <SearchIcon class="w-8 h-8 text-green-500" />
            </span>
            <h4 class="mt-24 text-xl font-semibold text-primary-heading">
              Find the Right Specialist, Instantly
            </h4>
            <p class="mt-4">
              Search and compare qualified doctors across multiple hospitals by
              specialty, location, or condition—all in one place.
            </p>
          </div>
          <div class="w-1/4 flex flex-col p-4 bg-white rounded-2xl">
            <span class="bg-[var(--bg-light)] p-2 rounded-full w-fit">
              <CalendarHeartIcon class="w-8 h-8 text-green-500" />
            </span>
            <h4 class="mt-24 text-xl font-semibold text-primary-heading">
              Book Appointments with Ease
            </h4>
            <p class="mt-4">
              Schedule virtual or in-person consultations with just a few
              clicks. No long calls or wait times—simply choose a doctor and
              book a time that works for you.
            </p>
          </div>
          <div class="w-1/4 flex flex-col p-4 bg-white rounded-2xl">
            <span class="bg-[var(--bg-light)] p-2 rounded-full w-fit">
              <HospitalIcon class="w-8 h-8 text-green-500" />
            </span>
            <h4 class="mt-24 text-xl font-semibold text-primary-heading">
              Access Trusted Hospitals &amp; Clinics
            </h4>
            <p class="mt-4">
              We partner with reputable hospitals and medical centers, ensuring
              you receive high-quality care from accredited professionals.
            </p>
          </div>
          <div class="w-1/4 flex flex-col p-4 bg-white rounded-2xl">
            <span class="bg-[var(--bg-light)] p-2 rounded-full w-fit">
              <StarIcon class="w-8 h-8 text-green-500" />
            </span>
            <h4 class="mt-24 text-xl font-semibold text-primary-heading">
              Verified Reviews &amp; Ratings
            </h4>
            <p class="mt-4">
              Read real patient reviews and ratings to make informed decisions
              before booking your consultation.
            </p>
          </div>
          <div class="w-1/4 flex flex-col p-4 bg-white rounded-2xl">
            <span class="bg-[var(--bg-light)] p-2 rounded-full w-fit">
              <LockKeyholeIcon class="w-8 h-8 text-green-500" />
            </span>
            <h4 class="mt-24 text-xl font-semibold text-primary-heading">
              Secure & Hassle-Free Experience
            </h4>
            <p class="mt-4">
              Your health information is safe and confidential, and our platform
              ensures a smooth, user-friendly experience from search to
              appointment.
            </p>
          </div>
        </div>
      </section>

      <!-- waitlist section -->
      <section class="mt-32 section-x-padding">
        <div
          class="w-full flex flex-nowrap gap-12 items-center bg-[var(--bg-light)] rounded-2xl"
        >
          <div class="w-full flex-1">
            <img
              src="~/assets/img/waitlist.png"
              class="h-[42rem] w-full object-cover object-right rounded-tl-2xl rounded-bl-2xl"
              alt="female doctor with stethoscope"
            />
          </div>
          <div class="bg-[var(--bg-light)] flex-1">
            <h2 class="text-5xl text-primary-heading">
              Join the Waitlist <br />
              Get Early Access 🥳
            </h2>
            <p class="w-[60%] mt-4">
              Be the first to experience a seamless way to find specialists and
              book appointments across trusted hospitals. Sign up now and stay
              updated on our launch!
            </p>

            <div class="flex gap-4 mt-12 me-16">
              <Input
                aria-label="waitlist-label"
                class="mt-3 rounded-full shadow-none border-none p-6 bg-white"
                placeholder="your@email.com"
              />
              <Button
                class="mt-4 p-6 bg-[var(--bg-dark)] rounded-full text-white font-bold"
              >
                Search for a doctor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>
