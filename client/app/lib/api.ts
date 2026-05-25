const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export const api = {
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

  // Export
  getExportUrl: (purchaseId: string) =>
    `${API_URL}/api/export/po/${purchaseId}`,
};