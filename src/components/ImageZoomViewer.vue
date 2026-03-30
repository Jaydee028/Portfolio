<template>
  <div v-if="visible" class="overlay">
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="counter">{{ currentIndex + 1 }} / {{ images.length }}</div>

      <button class="icon-btn" @click="close">✕</button>
    </div>

    <!-- Navigation -->
    <button class="nav-btn left" @click="prev">‹</button>
    <button class="nav-btn right" @click="next">›</button>

    <!-- Viewer -->
    <div
      ref="viewerRef"
      class="viewer"
      @wheel.prevent="handleZoom"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @dblclick="toggleZoom"
      @touchstart="startDragTouch"
      @touchmove="onDragTouch"
      @touchend="stopDrag"
    >
      <img
        :src="images[currentIndex]"
        ref="imgRef"
        class="image"
        :style="imageStyle"
        draggable="false"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from "vue";
import { onMounted, onBeforeUnmount } from "vue";

const handleKeyDown = (e) => {
  if (e.key === "Escape") {
    close();
  }
};
onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKeyDown);
});

const props = defineProps({
  images: Array,
  startIndex: Number,
  visible: Boolean,
});

const emit = defineEmits(["close"]);

const currentIndex = ref(0);

// zoom
const scale = ref(1);
const minScale = 1;
const maxScale = 4;

// pan
const offsetX = ref(0);
const offsetY = ref(0);

const viewerRef = ref(null);
const imgRef = ref(null);

let isDragging = false;
let startX = 0;
let startY = 0;

/* ---------------------------
     INIT
  ----------------------------*/
const initViewer = async () => {
  currentIndex.value = props.startIndex || 0;
  reset();
};

watch(
  () => props.visible,
  async (visible) => {
    if (visible) {
      document.body.style.overflow = "hidden"; // 🔒 lock background scroll
      document.addEventListener("keydown", handleKeyDown);
      await nextTick();
      currentIndex.value = props.startIndex || 0;
      reset();
    } else {
      document.body.style.overflow = ""; // restore
      document.removeEventListener("keydown", handleKeyDown);
    }
  },
  { immediate: true }
);

/* ---------------------------
     RESET
  ----------------------------*/
const reset = () => {
  scale.value = 1;
  offsetX.value = 0;
  offsetY.value = 0;
};

/* ---------------------------
     NAVIGATION
  ----------------------------*/
const next = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++;
    reset();
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    reset();
  }
};

const close = () => emit("close");

/* ---------------------------
     ZOOM
  ----------------------------*/
const toggleZoom = () => {
  scale.value = scale.value > 1 ? 1 : 2;
  if (scale.value === 1) reset();
};

const handleZoom = (e) => {
  const delta = e.deltaY < 0 ? 0.12 : -0.12;
  scale.value = Math.min(maxScale, Math.max(minScale, scale.value + delta));
  clampPan();
};

/* ---------------------------
     DRAG (Mouse)
  ----------------------------*/
const startDrag = (e) => {
  if (!canDrag()) return;

  isDragging = true;
  startX = e.clientX - offsetX.value;
  startY = e.clientY - offsetY.value;
};

const onDrag = (e) => {
  if (!isDragging) return;

  offsetX.value = e.clientX - startX;
  offsetY.value = e.clientY - startY;

  clampPan();
};

const stopDrag = () => {
  isDragging = false;
};

/* ---------------------------
     DRAG (Touch)
  ----------------------------*/
const startDragTouch = (e) => {
  if (!canDrag()) return;

  const t = e.touches[0];
  isDragging = true;
  startX = t.clientX - offsetX.value;
  startY = t.clientY - offsetY.value;
};

const onDragTouch = (e) => {
  if (!isDragging) return;

  const t = e.touches[0];
  offsetX.value = t.clientX - startX;
  offsetY.value = t.clientY - startY;

  clampPan();
};

/* ---------------------------
     DRAG CONTROL LOGIC
  ----------------------------*/
const canDrag = () => {
  if (!imgRef.value || !viewerRef.value) return false;

  const container = viewerRef.value;
  const img = imgRef.value;

  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const naturalWidth = img.naturalWidth;
  const naturalHeight = img.naturalHeight;

  const scaledWidth = naturalWidth * scale.value;
  const scaledHeight = naturalHeight * scale.value;

  return (
    scale.value > 1 && (scaledWidth > containerWidth || scaledHeight > containerHeight)
  );
};

/* ---------------------------
     CLAMP PAN (CORE FIX)
  ----------------------------*/
const clampPan = () => {
  if (!imgRef.value || !viewerRef.value) return;

  const container = viewerRef.value;
  const img = imgRef.value;

  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const naturalWidth = img.naturalWidth;
  const naturalHeight = img.naturalHeight;

  const scaledWidth = naturalWidth * scale.value;
  const scaledHeight = naturalHeight * scale.value;

  // Calculate overflow only when image is larger than container
  const overflowX = Math.max(0, (scaledWidth - containerWidth) / 2);
  const overflowY = Math.max(0, (scaledHeight - containerHeight) / 2);

  // Clamp X
  offsetX.value = Math.max(-overflowX, Math.min(overflowX, offsetX.value));

  // Clamp Y
  offsetY.value = Math.max(-overflowY, Math.min(overflowY, offsetY.value));
};

/* ---------------------------
     STYLE
  ----------------------------*/
const imageStyle = computed(() => ({
  transform: `translate(${offsetX.value}px, ${offsetY.value}px) scale(${scale.value})`,
  cursor: canDrag() ? "grab" : "zoom-in",
}));
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

/* Viewer */
.viewer {
  width: 80vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
}

/* Image */
.image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  transition: transform 0.08s ease;
  border-radius: 10px;
}

/* Top bar */
.top-bar {
  position: absolute;
  top: 0;
  width: 100%;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  color: white;
}

.counter {
  font-size: 13px;
  opacity: 0.8;
}

/* Buttons */
.icon-btn {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: white;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
}

/* Nav */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 22px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.nav-btn.left {
  left: 10px;
}

.nav-btn.right {
  right: 10px;
}
</style>
