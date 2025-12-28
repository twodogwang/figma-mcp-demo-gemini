<script setup lang="ts">
const IMG_ARROW_LEFT_DISABLED = "http://localhost:3845/assets/a1073e310ae58f6d1820ac62164742ca05f3b739.svg"
const IMG_ARROW_RIGHT = "http://localhost:3845/assets/c91c8c08a426668f08eae37aae2d94fd3e4f0a25.svg"
const IMG_CHEVRON_DOWN_SMALL = "http://localhost:3845/assets/5ebb6a8f29a8e0a3c7d96f1130909500a8a7e53e.svg"
</script>

<template>
  <div class="pagination-container">
    <div class="pagination-wrapper">
      <div class="pages">
        <!-- Previous (Disabled) -->
        <button class="page-btn prev disabled">
          <img :src="IMG_ARROW_LEFT_DISABLED" alt="prev" />
        </button>
        
        <!-- Page 1 (Active) -->
        <button class="page-btn active">
          <span>1</span>
        </button>
        
        <!-- Other Pages -->
        <button class="page-btn"><span>2</span></button>
        <button class="page-btn"><span>3</span></button>
        <button class="page-btn"><span>4</span></button>
        <button class="page-btn"><span>5</span></button>
        <button class="page-btn"><span>6</span></button>
        
        <!-- Ellipsis -->
        <div class="page-ellipsis">
          <span>...</span>
        </div>
        
        <!-- Last Page -->
        <button class="page-btn"><span>100</span></button>
        
        <!-- Next -->
        <button class="page-btn next">
          <img :src="IMG_ARROW_RIGHT" alt="next" />
        </button>
      </div>
      
      <!-- Page Size Selector -->
      <div class="page-size-selector">
        <span>10 / page</span>
        <img :src="IMG_CHEVRON_DOWN_SMALL" class="icon-chevron" alt="chevron" />
      </div>
      
      <!-- Summary -->
      <span class="summary-text">1-10 of 1000</span>
    </div>
  </div>
</template>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: flex-end;
  padding-top: 4px;
  width: 100%;
  min-width: 1200px;
  font-family: Arial, sans-serif;
}

.pagination-wrapper {
  display: flex;
  gap: 8px;
  align-items: center;
}

.pages {
  display: flex;
  align-items: center;
}

.page-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid #c1c1c1;
  border-right: none;
  cursor: pointer;
  padding: 0;
}

.page-btn:last-child {
  border-right: 1px solid #c1c1c1;
}

.page-btn.prev {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.page-btn.next {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left: none; 
  border-right: 1px solid #c1c1c1;
}

.page-btn.disabled {
  cursor: not-allowed;
  background-color: white;
}

.page-btn.active {
  background-color: #333;
  border-color: #333;
  color: white;
  z-index: 1;
}

.page-btn:hover:not(.active):not(.disabled) {
  background-color: #f9f9f9;
}

.page-ellipsis {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #c1c1c1;
  border-bottom: 1px solid #c1c1c1;
  background-color: white;
}

.page-btn span, .page-ellipsis span {
  font-size: 14px;
  line-height: 18px;
  color: #333;
}

.page-btn.active span {
  color: white;
}

.page-size-selector {
  height: 32px;
  padding: 0 12px;
  background-color: white;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
}

.page-size-selector span {
  font-size: 14px;
  color: #333;
  line-height: 18px;
}

.icon-chevron {
  width: 10px;
  height: 10px;
}

.summary-text {
  font-size: 14px;
  color: #333;
  line-height: 18px;
}

img {
  width: 16px;
  height: 16px;
}
</style>
