<template>
  <div class="product-introduction">
    <h1>Our Products</h1>
    <div class="product-list">
      <div 
        class="product-item"
        v-for="product in paginatedProducts"
        :key="product.id"
        @mouseover="showDetails(product)"
        @mouseleave="hideDetails"
      >
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
      </div>
    </div>
    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductIntroduction",
  data() {
    return {
      currentProduct: null,
      products: [
        {
          id: 1,
          name: "Product A",
          description: "This is a detailed description of Product A.",
          showDetails: false
        },
        {
          id: 2,
          name: "Product B",
          description: "This is a detailed description of Product B.",
        },
        {
          id: 3,
          name: "Product C",
          description: "This is a detailed description of Product C.",
        },
        {
          id: 4,
          name: "Product D",
          description: "This is a detailed description of Product D.",
        },
        {
          id: 5,
          name: "Product E",
          description: "This is a detailed description of Product E.",
        },
        {
          id: 6,
          name: "Product F",
          description: "This is a detailed description of Product F.",
        },
        {
          id: 7,
          name: "Product G",
          description: "This is a detailed description of Product G.",
        },
        {
          id: 8,
          name: "Product H",
          description: "This is a detailed description of Product H.",
        },
        {
          id: 9,
          name: "Product I",
          description: "This is a detailed description of Product I.",
        },
        {
          id: 10,
          name: "Product J",
          description: "This is a detailed description of Product J.",
        },
        {
          id: 11,
          name: "Product K",
          description: "This is a detailed description of Product K.",
        },
        {
          id: 12,
          name: "Product L",
          description: "This is a detailed description of Product L.",
        },
        {
          id: 13,
          name: "Product M",
          description: "This is a detailed description of Product M.",
        },
        {
          id: 14,
          name: "Product N",
          description: "This is a detailed description of Product N.",
        },
        {
          id: 15,
          name: "Product O",
          description: "This is a detailed description of Product O.",
        },
        {
          id: 16,
          name: "Product P",
          description: "This is a detailed description of Product P.",
        },
        {
          id: 17,
          name: "Product Q",
          description: "This is a detailed description of Product Q.",
        },
        {
          id: 18,
          name: "Product R",
          description: "This is a detailed description of Product R.",
        },
        {
          id: 19,
          name: "Product S",
          description: "This is a detailed description of Product S.",
        },
        {
          id: 20,
          name: "Product T",
          description: "This is a detailed description of Product T.",
        },
      ],
      currentPage: 1,
      productsPerPage: 9, // Adjust this number to change how many products are shown per page
    };
  },
  computed: {
    // Calculate the total number of pages
    totalPages() {
      return Math.ceil(this.products.length / this.productsPerPage);
    },
    // Get the products for the current page
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.productsPerPage;
      const end = start + this.productsPerPage;
      return this.products.slice(start, end);
    }
  },
  methods: {
    showDetails(product) {
      this.currentProduct = product;
      product.showDetails = true;
    },
    hideDetails() {
      if (this.currentProduct) {
        this.currentProduct.showDetails = false;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  }
};
</script>

<style scoped>
.product-introduction {
  max-width: 70%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.product-introduction h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product-item {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px;
  padding: 20px;
  width: calc(25% - 20px); /* Adjusted to fit 3 products per row */
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.product-item h2 {
  margin-top: 0;
  color: #333;
}

.product-item p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
  padding-top: 10px;
}

.product-item.show-details p {
  max-height: 100px; /* Enough to show the description */
  opacity: 1;
}

.product-item:hover,
.product-item.show-details {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
}


.pagination {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
  border-top: 1px solid #ddd;
  padding: 10px 0;
}

.pagination button {
  margin: 0 10px;
}

.pagination button:disabled {
  opacity: 0.5;
}

@media (max-width: 768px) {
  .product-item {
    width: calc(50% - 20px); /* Adjusted for smaller screens */
  }
}

@media (max-width: 480px) {
  .product-item {
    width: 100%; /* Full width on very small screens */
  }
}
</style>