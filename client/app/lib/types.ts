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

export type POItem = {
  productId: string;
  productName: string;
  productSpecification: string;
  quantity: number;
  productUnit: string;
  productPrice: number;
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
  supplier?: Supplier;
  purchaseOrderItems?: POItem[];
};