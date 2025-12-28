<script setup lang="ts">
const tabs = [
  { label: 'ALL', count: 304, active: true },
  { label: 'Carton &Shipping Label Pending', count: 83 },
  { label: 'Unpaid', count: 8 },
  { label: 'Being Processed', count: 15 },
  { label: 'BOL Pending&Awaiting Pickup', count: 23 },
]
</script>

<template>
  <div class="tabs-container">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      class="tab-item"
      :class="{ active: tab.active }"
    >
      <div class="tab-content">
        <span>{{ tab.label }}</span>
        <span class="count">({{ tab.count }})</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tabs-container {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 8px;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 9px 16px;
  height: 36px;
  border-radius: 100px;
  flex-shrink: 0;
  white-space: nowrap;
  cursor: pointer;
  background-color: #f2f2f2;
  transition: background-color 0.2s;
}

.tab-item:hover:not(.active) {
  background-color: #e0e0e0;
}

.tab-content {
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: #333;
}

.count {
  font-weight: bold;
}
</style>
