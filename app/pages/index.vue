<script setup lang="ts">
const { $orpc } = useNuxtApp();

const { data } = useAsyncData(...$orpc.consoles.getAll.options());
</script>

<template>
  <main class="min-h-screen p-4">
    <div class="flex flex-wrap items-stretch gap-4 container mx-auto">
      <UiCard
        v-for="console in data"
        :key="console.id"
        class="border-1 flex flex-col pt-0 overflow-hidden w-80 mx-auto"
      >
        <div class="relative h-50 bg-background-dark/20 p-4 grid place-items-center">
          <NuxtImg
            :src="console.image"
            :alt="console.name"
            height="168"
            class="mx-auto rounded-xl"
          />
          <UiBadge
            v-if="console.outOfStock"
            class="bg-black/80 absolute text-xl"
          >
            Out of stock
          </UiBadge>
          <UiBadge
            v-if="console.prevPrice"
            class="absolute top-2 right-2"
          >
            Sale
          </UiBadge>
        </div>
        <UiCardHeader>
          <UiCardDescription class="flex gap-2 mb-2 text-white">
            <UiBadge variant="outline">
              {{ console.manufacturer }}
            </UiBadge>
          </UiCardDescription>
          <UiCardTitle class="text-xl">
            <NuxtLink
              :to="`/consoles/${console.id}`"
              class="underline hover:opacity-50 transition-opacity"
            >
              {{ console.name }}
            </NuxtLink>
          </UiCardTitle>
        </UiCardHeader>
        <UiCardContent class="flex-1">
          <p>{{ console.description }}</p>
        </UiCardContent>
        <UiCardFooter class="flex justify-between">
          <p>
            ${{ console.price }}
            <template v-if="console.price">
              {{ " " }}
              <del class="text-card-foreground/50">
                ${{ console.prevPrice }}
              </del>
            </template>
          </p>
          <UiButton
            v-if="console.outOfStock"
            disabled
          >
            Out of stock
          </UiButton>
          <UiButton v-else>
            Add to Cart
          </UiButton>
        </UiCardFooter>
      </UiCard>
    </div>
  </main>
</template>
