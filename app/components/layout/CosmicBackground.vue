<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#020617]">
    <!-- Cosmic Pulsing Glows -->
    <div class="absolute inset-0">
      <div class="cosmic-glow glow-1"></div>
      <div class="cosmic-glow glow-2"></div>
      <div class="cosmic-glow glow-3"></div>
      <div class="cosmic-glow glow-4"></div>
      <div class="cosmic-glow glow-5"></div>
    </div>

    <!-- Orbital Living Glows -->
    <div class="absolute inset-0">
      <div v-for="(style, index) in orbStyles" :key="'orb-'+index" 
           class="orbital-glow absolute"
           :style="style"></div>
    </div>

    <!-- Stars -->
    <div class="absolute inset-0">
      <div v-for="(style, index) in starStyles" :key="'star-'+index" 
           class="star-container absolute"
           :style="style">
        <div class="star-shimmer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="white" class="opacity-70 shadow-[0_0_10px_white]"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const orbStyles = ref<any[]>([])
const starStyles = ref<any[]>([])

const generateStyles = () => {
  orbStyles.value = Array.from({ length: 6 }).map((_, n) => {
    const top = Math.random() * 100 + '%'
    const left = Math.random() * 100 + '%'
    const size = (Math.random() * 200 + 100) + 'px'
    const duration = (Math.random() * 10 + 10) + 's'
    const delay = (Math.random() * -10) + 's'
    const colors = [
      'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)'
    ]
    return {
      top, left, width: size, height: size,
      background: colors[n % colors.length],
      animation: `float-orb ${duration} infinite alternate ease-in-out`,
      animationDelay: delay,
      filter: 'blur(40px)'
    }
  })

  starStyles.value = Array.from({ length: 25 }).map(() => {
    const top = Math.random() * 100 + '%'
    const left = Math.random() * 100 + '%'
    const size = Math.random() * 0.4 + 0.6
    const duration = (Math.random() * 20 + 20) + 's'
    const delay = (Math.random() * -40) + 's'
    return {
      top, left,
      transform: `scale(${size})`,
      animation: `space-drift ${duration} infinite alternate ease-in-out`,
      animationDelay: delay
    }
  })
}

onMounted(() => {
  generateStyles()
})
</script>

<style scoped>
.cosmic-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
  animation: pulse-glow 15s infinite alternate ease-in-out;
}

.glow-1 {
  width: 60vw; height: 60vw;
  background: radial-gradient(circle, rgba(30, 64, 175, 0.4) 0%, transparent 70%);
  top: -10%; left: -10%;
}

.glow-2 {
  width: 50vw; height: 50vw;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
  bottom: -10%; right: -5%;
  animation-delay: -5s;
}

.glow-3 {
  width: 40vw; height: 40vw;
  background: radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%);
  top: 40%; left: 30%;
  animation-delay: -10s;
}

.glow-4 {
  width: 50vw; height: 50vw;
  background: radial-gradient(circle, rgba(39, 245, 183, 0.15) 0%, transparent 70%);
  bottom: -5%; left: -10%;
  animation-delay: -3s;
}

.glow-5 {
  width: 45vw; height: 45vw;
  background: radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, transparent 70%);
  bottom: -15%; right: 10%;
  animation-delay: -7s;
}

@keyframes pulse-glow {
  0% { transform: scale(1) translate(0, 0); opacity: 0.2; }
  100% { transform: scale(1.2) translate(5%, 5%); opacity: 0.4; }
}

@keyframes float-orb {
  0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  100% { transform: translate(100px, 50px) scale(1.3); opacity: 0.6; }
}

@keyframes space-drift {
  0% { transform: translate(0, 0) rotate(0deg); }
  100% { transform: translate(30px, 30px) rotate(10deg); }
}

.star-shimmer {
  animation: shimmer 4s infinite ease-in-out;
}

@keyframes shimmer {
  0%, 100% { opacity: 0.4; transform: scale(0.8) rotate(0deg); filter: blur(1px); }
  50% { opacity: 1; transform: scale(1.2) rotate(45deg); filter: blur(0px); }
}
</style>
