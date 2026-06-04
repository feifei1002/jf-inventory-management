export type Currency = "VND" | "TWD" | "USD";

export type Supplier = {
  supplierId: string;
  name: string;
  type: string;
  contactPerson?: string;
  telephone: string;
  fax?: string;
  mobileNo?: string;
  address?: string;
  email?: string;
  paymentTerm?: string;
  tax?: string;
  MST?: string;
};

export type Material = {
  materialId: string;
  name: string;
  specification: string;
  unit: string;
  price: number;
  currency: Currency;
  lastPurchaseDate: string;
  supplierId: string;
  supplierName: string;
};

export type PRItem = {
  id?: number;
  requisitionId: string;
  materialId: string;
  materialName: string;
  materialSpecification: string;
  quantity: number;
  weight?: number;
  requiredDate: string;
  purpose?: string;
  deliveryPlace: string;
};

export type PurchaseRequisition = {
  requisitionId: string;
  requisitionDate: string;
  department: string;
  requester: string;
  soNo?: string;
  note?: string;
  purchaseRequisitionItems?: PRItem[];
};

export type POItem = {
  materialId: string;
  materialName: string;
  materialSpecification: string;
  quantity: number;
  materialUnit: string;
  currency: Currency;
  materialPrice: number;
  totalPrice: number;
  VAT: number;
  deliveryDate: string;
  requisitionId: string;
  deliveryPlace: string;
};

export type PurchaseOrder = {
  purchaseId: string;
  purchaseDate: string;
  supplierId: string;
  supplierName: string;
  contactPerson: string;
  paymentTerm: string;
  supplierAddress: string;
  subtotal: number;
  vat: number;
  finalTotal: number;
  currency: Currency;
  supplier?: Supplier;
  purchaseOrderItems?: POItem[];
};

export type WarehousingItem = {
  id?: number;
  formId: string;
  materialId: string;
  materialName: string;
  materialSpecification: string;
  quantity: number;
  materialUnit: string;
  deliveryDate: string;
  requisitionId: string;
  deliveryPlace: string;
};

export type WarehousingForm = {
  formId: string;
  date: string;
  supplierId: string;
  supplierName: string;
  contactPerson?: string;
  supplierAddress: string;
  supplierTelephone: string;
  supplierFax?: string;
  purchaseId: string;
  paymentTerm?: string;
  invoiceNo: string;
  deliveryNote?: string;
  supplier?: Supplier;
  purchase?: PurchaseOrder;
  materialWarehousingItems?: WarehousingItem[];
};

export type InventoryItem = {
  inventoryId: string;
  materialId: string;
  materialName: string;
  materialSpecification: string;
  unit: string;
  currentStock: number;
  lastUpdated: string;
  supplierId?: string;
  supplierName?: string;
  material?: Material;
};