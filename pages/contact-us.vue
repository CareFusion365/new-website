<script setup lang="ts">
import {
  PhAsclepius,
  PhAt,
  PhCalendar,
  PhCheck,
  PhCpu,
  PhInstagramLogo,
  PhMagnifyingGlass,
  PhPhone,
  PhVault,
  PhVoicemail,
  PhXLogo,
} from "@phosphor-icons/vue";
import aboutHospitalBg from "@/assets/img/bg-3.png";

function onSubmit(formData: any) {
  console.log(formData);
}
</script>

<template>
  <div class="AboutPage text-primary flex flex-col items-center">
    <div class="container bg-[#F9FAFC]">
      <Navbar />

      <main class="mb-32">
        <!-- hero section -->
        <section
          id="hero-section"
          class="w-full lg:h-[740px] flex flex-col lg:flex-row flex-nowrap section-x-padding !pe-0 ps-0 lg:ps-16 bg-[#E7EFFE] overflow-hidden"
        >
          <div
            class="h-[30rem] lg:h-auto lg:flex-1 flex items-end pb-10 ps-4 h:ps-0 lg:pb-20 bg-[#E7EFFE]"
          >
            <h1 class="h1 text-primary-heading">Contact Us</h1>
          </div>
          <div class="h-fit lg:h-full lg:w-[601px] mt-8 lg:mt-0">
            <img
              src="~/assets/img/contact-us.png"
              class="h-[348px] lg:h-full w-full object-cover object-top lg:object-top"
              alt="female doctor with stethoscope"
            />
          </div>
        </section>

        <!-- contact section -->
        <section
          id="contact-section"
          class="mt-16 lg:mt-32 section-x-padding flex justify-center"
        >
          <div class="container overflow-hidden">
            <div class="flex flex-col items-start lg:items-center">
              <h3 class="h3 text-primary-heading text-[32px]">
                We&apos;re Here to Help
              </h3>
              <p class="p mt-4 lg:text-center">
                Need assistance? Our team is here to help. Whether you have
                questions
                <br class="hidden lg:block" />
                about appointments, doctors, or urgent care, feel free to reach
                out.
              </p>
            </div>

            <div class="flex flex-col lg:flex-row mt-16">
              <div class="flex-1">
                <h5 class="h5 uppercase">Contact Details</h5>
                <div class="flex items-center gap-2 mt-4">
                  <PhAt class="size-6 text-[#3B82F6]" />
                  <span class="opacity-80">Email</span>
                </div>
                <div class="">
                  <a href="mailto:info@carefusion.health" class="underline">
                    info@carefusion.health
                  </a>
                </div>

                <div class="flex items-center gap-2 mt-8">
                  <PhPhone class="size-6 text-[#3B82F6]" />
                  <span class="opacity-80">Call Us</span>
                </div>
                <div class="">
                  <a href="mailto:info@carefusion.health" class="underline">
                    info@carefusion.health
                  </a>
                </div>
              </div>

              <div class="flex-1">
                <h5 class="h5 uppercase mt-8 lg:mt-0">Socials</h5>
                <div class="space-y-4 mt-4">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="me-2"
                  >
                    <span
                      class="bg-[#3B82F61A] p-2 lg:p-4 rounded-full inline-flex items-center justify-center"
                    >
                      <PhXLogo class="size-4 lg:size-6 text-[#3B82F6]" />
                    </span>
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="me-2"
                  >
                    <span
                      class="bg-[#3B82F61A] p-2 lg:p-4 rounded-full inline-flex items-center justify-center"
                    >
                      <PhInstagramLogo class="size-4 lg:size-6 text-[#3B82F6]" />
                    </span>
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="me-2"
                  >
                    <span
                      class="bg-[#3B82F61A] p-2 lg:p-4 rounded-full inline-flex items-center justify-center"
                    >
                      <PhInstagramLogo class="size-4 lg:size-6 text-[#3B82F6]" />
                    </span>
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="me-2"
                  >
                    <span
                      class="bg-[#3B82F61A] p-2 lg:p-4 rounded-full inline-flex items-center justify-center"
                    >
                      <PhInstagramLogo class="size-4 lg:size-6 text-[#3B82F6]" />
                    </span>
                  </a>
                </div>
              </div>

              <div class="flex-[2] mt-16 lg:mt-0">
                <h5 class="font-medium text-2xl">Send Us a Message</h5>
                <Card
                  class="mt-4 border-none rounded-2xl shadow-[0_4px_20px_0px_rgba(0,0,0,0,0.05)] bg-white"
                >
                  <CardContent class="p-4 w-full">
                    <form @submit="onSubmit">
                      <div class="flex flex-col lg:flex-row gap-4 lg:gap-8">
                        <div class="w-full">
                          <FormField v-slot="{ componentField }" name="name">
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  class="border-none rounded-full bg-[#EFEFEF] h-12 placeholder:text-[#33415580]"
                                  placeholder="John Doe"
                                  v-bind="componentField"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          </FormField>
                        </div>
                        <div class="w-full">
                          <FormField
                            v-slot="{ componentField }"
                            name="username"
                          >
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  class="border-none rounded-full bg-[#EFEFEF] h-12 placeholder:text-[#33415580]"
                                  placeholder="john.doe@example.com"
                                  v-bind="componentField"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          </FormField>
                        </div>
                      </div>

                      <div class="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4 lg:mt-8">
                        <div class="w-full">
                          <FormField v-slot="{ componentField }" name="name">
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  class="border-none rounded-full bg-[#EFEFEF] h-12 placeholder:text-[#33415580]"
                                  placeholder="08000000000"
                                  v-bind="componentField"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          </FormField>
                        </div>
                        <div class="w-full">
                          <FormField
                            v-slot="{ componentField }"
                            name="username"
                          >
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <Select v-bind="componentField">
                                <FormControl>
                                  <SelectTrigger
                                    class="border-none rounded-full bg-[#EFEFEF] h-12 placeholder:text-[#33415580]"
                                  >
                                    <SelectValue
                                      placeholder="Select a subject"
                                    />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="appointment">
                                      Appointment Inquiry
                                    </SelectItem>
                                    <SelectItem value="urgent-medical-care">
                                      Urgent Medical Care
                                    </SelectItem>
                                    <SelectItem value="technical-support">
                                      Technical Support
                                    </SelectItem>
                                    <SelectItem value="general">
                                      General Inquiry
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          </FormField>
                        </div>
                      </div>

                      <div class="flex mt-4 lg:mt-8">
                        <div class="w-full">
                          <FormField v-slot="{ componentField }" name="message">
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us a little bit about yourself"
                                  class="w-full h-40 border-none rounded-2xl bg-[#EFEFEF] placeholder:text-[#33415580] p-3"
                                  v-bind="componentField"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          </FormField>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        class="mt-4 rounded-full py-6 px-8 font-normal"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
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
  background-position: 70vw 80%;
}

@media screen and (max-width: 1023px) {
  .services-section {
    background-position: 70vw 100%;
  }
}
</style>
