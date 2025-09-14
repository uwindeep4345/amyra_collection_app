// Application Data
const APP_DATA = {
  app_info: {
    name: "amyra Collections",
    short_name: "amyra",
    description: "Modern fashion e-commerce PWA for clothing and home textiles",
    theme_color: "#20808D",
    background_color: "#ffffff",
    display: "standalone"
  },
  categories: {
    men: {
      name: "Men",
      icon: "👨",
      subcategories: ["Jeans", "Pants", "Shirts", "Kurtas", "Formal"]
    },
    women: {
      name: "Women",
      icon: "👩",
      subcategories: ["Sarees", "Kurtis", "Tops", "Jeans", "Inners"]
    },
    kids: {
      name: "Kids", 
      icon: "👶",
      subcategories: ["Boys", "Girls"]
    },
    general: {
      name: "General",
      icon: "🏠",
      subcategories: ["Curtains", "Bedsheets", "Home Textiles"]
    }
  },
  sample_products: [
    {
      id: 1,
      name: "Premium Denim Jeans",
      category: "men",
      subcategory: "Jeans",
      price: 2799,
      originalPrice: 3299,
      discount: 15,
      description: "High-quality denim jeans with perfect fit and premium finishing. Made from 100% cotton denim with reinforced stitching.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMTEzRDU0Ii8+CjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzIwODA4RCIgcng9IjEwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iNDUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UHJlbWl1bSBKZWFuczwvdGV4dD4KPHN2Zz4K",
      rating: 4.5,
      reviews: 128,
      inStock: true,
      stock: 25
    },
    {
      id: 2,
      name: "Elegant Designer Kurti",
      category: "women",
      subcategory: "Kurtis",
      price: 2199,
      originalPrice: 2749,
      discount: 20,
      description: "Beautiful hand-embroidered designer kurti perfect for special occasions. Made from premium cotton with intricate thread work.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRkY2RDcwIi8+CjxyZWN0IHg9IjgwIiB5PSI4MCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIzNDAiIGZpbGw9IiNGRjg5OEEiIHJ4PSIxNSIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjMwIiBmaWxsPSIjRkZBQkFEIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iNDUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RGVzaWduZXIgS3VydGk8L3RleHQ+Cjwvc3ZnPgo=",
      rating: 4.7,
      reviews: 89,
      inStock: true,
      stock: 15
    },
    {
      id: 3,
      name: "Cotton Formal Shirt",
      category: "men",
      subcategory: "Formal",
      price: 1499,
      originalPrice: 1665,
      discount: 10,
      description: "Premium cotton formal shirt perfect for office wear. Wrinkle-free fabric with modern cut and comfortable fit.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI4MCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzIwODA4RCIgc3Ryb2tlLXdpZHRoPSIyIiByeD0iOCIvPgo8cmVjdCB4PSIxODAiIHk9IjEwMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzIwODA4RCIvPgo8dGV4dCB4PSIyMDAiIHk9IjQ1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Rm9ybWFsIFNoaXJ0PC90ZXh0Pgo8L3N2Zz4K",
      rating: 4.2,
      reviews: 156,
      inStock: true,
      stock: 30
    },
    {
      id: 4,
      name: "Traditional Silk Saree",
      category: "women",
      subcategory: "Sarees",
      price: 5999,
      originalPrice: 7999,
      discount: 25,
      description: "Luxurious silk saree with intricate gold border work. Perfect for weddings and special occasions with traditional elegance.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRkZEQzAwIi8+CjxwYXRoIGQ9Ik01MCAyMDBRMjAwIDEwMCAzNTAgMjAwUTIwMCAzMDAgNTAgNDAwIiBzdHJva2U9IiNGRkI3MDAiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMTAwIDEwMFEyNTAgMTUwIDMwMCAxMDBRMjUwIDI1MCAzMDAgNDAwIiBzdHJva2U9IiNGRkI3MDAiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIvPgo8dGV4dCB4PSIyMDAiIHk9IjQ1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzg4NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U2lsayBTYXJlZTwvdGV4dD4KPHN2Zz4K",
      rating: 4.9,
      reviews: 67,
      inStock: true,
      stock: 8
    },
    {
      id: 5,
      name: "Kids Cartoon T-Shirt",
      category: "kids",
      subcategory: "Boys",
      price: 899,
      originalPrice: 949,
      discount: 5,
      description: "Fun cartoon printed t-shirt for active kids. Soft cotton fabric with colorful designs that kids love.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjNDBCQ0ZGIi8+CjxyZWN0IHg9IjEyMCIgeT0iMTUwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzYwRDVGRiIgcng9IjEwIi8+CjxjaXJjbGUgY3g9IjE3MCIgY3k9IjIwMCIgcj0iMTUiIGZpbGw9IiNGRkQ3MDAiLz4KPGNpcmNsZSBjeD0iMjMwIiBjeT0iMjAwIiByPSIxNSIgZmlsbD0iI0ZGRDcwMCIvPgo8cGF0aCBkPSJNMTYwIDI1MFEyMDAgMjcwIDI0MCAyNTAiIHN0cm9rZT0iI0ZGRDcwMCIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iNDUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+S2lkcyBULVNoaXJ0PC90ZXh0Pgo8L3N2Zz4K",
      rating: 4.4,
      reviews: 92,
      inStock: true,
      stock: 20
    },
    {
      id: 6,
      name: "Luxury Bedsheet Set",
      category: "general",
      subcategory: "Bedsheets",
      price: 1899,
      originalPrice: 2713,
      discount: 30,
      description: "Premium cotton bedsheet set with matching pillowcovers. Soft, comfortable, and durable with beautiful patterns.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRTZGMkZGIi8+CjxyZWN0IHg9IjUwIiB5PSIxNTAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMjA4MDhEIiByeD0iMTUiLz4KPHJlY3QgeD0iNzAiIHk9IjEyMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzJCOUM2IiByeD0iNSIvPgo8cmVjdCB4PSIyNTAiIHk9IjEyMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzJCOUM2IiByeD0iNSIvPgo8dGV4dCB4PSIyMDAiIHk9IjQ1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QmVkc2hlZXQgU2V0PC90ZXh0Pgo8L3N2Zz4K",
      rating: 4.6,
      reviews: 73,
      inStock: true,
      stock: 12
    }
  ],
  admin_config: {
    main_admin_email: "admin@amyracollections.com",
    permissions: {
      main_admin: ["all_access", "manage_admins", "manage_products", "view_analytics", "manage_orders"],
      sub_admin: ["manage_products", "view_analytics", "manage_orders"]
    }
  }
};

// Application State
let currentUser = null;
let currentView = 'homeView';
let cart = [];
let products = [...APP_DATA.sample_products];
let orders = [];
let deferredPrompt = null;

// Service Worker Registration (Inline Service Worker)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swCode = `
      const CACHE_NAME = 'amyra-collections-v1';
      const urlsToCache = [
        '/',
        '/index.html'
      ];

      self.addEventListener('install', (event) => {
        event.waitUntil(
          caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
        );
        self.skipWaiting();
      });

      self.addEventListener('fetch', (event) => {
        event.respondWith(
          caches.match(event.request)
            .then((response) => {
              if (response) {
                return response;
              }
              return fetch(event.request);
            })
            .catch(() => {
              if (event.request.mode === 'navigate') {
                return caches.match('/index.html');
              }
            })
        );
      });

      self.addEventListener('activate', (event) => {
        event.waitUntil(
          caches.keys().then((cacheNames) => {
            return Promise.all(
              cacheNames.map((cacheName) => {
                if (cacheName !== CACHE_NAME) {
                  return caches.delete(cacheName);
                }
              })
            );
          })
        );
        self.clients.claim();
      });
    `;
    
    const blob = new Blob([swCode], { type: 'application/javascript' });
    const swUrl = URL.createObjectURL(blob);
    
    navigator.serviceWorker.register(swUrl)
      .then((registration) => {
        console.log('ServiceWorker registered successfully');
      })
      .catch((error) => {
        console.log('ServiceWorker registration failed:', error);
      });
  });
}

// PWA Install Prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallPrompt();
});

function showInstallPrompt() {
  const installPrompt = document.getElementById('installPrompt');
  if (installPrompt) {
    installPrompt.classList.remove('hidden');
    
    const installBtn = document.getElementById('installBtn');
    const dismissBtn = document.getElementById('dismissBtn');
    
    if (installBtn) {
      installBtn.addEventListener('click', () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              showToast('App installed successfully!');
            }
            deferredPrompt = null;
            installPrompt.classList.add('hidden');
          });
        }
      });
    }
    
    if (dismissBtn) {
      dismissBtn.addEventListener('click', () => {
        installPrompt.classList.add('hidden');
      });
    }
  }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromMemory();
  loadUserFromMemory();
  loadOrdersFromMemory();
  initializeEventListeners();
  renderFeaturedProducts();
  renderCategories();
  renderCategoryProducts();
  updateCartBadges();
  updateAuthUI();
});

// Event Listeners
function initializeEventListeners() {
  // Bottom Navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const view = e.currentTarget.getAttribute('data-view');
      if (view) {
        showView(view);
      }
    });
  });

  // Category Tabs
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const category = e.currentTarget.getAttribute('data-category');
      filterByCategory(category);
      
      document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('category-tab--active'));
      e.currentTarget.classList.add('category-tab--active');
    });
  });

  // Search
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const searchOverlay = document.getElementById('searchOverlay');
      if (searchOverlay) {
        searchOverlay.classList.remove('hidden');
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
          searchInput.focus();
        }
      }
    });
  }

  const searchClose = document.getElementById('searchClose');
  if (searchClose) {
    searchClose.addEventListener('click', (e) => {
      e.preventDefault();
      const searchOverlay = document.getElementById('searchOverlay');
      const searchInput = document.getElementById('searchInput');
      const searchResults = document.getElementById('searchResults');
      
      if (searchOverlay) searchOverlay.classList.add('hidden');
      if (searchInput) searchInput.value = '';
      if (searchResults) searchResults.innerHTML = '';
    });
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      if (query.length > 2) {
        const results = products.filter(product => 
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        );
        renderSearchResults(results);
      } else {
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
          searchResults.innerHTML = '';
        }
      }
    });
  }

  // Cart
  const cartBtn = document.getElementById('cartBtn');
  if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showView('cartView');
    });
  }

  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
      }
      if (!currentUser) {
        showToast('Please sign in to checkout');
        showView('profileView');
        return;
      }
      showView('checkoutView');
      renderCheckoutItems();
    });
  }

  // Checkout
  const placeOrderBtn = document.getElementById('placeOrderBtn');
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      placeOrder();
    });
  }

  // Profile
  const signOutBtn = document.getElementById('signOutBtn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      signOut();
    });
  }

  const ordersBtn = document.getElementById('ordersBtn');
  if (ordersBtn) {
    ordersBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Orders feature coming soon!');
    });
  }

  const adminPanelBtn = document.getElementById('adminPanelBtn');
  if (adminPanelBtn) {
    adminPanelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showView('adminView');
      renderAdminProducts();
      updateAnalytics();
    });
  }

  // Admin
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const tabName = e.currentTarget.getAttribute('data-tab');
      showAdminTab(tabName);
    });
  });

  const addProductBtn = document.getElementById('addProductBtn');
  if (addProductBtn) {
    addProductBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Add product feature coming soon!');
    });
  }

  // Menu Button
  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Menu feature coming soon!');
    });
  }
}

// View Management
function showView(viewId) {
  console.log('Switching to view:', viewId);
  
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('view--active');
  });
  
  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.add('view--active');
  }
  
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('nav-item--active');
  });
  
  const navItem = document.querySelector(`[data-view="${viewId}"]`);
  if (navItem) {
    navItem.classList.add('nav-item--active');
  }
  
  currentView = viewId;
  
  if (viewId === 'cartView') {
    renderCartItems();
  }
  
  window.scrollTo(0, 0);
}

// Product Rendering
function renderFeaturedProducts() {
  const featuredProducts = products.slice(0, 4);
  const container = document.getElementById('featuredProducts');
  if (container) {
    container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
  }
}

function renderCategories() {
  const container = document.getElementById('categoryGrid');
  if (container) {
    const categoryEntries = Object.entries(APP_DATA.categories);
    
    container.innerHTML = categoryEntries.map(([key, category]) => `
      <div class="category-card" onclick="handleCategoryClick('${key}')">
        <div class="category-card__icon">${category.icon}</div>
        <h4 class="category-card__name">${category.name}</h4>
      </div>
    `).join('');
  }
}

function handleCategoryClick(categoryKey) {
  filterByCategory(categoryKey);
  showView('categoriesView');
  
  document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('category-tab--active'));
  const targetTab = document.querySelector(`[data-category="${categoryKey}"]`);
  if (targetTab) {
    targetTab.classList.add('category-tab--active');
  }
}

function renderCategoryProducts() {
  const container = document.getElementById('categoryProducts');
  if (container) {
    container.innerHTML = products.map(product => createProductCard(product)).join('');
  }
}

function renderSearchResults(results) {
  const container = document.getElementById('searchResults');
  if (!container) return;
  
  if (results.length === 0) {
    container.innerHTML = '<p>No products found.</p>';
    return;
  }
  container.innerHTML = results.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
  return `
    <div class="product-card" onclick="showProductDetail(${product.id})">
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.discount > 0 ? `<div class="product-card__discount">${product.discount}% OFF</div>` : ''}
      </div>
      <div class="product-card__content">
        <h4 class="product-card__name">${product.name}</h4>
        <div class="product-card__price">
          <span class="product-card__price-current">₹${product.price.toLocaleString()}</span>
          ${product.originalPrice ? `<span class="product-card__price-original">₹${product.originalPrice.toLocaleString()}</span>` : ''}
        </div>
        <div class="product-card__rating">
          <span>⭐ ${product.rating}</span>
          <span>(${product.reviews} reviews)</span>
        </div>
        <div class="product-card__actions">
          <button class="btn btn--primary product-card__add-btn" onclick="handleAddToCartClick(event, ${product.id})">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

function handleAddToCartClick(event, productId) {
  event.preventDefault();
  event.stopPropagation();
  addToCart(productId);
}

function filterByCategory(category) {
  const container = document.getElementById('categoryProducts');
  if (!container) return;
  
  let filteredProducts = products;
  
  if (category !== 'all') {
    filteredProducts = products.filter(product => product.category === category);
  }
  
  container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

// Product Detail
function showProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const container = document.getElementById('productDetail');
  if (!container) return;
  
  container.innerHTML = `
    <div class="product-detail__image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-detail__content">
      <h2 class="product-detail__name">${product.name}</h2>
      <div class="product-detail__price">
        <span class="product-detail__price-current">₹${product.price.toLocaleString()}</span>
        ${product.originalPrice ? `<span class="product-detail__price-original">₹${product.originalPrice.toLocaleString()}</span>` : ''}
        ${product.discount > 0 ? `<span class="product-detail__discount">${product.discount}% OFF</span>` : ''}
      </div>
      <p class="product-detail__description">${product.description}</p>
      <div class="product-detail__rating">
        <span>⭐ ${product.rating} (${product.reviews} reviews)</span>
      </div>
      <div class="product-detail__stock">
        <span class="${product.inStock ? 'status--success' : 'status--error'} status">
          ${product.inStock ? `✅ In Stock (${product.stock} items)` : '❌ Out of Stock'}
        </span>
      </div>
      <div class="product-detail__actions">
        <button class="btn btn--primary btn--lg" onclick="addToCart(${product.id})">Add to Cart</button>
        <button class="btn btn--outline btn--lg" onclick="showView('categoriesView')">Continue Shopping</button>
      </div>
    </div>
  `;
  
  showView('productView');
}

// Cart Management
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || !product.inStock) {
    showToast('Product not available!');
    return;
  }
  
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    if (existingItem.quantity < product.stock) {
      existingItem.quantity++;
      showToast(`Added another ${product.name} to cart!`);
    } else {
      showToast('Cannot add more items - stock limit reached!');
      return;
    }
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      stock: product.stock
    });
    showToast(`${product.name} added to cart!`);
  }
  
  updateCartBadges();
  saveCartToMemory();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartBadges();
  saveCartToMemory();
  renderCartItems();
  showToast('Item removed from cart!');
}

function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;
  
  const newQuantity = item.quantity + change;
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  if (newQuantity > item.stock) {
    showToast('Cannot add more items - stock limit reached!');
    return;
  }
  
  item.quantity = newQuantity;
  updateCartBadges();
  saveCartToMemory();
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const summaryContainer = document.getElementById('cartSummary');
  
  if (!container || !summaryContainer) return;
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty__icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add some products to get started!</p>
        <button class="btn btn--primary" onclick="showView('categoriesView')">Start Shopping</button>
      </div>
    `;
    summaryContainer.style.display = 'none';
    return;
  }
  
  summaryContainer.style.display = 'block';
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item__image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item__content">
        <h4 class="cart-item__name">${item.name}</h4>
        <div class="cart-item__price">₹${item.price.toLocaleString()}</div>
        <div class="cart-item__controls">
          <div class="quantity-control">
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
            <span class="quantity-display">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
          <button class="cart-item__remove" onclick="removeFromCart(${item.id})">🗑️</button>
        </div>
      </div>
    </div>
  `).join('');
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalElement = document.getElementById('cartTotal');
  if (totalElement) {
    totalElement.textContent = total.toLocaleString();
  }
}

function updateCartBadges() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartBadge = document.getElementById('cartBadge');
  const navCartBadge = document.getElementById('navCartBadge');
  
  if (cartBadge) {
    cartBadge.textContent = count;
    cartBadge.style.display = count > 0 ? 'block' : 'none';
  }
  
  if (navCartBadge) {
    navCartBadge.textContent = count;
    navCartBadge.style.display = count > 0 ? 'block' : 'none';
  }
}

// Checkout
function renderCheckoutItems() {
  const container = document.getElementById('checkoutItems');
  if (!container) return;
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  container.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <span>${item.name} × ${item.quantity}</span>
      <span>₹${(item.price * item.quantity).toLocaleString()}</span>
    </div>
  `).join('');
  
  const subtotalElement = document.getElementById('checkoutSubtotal');
  const totalElement = document.getElementById('checkoutTotal');
  
  if (subtotalElement) subtotalElement.textContent = subtotal.toLocaleString();
  if (totalElement) totalElement.textContent = subtotal.toLocaleString();
}

function placeOrder() {
  const name = document.getElementById('deliveryName')?.value.trim();
  const phone = document.getElementById('deliveryPhone')?.value.trim();
  const address = document.getElementById('deliveryAddress')?.value.trim();
  const pincode = document.getElementById('deliveryPincode')?.value.trim();
  const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value;
  
  if (!name || !phone || !address || !pincode) {
    showToast('Please fill all delivery details!');
    return;
  }
  
  if (!paymentMethod) {
    showToast('Please select a payment method!');
    return;
  }
  
  const order = {
    id: Date.now(),
    userId: currentUser ? currentUser.email : 'guest',
    items: [...cart],
    deliveryDetails: { name, phone, address, pincode },
    paymentMethod: paymentMethod,
    total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    status: 'placed',
    date: new Date().toISOString()
  };
  
  orders.push(order);
  saveOrdersToMemory();
  
  cart = [];
  saveCartToMemory();
  updateCartBadges();
  
  showToast('Order placed successfully!');
  showView('homeView');
  
  // Clear form
  document.getElementById('deliveryName').value = '';
  document.getElementById('deliveryPhone').value = '';
  document.getElementById('deliveryAddress').value = '';
  document.getElementById('deliveryPincode').value = '';
}

// Authentication
function handleCredentialResponse(response) {
  try {
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    currentUser = {
      id: payload.sub,
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
      isAdmin: payload.email === APP_DATA.admin_config.main_admin_email
    };
    
    saveUserToMemory();
    updateAuthUI();
    showToast(`Welcome, ${currentUser.name}!`);
  } catch (error) {
    // Fallback for demo
    currentUser = {
      id: '1',
      name: 'Demo User',
      email: 'demo@example.com',
      picture: null,
      isAdmin: false
    };
    saveUserToMemory();
    updateAuthUI();
    showToast('Signed in successfully!');
  }
}

function signOut() {
  currentUser = null;
  saveUserToMemory();
  updateAuthUI();
  showToast('Signed out successfully!');
  showView('homeView');
}

function updateAuthUI() {
  const authSection = document.getElementById('authSection');
  const profileContent = document.getElementById('profileContent');
  const adminPanelBtn = document.getElementById('adminPanelBtn');
  
  if (!authSection || !profileContent) return;
  
  if (currentUser) {
    authSection.classList.add('hidden');
    profileContent.classList.remove('hidden');
    
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    const profileAvatar = document.getElementById('profileAvatar');
    
    if (profileName) profileName.textContent = currentUser.name;
    if (profileEmail) profileEmail.textContent = currentUser.email;
    
    if (profileAvatar) {
      if (currentUser.picture) {
        profileAvatar.innerHTML = `<img src="${currentUser.picture}" alt="Profile" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
      } else {
        profileAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
      }
    }
    
    if (adminPanelBtn) {
      if (currentUser.isAdmin || currentUser.email === APP_DATA.admin_config.main_admin_email) {
        adminPanelBtn.style.display = 'block';
      } else {
        adminPanelBtn.style.display = 'none';
      }
    }
  } else {
    authSection.classList.remove('hidden');
    profileContent.classList.add('hidden');
  }
}

// Admin Panel
function showAdminTab(tabName) {
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.classList.remove('admin-tab--active');
  });
  const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
  if (activeTab) {
    activeTab.classList.add('admin-tab--active');
  }
  
  document.querySelectorAll('.admin-tab-content').forEach(content => {
    content.classList.remove('admin-tab-content--active');
  });
  const activeContent = document.getElementById(`${tabName}Tab`);
  if (activeContent) {
    activeContent.classList.add('admin-tab-content--active');
  }
  
  if (tabName === 'products') {
    renderAdminProducts();
  } else if (tabName === 'orders') {
    renderAdminOrders();
  } else if (tabName === 'analytics') {
    updateAnalytics();
  }
}

function renderAdminProducts() {
  const container = document.getElementById('adminProductList');
  if (!container) return;
  
  container.innerHTML = products.map(product => `
    <div class="admin-product-item">
      <div class="admin-product-item__image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="admin-product-item__content">
        <h4 class="admin-product-item__name">${product.name}</h4>
        <div class="admin-product-item__details">
          ₹${product.price.toLocaleString()} • ${product.category} • Stock: ${product.stock}
        </div>
      </div>
      <div class="admin-product-item__actions">
        <button class="btn btn--outline btn--sm" onclick="editProduct(${product.id})">Edit</button>
        <button class="btn btn--outline btn--sm" onclick="deleteProduct(${product.id})">Delete</button>
      </div>
    </div>
  `).join('');
}

function renderAdminOrders() {
  const container = document.getElementById('adminOrders');
  if (!container) return;
  
  if (orders.length === 0) {
    container.innerHTML = '<p>No orders found.</p>';
    return;
  }
  
  container.innerHTML = orders.map(order => `
    <div class="admin-order-item" style="background: var(--color-surface); border: 1px solid var(--color-card-border); border-radius: var(--radius-lg); padding: var(--space-16); margin-bottom: var(--space-16);">
      <h4>Order #${order.id}</h4>
      <p>Customer: ${order.deliveryDetails.name} (${order.userId})</p>
      <p>Total: ₹${order.total.toLocaleString()}</p>
      <p>Status: ${order.status}</p>
      <p>Date: ${new Date(order.date).toLocaleDateString()}</p>
    </div>
  `).join('');
}

function updateAnalytics() {
  const totalProductsEl = document.getElementById('totalProducts');
  const totalOrdersEl = document.getElementById('totalOrders');
  const totalRevenueEl = document.getElementById('totalRevenue');
  
  if (totalProductsEl) totalProductsEl.textContent = products.length;
  if (totalOrdersEl) totalOrdersEl.textContent = orders.length;
  if (totalRevenueEl) totalRevenueEl.textContent = orders.reduce((sum, order) => sum + order.total, 0).toLocaleString();
}

function editProduct(productId) {
  showToast('Edit product feature coming soon!');
}

function deleteProduct(productId) {
  if (confirm('Are you sure you want to delete this product?')) {
    products = products.filter(p => p.id !== productId);
    renderAdminProducts();
    updateAnalytics();
    renderFeaturedProducts();
    renderCategoryProducts();
    showToast('Product deleted successfully!');
  }
}

// Memory Storage (Alternative to localStorage)
const appStorage = {
  cart: [],
  user: null,
  orders: []
};

function saveCartToMemory() {
  appStorage.cart = [...cart];
}

function loadCartFromMemory() {
  cart = [...appStorage.cart];
}

function saveUserToMemory() {
  appStorage.user = currentUser;
}

function loadUserFromMemory() {
  currentUser = appStorage.user;
}

function saveOrdersToMemory() {
  appStorage.orders = [...orders];
}

function loadOrdersFromMemory() {
  orders = [...appStorage.orders];
}

// Utility Functions
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  
  if (!toast || !toastMessage) return;
  
  toastMessage.textContent = message;
  toast.classList.remove('hidden');
  
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

function showLoading() {
  const spinner = document.getElementById('loadingSpinner');
  if (spinner) {
    spinner.classList.remove('hidden');
  }
}

function hideLoading() {
  const spinner = document.getElementById('loadingSpinner');
  if (spinner) {
    spinner.classList.add('hidden');
  }
}

// Global Functions (exposed for HTML onclick handlers)
window.showView = showView;
window.showProductDetail = showProductDetail;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.filterByCategory = filterByCategory;
window.placeOrder = placeOrder;
window.handleCredentialResponse = handleCredentialResponse;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.handleCategoryClick = handleCategoryClick;
window.handleAddToCartClick = handleAddToCartClick;