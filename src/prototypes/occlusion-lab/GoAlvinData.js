/**
 * Authentic Technical Data & Transaction Pipeline for Go Alvin Phones POS
 * Offline-first Electron + SQLite Desktop Point-of-Sale
 */

export const GO_ALVIN_STAGES = [
  {
    id: 'stage-1-intake',
    code: 'STAGE_01 // INTAKE & SCAN',
    elevation: '+48.5m HARDWARE_PLANE',
    title: 'Peripheral Capture & Optical IMEI Scan',
    systemDomain: 'Hardware I/O & Electron IPC',
    description:
      'Cashier scans dual-SIM IMEI barcode via USB 2D imager. Electron main process captures raw HID keystrokes through an isolated IPC listener, preventing renderer UI thread jitter.',
    runtimeMetrics: {
      inputDevice: 'Honeywell Xenon 1900g (USB-HID)',
      captureLatency: '1.8ms to IPC pipe',
      payload: 'IMEI: 354892091823419 (15-digit TAC + SNR + Luhn Check)',
      hardwareState: 'SCANNER_LOCKED &middot; CASH_DRAWER_CLOSED',
    },
    systemOutput: {
      status: 'VERIFIED_TAC_MATCH',
      deviceModel: 'Samsung Galaxy S24 Ultra (512GB, Titanium Black)',
      supplierBatch: 'PO-2026-0891 // Clean Carrier Status',
    },
  },
  {
    id: 'stage-2-validation',
    code: 'STAGE_02 // TRANSACTION LEDGER',
    elevation: '+32.0m RUNTIME_PLANE',
    title: 'Local Cart Ledger & Split-Tender Allocation',
    systemDomain: 'In-Memory Redux State & Concurrency Lock',
    description:
      'Inventory item checked against local in-memory lookup table. Tax, discount rules, and split tender ($400 Cash + $799.99 Card) allocated into an immutable transaction payload.',
    runtimeMetrics: {
      itemSubtotal: '$1,199.99 USD',
      taxRate: '8.25% ($99.00 USD)',
      tenderType: 'Split: Cash $400.00 + Ingenico Lane/3000 EMV $898.99',
      concurrencyLock: 'ACQUIRED_MUTEX // imei_354892091823419',
    },
    systemOutput: {
      status: 'CART_LOCKED_PENDING_COMMIT',
      orderId: 'ORD-20260922-8419',
      cashierId: 'CASHIER_04 (Terminal A)',
    },
  },
  {
    id: 'stage-3-persistence',
    code: 'STAGE_03 // LOCAL PERSISTENCE',
    elevation: '+16.5m PERSISTENCE_PLANE',
    title: 'SQLite WAL Mode Commit & ACID Durability',
    systemDomain: 'Local Disk Storage & Write-Ahead Log',
    description:
      'Zero reliance on cloud connectivity. Transaction written synchronously to local SQLite database with PRAGMA synchronous = NORMAL and WAL mode enabled for crash-proof sub-millisecond persistence.',
    runtimeMetrics: {
      diskWriteLatency: '0.42ms (NVMe direct write)',
      walFrameIndex: 'Frame #48,192 &middot; 4KB Page Size',
      tablesMutated: 'sales, sales_items, imei_inventory, cash_drawer_log',
      integrityCheck: 'PRAGMA integrity_check = ok',
    },
    systemOutput: {
      status: 'DISK_COMMIT_CONFIRMED',
      dbTxnId: 'TXN_WAL_99410',
      offlineQueueStatus: 'Queued for Cloud Delta Sync (0 drops)',
    },
  },
  {
    id: 'stage-4-dispatch',
    code: 'STAGE_04 // HARDWARE DISPATCH',
    elevation: '+0.0m DECK_DATUM',
    title: 'Thermal ESC/POS Print & Cash Drawer Kick',
    systemDomain: 'Serial Port & Receipt Dispatch Engine',
    description:
      'Direct ESC/POS binary bytecode streamed over raw USB serial port to Star Micronics TSP143III receipt printer. 24V pulse kicks cash drawer solenoid instantly upon confirmation.',
    runtimeMetrics: {
      printBaudRate: '115,200 baud (Direct Serial)',
      pulseCommand: 'ESC p 0 25 250 (24V 50ms solenoid pulse)',
      printDuration: '320ms for 48-column thermal receipt',
      drawerSensor: 'DRAWER_STATUS: OPENED_BY_TXN',
    },
    systemOutput: {
      status: 'TRANSACTION_COMPLETE // READY_FOR_NEXT_CUSTOMER',
      receiptCut: 'PARTIAL_AUTO_CUT_PERFORMED',
      offlineResilience: '100% OPERATIONAL WITHOUT INTERNET',
    },
  },
];
