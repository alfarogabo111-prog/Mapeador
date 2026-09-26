/**
 * GG KEYMAPPER PRO 3.2 - Advanced Keyboard & Mouse Engine
 * Compatible with Capacitor, Android WebViews, and GitHub Actions CI/CD
 */

(function () {
  'use strict';

  // --- STATE & PROFILES ---
  const DEFAULT_PROFILES = {
    freefire: [
      { id: 'btn_dpad', key: 'WASD', type: 'dpad', label: 'Movimiento', x: 18.5, y: 72.0, size: 100, opacity: 85 },
      { id: 'btn_pov', key: 'MIRA', type: 'pov', label: 'Cámara POV', x: 68.0, y: 48.0, size: 80, opacity: 70 },
      { id: 'btn_fire', key: 'L-Click', code: 'Mouse0', type: 'fire', label: 'Disparo', x: 86.5, y: 64.0, size: 68, opacity: 90 },
      { id: 'btn_aim', key: 'R-Click', code: 'Mouse2', type: 'standard', label: 'Mirilla ADS', x: 82.0, y: 42.0, size: 55, opacity: 85 },
      { id: 'btn_jump', key: 'SPACE', code: 'Space', type: 'standard', label: 'Saltar', x: 92.0, y: 48.0, size: 55, opacity: 85 },
      { id: 'btn_crouch', key: 'C', code: 'KeyC', type: 'standard', label: 'Agacharse', x: 89.0, y: 78.0, size: 52, opacity: 85 },
      { id: 'btn_prone', key: 'Z', code: 'KeyZ', type: 'standard', label: 'Tirarse', x: 80.5, y: 82.0, size: 50, opacity: 80 },
      { id: 'btn_reload', key: 'R', code: 'KeyR', type: 'standard', label: 'Recargar', x: 74.0, y: 28.0, size: 50, opacity: 85 },
      { id: 'btn_sprint', key: 'SHIFT', code: 'ShiftLeft', type: 'standard', label: 'Correr', x: 26.0, y: 52.0, size: 48, opacity: 80 },
      { id: 'btn_interact', key: 'F', code: 'KeyF', type: 'standard', label: 'Saquear / Usar', x: 64.0, y: 32.0, size: 48, opacity: 85 },
      { id: 'btn_weapon1', key: '1', code: 'Digit1', type: 'standard', label: 'Arma 1', x: 52.0, y: 15.0, size: 52, opacity: 85 },
      { id: 'btn_weapon2', key: '2', code: 'Digit2', type: 'standard', label: 'Arma 2', x: 64.0, y: 15.0, size: 52, opacity: 85 },
      { id: 'btn_medkit', key: '4', code: 'Digit4', type: 'standard', label: 'Botiquín', x: 12.0, y: 42.0, size: 48, opacity: 80 },
      { id: 'btn_backpack', key: 'TAB', code: 'Tab', type: 'standard', label: 'Mochila', x: 8.0, y: 82.0, size: 48, opacity: 80 },
      { id: 'btn_map', key: 'M', code: 'KeyM', type: 'standard', label: 'Mapa', x: 88.0, y: 12.0, size: 48, opacity: 80 }
    ],
    pubg: [
      { id: 'btn_dpad', key: 'WASD', type: 'dpad', label: 'Joystick', x: 16.0, y: 70.0, size: 105, opacity: 85 },
      { id: 'btn_pov', key: 'MIRA', type: 'pov', label: 'Cámara 360', x: 70.0, y: 45.0, size: 85, opacity: 70 },
      { id: 'btn_fire', key: 'L-Click', code: 'Mouse0', type: 'fire', label: 'Fuego', x: 88.0, y: 62.0, size: 70, opacity: 90 },
      { id: 'btn_aim', key: 'R-Click', code: 'Mouse2', type: 'standard', label: 'Mira Óptica', x: 84.0, y: 38.0, size: 55, opacity: 85 },
      { id: 'btn_jump', key: 'SPACE', code: 'Space', type: 'standard', label: 'Saltar/Bóveda', x: 92.0, y: 46.0, size: 54, opacity: 85 },
      { id: 'btn_crouch', key: 'C', code: 'KeyC', type: 'standard', label: 'Agacharse', x: 90.0, y: 76.0, size: 52, opacity: 85 },
      { id: 'btn_prone', key: 'Z', code: 'KeyZ', type: 'standard', label: 'Cuerpo a Tierra', x: 81.0, y: 80.0, size: 50, opacity: 80 },
      { id: 'btn_reload', key: 'R', code: 'KeyR', type: 'standard', label: 'Recargar', x: 76.0, y: 26.0, size: 50, opacity: 85 },
      { id: 'btn_lean_l', key: 'Q', code: 'KeyQ', type: 'standard', label: 'Asomar Izq', x: 26.0, y: 36.0, size: 46, opacity: 85 },
      { id: 'btn_lean_r', key: 'E', code: 'KeyE', type: 'standard', label: 'Asomar Der', x: 34.0, y: 36.0, size: 46, opacity: 85 },
      { id: 'btn_interact', key: 'F', code: 'KeyF', type: 'standard', label: 'Abrir Puerta', x: 62.0, y: 32.0, size: 48, opacity: 85 }
    ],
    codm: [
      { id: 'btn_dpad', key: 'WASD', type: 'dpad', label: 'D-Pad Sprint', x: 17.0, y: 72.0, size: 100, opacity: 85 },
      { id: 'btn_pov', key: 'MIRA', type: 'pov', label: 'Look POV', x: 72.0, y: 48.0, size: 85, opacity: 70 },
      { id: 'btn_fire', key: 'L-Click', code: 'Mouse0', type: 'fire', label: 'Disparo Cadera', x: 86.0, y: 65.0, size: 68, opacity: 90 },
      { id: 'btn_aim', key: 'R-Click', code: 'Mouse2', type: 'standard', label: 'ADS Táctico', x: 80.0, y: 40.0, size: 55, opacity: 85 },
      { id: 'btn_jump', key: 'SPACE', code: 'Space', type: 'standard', label: 'Slide / Saltar', x: 92.0, y: 50.0, size: 55, opacity: 85 },
      { id: 'btn_slide', key: 'C', code: 'KeyC', type: 'standard', label: 'Deslizarse', x: 88.0, y: 78.0, size: 52, opacity: 85 },
      { id: 'btn_reload', key: 'R', code: 'KeyR', type: 'standard', label: 'Recarga Rápida', x: 74.0, y: 26.0, size: 50, opacity: 85 },
      { id: 'btn_grenade', key: 'G', code: 'KeyG', type: 'standard', label: 'Granada', x: 64.0, y: 78.0, size: 48, opacity: 80 }
    ],
    genshin: [
      { id: 'btn_dpad', key: 'WASD', type: 'dpad', label: 'Caminar/Correr', x: 18.0, y: 70.0, size: 100, opacity: 85 },
      { id: 'btn_pov', key: 'MIRA', type: 'pov', label: 'Cámara Libre', x: 65.0, y: 50.0, size: 85, opacity: 70 },
      { id: 'btn_fire', key: 'L-Click', code: 'Mouse0', type: 'fire', label: 'Ataque Normal', x: 88.0, y: 74.0, size: 70, opacity: 90 },
      { id: 'btn_skill', key: 'E', code: 'KeyE', type: 'standard', label: 'Habilidad Elemental', x: 80.0, y: 56.0, size: 55, opacity: 90 },
      { id: 'btn_burst', key: 'Q', code: 'KeyQ', type: 'standard', label: 'Definitiva (Ulti)', x: 72.0, y: 40.0, size: 55, opacity: 90 },
      { id: 'btn_dash', key: 'R-Click', code: 'Mouse2', type: 'standard', label: 'Sprint / Esquivar', x: 88.0, y: 50.0, size: 55, opacity: 85 },
      { id: 'btn_jump', key: 'SPACE', code: 'Space', type: 'standard', label: 'Saltar/Escalar', x: 94.0, y: 62.0, size: 52, opacity: 85 },
      { id: 'btn_char1', key: '1', code: 'Digit1', type: 'standard', label: 'Personaje 1', x: 92.0, y: 16.0, size: 45, opacity: 85 },
      { id: 'btn_char2', key: '2', code: 'Digit2', type: 'standard', label: 'Personaje 2', x: 92.0, y: 24.0, size: 45, opacity: 85 },
      { id: 'btn_char3', key: '3', code: 'Digit3', type: 'standard', label: 'Personaje 3', x: 92.0, y: 32.0, size: 45, opacity: 85 }
    ],
    minecraft: [
      { id: 'btn_dpad', key: 'WASD', type: 'dpad', label: 'Mover Steve', x: 18.0, y: 72.0, size: 100, opacity: 85 },
      { id: 'btn_pov', key: 'MIRA', type: 'pov', label: 'Mirar / Orientar', x: 68.0, y: 48.0, size: 85, opacity: 70 },
      { id: 'btn_fire', key: 'L-Click', code: 'Mouse0', type: 'fire', label: 'Romper / Golpear', x: 88.0, y: 68.0, size: 68, opacity: 90 },
      { id: 'btn_place', key: 'R-Click', code: 'Mouse2', type: 'standard', label: 'Colocar Bloque', x: 82.0, y: 46.0, size: 60, opacity: 85 },
      { id: 'btn_jump', key: 'SPACE', code: 'Space', type: 'standard', label: 'Saltar', x: 92.0, y: 52.0, size: 55, opacity: 85 },
      { id: 'btn_sneak', key: 'SHIFT', code: 'ShiftLeft', type: 'standard', label: 'Agacharse', x: 18.0, y: 48.0, size: 48, opacity: 80 },
      { id: 'btn_inv', key: 'E', code: 'KeyE', type: 'standard', label: 'Inventario', x: 50.0, y: 88.0, size: 50, opacity: 85 }
    ],
    custom: []
  };

  // App settings state
  let appSettings = {
    currentProfile: 'freefire',
    sensX: 2.5,
    sensY: 2.0,
    smoothing: 4,
    invertY: false,
    mouseAccel: true,
    pointerLockKey: '`',
    fireRate: 15,
    overlayOpacity: 75,
    vibration: true,
    gridVisible: true
  };

  let activeKeys = [];
  let selectedNodeId = null;
  let isListeningKey = false;
  let isPointerLocked = false;
  let rapidFireInterval = null;

  // Touch engine telemetry
  let activeTouchCount = 0;
  let lastTouchPos = { x: 0, y: 0 };
  let frameCount = 0;
  let lastFpsTime = performance.now();

  // --- DOM ELEMENTS ---
  const el = {
    tabs: document.querySelectorAll('.tab-btn'),
    tabPanels: document.querySelectorAll('.tab-panel'),
    profileSelector: document.getElementById('profileSelector'),
    btnSaveProfile: document.getElementById('btnSaveProfile'),
    btnExportProfile: document.getElementById('btnExportProfile'),
    gameViewport: document.getElementById('gameViewport'),
    viewportBackdrop: document.getElementById('viewportBackdrop'),
    viewportGrid: document.getElementById('viewportGrid'),
    keyNodesContainer: document.getElementById('keyNodesContainer'),
    floatingBall: document.getElementById('floatingBall'),
    inspectorPanel: document.getElementById('inspectorPanel'),
    btnCloseInspector: document.getElementById('btnCloseInspector'),
    keyBindBox: document.getElementById('keyBindBox'),
    bindBoxText: document.getElementById('bindBoxText'),
    nodeTypeSelect: document.getElementById('nodeTypeSelect'),
    nodeLabelInput: document.getElementById('nodeLabelInput'),
    nodePosXInput: document.getElementById('nodePosXInput'),
    nodePosYInput: document.getElementById('nodePosYInput'),
    nodeSizeInput: document.getElementById('nodeSizeInput'),
    nodeOpacityInput: document.getElementById('nodeOpacityInput'),
    btnDeleteNode: document.getElementById('btnDeleteNode'),
    btnApplyNode: document.getElementById('btnApplyNode'),
    btnAddKey: document.getElementById('btnAddKey'),
    btnAddDpad: document.getElementById('btnAddDpad'),
    btnAddPov: document.getElementById('btnAddPov'),
    btnAddFire: document.getElementById('btnAddFire'),
    btnToggleGrid: document.getElementById('btnToggleGrid'),
    btnResetLayout: document.getElementById('btnResetLayout'),
    bgUploadInput: document.getElementById('bgUploadInput'),
    // Settings elements
    sliderSensX: document.getElementById('sliderSensX'),
    valSensX: document.getElementById('valSensX'),
    sliderSensY: document.getElementById('sliderSensY'),
    valSensY: document.getElementById('valSensY'),
    sliderSmoothing: document.getElementById('sliderSmoothing'),
    valSmoothing: document.getElementById('valSmoothing'),
    chkInvertY: document.getElementById('chkInvertY'),
    chkMouseAccel: document.getElementById('chkMouseAccel'),
    selPointerLockKey: document.getElementById('selPointerLockKey'),
    sliderFireRate: document.getElementById('sliderFireRate'),
    valFireRate: document.getElementById('valFireRate'),
    sliderOverlayOpacity: document.getElementById('sliderOverlayOpacity'),
    valOverlayOpacity: document.getElementById('valOverlayOpacity'),
    chkVibration: document.getElementById('chkVibration'),
    // Arena
    arenaSurface: document.getElementById('arenaSurface'),
    arenaFps: document.getElementById('arenaFps'),
    arenaActiveTouches: document.getElementById('arenaActiveTouches'),
    arenaCoords: document.getElementById('arenaCoords'),
    logStream: document.getElementById('logStream'),
    btnClearLogs: document.getElementById('btnClearLogs'),
    // Telemetry
    telemKeyboard: document.getElementById('telemKeyboard'),
    txtTelemKeyboard: document.getElementById('txtTelemKeyboard'),
    telemMouse: document.getElementById('telemMouse'),
    txtTelemMouse: document.getElementById('txtTelemMouse'),
    telemPointerLock: document.getElementById('telemPointerLock'),
    txtPointerLock: document.getElementById('txtPointerLock'),
    // Toast
    appToast: document.getElementById('appToast'),
    toastMsg: document.getElementById('toastMsg')
  };

  // --- INITIALIZATION ---
  function init() {
    loadSettings();
    loadProfile(appSettings.currentProfile);
    setupTabs();
    setupCanvasEvents();
    setupFloatingBall();
    setupInspector();
    setupSettingsControls();
    setupArenaEvents();
    setupGlobalInputListeners();
    setupCodeViewers();
    startFpsTracker();
    showToast('GG KeyMapper Pro 3.2 listo.');
  }

  // --- SETTINGS STORAGE ---
  function loadSettings() {
    try {
      const saved = localStorage.getItem('gg_keymapper_settings');
      if (saved) {
        appSettings = Object.assign(appSettings, JSON.parse(saved));
      }
      syncSettingsUI();
    } catch (e) {
      console.warn('Error al cargar configuración:', e);
    }
  }

  function saveSettings() {
    try {
      localStorage.setItem('gg_keymapper_settings', JSON.stringify(appSettings));
      syncSettingsUI();
    } catch (e) {
      console.warn('Error al guardar configuración:', e);
    }
  }

  function syncSettingsUI() {
    if (el.sliderSensX) {
      el.sliderSensX.value = appSettings.sensX;
      el.valSensX.textContent = appSettings.sensX + 'x';
    }
    if (el.sliderSensY) {
      el.sliderSensY.value = appSettings.sensY;
      el.valSensY.textContent = appSettings.sensY + 'x';
    }
    if (el.sliderSmoothing) {
      el.sliderSmoothing.value = appSettings.smoothing;
      el.valSmoothing.textContent = appSettings.smoothing + ' ms';
    }
    if (el.chkInvertY) el.chkInvertY.checked = appSettings.invertY;
    if (el.chkMouseAccel) el.chkMouseAccel.checked = appSettings.mouseAccel;
    if (el.selPointerLockKey) el.selPointerLockKey.value = appSettings.pointerLockKey;
    if (el.sliderFireRate) {
      el.sliderFireRate.value = appSettings.fireRate;
      el.valFireRate.textContent = appSettings.fireRate + ' CPS';
    }
    if (el.sliderOverlayOpacity) {
      el.sliderOverlayOpacity.value = appSettings.overlayOpacity;
      el.valOverlayOpacity.textContent = appSettings.overlayOpacity + '%';
      if (el.keyNodesContainer) {
        el.keyNodesContainer.style.opacity = (appSettings.overlayOpacity / 100);
      }
    }
    if (el.chkVibration) el.chkVibration.checked = appSettings.vibration;
  }

  // --- PROFILE MANAGEMENT ---
  function loadProfile(name) {
    appSettings.currentProfile = name;
    el.profileSelector.value = name;

    const savedCustom = localStorage.getItem(`gg_profile_${name}`);
    if (savedCustom) {
      try {
        activeKeys = JSON.parse(savedCustom);
      } catch (e) {
        activeKeys = JSON.parse(JSON.stringify(DEFAULT_PROFILES[name] || DEFAULT_PROFILES.freefire));
      }
    } else {
      activeKeys = JSON.parse(JSON.stringify(DEFAULT_PROFILES[name] || DEFAULT_PROFILES.freefire));
    }
    renderKeyNodes();
    closeInspector();
    saveSettings();
  }

  function saveCurrentProfile() {
    try {
      localStorage.setItem(`gg_profile_${appSettings.currentProfile}`, JSON.stringify(activeKeys));
      showToast(`Perfil "${appSettings.currentProfile.toUpperCase()}" guardado`);
    } catch (e) {
      showToast('Error al guardar perfil');
    }
  }

  function exportProfileJson() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({
      version: '3.2',
      profile: appSettings.currentProfile,
      settings: appSettings,
      keys: activeKeys
    }, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `gg_keymapper_${appSettings.currentProfile}.json`);
    dlAnchor.click();
    showToast('Archivo JSON descargado');
  }

  // --- TAB NAVIGATION ---
  function setupTabs() {
    el.tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        el.tabs.forEach(b => b.classList.remove('active'));
        el.tabPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetId = btn.getAttribute('data-tab');
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });
  }

  // --- CANVAS & DRAGGABLE KEY NODES ---
  function renderKeyNodes() {
    el.keyNodesContainer.innerHTML = '';

    activeKeys.forEach(node => {
      const nodeEl = document.createElement('div');
      nodeEl.className = `key-node ${node.type} ${node.id === selectedNodeId ? 'selected' : ''}`;
      nodeEl.id = `node_${node.id}`;
      nodeEl.style.left = `${node.x}%`;
      nodeEl.style.top = `${node.y}%`;
      nodeEl.style.width = `${node.size}px`;
      nodeEl.style.height = `${node.size}px`;
      nodeEl.style.opacity = `${(node.opacity || 85) / 100}`;

      if (node.type === 'dpad') {
        nodeEl.innerHTML = `
          <div class="dpad-cross">
            <div class="dpad-key w">W</div>
            <div class="dpad-key a">A</div>
            <div class="dpad-center"></div>
            <div class="dpad-key d">D</div>
            <div class="dpad-key s">S</div>
          </div>
          <span class="key-label-text">${node.label}</span>
        `;
      } else {
        nodeEl.innerHTML = `
          <span class="key-binding-text">${node.key}</span>
          <span class="key-label-text">${node.label}</span>
        `;
      }

      attachDragHandlers(nodeEl, node);
      el.keyNodesContainer.appendChild(nodeEl);
    });
  }

  function attachDragHandlers(element, nodeData) {
    let startX = 0, startY = 0;
    let initialLeftPct = 0, initialTopPct = 0;
    let hasMoved = false;

    const onPointerDown = (e) => {
      e.stopPropagation();
      e.preventDefault();
      hasMoved = false;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      startX = clientX;
      startY = clientY;

      initialLeftPct = nodeData.x;
      initialTopPct = nodeData.y;

      const viewportRect = el.gameViewport.getBoundingClientRect();

      const onPointerMove = (moveEvt) => {
        const curX = moveEvt.touches ? moveEvt.touches[0].clientX : moveEvt.clientX;
        const curY = moveEvt.touches ? moveEvt.touches[0].clientY : moveEvt.clientY;
        const deltaX = curX - startX;
        const deltaY = curY - startY;

        if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
          hasMoved = true;
        }

        const deltaXPct = (deltaX / viewportRect.width) * 100;
        const deltaYPct = (deltaY / viewportRect.height) * 100;

        let newX = Math.max(3, Math.min(97, initialLeftPct + deltaXPct));
        let newY = Math.max(3, Math.min(97, initialTopPct + deltaYPct));

        nodeData.x = parseFloat(newX.toFixed(1));
        nodeData.y = parseFloat(newY.toFixed(1));

        element.style.left = `${nodeData.x}%`;
        element.style.top = `${nodeData.y}%`;

        if (selectedNodeId === nodeData.id) {
          el.nodePosXInput.value = nodeData.x;
          el.nodePosYInput.value = nodeData.y;
        }
      };

      const onPointerUp = () => {
        window.removeEventListener('mousemove', onPointerMove);
        window.removeEventListener('mouseup', onPointerUp);
        window.removeEventListener('touchmove', onPointerMove);
        window.removeEventListener('touchend', onPointerUp);

        if (!hasMoved) {
          openInspector(nodeData);
        } else {
          vibrateDevice(15);
        }
      };

      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('mouseup', onPointerUp);
      window.addEventListener('touchmove', onPointerMove, { passive: false });
      window.addEventListener('touchend', onPointerUp);
    };

    element.addEventListener('mousedown', onPointerDown);
    element.addEventListener('touchstart', onPointerDown, { passive: false });
  }

  // --- FLOATING ASSIST BALL ---
  function setupFloatingBall() {
    let ballX = 85, ballY = 20;
    const savedBall = localStorage.getItem('gg_ball_pos');
    if (savedBall) {
      try {
        const parsed = JSON.parse(savedBall);
        ballX = parsed.x;
        ballY = parsed.y;
      } catch (e) {}
    }
    el.floatingBall.style.left = `${ballX}%`;
    el.floatingBall.style.top = `${ballY}%`;

    let startX = 0, startY = 0;
    let initialX = ballX, initialY = ballY;
    let hasMoved = false;

    const onStart = (e) => {
      e.stopPropagation();
      hasMoved = false;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      startX = clientX;
      startY = clientY;
      initialX = ballX;
      initialY = ballY;

      const rect = el.gameViewport.getBoundingClientRect();

      const onMove = (me) => {
        const cx = me.touches ? me.touches[0].clientX : me.clientX;
        const cy = me.touches ? me.touches[0].clientY : me.clientY;
        const dx = cx - startX;
        const dy = cy - startY;

        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasMoved = true;

        ballX = Math.max(5, Math.min(95, initialX + (dx / rect.width) * 100));
        ballY = Math.max(5, Math.min(95, initialY + (dy / rect.height) * 100));

        el.floatingBall.style.left = `${ballX}%`;
        el.floatingBall.style.top = `${ballY}%`;
      };

      const onEnd = () => {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onEnd);
        window.removeEventListener('touchmove', onMove);
        window.removeEventListener('touchend', onEnd);

        localStorage.setItem('gg_ball_pos', JSON.stringify({ x: ballX, y: ballY }));

        if (!hasMoved) {
          // Toggle quick settings overlay / toast
          vibrateDevice(25);
          showToast('Menú Rápido GG Mouse Pro activado');
        }
      };

      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchmove', onMove, { passive: false });
      window.addEventListener('touchend', onEnd);
    };

    el.floatingBall.addEventListener('mousedown', onStart);
    el.floatingBall.addEventListener('touchstart', onStart, { passive: false });
  }

  // --- INSPECTOR PANEL ---
  function openInspector(node) {
    selectedNodeId = node.id;
    document.querySelectorAll('.key-node').forEach(n => n.classList.remove('selected'));
    const currEl = document.getElementById(`node_${node.id}`);
    if (currEl) currEl.classList.add('selected');

    el.bindBoxText.textContent = node.key || 'Presiona una tecla';
    el.nodeTypeSelect.value = node.type;
    el.nodeLabelInput.value = node.label || '';
    el.nodePosXInput.value = node.x;
    el.nodePosYInput.value = node.y;
    el.nodeSizeInput.value = node.size;
    el.nodeOpacityInput.value = node.opacity || 85;

    el.inspectorPanel.classList.add('open');
  }

  function closeInspector() {
    selectedNodeId = null;
    document.querySelectorAll('.key-node').forEach(n => n.classList.remove('selected'));
    el.inspectorPanel.classList.remove('open');
    isListeningKey = false;
    el.keyBindBox.classList.remove('listening');
  }

  function setupInspector() {
    el.btnCloseInspector.addEventListener('click', closeInspector);

    el.keyBindBox.addEventListener('click', () => {
      isListeningKey = true;
      el.keyBindBox.classList.add('listening');
      el.bindBoxText.textContent = 'Presiona tecla o clic de ratón...';
    });

    el.btnApplyNode.addEventListener('click', () => {
      if (!selectedNodeId) return;
      const node = activeKeys.find(n => n.id === selectedNodeId);
      if (node) {
        node.type = el.nodeTypeSelect.value;
        node.label = el.nodeLabelInput.value.trim() || node.key;
        node.x = parseFloat(el.nodePosXInput.value) || node.x;
        node.y = parseFloat(el.nodePosYInput.value) || node.y;
        node.size = parseInt(el.nodeSizeInput.value, 10) || node.size;
        node.opacity = parseInt(el.nodeOpacityInput.value, 10) || 85;
        renderKeyNodes();
        closeInspector();
        showToast('Botón actualizado');
      }
    });

    el.btnDeleteNode.addEventListener('click', () => {
      if (!selectedNodeId) return;
      activeKeys = activeKeys.filter(n => n.id !== selectedNodeId);
      renderKeyNodes();
      closeInspector();
      showToast('Botón eliminado');
    });
  }

  // --- CANVAS TOOLBAR ACTIONS ---
  function setupCanvasEvents() {
    el.profileSelector.addEventListener('change', (e) => {
      loadProfile(e.target.value);
    });

    el.btnSaveProfile.addEventListener('click', saveCurrentProfile);
    el.btnExportProfile.addEventListener('click', exportProfileJson);

    el.btnAddKey.addEventListener('click', () => {
      const newKey = {
        id: 'btn_' + Date.now(),
        key: 'G',
        code: 'KeyG',
        type: 'standard',
        label: 'Acción',
        x: 50.0,
        y: 50.0,
        size: 55,
        opacity: 85
      };
      activeKeys.push(newKey);
      renderKeyNodes();
      openInspector(newKey);
      showToast('Nueva tecla agregada');
    });

    el.btnAddDpad.addEventListener('click', () => {
      if (activeKeys.some(k => k.type === 'dpad')) {
        showToast('Ya existe un D-Pad en pantalla');
        return;
      }
      const newDpad = {
        id: 'btn_dpad_' + Date.now(),
        key: 'WASD',
        type: 'dpad',
        label: 'Movimiento',
        x: 20.0,
        y: 70.0,
        size: 100,
        opacity: 85
      };
      activeKeys.push(newDpad);
      renderKeyNodes();
      openInspector(newDpad);
      showToast('D-Pad WASD agregado');
    });

    el.btnAddPov.addEventListener('click', () => {
      if (activeKeys.some(k => k.type === 'pov')) {
        showToast('Ya existe una zona de mira POV');
        return;
      }
      const newPov = {
        id: 'btn_pov_' + Date.now(),
        key: 'MIRA',
        type: 'pov',
        label: 'Cámara POV',
        x: 70.0,
        y: 50.0,
        size: 85,
        opacity: 75
      };
      activeKeys.push(newPov);
      renderKeyNodes();
      openInspector(newPov);
      showToast('Zona de mira POV agregada');
    });

    el.btnAddFire.addEventListener('click', () => {
      const newFire = {
        id: 'btn_fire_' + Date.now(),
        key: 'L-Click',
        code: 'Mouse0',
        type: 'fire',
        label: 'Disparo Rápido',
        x: 85.0,
        y: 65.0,
        size: 70,
        opacity: 90
      };
      activeKeys.push(newFire);
      renderKeyNodes();
      openInspector(newFire);
      showToast('Botón de disparo agregado');
    });

    el.btnToggleGrid.addEventListener('click', () => {
      appSettings.gridVisible = !appSettings.gridVisible;
      el.viewportGrid.style.display = appSettings.gridVisible ? 'block' : 'none';
      showToast(appSettings.gridVisible ? 'Cuadrícula activada' : 'Cuadrícula oculta');
    });

    el.btnResetLayout.addEventListener('click', () => {
      if (confirm('¿Restablecer el mapeo de este perfil a sus valores por defecto?')) {
        localStorage.removeItem(`gg_profile_${appSettings.currentProfile}`);
        loadProfile(appSettings.currentProfile);
        showToast('Mapeo restablecido');
      }
    });

    // Custom background image upload
    el.bgUploadInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          el.viewportBackdrop.style.backgroundImage = `url(${event.target.result})`;
          showToast('Fondo de juego cargado correctamente');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // --- SETTINGS CONTROLS ---
  function setupSettingsControls() {
    el.sliderSensX.addEventListener('input', (e) => {
      appSettings.sensX = parseFloat(e.target.value);
      el.valSensX.textContent = appSettings.sensX + 'x';
      saveSettings();
    });

    el.sliderSensY.addEventListener('input', (e) => {
      appSettings.sensY = parseFloat(e.target.value);
      el.valSensY.textContent = appSettings.sensY + 'x';
      saveSettings();
    });

    el.sliderSmoothing.addEventListener('input', (e) => {
      appSettings.smoothing = parseInt(e.target.value, 10);
      el.valSmoothing.textContent = appSettings.smoothing + ' ms';
      saveSettings();
    });

    el.chkInvertY.addEventListener('change', (e) => {
      appSettings.invertY = e.target.checked;
      saveSettings();
    });

    el.chkMouseAccel.addEventListener('change', (e) => {
      appSettings.mouseAccel = e.target.checked;
      saveSettings();
    });

    el.selPointerLockKey.addEventListener('change', (e) => {
      appSettings.pointerLockKey = e.target.value;
      el.txtPointerLock.textContent = `Modo Mira [${appSettings.pointerLockKey}]`;
      saveSettings();
    });

    el.sliderFireRate.addEventListener('input', (e) => {
      appSettings.fireRate = parseInt(e.target.value, 10);
      el.valFireRate.textContent = appSettings.fireRate + ' CPS';
      saveSettings();
    });

    el.sliderOverlayOpacity.addEventListener('input', (e) => {
      appSettings.overlayOpacity = parseInt(e.target.value, 10);
      el.valOverlayOpacity.textContent = appSettings.overlayOpacity + '%';
      if (el.keyNodesContainer) {
        el.keyNodesContainer.style.opacity = (appSettings.overlayOpacity / 100);
      }
      saveSettings();
    });

    el.chkVibration.addEventListener('change', (e) => {
      appSettings.vibration = e.target.checked;
      saveSettings();
    });
  }

  // --- TOUCH SIMULATION & ARENA EVENTS ---
  function setupArenaEvents() {
    el.btnClearLogs.addEventListener('click', () => {
      el.logStream.innerHTML = '<div class="log-entry">[REGISTRO LIMPIO]</div>';
    });

    // Handle clicks/touches directly on the testing arena surface
    el.arenaSurface.addEventListener('mousedown', (e) => {
      const rect = el.arenaSurface.getBoundingClientRect();
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;

      simulateTouchRipple(xPct, yPct, 'Clic Directo');
      logEvent('down', `[TOUCH_DOWN] X: ${xPct.toFixed(1)}% Y: ${yPct.toFixed(1)}%`);
    });

    el.arenaSurface.addEventListener('mousemove', (e) => {
      const rect = el.arenaSurface.getBoundingClientRect();
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;
      el.arenaCoords.textContent = `X: ${xPct.toFixed(1)}% | Y: ${yPct.toFixed(1)}%`;

      if (isPointerLocked) {
        simulatePointerMove(e.movementX, e.movementY);
      }
    });
  }

  function simulateTouchRipple(xPct, yPct, label = '') {
    const ripple = document.createElement('div');
    ripple.className = 'touch-ripple';
    ripple.style.left = `${xPct}%`;
    ripple.style.top = `${yPct}%`;

    el.arenaSurface.appendChild(ripple);
    activeTouchCount++;
    el.arenaActiveTouches.textContent = activeTouchCount;

    if (appSettings.vibration) vibrateDevice(20);

    // Native Bridge dispatch if running in Android app
    if (window.AndroidBridge && window.AndroidBridge.simulateTouchEvent) {
      window.AndroidBridge.simulateTouchEvent('DOWN', xPct, yPct);
    }

    setTimeout(() => {
      ripple.remove();
      activeTouchCount = Math.max(0, activeTouchCount - 1);
      el.arenaActiveTouches.textContent = activeTouchCount;
    }, 600);
  }

  function simulatePointerMove(deltaX, deltaY) {
    if (deltaX === 0 && deltaY === 0) return;

    const multX = appSettings.sensX;
    const multY = appSettings.sensY * (appSettings.invertY ? -1 : 1);

    const povNode = activeKeys.find(k => k.type === 'pov');
    const baseX = povNode ? povNode.x : 70.0;
    const baseY = povNode ? povNode.y : 50.0;

    const offsetX = (deltaX * multX * 0.15);
    const offsetY = (deltaY * multY * 0.15);

    const posX = Math.max(5, Math.min(95, baseX + offsetX));
    const posY = Math.max(5, Math.min(95, baseY + offsetY));

    const trail = document.createElement('div');
    trail.className = 'touch-trail';
    trail.style.left = `${posX}%`;
    trail.style.top = `${posY}%`;
    el.arenaSurface.appendChild(trail);

    setTimeout(() => trail.remove(), 400);

    logEvent('move', `[POV_MOVE] ΔX: ${deltaX > 0 ? '+' : ''}${deltaX} | ΔY: ${deltaY > 0 ? '+' : ''}${deltaY} -> Sens: (${multX}x, ${multY}x)`);
  }

  // --- KEYBOARD & MOUSE CAPTURE ---
  function setupGlobalInputListeners() {
    // Detect mouse presence
    window.addEventListener('mousemove', () => {
      el.telemMouse.classList.add('active');
      el.txtTelemMouse.textContent = 'Ratón: Conectado';
    }, { once: true });

    // Handle Keydown
    window.addEventListener('keydown', (e) => {
      el.telemKeyboard.classList.add('active');
      el.txtTelemKeyboard.textContent = 'Teclado: Conectado';

      // 1. Re-binding capture in inspector
      if (isListeningKey && selectedNodeId) {
        e.preventDefault();
        e.stopPropagation();
        const node = activeKeys.find(n => n.id === selectedNodeId);
        if (node) {
          node.key = formatKeyName(e.code, e.key);
          node.code = e.code;
          el.bindBoxText.textContent = node.key;
          isListeningKey = false;
          el.keyBindBox.classList.remove('listening');
          renderKeyNodes();
          showToast(`Tecla vinculada a: ${node.key}`);
        }
        return;
      }

      // 2. Pointer lock toggle hotkey
      if (e.key === appSettings.pointerLockKey || e.code === appSettings.pointerLockKey) {
        e.preventDefault();
        togglePointerLock();
        return;
      }

      // 3. Match against mapped keys
      const matchedNode = activeKeys.find(n => {
        if (n.type === 'dpad') {
          return ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'].includes(e.code);
        }
        return n.code === e.code || n.key.toUpperCase() === e.key.toUpperCase();
      });

      if (matchedNode) {
        handleNodeActivation(matchedNode, e.code);
      }
    });

    // Mouse button click capture in inspector & in-game
    window.addEventListener('mousedown', (e) => {
      if (isListeningKey && selectedNodeId) {
        e.preventDefault();
        const node = activeKeys.find(n => n.id === selectedNodeId);
        if (node) {
          const btnName = e.button === 0 ? 'L-Click' : e.button === 2 ? 'R-Click' : `Mouse${e.button}`;
          node.key = btnName;
          node.code = `Mouse${e.button}`;
          el.bindBoxText.textContent = node.key;
          isListeningKey = false;
          el.keyBindBox.classList.remove('listening');
          renderKeyNodes();
          showToast(`Botón de ratón vinculado a: ${node.key}`);
        }
      }
    });

    // Pointer Lock Change events
    document.addEventListener('pointerlockchange', () => {
      isPointerLocked = (document.pointerLockElement === el.arenaSurface || document.pointerLockElement === el.gameViewport);
      if (isPointerLocked) {
        el.telemPointerLock.classList.remove('warning');
        el.telemPointerLock.classList.add('active');
        el.txtPointerLock.textContent = 'Modo Mira [ACTIVO - Mover ratón]';
        showToast('Modo Mira Bloqueado. Mueve el ratón para apuntar.');
      } else {
        el.telemPointerLock.classList.remove('active');
        el.telemPointerLock.classList.add('warning');
        el.txtPointerLock.textContent = `Modo Mira [${appSettings.pointerLockKey}]`;
      }
    });
  }

  function togglePointerLock() {
    if (!isPointerLocked) {
      const target = el.arenaSurface.offsetWidth > 0 ? el.arenaSurface : el.gameViewport;
      if (target && target.requestPointerLock) {
        target.requestPointerLock();
      }
    } else {
      if (document.exitPointerLock) {
        document.exitPointerLock();
      }
    }
  }

  function handleNodeActivation(node, codeTriggered) {
    let targetX = node.x;
    let targetY = node.y;

    if (node.type === 'dpad') {
      const step = 6.0;
      if (codeTriggered === 'KeyW' || codeTriggered === 'ArrowUp') targetY -= step;
      if (codeTriggered === 'KeyS' || codeTriggered === 'ArrowDown') targetY += step;
      if (codeTriggered === 'KeyA' || codeTriggered === 'ArrowLeft') targetX -= step;
      if (codeTriggered === 'KeyD' || codeTriggered === 'ArrowRight') targetX += step;
    }

    // Trigger visual touch simulation
    simulateTouchRipple(targetX, targetY, node.label);
    logEvent('key', `[TECLA_DISPARADA] ${node.key} (${node.label}) -> Simulado en X: ${targetX.toFixed(1)}% Y: ${targetY.toFixed(1)}%`);

    // Rapid fire handler
    if (node.type === 'fire') {
      triggerRapidFireBurst(targetX, targetY, node.label);
    }
  }

  function triggerRapidFireBurst(x, y, label) {
    if (rapidFireInterval) clearInterval(rapidFireInterval);
    let count = 0;
    const intervalMs = Math.max(30, Math.floor(1000 / appSettings.fireRate));

    rapidFireInterval = setInterval(() => {
      simulateTouchRipple(x + (Math.random() - 0.5) * 1.5, y + (Math.random() - 0.5) * 1.5, label);
      count++;
      if (count >= 5) {
        clearInterval(rapidFireInterval);
        rapidFireInterval = null;
      }
    }, intervalMs);
  }

  // --- LOG STREAM HELPER ---
  function logEvent(type, text) {
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    const time = new Date().toLocaleTimeString('es-ES', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    entry.textContent = `${time} ${text}`;
    el.logStream.appendChild(entry);
    el.logStream.scrollTop = el.logStream.scrollHeight;
  }

  function formatKeyName(code, key) {
    if (code.startsWith('Key')) return code.replace('Key', '');
    if (code.startsWith('Digit')) return code.replace('Digit', '');
    if (code === 'Space') return 'SPACE';
    if (code.startsWith('Shift')) return 'SHIFT';
    if (code.startsWith('Control')) return 'CTRL';
    if (code.startsWith('Alt')) return 'ALT';
    return key.toUpperCase();
  }

  function vibrateDevice(ms) {
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(ms);
    }
    if (window.AndroidBridge && window.AndroidBridge.vibrate) {
      window.AndroidBridge.vibrate(ms);
    }
  }

  function showToast(msg) {
    el.toastMsg.textContent = msg;
    el.appToast.classList.add('show');
    setTimeout(() => {
      el.appToast.classList.remove('show');
    }, 2800);
  }

  function startFpsTracker() {
    function loop() {
      frameCount++;
      const now = performance.now();
      if (now - lastFpsTime >= 1000) {
        const fps = ((frameCount * 1000) / (now - lastFpsTime)).toFixed(1);
        if (el.arenaFps) el.arenaFps.textContent = fps;
        frameCount = 0;
        lastFpsTime = now;
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  // --- POPULATE CODE VIEWERS & COPY BUTTONS ---
  function setupCodeViewers() {
    const workflowCode = `name: Build Android APK (Capacitor)

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
  workflow_dispatch:

jobs:
  build:
    name: Build Debug APK
    runs-on: ubuntu-latest

    steps:
      - name: 📥 Checkout repository
        uses: actions/checkout@v4

      - name: 🟢 Setup Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: ☕ Setup Java JDK 17
        uses: actions/setup-java@v4
        with:
          distribution: 'temurin'
          java-version: '17'

      - name: 🤖 Setup Android SDK
        uses: android-actions/setup-android@v3

      - name: 📦 Install Node dependencies
        run: |
          npm install

      - name: 🔄 Sync Capacitor Android Platform
        run: |
          if [ ! -d "android" ]; then
            echo "Directorio android no encontrado. Agregando con Capacitor..."
            npx cap add android
          fi
          echo "Sincronizando plataforma Android..."
          npx cap sync android

      - name: 🔑 Grant execute permissions to Gradle wrapper
        run: |
          chmod +x android/gradlew

      - name: 🔨 Build Debug APK with Gradle
        run: |
          cd android
          ./gradlew assembleDebug --no-daemon --stacktrace

      - name: 📤 Upload Debug APK Artifact
        uses: actions/upload-artifact@v4
        with:
          name: gg-keymapper-debug-apk
          path: android/app/build/outputs/apk/debug/app-debug.apk
          retention-days: 14`;

    const packageJsonCode = `{
  "name": "gg-keymapper-pro",
  "version": "3.0.0",
  "description": "Advanced Keyboard and Mouse Keymapper for Android gaming with floating overlay and touch simulation",
  "main": "www/index.html",
  "scripts": {
    "build": "echo 'Web assets prepared in www/'",
    "cap:add": "cap add android",
    "cap:sync": "cap sync android",
    "cap:open": "cap open android"
  },
  "keywords": [
    "keymapper",
    "gaming",
    "android",
    "mouse",
    "keyboard",
    "capacitor",
    "gg-mouse-pro"
  ],
  "author": "GG KeyMapper Team",
  "license": "MIT",
  "dependencies": {
    "@capacitor/android": "^6.1.2",
    "@capacitor/core": "^6.1.2"
  },
  "devDependencies": {
    "@capacitor/cli": "^6.1.2"
  }
}`;

    const capacitorConfigCode = `{
  "appId": "com.aistudio.ggkeymapper.qzmpx",
  "appName": "GG KeyMapper",
  "webDir": "www",
  "bundledWebRuntime": false,
  "server": {
    "androidScheme": "https",
    "cleartext": true
  },
  "android": {
    "allowMixedContent": true,
    "captureInput": true,
    "webContentsDebuggingEnabled": true
  },
  "plugins": {}
}`;

    const elCodeWorkflow = document.getElementById('codeWorkflow');
    const elCodePackage = document.getElementById('codePackage');
    const elCodeCapacitor = document.getElementById('codeCapacitor');

    if (elCodeWorkflow) elCodeWorkflow.textContent = workflowCode;
    if (elCodePackage) elCodePackage.textContent = packageJsonCode;
    if (elCodeCapacitor) elCodeCapacitor.textContent = capacitorConfigCode;

    document.querySelectorAll('.btn-copy-code').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const codeElement = document.getElementById(targetId);
        if (codeElement) {
          navigator.clipboard.writeText(codeElement.textContent).then(() => {
            showToast('Código copiado al portapapeles');
          }).catch(() => {
            showToast('Error al copiar. Selecciona el texto manualmente.');
          });
        }
      });
    });
  }

  // Run on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
