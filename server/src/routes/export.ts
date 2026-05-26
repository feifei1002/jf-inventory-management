import { Router, Request, Response } from "express";
import ExcelJS from "exceljs";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/pr/:requisitionId", async (req: Request, res: Response): Promise<void> => {
  try {
    const pr = await prisma.purchasing_Requisitions.findUnique({
      where: { requisitionId: req.params.requisitionId as string },
      include: { purchaseRequisitionItems: { include: { product: true } } },
    });

    if (!pr) {
      res.status(404).json({ message: "Purchase Requisition not found" });
      return;
    }

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("請購單");

    // ── Column widths ──
    sheet.columns = [
      { width: 5 },   // A - STT
      { width: 18 },  // B - Mã Hàng
      { width: 20 },  // C - Tên Hàng
      { width: 22 },  // D - Quy Cách
      { width: 6 },   // E - SL
      { width: 8 },   // F - Trọng Lg
      { width: 6 },   // G - ĐV
      { width: 12 },  // H - Ngày SD
      { width: 20 },  // I - Mục Đích SD
      { width: 15 },  // J - Add Nhận Hàng
    ];

    // ── Helpers ──
    const NAVY = "FF1F3864";
    const WHITE = "FFFFFFFF";
    const LIGHT_BLUE = "FFD9E1F2";

    const border = (cell: ExcelJS.Cell) => {
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    };

    const label = (cell: ExcelJS.Cell, value: string) => {
      cell.value = value;
      cell.font = { bold: true, size: 9 };
      cell.alignment = { vertical: "middle", wrapText: true };
    };

    const val = (cell: ExcelJS.Cell, value: unknown) => {
      cell.value = value as ExcelJS.CellValue;
      cell.font = { size: 9 };
      cell.alignment = { vertical: "middle", wrapText: true };
    };

    // ── Row 1: Company name ──
    sheet.mergeCells("A1:J1");
    const r1 = sheet.getCell("A1");
    r1.value = "CÔNG TY TNHH QUỐC TẾ J&F";
    r1.font = { bold: true, size: 13 };
    r1.alignment = { horizontal: "center", vertical: "middle" };
    sheet.getRow(1).height = 20;

    // ── Row 2: Address ──
    sheet.mergeCells("A2:J2");
    const r2 = sheet.getCell("A2");
    r2.value = "Lô C2-18, KCN Đại Đăng, Phường Bình Dương, TP.HCM, Việt Nam";
    r2.font = { size: 9, italic: true };
    r2.alignment = { horizontal: "center", vertical: "middle" };

    // ── Row 3: Document title ──
    sheet.mergeCells("A3:J3");
    const r3 = sheet.getCell("A3");
    r3.value = "ĐƠN ĐỀ NGHỊ MUA HÀNG / Purchasing Requisition 請購單";
    r3.font = { bold: true, size: 14 };
    r3.alignment = { horizontal: "center", vertical: "middle" };
    sheet.getRow(3).height = 24;

    // ── Row 4: Meta info ──
    sheet.mergeCells("A4:B4");
    label(sheet.getCell("A4"), "Department:\n管理部");
    sheet.mergeCells("C4:D4");
    val(sheet.getCell("C4"), pr.department);

    sheet.mergeCells("E4:F4");
    label(sheet.getCell("E4"), "PR No:\n請購單");
    sheet.mergeCells("G4:H4");
    val(sheet.getCell("G4"), pr.requisitionId);
    sheet.getCell("G4").font = { bold: true, size: 9 };

    label(sheet.getCell("I4"), "Date:\n日期");
    val(sheet.getCell("J4"), new Date(pr.requisitionDate).toLocaleDateString("vi-VN"));

    // ── Row 5: Requester / SO ──
    sheet.mergeCells("A5:B5");
    label(sheet.getCell("A5"), "Requester:\n請購人");
    sheet.mergeCells("C5:D5");
    val(sheet.getCell("C5"), pr.requester);

    sheet.mergeCells("E5:F5");
    label(sheet.getCell("E5"), "SO No:\n訂單");
    sheet.mergeCells("G5:H5");
    val(sheet.getCell("G5"), pr.soNo ?? "");

    sheet.mergeCells("I5:J5");
    val(sheet.getCell("I5"), pr.note ?? "");

    // Apply borders to meta rows
    for (let r = 4; r <= 5; r++) {
      for (let c = 1; c <= 10; c++) {
        border(sheet.getRow(r).getCell(c));
      }
    }

    sheet.getRow(4).height = 28;
    sheet.getRow(5).height = 24;

    // ── Row 6: Table header ──
    const HEADERS = [
      "STT",
      "Mã Hàng\n料號",
      "Tên Hàng\n品名",
      "Quy Cách\n規格",
      "SL\n數量",
      "Trọng Lg\n重量",
      "ĐV\n單位",
      "Ngày SD\n需求日",
      "Mục Đích SD\n使用說明",
      "Add Nhận Hàng\n交貨地點",
    ];

    const headerRow = sheet.getRow(6);
    headerRow.height = 32;
    HEADERS.forEach((h, i) => {
      const cell = headerRow.getCell(i + 1);
      cell.value = h;
      cell.font = { bold: true, color: { argb: WHITE }, size: 9 };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: NAVY } };
      cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
      border(cell);
    });

    // ── Rows 7+: Line items ──
    let rowIdx = 7;
    for (const [i, item] of pr.purchaseRequisitionItems.entries()) {
      const row = sheet.getRow(rowIdx);
      row.height = 20;

      const bg = i % 2 === 1
        ? { type: "pattern" as const, pattern: "solid" as const, fgColor: { argb: LIGHT_BLUE } }
        : undefined;

      const setCell = (
        col: number,
        value: unknown,
        align: ExcelJS.Alignment["horizontal"] = "center"
      ) => {
        const cell = row.getCell(col);
        cell.value = value as ExcelJS.CellValue;
        cell.font = { size: 9 };
        cell.alignment = { horizontal: align, vertical: "middle", wrapText: true };
        if (bg) cell.fill = bg;
        border(cell);
      };

      setCell(1, i + 1);
      setCell(2, item.productId, "left");
      setCell(3, item.productName, "left");
      setCell(4, item.productSpecification, "left");
      setCell(5, item.quantity);
      setCell(6, item.weight ?? "");
      setCell(7, "");
      setCell(8, new Date(item.requiredDate).toLocaleDateString("vi-VN"));
      setCell(9, item.purpose ?? "", "left");
      setCell(10, item.deliveryPlace, "left");

      rowIdx++;
    }

    // ── Empty filler rows ──
    while (rowIdx < 15) {
      const row = sheet.getRow(rowIdx);
      row.height = 18;
      for (let c = 1; c <= 10; c++) {
        const cell = row.getCell(c);
        cell.value = "";
        border(cell);
      }
      rowIdx++;
    }

    // ── Total row ──
    const totalRow = sheet.getRow(rowIdx);
    sheet.mergeCells(`A${rowIdx}:D${rowIdx}`);
    totalRow.getCell(1).value = "Total / 合計";
    totalRow.getCell(1).font = { bold: true, size: 9 };
    totalRow.getCell(1).alignment = { horizontal: "center", vertical: "middle" };
    totalRow.getCell(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: LIGHT_BLUE } };
    totalRow.getCell(5).value = pr.purchaseRequisitionItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    totalRow.getCell(5).font = { bold: true, size: 9 };
    totalRow.getCell(5).alignment = { horizontal: "center", vertical: "middle" };
    for (let c = 1; c <= 10; c++) border(totalRow.getCell(c));
    rowIdx += 2;

    // ── Notes ──
    sheet.mergeCells(`A${rowIdx}:J${rowIdx}`);
    sheet.getCell(`A${rowIdx}`).value =
      "1. Mỗi thứ 2 liên: 1 liên Quản lý hàng. 2 liên採購歸檔";
    sheet.getCell(`A${rowIdx}`).font = { size: 8, italic: true };
    rowIdx++;

    sheet.mergeCells(`A${rowIdx}:J${rowIdx}`);
    sheet.getCell(`A${rowIdx}`).value =
      "2. Chảy: Điền Biểu → Chủ Quản phê duyệt → Quản lý hàng → 採購作業";
    sheet.getCell(`A${rowIdx}`).font = { size: 8, italic: true };
    rowIdx += 2;

    // ── Signature row ──
    sheet.mergeCells(`A${rowIdx}:C${rowIdx}`);
    sheet.getCell(`A${rowIdx}`).value = "Chủ Quản sản xuất\n生產主管:";
    sheet.getCell(`A${rowIdx}`).font = { bold: true, size: 9 };
    sheet.getCell(`A${rowIdx}`).alignment = { horizontal: "center", vertical: "middle", wrapText: true };

    sheet.mergeCells(`D${rowIdx}:F${rowIdx}`);
    sheet.getCell(`D${rowIdx}`).value = "Người Điền Biểu\n填表人:";
    sheet.getCell(`D${rowIdx}`).font = { bold: true, size: 9 };
    sheet.getCell(`D${rowIdx}`).alignment = { horizontal: "center", vertical: "middle", wrapText: true };

    sheet.mergeCells(`G${rowIdx}:J${rowIdx}`);
    sheet.getCell(`G${rowIdx}`).value = "Quản lý hàng\n管控:";
    sheet.getCell(`G${rowIdx}`).font = { bold: true, size: 9 };
    sheet.getCell(`G${rowIdx}`).alignment = { horizontal: "center", vertical: "middle", wrapText: true };

    sheet.getRow(rowIdx).height = 40;

    // ── Stream response ──
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${pr.requisitionId}.xlsx`
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("PR Export error:", error);
    res.status(500).json({ message: "Failed to generate Excel file" });
  }
});

router.get("/po/:purchaseId", async (req: Request, res: Response): Promise<void> => {
  try {
    const po = await prisma.purchasing_Orders.findUnique({
      where: { purchaseId: req.params.purchaseId as string },
      include: {
        purchaseOrderItems: true,
        supplier: true,
      },
    });

    if (!po) {
      res.status(404).json({ message: "Purchase Order not found" });
      return;
    }

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("採購單");

    // ── Column widths ──
    sheet.columns = [
      { width: 5 },   // A - STT
      { width: 18 },  // B - Mã Hàng
      { width: 20 },  // C - Tên Hàng
      { width: 22 },  // D - Quy Cách
      { width: 6 },   // E - SL
      { width: 6 },   // F - ĐV
      { width: 7 },   // G - SL (kg)
      { width: 6 },   // H - ĐV (kg)
      { width: 12 },  // I - Đơn Giá
      { width: 14 },  // J - T.Tiền
      { width: 5 },   // K - VAT
      { width: 11 },  // L - N.Giao Hg
      { width: 12 },  // M - Số PR
      { width: 10 },  // N - Add Nhận
    ];

    // ── Row 1: Company name ──
    sheet.mergeCells("A1:N1");
    const r1 = sheet.getCell("A1");
    r1.value = "CÔNG TY TNHH QUỐC TẾ J&F";
    r1.font = { bold: true, size: 13 };
    r1.alignment = { horizontal: "center", vertical: "middle" };
    sheet.getRow(1).height = 20;

    // ── Row 2: Address ──
    sheet.mergeCells("A2:N2");
    const r2 = sheet.getCell("A2");
    r2.value = "Lô C2-18, KCN Đại Đăng, Phường Bình Dương, TP.HCM, Việt Nam";
    r2.font = { size: 9, italic: true };
    r2.alignment = { horizontal: "center", vertical: "middle" };

    // ── Row 3: TEL / FAX / MST ──
    sheet.mergeCells("A3:N3");
    const r3 = sheet.getCell("A3");
    r3.value = "TEL: 0274-3624200   FAX: 0274-3624201   MST: 3700812309";
    r3.font = { size: 9 };
    r3.alignment = { horizontal: "center", vertical: "middle" };

    // ── Row 4: Document title ──
    sheet.mergeCells("A4:N4");
    const r4 = sheet.getCell("A4");
    r4.value = "ĐƠN ĐẶT HÀNG / Purchasing Order 採購單";
    r4.font = { bold: true, size: 14 };
    r4.alignment = { horizontal: "center", vertical: "middle" };
    sheet.getRow(4).height = 24;

    // ── Helpers ──
    const NAVY = "FF1F3864";
    const WHITE = "FFFFFFFF";
    const LIGHT_BLUE = "FFD9E1F2";

    const label = (cell: ExcelJS.Cell, value: string) => {
      cell.value = value;
      cell.font = { bold: true, size: 9 };
      cell.alignment = { vertical: "middle", wrapText: true };
    };

    const val = (cell: ExcelJS.Cell, value: unknown) => {
      cell.value = value as ExcelJS.CellValue;
      cell.font = { size: 9 };
      cell.alignment = { vertical: "middle", wrapText: true };
    };

    const border = (cell: ExcelJS.Cell) => {
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    };

    // ── Rows 5–7: Supplier meta block ──
    // Row 5
    sheet.mergeCells("A5:B5");
    label(sheet.getCell("A5"), "Nhà Cung Cấp\n供應商N:");
    sheet.mergeCells("C5:F5");
    val(sheet.getCell("C5"), `${po.supplierId} - ${po.supplierName}`);
    sheet.mergeCells("G5:H5");
    label(sheet.getCell("G5"), "ĐT Liên Lạc:\n聯絡電話");
    sheet.mergeCells("I5:J5");
    val(sheet.getCell("I5"), po.supplier?.telephone ?? "");
    label(sheet.getCell("K5"), "TEL:");
    sheet.mergeCells("L5:M5");
    val(sheet.getCell("L5"), po.supplier?.telephone ?? "");
    label(sheet.getCell("N5"), "PO No:");

    // Row 6
    sheet.mergeCells("A6:B6");
    label(sheet.getCell("A6"), "Ng Liên Lạc\n聯絡人:");
    sheet.mergeCells("C6:F6");
    val(sheet.getCell("C6"), po.contactPerson);
    sheet.mergeCells("G6:H6");
    label(sheet.getCell("G6"), "Đ.K Thanh Toán:\n付款條件:");
    sheet.mergeCells("I6:M6");
    val(sheet.getCell("I6"), po.paymentTerm);
    label(sheet.getCell("N6"), "PO Date:");

    // Row 7
    sheet.mergeCells("A7:B7");
    label(sheet.getCell("A7"), "Địa Chỉ\n廠商地址:");
    sheet.mergeCells("C7:F7");
    val(sheet.getCell("C7"), po.supplierAddress);
    label(sheet.getCell("G7"), "MST:");
    sheet.mergeCells("H7:I7");
    val(sheet.getCell("H7"), po.supplier?.MST ?? "");
    label(sheet.getCell("J7"), "HD:");
    sheet.mergeCells("K7:M7");
    val(sheet.getCell("K7"), "");
    label(sheet.getCell("N7"), "Liên Hệ:");

    // PO number / date in column N (rows 5–6)
    val(sheet.getCell("N5"), po.purchaseId);  // overwrite the label we set
    // We need a different approach — use a separate column for the value
    // Actually let's keep it simple: put PO No label in N5 and value beside
    // Rewrite: use a two-column block at the right
    // (Already handled above — N5 = label "PO No:", but value goes next cell)
    // Since we only have 14 cols, let's embed value in same cell with line break
    sheet.getCell("N5").value = `PO No:\n${po.purchaseId}`;
    sheet.getCell("N5").font = { bold: false, size: 9 };
    sheet.getCell("N5").alignment = { horizontal: "center", vertical: "middle", wrapText: true };

    const poDate = new Date(po.purchaseDate).toLocaleDateString("vi-VN");
    sheet.getCell("N6").value = `PO Date:\n${poDate}\nCurrency: ${po.currency ?? "VND"}`;
    sheet.getCell("N6").font = { size: 9 };
    sheet.getCell("N6").alignment = { horizontal: "center", vertical: "middle", wrapText: true };

    sheet.getRow(5).height = 28;
    sheet.getRow(6).height = 28;
    sheet.getRow(7).height = 28;

    // Apply borders to meta rows
    for (let r = 5; r <= 7; r++) {
      for (let c = 1; c <= 14; c++) {
        border(sheet.getRow(r).getCell(c));
      }
    }

    // ── Row 8: Table header ──
    const HEADERS = [
      "STT", "Mã Hàng\n料號", "Tên Hàng\n品名", "Quy Cách\n規格",
      "SL\n數量", "ĐV\n單位", "SL\n數量", "ĐV\n單位",
      "Đơn Giá\n單價/未稅", "T.Tiền\n金額", "VAT",
      "N.Giao Hg\n交貨日期", "Số PR\n請購單號", "Add Nhận\n交貨地點",
    ];

    const headerRow = sheet.getRow(8);
    headerRow.height = 32;
    HEADERS.forEach((h, i) => {
      const cell = headerRow.getCell(i + 1);
      cell.value = h;
      cell.font = { bold: true, color: { argb: WHITE }, size: 9 };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: NAVY } };
      cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
      border(cell);
    });

    // ── Rows 9+: Line items ──
    let rowIdx = 9;
    for (const [i, item] of po.purchaseOrderItems.entries()) {
      const row = sheet.getRow(rowIdx);
      row.height = 20;

      const bg = i % 2 === 1
        ? { type: "pattern" as const, pattern: "solid" as const, fgColor: { argb: LIGHT_BLUE } }
        : undefined;

      const setCell = (col: number, value: unknown, align: ExcelJS.Alignment["horizontal"] = "center") => {
        const cell = row.getCell(col);
        cell.value = value as ExcelJS.CellValue;
        cell.font = { size: 9 };
        cell.alignment = { horizontal: align, vertical: "middle", wrapText: true };
        if (bg) cell.fill = bg;
        border(cell);
      };

      setCell(1, i + 1);
      setCell(2, item.productId, "left");
      setCell(3, item.productName, "left");
      setCell(4, item.productSpecification, "left");
      setCell(5, item.quantity);
      setCell(6, item.productUnit);
      setCell(7, "");  // weight (not in schema, leave blank)
      setCell(8, "kg");
      setCell(9, Number(item.productPrice));
      setCell(10, Number(item.totalPrice));
      setCell(11, item.VAT != null ? `${item.VAT}%` : "");
      setCell(12, new Date(item.deliveryDate).toLocaleDateString("vi-VN"));
      setCell(13, item.requisitionId);
      setCell(14, item.deliveryPlace);

      // Format currency columns
      row.getCell(9).numFmt = "#,##0";
      row.getCell(10).numFmt = "#,##0";

      const itemCurrency = (item as any).currency ?? po.currency ?? "VND";
      row.getCell(9).note = itemCurrency;

      rowIdx++;
    }

    // ── Empty filler rows (minimum 8 rows total) ──
    while (rowIdx < 17) {
      const row = sheet.getRow(rowIdx);
      row.height = 18;
      for (let c = 1; c <= 14; c++) {
        const cell = row.getCell(c);
        cell.value = "";
        border(cell);
      }
      rowIdx++;
    }

    // ── Totals block ──
    const currency = po.currency ?? "VND";

    const totalRow = sheet.getRow(rowIdx);
    sheet.mergeCells(`A${rowIdx}:H${rowIdx}`);
    totalRow.getCell(1).value = "Total";
    totalRow.getCell(1).font = { bold: true, size: 9 };
    totalRow.getCell(1).alignment = { horizontal: "center", vertical: "middle" };
    totalRow.getCell(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: LIGHT_BLUE } };
    totalRow.getCell(10).value = Number(po.subtotal);
    totalRow.getCell(10).numFmt = "#,##0";
    totalRow.getCell(10).font = { bold: true, size: 9 };
    totalRow.getCell(11).value = currency;
    totalRow.getCell(11).font = { bold: true, size: 9 };
    for (let c = 1; c <= 14; c++) border(totalRow.getCell(c));
    rowIdx++;

    const vatRow = sheet.getRow(rowIdx);
    sheet.mergeCells(`A${rowIdx}:H${rowIdx}`);
    vatRow.getCell(1).value = "VAT";
    vatRow.getCell(1).font = { bold: true, size: 9 };
    vatRow.getCell(1).alignment = { horizontal: "center", vertical: "middle" };
    vatRow.getCell(10).value = Number(po.vat);
    vatRow.getCell(10).numFmt = "#,##0";
    vatRow.getCell(10).font = { size: 9 };
    vatRow.getCell(11).value = currency;
    vatRow.getCell(11).font = { size: 9 };
    for (let c = 1; c <= 14; c++) border(vatRow.getCell(c));
    rowIdx++;

    const grandRow = sheet.getRow(rowIdx);
    sheet.mergeCells(`A${rowIdx}:H${rowIdx}`);
    grandRow.getCell(1).value = "Total";
    grandRow.getCell(1).alignment = { horizontal: "center", vertical: "middle" };
    grandRow.getCell(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: NAVY } };
    grandRow.getCell(1).font = { bold: true, color: { argb: WHITE }, size: 9 };
    grandRow.getCell(10).value = Number(po.finalTotal);
    grandRow.getCell(10).numFmt = "#,##0";
    grandRow.getCell(10).font = { bold: true, size: 9 };
    grandRow.getCell(11).value = currency;
    grandRow.getCell(11).font = { bold: true, size: 9 };
    for (let c = 1; c <= 14; c++) border(grandRow.getCell(c));
    rowIdx += 2;

    // ── Notes ──
    sheet.mergeCells(`A${rowIdx}:N${rowIdx}`);
    sheet.getCell(`A${rowIdx}`).value = "*** HÀNG MỀM CÓ THỂ DÁP-UỐN 90 ĐỘ-BỀ MẶT PHẲNG ĐẸP";
    sheet.getCell(`A${rowIdx}`).font = { bold: true, color: { argb: "FFFF0000" }, size: 9 };
    rowIdx++;
    sheet.mergeCells(`A${rowIdx}:N${rowIdx}`);
    sheet.getCell(`A${rowIdx}`).value = "※ Bao gồm phí vận chuyển   以上價格含運費";
    sheet.getCell(`A${rowIdx}`).font = { size: 9 };
    rowIdx++;
    sheet.mergeCells(`A${rowIdx}:N${rowIdx}`);
    sheet.getCell(`A${rowIdx}`).value = "※ HÀNG PHẢI ĐÚNG QUY CÁCH, CHẤT LƯỢNG TỐT   來料的品質/規格需是正確的";
    sheet.getCell(`A${rowIdx}`).font = { size: 9 };
    rowIdx += 2;

    // ── Signature row ──
    sheet.mergeCells(`A${rowIdx}:C${rowIdx}`);
    sheet.getCell(`A${rowIdx}`).value = "Tổng Giám Đốc 總經理:";
    sheet.getCell(`A${rowIdx}`).font = { bold: true, size: 9 };
    sheet.mergeCells(`E${rowIdx}:G${rowIdx}`);
    sheet.getCell(`E${rowIdx}`).value = "採購主管核准:";
    sheet.getCell(`E${rowIdx}`).font = { bold: true, size: 9 };
    sheet.mergeCells(`I${rowIdx}:K${rowIdx}`);
    sheet.getCell(`I${rowIdx}`).value = "Thu mua 採購填表:";
    sheet.getCell(`I${rowIdx}`).font = { bold: true, size: 9 };

    // ── Stream response ──
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${po.purchaseId}.xlsx`
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("Export error:", error);
    res.status(500).json({ message: "Failed to generate Excel file" });
  }
});

export default router;