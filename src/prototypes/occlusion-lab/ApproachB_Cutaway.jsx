import React, { useState } from 'react';
import './ApproachB_Cutaway.css';

export default function ApproachB_Cutaway({
  stages,
  occlusionEnabled = true,
  soloLayer = 'all',
}) {
  const [depthOffset, setDepthOffset] = useState(0); // 0 (Surface) -> 50 (IPC) -> 100 (SQLite WAL)

  return (
    <div className={`cutaway-stage ${!occlusionEnabled ? 'cutaway-stage--no-occlusion' : ''}`}>
      {/* Depth Slider Header */}
      <div className="cutaway-nav-bar">
        <div className="cutaway-title-group">
          <span className="cutaway-tag">APPROACH B // STRATIFIED CUTAWAY ASSEMBLY</span>
          <h3 className="cutaway-title">3-Plane Sectional Depth Dissection</h3>
        </div>
        <div className="cutaway-depth-selector">
          <span className="depth-label">DISSECTION DEPTH:</span>
          <button
            type="button"
            className={`depth-btn ${depthOffset === 0 ? 'depth-btn--active' : ''}`}
            onClick={() => setDepthOffset(0)}
          >
            PLANE 01: SURFACE UI
          </button>
          <button
            type="button"
            className={`depth-btn ${depthOffset === 50 ? 'depth-btn--active' : ''}`}
            onClick={() => setDepthOffset(50)}
          >
            PLANE 02: ELECTRON IPC
          </button>
          <button
            type="button"
            className={`depth-btn ${depthOffset === 100 ? 'depth-btn--active' : ''}`}
            onClick={() => setDepthOffset(100)}
          >
            PLANE 03: SQLITE WAL
          </button>
        </div>
      </div>

      <div className="cutaway-viewport">
        {/* =========================================================================
            PLANE 3 (DEEPEST): SQLite WAL Persistence Layer
           ========================================================================= */}
        {(soloLayer === 'all' || soloLayer === 'bg') && (
          <div className="cutaway-plane plane--sqlite">
            <div className="plane-header">
              <span className="plane-num">PLANE 03 // DISK STORAGE</span>
              <span className="plane-tech">SQLITE 3.45 (WAL MODE) &middot; PRAGMA SYNCHRONOUS = NORMAL</span>
            </div>
            <div className="sqlite-table-view">
              <div className="table-header-row">
                <span>ROW_ID</span>
                <span>TABLE</span>
                <span>ACTION</span>
                <span>IMEI_SERIAL</span>
                <span>WAL_PAGE</span>
                <span>COMMIT_TIME</span>
              </div>
              <div className="table-data-row table-data-row--highlight">
                <span className="td-id">#99410</span>
                <span className="td-tbl">imei_inventory</span>
                <span className="td-act">STATUS_CHANGE (IN_STOCK &rarr; SOLD)</span>
                <span className="td-imei terracotta-text">354892091823419</span>
                <span className="td-page">PAGE_148 (4096B)</span>
                <span className="td-time">0.42ms ACID OK</span>
              </div>
              <div className="table-data-row">
                <span className="td-id">#99411</span>
                <span className="td-tbl">sales_ledger</span>
                <span className="td-act">INSERT TXN (ORD-20260922-8419)</span>
                <span className="td-imei">TOTAL: $1,298.99</span>
                <span className="td-page">PAGE_149 (4096B)</span>
                <span className="td-time">0.18ms</span>
              </div>
              <div className="table-data-row">
                <span className="td-id">#99412</span>
                <span className="td-tbl">cash_drawer_log</span>
                <span className="td-act">TRIGGER_PULSE_EVENT</span>
                <span className="td-imei">DRAWER_KICK: 24V_50MS</span>
                <span className="td-page">PAGE_150 (4096B)</span>
                <span className="td-time">0.09ms</span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            PLANE 2 (MIDDLE): Electron Runtime IPC State Machine
           ========================================================================= */}
        {(soloLayer === 'all' || soloLayer === 'engine') && (
          <div
            className="cutaway-plane plane--ipc"
            style={{
              transform: `translate3d(${depthOffset === 100 ? '-35%' : '0'}, 0, 0)`,
              opacity: depthOffset === 100 ? 0.4 : 1,
            }}
          >
            <div className="plane-header">
              <span className="plane-num">PLANE 02 // DESKTOP RUNTIME</span>
              <span className="plane-tech">ELECTRON MAIN PROCESS &middot; ISOLATED IPC BRIDGE</span>
            </div>

            <div className="ipc-pipeline-visualizer">
              <div className="ipc-node">
                <span className="ipc-node-label">USB-HID DRIVER</span>
                <span className="ipc-node-val">Raw Keycodes Received</span>
              </div>
              <span className="ipc-arrow">&rarr;</span>
              <div className="ipc-node ipc-node--active">
                <span className="ipc-node-label">LUHN VALIDATOR</span>
                <span className="ipc-node-val terracotta-text">15-Digit IMEI Confirmed</span>
              </div>
              <span className="ipc-arrow">&rarr;</span>
              <div className="ipc-node">
                <span className="ipc-node-label">CONCURRENCY MUTEX</span>
                <span className="ipc-node-val">Lock Acquired</span>
              </div>
              <span className="ipc-arrow">&rarr;</span>
              <div className="ipc-node">
                <span className="ipc-node-label">PRINTER SPOOLER</span>
                <span className="ipc-node-val">ESC/POS Bytecode</span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            PLANE 1 (FOREGROUND): Cashier Terminal UI with Physical Cutaway Window
           ========================================================================= */}
        {(soloLayer === 'all' || soloLayer === 'bulkhead') && (
          <div
            className={`cutaway-plane plane--surface ${!occlusionEnabled ? 'plane--surface-flat' : ''}`}
            style={{
              transform: `translate3d(${depthOffset === 0 ? '0' : depthOffset === 50 ? '-65%' : '-90%'}, 0, 0)`,
            }}
          >
            {/* Opaque UI Surface Chassis */}
            <div className="surface-terminal-chassis">
              <div className="terminal-top-stripe">
                <span className="terminal-store">GO ALVIN PHONES &middot; TERMINAL A</span>
                <span className="terminal-status">OFFLINE-FIRST ACTIVE</span>
              </div>

              <div className="terminal-body-grid">
                <div className="terminal-cart-col">
                  <div className="cart-title">ACTIVE SALE #8419</div>
                  <div className="cart-item">
                    <span className="ci-name">Samsung Galaxy S24 Ultra (512GB)</span>
                    <span className="ci-price">$1,199.99</span>
                  </div>
                  <div className="cart-imei-tag">
                    <span className="imei-lbl">ATTACHED IMEI:</span>
                    <span className="imei-num terracotta-text">354892091823419</span>
                  </div>
                </div>

                <div className="terminal-numpad-col">
                  <div className="tender-box">
                    <span className="tb-label">TENDER SPLIT:</span>
                    <span className="tb-val">CASH: $400.00 &middot; CARD: $898.99</span>
                  </div>
                  <div className="terminal-action-btn">
                    <span>COMPLETE &amp; PRINT RECEIPT</span>
                  </div>
                </div>
              </div>

              {/* Physical Cutaway Hatch / Window into underlying IPC & SQLite */}
              {occlusionEnabled && (
                <div className="chassis-cutaway-aperture">
                  <div className="cutaway-bevel top-bevel" />
                  <div className="cutaway-hatch-label">
                    <span>&darr; CUTAWAY SECTION: RUNTIME &amp; PERSISTENCE PLANES VISIBLE BENEATH</span>
                  </div>
                  <div className="cutaway-bevel bottom-bevel" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="cutaway-footer-note">
        <span>SPATIAL PRINCIPLE: Peeling the surface UI reveals the physical Electron runtime and local SQLite database operating beneath.</span>
      </div>
    </div>
  );
}
