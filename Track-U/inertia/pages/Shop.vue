<template>
<Head title="Shop" />
  <div class="grid gap-4 w-auto h-full m-1">
    <div class="segment col-span-2 h-full flex flex-col gap-3 min-h-0">
        <div class="container-shadow m-3 bg-(--surface) flex flex-col items-center text-3xl pt-5 text-[#f8f9fa] h-full">
          <div class="grid grid-cols-3 text-center w-full">
          <p>
            Points: {{ 1 }}
          </p>
          <p class="font-bold">
            Shop
          </p>
          <p>
            {{ 12 }}
          </p>
          </div>
          <div class="mt-5 h-[90%] w-[90%] segment grid grid-cols-5 grid-rows-3 gap-3 p-3">
              <div class="container-shadow bg-(--surface) col-span-3 row-span-2">

              </div>
              <div class="container-shadow bg-(--surface) row-span-3 col-span-2"></div>
              <div class="container-shadow bg-(--surface) col-span-3"></div>
          </div>
      </div>
    </div>
  </div>
</template>