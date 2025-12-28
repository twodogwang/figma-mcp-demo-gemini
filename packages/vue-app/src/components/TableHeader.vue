<script setup lang="ts">
const HELP_ICON = "http://localhost:3845/assets/e6672b7da6bf12a8c996de7ed28d5c34002ae441.svg"
</script>

<template>
  <div class="table-header">
    <div class="header-cell flex-1 min-w-200">
      <span class="header-text">Product Information</span>
    </div>
    
    <div class="header-cell w-160 center">
      <span class="header-text">Seller</span>
    </div>

    <div class="header-cell w-200 end">
      <div class="flex-align">
        <span class="header-text">Total Amount</span>
        <img :src="HELP_ICON" alt="help" class="icon-help" />
      </div>
    </div>

    <div class="header-cell w-200">
      <span class="header-text">Purchase Order ID</span>
    </div>

    <div class="header-cell w-160">
      <span class="header-text">Warehouse Code</span>
    </div>

    <div class="header-cell w-210">
      <span class="header-text">Shipping Method</span>
    </div>

    <div class="header-cell w-200 end">
      <div class="flex-align">
        <span class="header-text">Order Total</span>
        <img :src="HELP_ICON" alt="help" class="icon-help" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-header {
  display: flex;
  width: 100%;
  min-width: 1200px;
}

.header-cell {
  background-color: #d7ddea;
  height: 40px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.header-cell:first-child {
  border-left: none;
}

.header-cell.center {
  justify-content: center;
}

.header-cell.end {
  justify-content: flex-end;
}

.flex-1 {
  flex: 1;
}

.w-160 { width: 160px; }
.w-200 { width: 200px; }
.w-210 { width: 210px; }
.min-w-200 { min-width: 200px; }

.header-text {
  font-family: Arial, sans-serif;
  font-size: 12px;
  font-weight: bold;
  color: #333;
  line-height: 16px;
}

.flex-align {
  display: flex;
  align-items: center;
  gap: 4px;
}

.icon-help {
  width: 16px;
  height: 16px;
}
</style>
