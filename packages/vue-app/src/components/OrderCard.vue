<script setup lang="ts">
const IMG_PRODUCT = "http://localhost:3845/assets/1af8b1df9b46913faa5026b153bb6a6e736109b8.png"
const IMG_COMBOX = "http://localhost:3845/assets/bd29f1398652e30e1cbd8f251bc2c60aba0ed4b9.svg"
const IMG_PROTECTION_ACTIVE = "http://localhost:3845/assets/f69f393aad47df3ff40af8beae6c7c3253747a3e.svg"
const IMG_CHECKMARK = "http://localhost:3845/assets/3d0b0a98d5be93da89735f237a1c2c52c997d047.svg"
const IMG_ARROW_BLUE = "http://localhost:3845/assets/c3ed526f506f70804d6e3ec01ab0c4e5593986bb.svg"
const IMG_HELP_GRAY = "http://localhost:3845/assets/01a96663d18d7e459fd0b1c402f1e13cf6989e84.svg"
const IMG_CHEVRON_DOWN = "http://localhost:3845/assets/079374e6d5269e5dc291274793e8ef2783f4ef90.svg"
</script>

<template>
  <div class="order-card">
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="top-left">
        <div class="item bordered">
          <span class="text-primary">Shipment ID: 78718521689</span>
          <img :src="IMG_PROTECTION_ACTIVE" class="icon-protection" alt="protection" />
        </div>
        <div class="item bordered">
          <span class="text-secondary italic">Amazon - FBA Pickup</span>
        </div>
        <div class="status-badge">
          <span class="text-warning">Unpaid</span>
        </div>
      </div>
      
      <div class="top-right">
        <div class="item bordered">
          <div class="checkbox">
             <img :src="IMG_CHECKMARK" class="icon-check" alt="check" />
          </div>
          <span class="text-primary">Carrier Pickup Scheduled</span>
        </div>
        <button class="btn-link">
          <span class="text-link">View Details</span>
          <img :src="IMG_ARROW_BLUE" class="icon-arrow" alt="arrow" />
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="content-body">
      <div class="main-info">
        <!-- Product Info -->
        <div class="product-info col-flex-1">
          <div class="product-image">
            <img :src="IMG_PRODUCT" alt="product" />
          </div>
          <div class="product-details">
            <p class="product-title">
              Demon Skull,Suitable for Outdoor Fireplace and Fire Pit, Halloween Decoration
            </p>
            <div class="product-meta">
              <span class="text-primary">W2061254313</span>
              <span class="text-bold">x2</span>
              <div class="icon-tag-wrapper">
                <img :src="IMG_COMBOX" alt="tag" />
              </div>
            </div>
          </div>
        </div>

        <!-- Seller -->
        <div class="col-160 center">
           <span class="text-primary">--</span>
        </div>

        <!-- Total Amount -->
        <div class="col-200 end">
           <span class="text-bold">--</span>
        </div>

         <!-- Purchase Order ID -->
         <div class="col-200">
           <span class="text-primary">--</span>
        </div>

        <!-- Warehouse Code -->
        <div class="col-160">
           <span class="text-primary">W206-WA1</span>
        </div>

        <!-- Shipping Method -->
        <div class="col-210">
           <span class="text-primary">Trucking</span>
        </div>
      </div>
      
      <!-- Order Total (Right Column) -->
      <div class="order-total col-200">
         <span class="text-bold">--</span>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="bottom-bar">
      <div class="bottom-left">
         <div class="flex-align">
           <span class="text-primary">Upload Time</span>
           <img :src="IMG_HELP_GRAY" class="icon-help" alt="help" />
         </div>
         <span class="text-primary">2025-11-02 00:00:00</span>
      </div>

      <div class="bottom-right">
         <button class="btn-more">
           <span class="text-primary">More</span>
           <img :src="IMG_CHEVRON_DOWN" class="icon-more" alt="more" />
         </button>
         <button class="btn-pay">
           <span class="text-white">Pay</span>
         </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1200px;
  margin-bottom: 16px;
  font-family: Arial, sans-serif;
}

/* Top Bar */
.top-bar {
  background-color: #f7f8fa;
  border: 1px solid #e5e5e5;
  border-bottom: none;
  display: flex;
  align-items: center;
  padding: 7px 10px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.top-left, .top-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.top-right {
  flex: 1;
  justify-content: flex-end;
}

.item {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 14px;
}

.bordered {
  padding-right: 16px;
  border-right: 1px solid #e5e5e5;
}

.status-badge {
  background-color: #fff0e6;
  padding: 3px 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox {
  width: 16px;
  height: 16px;
  background-color: white;
  border: 1px solid #0aad4f;
  border-radius: 3px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-check {
  width: 12px;
  height: 12px;
  position: absolute;
}

.btn-link {
  display: flex;
  align-items: center;
  gap: 2px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

/* Content Body */
.content-body {
  display: flex;
  width: 100%;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
}

.main-info {
  flex: 1;
  display: flex;
  background-color: white;
  padding: 12px 10px;
  border-bottom: 1px solid #e5e5e5;
}

.order-total {
  width: 200px;
  background-color: white;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 12px 10px;
  border-left: 1px solid #e5e5e5;
}

.product-info {
  display: flex;
  gap: 12px;
  align-items: center;
  min-width: 200px;
}

.product-image {
  width: 60px;
  height: 60px;
  border: 1px solid #c1c1c1;
  border-radius: 3px;
  overflow: hidden;
  flex-shrink: 0;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
}

.product-title {
  font-size: 14px;
  color: #333;
  line-height: 18px;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-meta {
  display: flex;
  align-items: center;
  gap: 4px;
}

.icon-tag-wrapper {
  width: 16px;
  height: 16px;
}

/* Columns */
.col-flex-1 { flex: 1; }
.col-160 { width: 160px; padding: 0 10px; display: flex; align-items: center; flex-shrink: 0; }
.col-200 { width: 200px; padding: 0 10px; display: flex; align-items: center; flex-shrink: 0; }
.col-210 { width: 210px; padding: 0 10px; display: flex; align-items: center; flex-shrink: 0; }
.center { justify-content: center; }
.end { justify-content: flex-end; }

/* Bottom Bar */
.bottom-bar {
  background-color: white;
  border: 1px solid #e5e5e5;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bottom-left, .bottom-right {
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-more {
  height: 32px;
  padding: 0 12px;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: white;
  cursor: pointer;
}

.btn-more:hover {
  background-color: #f9f9f9;
}

.btn-pay {
  height: 32px;
  padding: 0 12px;
  background-color: #f60;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.btn-pay:hover {
  background-color: #e65c00;
}

/* Text Utilities */
.text-primary { font-size: 14px; color: #333; line-height: 18px; }
.text-secondary { font-size: 14px; color: #666; line-height: 18px; }
.text-warning { font-size: 14px; color: #f60; line-height: 18px; }
.text-link { font-size: 14px; color: #2861ce; line-height: 18px; }
.text-white { font-size: 14px; color: white; line-height: 18px; }
.text-bold { font-size: 14px; color: #333; line-height: 18px; font-weight: bold; }
.italic { font-style: italic; }
.flex-align { display: flex; align-items: center; gap: 2px; }

/* Icons */
.icon-protection { width: 18px; height: 18px; }
.icon-arrow { width: 14px; height: 14px; }
.icon-help { width: 14px; height: 14px; }
.icon-more { width: 16px; height: 16px; }
</style>
