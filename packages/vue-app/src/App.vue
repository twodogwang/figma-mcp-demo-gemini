<script setup lang="ts">
import Tabs from './components/Tabs.vue'
import TableHeader from './components/TableHeader.vue'
import OrderCard from './components/OrderCard.vue'
import Pagination from './components/Pagination.vue'
</script>

<template>
  <div class="app-container">
    <div class="main-content">
      <div class="section-tabs">
        <Tabs />
      </div>
      
      <div class="section-header">
        <TableHeader />
      </div>

      <div class="section-list">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>

      <div class="section-pagination">
        <Pagination />
      </div>
    </div>
  </div>
</template>

<style>
/* Global reset for this example */
body {
  margin: 0;
  background-color: white;
  font-family: Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

.app-container {
  min-height: 100vh;
  padding: 20px;
}

.main-content {
  max-width: 1600px;
  margin: 0 auto;
}

.section-tabs {
  margin-bottom: 16px;
}

.section-header {
  margin-bottom: 16px;
}

.section-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-pagination {
  margin-top: 16px;
}
</style>