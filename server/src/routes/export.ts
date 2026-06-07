import { Router, Request, Response } from "express";
import ExcelJS from "exceljs";
import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs";

const router = Router();
const prisma = new PrismaClient();

router.get("/pr/:requisitionId", async (req: Request, res: Response): Promise<void> => {
  try {
    const pr = await prisma.purchasing_Requisitions.findUnique({
      where: { requisitionId: req.params.requisitionId as string },
      include: { purchaseRequisitionItems: { include: { material: true } } },
    });

    if (!pr) {
      res.status(404).json({ message: "Purchase Requisition not found" });
      return;
    }

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("請購單");

    // ── Add logo ──
    const logoPath = "/app/assets/excel_logo.png";
    console.log("Looking for logo at:", logoPath);
    console.log("File exists:", fs.existsSync(logoPath));
    if (fs.existsSync(logoPath)) {
      const logoId = workbook.addImage({
        filename: logoPath,
        extension: "png",
      });
      sheet.addImage(logoId, {
        tl: { col: 0, row: 0 } as any,
        ext: { width: 50, height: 50 },
      } as any);
    }

    sheet.getRow(1).height = 40;
    sheet.getRow(2).height = 30;

    // ── Column widths ──
    sheet.columns = [
      { width: 5 },   // A - STT
      { width: 18 },  // B - Mã Hàng
      { width: 20 },  // C - Tên Hàng
      { width: 22 },  // D - Quy Cách
      { width: 6 },   // E - SL
      { width: 10 },   // F - Trọng Lg
      { width: 6 },   // G - ĐV
      { width: 12 },  // H - Ngày SD
      { width: 20 },  // I - Mục Đích SD
      { width: 15 },  // J - Add Nhận Hàng
    ];

    // ── Helpers ──
    const GREEN = "FF2D7A2D";
    const WHITE = "FFFFFFFF";
    const LIGHT_GREEN = "FFE8F5E9";

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

    // ── Row 1: Company name - VN ──
    sheet.mergeCells("A1:J1");
    const r1 = sheet.getCell("A1");
    r1.value = "CÔNG TY TNHH QUỐC TẾ J&F";
    r1.font = { bold: true, size: 13 };
    r1.alignment = { horizontal: "center", vertical: "middle" };
    sheet.getRow(1).height = 28;

     // ── Row 1: Company name - EN──
    sheet.mergeCells("A2:J2");
    const r2 = sheet.getCell("A2");
    r2.value = "J&F INDUSTRIES INTERNATIONAL CO., LTD";
    r2.font = { bold: true, size: 13 };
    r2.alignment = { horizontal: "center", vertical: "middle" };
    sheet.getRow(2).height = 28;

    // ── Row 3: Address ──
    sheet.mergeCells("A3:J3");
    const r3 = sheet.getCell("A3");
    r3.value = "Lô C2-18, KCN Đại Đăng, Phường Bình Dương, TP.HCM, Việt Nam";
    r3.font = { size: 9, italic: true };
    r3.alignment = { horizontal: "center", vertical: "middle" };

    // ── Row 4: Document title ──
    sheet.mergeCells("A4:J4");
    const r4 = sheet.getCell("A4");
    r4.value = "ĐƠN ĐỀ NGHỊ MUA HÀNG / Purchasing Requisition 請購單";
    r4.font = { bold: true, size: 14 };
    r4.alignment = { horizontal: "center", vertical: "middle" };
    sheet.getRow(4).height = 28;

    // ── Row 5: Meta info ──
    sheet.mergeCells("A5:B5");
    label(sheet.getCell("A5"), "Bộ Phận Department 部門:");
    sheet.mergeCells("C5:D5");
    val(sheet.getCell("C5"), pr.department);

    sheet.mergeCells("E5:F5");
    label(sheet.getCell("E5"), "PR No 請購單:");
    sheet.mergeCells("G5:H5");
    val(sheet.getCell("G5"), pr.requisitionId);
    sheet.getCell("G5").font = { bold: true, size: 9 };

    label(sheet.getCell("I5"), "Date 日期:");
    val(sheet.getCell("J5"), new Date(pr.requisitionDate).toLocaleDateString("vi-VN"));


    // ── Row 6: Requester / SO ──
    sheet.mergeCells("A6:B6");
    label(sheet.getCell("A6"), "Người Điền Biểu Requester 請購人:");
    sheet.mergeCells("C6:D6");
    val(sheet.getCell("C6"), pr.requester);

    sheet.mergeCells("E6:F6");
    label(sheet.getCell("E6"), "SO No 訂單:");
    sheet.mergeCells("G6:H6");
    val(sheet.getCell("G6"), pr.soNo ?? "");

    sheet.mergeCells("I6:J6");
    val(sheet.getCell("I6"), pr.note ?? "");

    // Apply borders to meta rows
    for (let r = 5; r <= 6; r++) {
      for (let c = 1; c <= 10; c++) {
        border(sheet.getRow(r).getCell(c));
      }
    }

    sheet.getRow(5).height = 30;
    sheet.getRow(6).height = 30;

    // ── Row 7: Table header ──
    const HEADERS = [
      "STT",
      "Mã Hàng\n料號",
      "Tên Hàng\n品名",
      "Quy Cách\n規格",
      "SL\n數量",
      "Trọng Lượng\n重量",
      "ĐV\n單位",
      "Ngày SD\n需求日",
      "Mục Đích SD\n使用說明",
      "Add Nhận Hàng\n交貨地點",
    ];

    const headerRow = sheet.getRow(7);
    headerRow.height = 32;
    HEADERS.forEach((h, i) => {
      const cell = headerRow.getCell(i + 1);
      cell.value = h;
      cell.font = { bold: true, color: { argb: WHITE }, size: 9 };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: GREEN } };
      cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
      border(cell);
    });

    // ── Rows 8+: Line items ──
    let rowIdx = 8;
    for (const [i, item] of pr.purchaseRequisitionItems.entries()) {
      const row = sheet.getRow(rowIdx);
      row.height = 20;

      const bg = i % 2 === 1
        ? { type: "pattern" as const, pattern: "solid" as const, fgColor: { argb: LIGHT_GREEN } }
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
      setCell(2, item.materialId, "left");
      setCell(3, item.materialName, "left");
      setCell(4, item.materialSpecification, "left");
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
    totalRow.getCell(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: LIGHT_GREEN } };
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
    // ── Add logo ──
    const logoPath = path.join(__dirname, "../../assets/excel_logo.png");
    console.log("Looking for logo at:", logoPath);
    console.log("File exists:", fs.existsSync(logoPath));
    if (fs.existsSync(logoPath)) {
      const logoId = workbook.addImage({
        filename: logoPath,
        extension: "png",
      });
      sheet.addImage(logoId, {
        tl: { col: 0, row: 0 } as any,
        ext: { width: 50, height: 50 },
      } as any);
    }

    sheet.getRow(1).height = 40;
    sheet.getRow(2).height = 30;

    // ── Column widths ──
    sheet.columns = [
      { width: 3 },   // A - STT
      { width: 18 },  // B - Mã Hàng
      { width: 20 },  // C - Tên Hàng
      { width: 22 },  // D - Quy Cách
      { width: 6 },   // E - SL
      { width: 6 },   // F - ĐV
      { width: 6 },   // G - TL (kg)
      { width: 6 },   // H - ĐV (kg)
      { width: 12 },  // I - Đơn Giá
      { width: 12 },  // J - T.Tiền
      { width: 10 },   // K - VAT
      { width: 11 },  // L - N.Giao Hg
      { width: 12 },  // M - Số PR
      { width: 8 },  // N - Add Nhận
    ];

    // ── Row 1: Company name ──
    sheet.mergeCells("A1:N1");
    const r1 = sheet.getCell("A1");
    r1.value = "CÔNG TY TNHH QUỐC TẾ J&F";
    r1.font = { bold: true, size: 13 };
    r1.alignment = { horizontal: "center", vertical: "middle" };
    sheet.getRow(1).height = 28;

    // ── Row 2: Company name ──
    sheet.mergeCells("A2:N2");
    const r2 = sheet.getCell("A2");
    r2.value = "J&F INDUSTRIES INTERNATIONAL CO., LTD";
    r2.font = { bold: true, size: 13 };
    r2.alignment = { horizontal: "center", vertical: "middle" };
    sheet.getRow(2).height = 28;

    // ── Row 3: Address ──
    sheet.mergeCells("A3:N3");
    const r3 = sheet.getCell("A3");
    r3.value = "Lô C2-18, KCN Đại Đăng, Phường Bình Dương, TP.HCM, Việt Nam";
    r3.font = { size: 9, italic: true };
    r3.alignment = { horizontal: "center", vertical: "middle" };

    // ── Row 4: TEL / FAX / MST ──
    sheet.mergeCells("A4:N4");
    const r4 = sheet.getCell("A4");
    r4.value = "TEL: 0274-3624200   FAX: 0274-3624201   MST: 3700812309";
    r4.font = { size: 9 };
    r4.alignment = { horizontal: "center", vertical: "middle" };

    // ── Row 5: Document title ──
    sheet.mergeCells("A5:N5");
    const r5 = sheet.getCell("A5");
    r5.value = "ĐƠN ĐẶT HÀNG / Purchasing Order 採購單";
    r5.font = { bold: true, size: 14 };
    r5.alignment = { horizontal: "center", vertical: "middle" };
    sheet.getRow(5).height = 24;

    // ── Helpers ──
    const GREEN = "FF2D7A2D";
    const WHITE = "FFFFFFFF";
    const LIGHT_GREEN = "FFE8F5E9";

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

    // ── Rows 6–8: Supplier meta block ──
    // Row 6
    sheet.mergeCells("A6:B6");
    label(sheet.getCell("A6"), "Nhà Cung Cấp 供應商:");
    sheet.mergeCells("C6:F6");
    val(sheet.getCell("C6"), `${po.supplierId} - ${po.supplierName}`);
    sheet.mergeCells("G6:H6");
    label(sheet.getCell("G6"), "ĐT Liên Lạc 聯絡電話:");
    sheet.mergeCells("I6:J6");
    val(sheet.getCell("I6"), po.supplier?.mobileNo ?? "");
    label(sheet.getCell("K6"), "TEL:");
    sheet.mergeCells("L6:M6");
    val(sheet.getCell("L6"), po.supplier?.telephone ?? "");
    label(sheet.getCell("N6"), "PO No:");

    // Row 7
    sheet.mergeCells("A7:B7");
    label(sheet.getCell("A7"), "Ng Liên Lạc 聯絡人:");
    sheet.mergeCells("C7:F7");
    val(sheet.getCell("C7"), po.contactPerson);
    sheet.mergeCells("G7:H7");
    label(sheet.getCell("G7"), "Đ.K Thanh Toán 付款條件:");
    sheet.mergeCells("I7:M7");
    val(sheet.getCell("I7"), po.paymentTerm);
    label(sheet.getCell("N7"), "PO Date:");

    // Row 8
    sheet.mergeCells("A8:B8");
    label(sheet.getCell("A8"), "Địa Chỉ 廠商地址:");
    sheet.mergeCells("C8:F8");
    val(sheet.getCell("C8"), po.supplierAddress);
    label(sheet.getCell("G8"), "MST:");
    sheet.mergeCells("H8:I8");
    val(sheet.getCell("H8"), po.supplier?.MST ?? "");
    label(sheet.getCell("J8"), "HD:");
    sheet.mergeCells("K8:M8");
    val(sheet.getCell("K8"), "");
    label(sheet.getCell("N8"), "Liên Hệ:");

    // PO number / date in column N (rows 6–8)
    val(sheet.getCell("N6"), po.purchaseId);  // overwrite the label we set
    // We need a different approach — use a separate column for the value
    // Actually let's keep it simple: put PO No label in N5 and value beside
    // Rewrite: use a two-column block at the right
    // (Already handled above — N5 = label "PO No:", but value goes next cell)
    // Since we only have 14 cols, let's embed value in same cell with line break
    sheet.getCell("N6").value = `PO No:\n${po.purchaseId}`;
    sheet.getCell("N6").font = { bold: false, size: 9 };
    sheet.getCell("N6").alignment = { horizontal: "center", vertical: "middle", wrapText: true };

    const poDate = new Date(po.purchaseDate).toLocaleDateString("vi-VN");
    sheet.getCell("N7").value = `PO Date:\n${poDate}\nCurrency: ${po.currency ?? "VND"}`;
    sheet.getCell("N7").font = { size: 9 };
    sheet.getCell("N7").alignment = { horizontal: "center", vertical: "middle", wrapText: true };

    sheet.getRow(6).height = 32;
    sheet.getRow(7).height = 32;
    sheet.getRow(8).height = 30;

    // Apply borders to meta rows
    for (let r = 6; r <= 8; r++) {
      for (let c = 1; c <= 14; c++) {
        border(sheet.getRow(r).getCell(c));
      }
    }

    // ── Row 9: Table header ──
    const HEADERS = [
      "STT", "Mã Hàng\n料號", "Tên Hàng\n品名", "Quy Cách\n規格",
      "SL\n數量", "ĐV\n單位", "TL\n重量", "ĐV\n單位",
      "Đơn Giá\n單價/未稅", "T.Tiền\n金額", "VAT",
      "N.Giao Hg\n交貨日期", "Số PR\n請購單號", "Add Nhận\n交貨地點",
    ];

    const headerRow = sheet.getRow(9);
    headerRow.height = 32;
    HEADERS.forEach((h, i) => {
      const cell = headerRow.getCell(i + 1);
      cell.value = h;
      cell.font = { bold: true, color: { argb: WHITE }, size: 9 };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: GREEN } };
      cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
      border(cell);
    });

    // ── Rows 10+: Line items ──
    let rowIdx = 10;
    for (const [i, item] of po.purchaseOrderItems.entries()) {
      const row = sheet.getRow(rowIdx);
      row.height = 20;

      const bg = i % 2 === 1
        ? { type: "pattern" as const, pattern: "solid" as const, fgColor: { argb: LIGHT_GREEN } }
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
      setCell(2, item.materialId, "left");
      setCell(3, item.materialName, "left");
      setCell(4, item.materialSpecification, "left");
      setCell(5, item.quantity);
      setCell(6, item.materialUnit);
      setCell(7, "");  // weight (not in schema, leave blank)
      setCell(8, "kg");
      setCell(9, Number(item.materialPrice));
      setCell(10, Number(item.totalPrice));
      setCell(11, item.VAT != null ? `${item.VAT}` : "");
      setCell(12, new Date(item.deliveryDate).toLocaleDateString("vi-VN"));
      setCell(13, item.requisitionId);
      setCell(14, item.deliveryPlace);

      // Format currency columns
      row.getCell(9).numFmt = "#,##0.##";
      row.getCell(10).numFmt = "#,##0.##";

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
    totalRow.getCell(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: LIGHT_GREEN } };
    totalRow.getCell(10).value = Number(po.subtotal);
    totalRow.getCell(10).numFmt = "#,##0.##";
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
    vatRow.getCell(10).numFmt = "#,##0.##";
    vatRow.getCell(10).font = { size: 9 };
    vatRow.getCell(11).value = currency;
    vatRow.getCell(11).font = { size: 9 };
    for (let c = 1; c <= 14; c++) border(vatRow.getCell(c));
    rowIdx++;

    const grandRow = sheet.getRow(rowIdx);
    sheet.mergeCells(`A${rowIdx}:H${rowIdx}`);
    grandRow.getCell(1).value = "Total";
    grandRow.getCell(1).alignment = { horizontal: "center", vertical: "middle" };
    grandRow.getCell(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: GREEN } };
    grandRow.getCell(1).font = { bold: true, color: { argb: WHITE }, size: 9 };
    grandRow.getCell(10).value = Number(po.finalTotal);
    grandRow.getCell(10).numFmt = "#,##0.##";
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

router.get("/warehousing/:formId", async (req: Request, res: Response): Promise<void> => {
  try {
    const form = await prisma.material_Warehousing_Forms.findUnique({
      where: { formId: req.params.formId as string },
      include: {
        supplier: true,
        purchase: true,
        materialWarehousingItems: { include: { material: true } },
      },
    });

    if (!form) {
      res.status(404).json({ message: "Warehousing form not found" });
      return;
    }

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("入庫單");
    // ── Add logo ──
    const logoPath = path.join(__dirname, "../../assets/excel_logo.png");
    console.log("Looking for logo at:", logoPath);
    console.log("File exists:", fs.existsSync(logoPath));
    if (fs.existsSync(logoPath)) {
      const logoId = workbook.addImage({
        filename: logoPath,
        extension: "png",
      });
      sheet.addImage(logoId, {
        tl: { col: 0, row: 0 } as any,
        ext: { width: 50, height: 50 },
      } as any);
    }

    sheet.getRow(1).height = 40;
    sheet.getRow(2).height = 30;

    const WHITE = "FFFFFFFF";
    const GREEN = "FF2D7A2D";

    sheet.columns = [
      { width: 5 },
      { width: 18 },
      { width: 20 },
      { width: 22 },
      { width: 8 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
      { width: 15 },
    ];

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

    // ── Row 1: Company ──
    sheet.mergeCells("A1:I1");
    const r1 = sheet.getCell("A1");
    r1.value = "CÔNG TY TNHH QUỐC TẾ J&F";
    r1.font = { bold: true, size: 13 };
    r1.alignment = { horizontal: "center", vertical: "middle" };
    sheet.getRow(1).height = 28;

    // ── Row 2: Company ──
    sheet.mergeCells("A2:I2");
    const r2 = sheet.getCell("A2");
    r2.value = "J&F INDUSTRIES INTERNATIONAL CO., LTD";
    r2.font = { bold: true, size: 13 };
    r2.alignment = { horizontal: "center", vertical: "middle" };
    sheet.getRow(2).height = 28;

    // ── Row 3: Address ──
    sheet.mergeCells("A3:I3");
    const r3 = sheet.getCell("A3");
    r3.value = "Lô C2-18, KCN Đại Đăng, Phường Bình Dương, TP.HCM, Việt Nam";
    r3.font = { size: 9, italic: true };
    r3.alignment = { horizontal: "center", vertical: "middle" };

    // ── Row 4: Title ──
    sheet.mergeCells("A4:I4");
    const r4 = sheet.getCell("A4");
    r4.value = "PHIẾU NHẬP KHO NGUYÊN VẬT LIỆU / Material Warehousing Form 原物料入庫單";
    r4.font = { bold: true, size: 14 };
    r4.alignment = { horizontal: "center", vertical: "middle" };
    sheet.getRow(4).height = 24;

    // ── Rows 5-8: Meta ──
    sheet.mergeCells("A5:B5");
    label(sheet.getCell("A5"), "Nhà Cung Cấp 供應商:");
    sheet.mergeCells("C5:E5");
    val(sheet.getCell("C5"), `${form.supplierId} - ${form.supplierName}`);
    label(sheet.getCell("F5"), "WF No:");
    sheet.mergeCells("G5:I5");
    const wfCell = sheet.getCell("G5");
    wfCell.value = form.formId;
    wfCell.font = { bold: true, size: 9, color: { argb: "FF2D7A2D" } };

    sheet.mergeCells("A6:B6");
    label(sheet.getCell("A6"), "Ng. Liên Lạc 聯絡人:");
    sheet.mergeCells("C6:E6");
    val(sheet.getCell("C6"), form.contactPerson ?? "");
    label(sheet.getCell("F6"), "Hóa Đơn 發票:");
    sheet.mergeCells("G6:I6");
    val(sheet.getCell("G6"), form.invoiceNo);

    sheet.mergeCells("A7:B7");
    label(sheet.getCell("A7"), "Đ.K Thanh Toán 付款條件:");
    sheet.mergeCells("C7:E7");
    val(sheet.getCell("C7"), form.paymentTerm ?? "");
    label(sheet.getCell("F7"), "PO No:");
    sheet.mergeCells("G7:I7");
    val(sheet.getCell("G7"), form.purchaseId);

    sheet.mergeCells("A8:B8");
    label(sheet.getCell("A8"), "Địa Chỉ 廠商地址:");
    sheet.mergeCells("C8:E8");
    val(sheet.getCell("C8"), form.supplierAddress);
    label(sheet.getCell("F8"), "Date:");
    sheet.mergeCells("G8:I8");
    val(sheet.getCell("G8"), new Date(form.date).toLocaleDateString("vi-VN"));

    for (let r = 5; r <= 8; r++) {
      sheet.getRow(r).height = 26;
      for (let c = 1; c <= 9; c++) border(sheet.getRow(r).getCell(c));
    }

    // ── Row 8: Table header ──
    const HEADERS = [
      "STT", "Mã Hàng\n料號", "Tên Hàng\n品名", "Quy Cách\n規格",
      "SL\n數量", "ĐV\n單位", "Ngày Nhập\n交貨日期",
      "Số PR\n請購單號", "Add Giao Hàng\n交貨地點",
    ];

    const headerRow = sheet.getRow(8);
    headerRow.height = 32;
    HEADERS.forEach((h, i) => {
      const cell = headerRow.getCell(i + 1);
      cell.value = h;
      cell.font = { bold: true, color: { argb: WHITE }, size: 9 };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: GREEN } };
      cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
      border(cell);
    });

    // ── Line items ──
    let rowIdx = 9;
    for (const [i, item] of form.materialWarehousingItems.entries()) {
      const row = sheet.getRow(rowIdx);
      row.height = 20;
      const bg = i % 2 === 1
        ? { type: "pattern" as const, pattern: "solid" as const, fgColor: { argb: "FFE8F5E9" } }
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
      setCell(2, item.materialId, "left");
      setCell(3, item.materialName, "left");
      setCell(4, item.materialSpecification, "left");
      setCell(5, item.quantity);
      setCell(6, item.materialUnit);
      setCell(7, new Date(item.deliveryDate).toLocaleDateString("vi-VN"));
      setCell(8, item.requisitionId, "left");
      setCell(9, item.deliveryPlace, "left");

      rowIdx++;
    }

    // ── Empty filler rows ──
    while (rowIdx < 17) {
      const row = sheet.getRow(rowIdx);
      row.height = 18;
      for (let c = 1; c <= 9; c++) {
        border(row.getCell(c));
      }
      rowIdx++;
    }

    // ── Total row ──
    const totalRow = sheet.getRow(rowIdx);
    sheet.mergeCells(`A${rowIdx}:D${rowIdx}`);
    totalRow.getCell(1).value = "Total / 合計";
    totalRow.getCell(1).font = { bold: true, size: 9 };
    totalRow.getCell(1).alignment = { horizontal: "center", vertical: "middle" };
    totalRow.getCell(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFE8F5E9" } };
    totalRow.getCell(5).value = form.materialWarehousingItems.reduce(
      (sum, item) => sum + item.quantity, 0
    );
    totalRow.getCell(5).font = { bold: true, size: 9 };
    for (let c = 1; c <= 9; c++) border(totalRow.getCell(c));
    rowIdx += 2;

    // ── Notes ──
    sheet.mergeCells(`A${rowIdx}:I${rowIdx}`);
    sheet.getCell(`A${rowIdx}`).value =
      "1. Mỗi thứ 2 liên: 1 liên Quản lý hàng  2 kế toán bảo lưu";
    sheet.getCell(`A${rowIdx}`).font = { size: 8, italic: true };
    rowIdx++;

    sheet.mergeCells(`A${rowIdx}:I${rowIdx}`);
    sheet.getCell(`A${rowIdx}`).value =
      "2. Chảy: Bộ phận thu mua lập biểu → nhân viên kho nhận đếm hàng → kiểm phẩm → thu mua kiểm tra → kế toán";
    sheet.getCell(`A${rowIdx}`).font = { size: 8, italic: true };
    rowIdx += 2;

    // ── Signatures ──
    sheet.mergeCells(`A${rowIdx}:C${rowIdx}`);
    sheet.getCell(`A${rowIdx}`).value = "Thu mua 採購:";
    sheet.getCell(`A${rowIdx}`).font = { bold: true, size: 9 };
    sheet.getCell(`A${rowIdx}`).alignment = { horizontal: "center", vertical: "middle" };

    sheet.mergeCells(`D${rowIdx}:F${rowIdx}`);
    sheet.getCell(`D${rowIdx}`).value = "Kiểm phẩm 品保:";
    sheet.getCell(`D${rowIdx}`).font = { bold: true, size: 9 };
    sheet.getCell(`D${rowIdx}`).alignment = { horizontal: "center", vertical: "middle" };

    sheet.mergeCells(`G${rowIdx}:I${rowIdx}`);
    sheet.getCell(`G${rowIdx}`).value = "Quản lý hàng 物管:";
    sheet.getCell(`G${rowIdx}`).font = { bold: true, size: 9 };
    sheet.getCell(`G${rowIdx}`).alignment = { horizontal: "center", vertical: "middle" };

    sheet.getRow(rowIdx).height = 40;

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${form.formId}.xlsx`
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("Warehousing export error:", error);
    res.status(500).json({ message: "Failed to generate Excel file" });
  }
});

// PUT update warehousing form
router.put("/:formId", async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      date,
      supplierId,
      supplierName,
      contactPerson,
      supplierAddress,
      supplierTelephone,
      supplierFax,
      purchaseId,
      paymentTerm,
      invoiceNo,
      deliveryNote,
      items,
    } = req.body;

    const form = await prisma.$transaction(async (tx) => {
      // Get old items to reverse inventory
      const oldForm = await tx.material_Warehousing_Forms.findUnique({
        where: { formId: req.params.formId as string },
        include: { materialWarehousingItems: true },
      });

      if (!oldForm) throw new Error("NOT_FOUND");

      // Reverse old inventory
      for (const item of oldForm.materialWarehousingItems) {
        await tx.inventory.update({
          where: { materialId: item.materialId },
          data: {
            currentStock: { decrement: item.quantity },
            lastUpdated: new Date(),
          },
        });
      }

      // Update the form
      const updated = await tx.material_Warehousing_Forms.update({
        where: { formId: req.params.formId as string },
        data: {
          date: new Date(date),
          supplierId,
          supplierName,
          contactPerson: contactPerson || "",
          supplierAddress,
          supplierTelephone,
          supplierFax: supplierFax || "",
          purchaseId,
          paymentTerm: paymentTerm || "",
          invoiceNo,
          deliveryNote: deliveryNote || "",
        },
      });

      // Delete old items
      await tx.material_Warehousing_Items.deleteMany({
        where: { formId: req.params.formId as string },
      });

      // Create new items and update inventory
      for (const item of items) {
        await tx.material_Warehousing_Items.create({
          data: {
            formId: updated.formId,
            materialId: item.materialId,
            materialName: item.materialName,
            materialSpecification: item.materialSpecification,
            quantity: item.quantity,
            materialUnit: item.materialUnit,
            deliveryDate: new Date(item.deliveryDate),
            requisitionId: item.requisitionId,
            deliveryPlace: item.deliveryPlace,
          },
        });

        // Add new quantities to inventory
        await tx.inventory.upsert({
          where: { materialId: item.materialId },
          update: {
            currentStock: { increment: item.quantity },
            lastUpdated: new Date(),
          },
          create: {
            materialId: item.materialId,
            materialName: item.materialName,
            materialSpecification: item.materialSpecification,
            unit: item.materialUnit,
            currentStock: item.quantity,
            lastUpdated: new Date(),
            supplierId: supplierId,
            supplierName: supplierName,
          },
        });
      }

      return updated;
    });

    res.json(form);
  } catch (error: any) {
    if (error.message === "NOT_FOUND" || error.code === "P2025") {
      res.status(404).json({ message: "Warehousing form not found" });
      return;
    }
    res.status(500).json({ message: "Error updating warehousing form" });
  }
});

export default router;