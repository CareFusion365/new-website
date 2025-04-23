<template>
  <div class="AppFooter bg-[var(--bg-dark)] text-white section-x-padding pt-16 lg:pt-32 flex flex-col items-center">
    <div class="container">
      <div class="flex flex-wrap lg:flex-nowrap gap-4">
        <div class="flex-[2]">
          <h3 class="text-2xl font-bold mb-8">CareFusion</h3>
          <p class="p w-3/4 text-white leading-[1.875rem]">
            Carefusion is a next-gen, AI-powered healthcare service assistant that
            links patient EMR to healthcare practitioners with ease.
          </p>
        </div>
        <div class="basis-full lg:hidden"></div>
        <div class="flex-1">
          <h5 class="text-muted-foreground uppercase mb-2 lg:mb-8 font-semibold">
            Quick Links
          </h5>
          <ul class="list-none">
            <li><a href="#" class="hover:underline">Home</a></li>
            <li><a href="#" class="hover:underline">Find a Doctor</a></li>
            <li><a href="#" class="hover:underline">Sevices</a></li>
            <li><a href="#" class="hover:underline">About</a></li>
          </ul>
        </div>
        <div class="flex-1">
          <h5 class="text-muted-foreground uppercase mb-2 lg:mb-8 font-semibold">
            Services
          </h5>
          <ul class="list-none">
            <li><a href="#" class="hover:underline">Urgent Care</a></li>
            <li><a href="#" class="hover:underline">Primary Care</a></li>
            <li><a href="#" class="hover:underline">Women's Health</a></li>
            <li><a href="#" class="hover:underline">Men's Health</a></li>
            <li><a href="#" class="hover:underline">Mental Health</a></li>
            <li><a href="#" class="hover:underline">Lab Testing</a></li>
          </ul>
        </div>
        <div class="basis-full lg:hidden"></div>
        <div class="flex-1">
          <h5 class="text-muted-foreground uppercase mb-2 lg:mb-8 font-semibold">
            Company
          </h5>
          <ul class="list-none">
            <li><a href="#" class="hover:underline">Contact Us</a></li>
            <li><a href="#" class="hover:underline">Privacy Policy</a></li>
            <li>
              <a href="#" class="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <h5 class="text-muted-foreground uppercase mb-2 lg:mb-8 font-semibold">
            Business
          </h5>
          <ul class="list-none">
            <li><a href="#" class="hover:underline">Partners</a></li>
          </ul>
        </div>
        <div class="basis-full lg:hidden"></div>
        <div class="flex-1">
          <h5 class="text-muted-foreground uppercase mb-2 lg:mb-8 font-semibold">
            Socials
          </h5>
          <ul class="list-none">
            <li><a href="#" class="hover:underline">LinkedIn</a></li>
            <li><a href="#" class="hover:underline">X (Formerly Twitter)</a></li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="w-full my-16" />
    <div class="text-center pb-16">
      Copyright CareFusion {{ new Date().getFullYear() }}. All rights reserved.
    </div>
  </div>
</template>
