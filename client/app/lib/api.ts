const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export const api = {
  // Dashboard
  getDashboardMetrics: async () => {
  const res = await fetch(`${API_URL}/api/dashboard`);
  if (!res.ok) throw new Error("Failed to fetch dashboard metrics");
  return res.json();
  },

  // Suppliers
  getSuppliers: async () => {
    const res = await fetch(`${API_URL}/api/suppliers`);
    if (!res.ok) throw new Error("Failed to fetch suppliers");
    return res.json();
  },

  getSupplier: async (supplierId: string) => {
    const res = await fetch(`${API_URL}/api/suppliers/${supplierId}`);
    if (!res.ok) throw new Error("Failed to fetch supplier");
    return res.json();
  },

  createSupplier: async (data: any) => {
  const res = await fetch(`${API_URL}/api/suppliers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to create supplier");
  }
  return res.json();
},

  // Update supplier
  updateSupplier: async (supplierId: string, data: any) => {
    const res = await fetch(`${API_URL}/api/suppliers/${supplierId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to update supplier");
    }
    return res.json();
  },

  // Delete supplier
  deleteSupplier: async (supplierId: string) => {
    const res = await fetch(`${API_URL}/api/suppliers/${supplierId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to delete supplier");
    }
    return res.json();
  },

  // Products
  getProducts: async () => {
    const res = await fetch(`${API_URL}/api/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  },

  getProduct: async (productId: string) => {
    const res = await fetch(`${API_URL}/api/products/${productId}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  },

  createProduct: async (data: any) => {
    const res = await fetch(`${API_URL}/api/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to create product");
    }
    return res.json();
  },

  // Update product
  updateProduct: async (productId: string, data: any) => {
    const res = await fetch(`${API_URL}/api/products/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to update product");
    }
    return res.json();
  },

  // Delete product
  deleteProduct: async (productId: string) => {
    const res = await fetch(`${API_URL}/api/products/${productId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to delete product");
    }
    return res.json();
  },

  // Purchase Requisitions
  getPurchaseRequisitions: async () => {
    const res = await fetch(`${API_URL}/api/purchase-requisitions`);
    if (!res.ok) throw new Error("Failed to fetch requisitions");
    return res.json();
  },

  getPurchaseRequisition: async (requisitionId: string) => {
    const res = await fetch(`${API_URL}/api/purchase-requisitions/${requisitionId}`);
    if (!res.ok) throw new Error("Failed to fetch requisition");
    return res.json();
  },

  createPurchaseRequisition: async (data: any) => {
    const res = await fetch(`${API_URL}/api/purchase-requisitions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to create requisition");
    }
    return res.json();
  },

  // Update purchase requisition
  updatePurchaseRequisition: async (requisitionId: string, data: any) => {
    const res = await fetch(`${API_URL}/api/purchase-requisitions/${requisitionId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to update requisition");
    }
    return res.json();
  },

  // Delete purchase requisition
  deletePurchaseRequisition: async (requisitionId: string) => {
    const res = await fetch(`${API_URL}/api/purchase-requisitions/${requisitionId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to delete requisition");
    }
    return res.json();
  },

  // Purchase Orders
  getPurchaseOrders: async () => {
    const res = await fetch(`${API_URL}/api/purchase-orders`);
    if (!res.ok) throw new Error("Failed to fetch purchase orders");
    return res.json();
  },

  getPurchaseOrder: async (purchaseId: string) => {
    const res = await fetch(`${API_URL}/api/purchase-orders/${purchaseId}`);
    if (!res.ok) throw new Error("Failed to fetch purchase order");
    return res.json();
  },

  createPurchaseOrder: async (data: any) => {
    const res = await fetch(`${API_URL}/api/purchase-orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to create purchase order");
    }
    return res.json();
  },

  // Update purchase order
  updatePurchaseOrder: async (purchaseId: string, data: any) => {
    const res = await fetch(`${API_URL}/api/purchase-orders/${purchaseId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to update purchase order");
    }
    return res.json();
  },

  // Delete purchase order
  deletePurchaseOrder: async (purchaseId: string) => {
    const res = await fetch(`${API_URL}/api/purchase-orders/${purchaseId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to delete purchase order");
    }
    return res.json();
  },

  // Warehousing
  getWarehousingForms: async () => {
    const res = await fetch(`${API_URL}/api/warehousing`);
    if (!res.ok) throw new Error("Failed to fetch warehousing forms");
    return res.json();
  },

  getWarehousingForm: async (formId: string) => {
    const res = await fetch(`${API_URL}/api/warehousing/${formId}`);
    if (!res.ok) throw new Error("Failed to fetch warehousing form");
    return res.json();
  },

  createWarehousingForm: async (data: any) => {
    const res = await fetch(`${API_URL}/api/warehousing`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to create warehousing form");
    }
    return res.json();
  },

  updateWarehousingForm: async (formId: string, data: any) => {
    const res = await fetch(`${API_URL}/api/warehousing/${formId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to update warehousing form");
    }
    return res.json();
  },

  deleteWarehousingForm: async (formId: string) => {
    const res = await fetch(`${API_URL}/api/warehousing/${formId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to delete warehousing form");
    }
    return res.json();
  },

// Inventory
getInventory: async () => {
  const res = await fetch(`${API_URL}/api/inventory`);
  if (!res.ok) throw new Error("Failed to fetch inventory");
  return res.json();
},

getInventoryItem: async (productId: string) => {
  const res = await fetch(`${API_URL}/api/inventory/${productId}`);
  if (!res.ok) throw new Error("Failed to fetch inventory item");
  return res.json();
},

updateInventory: async (productId: string, data: any) => {
  const res = await fetch(`${API_URL}/api/inventory/${productId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to update inventory");
  }
  return res.json();
},

  // Export
  getPRExportUrl: (requisitionId: string) =>
  `${API_URL}/api/export/pr/${requisitionId}`,
  getExportUrl: (purchaseId: string) =>
    `${API_URL}/api/export/po/${purchaseId}`,
  getWarehousingExportUrl: (formId: string) =>
    `${API_URL}/api/export/warehousing/${formId}`,
};