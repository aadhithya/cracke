(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js ***!
  \*******************************************************************/
/*! exports provided: ion_menu, ion_menu_button, ion_menu_controller, ion_menu_toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_button", function() { return MenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_controller", function() { return MenuController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_toggle", function() { return MenuToggle; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
/* harmony import */ var _index_624eea58_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm/index-624eea58.js");
/* harmony import */ var _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-1e5940d5.js */ "./node_modules/@ionic/core/dist/esm/index-1e5940d5.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
/* harmony import */ var _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cubic-bezier-2812fda3.js */ "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js");









const Menu = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.lastOnEnd = 0;
        this.blocker = _index_624eea58_js__WEBPACK_IMPORTED_MODULE_4__["GESTURE_CONTROLLER"].createBlocker({ disableScroll: true });
        this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        this.isAnimating = false;
        this._isOpen = false;
        this.isPaneVisible = false;
        this.isEndSide = false;
        /**
         * If `true`, the menu is disabled.
         */
        this.disabled = false;
        /**
         * Which side of the view the menu should be placed.
         */
        this.side = 'start';
        /**
         * If `true`, swiping the menu is enabled.
         */
        this.swipeGesture = true;
        /**
         * The edge threshold for dragging the menu open.
         * If a drag/swipe happens over this value, the menu is not triggered.
         */
        this.maxEdgeStart = 50;
        this.ionWillOpen = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionWillOpen", 7);
        this.ionWillClose = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionWillClose", 7);
        this.ionDidOpen = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionDidOpen", 7);
        this.ionDidClose = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionDidClose", 7);
        this.ionMenuChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionMenuChange", 7);
    }
    typeChanged(type, oldType) {
        const contentEl = this.contentEl;
        if (contentEl) {
            if (oldType !== undefined) {
                contentEl.classList.remove(`menu-content-${oldType}`);
            }
            contentEl.classList.add(`menu-content-${type}`);
            contentEl.removeAttribute('style');
        }
        if (this.menuInnerEl) {
            // Remove effects of previous animations
            this.menuInnerEl.removeAttribute('style');
        }
        this.animation = undefined;
    }
    disabledChanged() {
        this.updateState();
        this.ionMenuChange.emit({
            disabled: this.disabled,
            open: this._isOpen
        });
    }
    sideChanged() {
        this.isEndSide = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.side);
    }
    swipeGestureChanged() {
        this.updateState();
    }
    async connectedCallback() {
        if (this.type === undefined) {
            this.type = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('menuType', this.mode === 'ios' ? 'reveal' : 'overlay');
        }
        const el = this.el;
        const parent = el.parentNode;
        if (this.contentId === undefined) {
            console.warn(`[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:
BEFORE:
  <ion-menu>...</ion-menu>
  <div main>...</div>

AFTER:
  <ion-menu contentId="my-content"></ion-menu>
  <div id="my-content">...</div>
`);
        }
        const content = this.contentId !== undefined
            ? document.getElementById(this.contentId)
            : parent && parent.querySelector && parent.querySelector('[main]');
        if (!content || !content.tagName) {
            // requires content element
            console.error('Menu: must have a "content" element to listen for drag events on.');
            return;
        }
        this.contentEl = content;
        // add menu's content classes
        content.classList.add('menu-content');
        this.typeChanged(this.type, undefined);
        this.sideChanged();
        // register this menu with the app's menu controller
        _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._register(this);
        this.gesture = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm/index-624eea58.js"))).createGesture({
            el: document,
            gestureName: 'menu-swipe',
            gesturePriority: 30,
            threshold: 10,
            canStart: ev => this.canStart(ev),
            onWillStart: () => this.onWillStart(),
            onStart: () => this.onStart(),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.updateState();
    }
    async componentDidLoad() {
        this.ionMenuChange.emit({ disabled: this.disabled, open: this._isOpen });
        this.updateState();
    }
    disconnectedCallback() {
        this.blocker.destroy();
        _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._unregister(this);
        if (this.animation) {
            this.animation.destroy();
        }
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
        this.animation = undefined;
        this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
    }
    onSplitPaneChanged(ev) {
        this.isPaneVisible = ev.detail.isPane(this.el);
        this.updateState();
    }
    onBackdropClick(ev) {
        if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
            const shouldClose = (ev.composedPath)
                ? !ev.composedPath().includes(this.menuInnerEl)
                : false;
            if (shouldClose) {
                ev.preventDefault();
                ev.stopPropagation();
                this.close();
            }
        }
    }
    /**
     * Returns `true` is the menu is open.
     */
    isOpen() {
        return Promise.resolve(this._isOpen);
    }
    /**
     * Returns `true` is the menu is active.
     *
     * A menu is active when it can be opened or closed, meaning it's enabled
     * and it's not part of a `ion-split-pane`.
     */
    isActive() {
        return Promise.resolve(this._isActive());
    }
    /**
     * Opens the menu. If the menu is already open or it can't be opened,
     * it returns `false`.
     */
    open(animated = true) {
        return this.setOpen(true, animated);
    }
    /**
     * Closes the menu. If the menu is already closed or it can't be closed,
     * it returns `false`.
     */
    close(animated = true) {
        return this.setOpen(false, animated);
    }
    /**
     * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
     * If the operation can't be completed successfully, it returns `false`.
     */
    toggle(animated = true) {
        return this.setOpen(!this._isOpen, animated);
    }
    /**
     * Opens or closes the button.
     * If the operation can't be completed successfully, it returns `false`.
     */
    setOpen(shouldOpen, animated = true) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._setOpen(this, shouldOpen, animated);
    }
    async _setOpen(shouldOpen, animated = true) {
        // If the menu is disabled or it is currently being animated, let's do nothing
        if (!this._isActive() || this.isAnimating || shouldOpen === this._isOpen) {
            return false;
        }
        this.beforeAnimation(shouldOpen);
        await this.loadAnimation();
        await this.startAnimation(shouldOpen, animated);
        this.afterAnimation(shouldOpen);
        return true;
    }
    async loadAnimation() {
        // Menu swipe animation takes the menu's inner width as parameter,
        // If `offsetWidth` changes, we need to create a new animation.
        const width = this.menuInnerEl.offsetWidth;
        if (width === this.width && this.animation !== undefined) {
            return;
        }
        this.width = width;
        // Destroy existing animation
        if (this.animation) {
            this.animation.destroy();
            this.animation = undefined;
        }
        // Create new animation
        this.animation = await _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._createAnimation(this.type, this);
        if (!_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true)) {
            this.animation.duration(0);
        }
        this.animation.fill('both');
    }
    async startAnimation(shouldOpen, animated) {
        const isReversed = !shouldOpen;
        const ani = this.animation
            .direction((isReversed) ? 'reverse' : 'normal')
            .easing((isReversed) ? 'cubic-bezier(0.4, 0.0, 0.6, 1)' : 'cubic-bezier(0.0, 0.0, 0.2, 1)');
        if (animated) {
            await ani.playAsync();
        }
        else {
            ani.playSync();
        }
    }
    _isActive() {
        return !this.disabled && !this.isPaneVisible;
    }
    canSwipe() {
        return this.swipeGesture && !this.isAnimating && this._isActive();
    }
    canStart(detail) {
        if (!this.canSwipe()) {
            return false;
        }
        if (this._isOpen) {
            return true;
            // TODO error
        }
        else if (_index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._getOpenSync()) {
            return false;
        }
        return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
    }
    onWillStart() {
        this.beforeAnimation(!this._isOpen);
        return this.loadAnimation();
    }
    onStart() {
        if (!this.isAnimating || !this.animation) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(false, 'isAnimating has to be true');
            return;
        }
        // the cloned animation should not use an easing curve during seek
        this.animation
            .direction((this._isOpen) ? 'reverse' : 'normal')
            .progressStart(true);
    }
    onMove(detail) {
        if (!this.isAnimating || !this.animation) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(false, 'isAnimating has to be true');
            return;
        }
        const delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
        const stepValue = delta / this.width;
        this.animation.progressStep(stepValue);
    }
    onEnd(detail) {
        if (!this.isAnimating || !this.animation) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(false, 'isAnimating has to be true');
            return;
        }
        const isOpen = this._isOpen;
        const isEndSide = this.isEndSide;
        const delta = computeDelta(detail.deltaX, isOpen, isEndSide);
        const width = this.width;
        const stepValue = delta / width;
        const velocity = detail.velocityX;
        const z = width / 2.0;
        const shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
        const shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
        const shouldComplete = isOpen
            ? isEndSide ? shouldCompleteRight : shouldCompleteLeft
            : isEndSide ? shouldCompleteLeft : shouldCompleteRight;
        let shouldOpen = !isOpen && shouldComplete;
        if (isOpen && !shouldComplete) {
            shouldOpen = true;
        }
        this.lastOnEnd = detail.timeStamp;
        // Account for rounding errors in JS
        let newStepValue = (shouldComplete) ? 0.001 : -0.001;
        /**
         * TODO: stepValue can sometimes return a negative
         * value, but you can't have a negative time value
         * for the cubic bezier curve (at least with web animations)
         * Not sure if the negative step value is an error or not
         */
        const adjustedStepValue = (stepValue <= 0) ? 0.01 : stepValue;
        /**
         * Animation will be reversed here, so need to
         * reverse the easing curve as well
         *
         * Additionally, we need to account for the time relative
         * to the new easing curve, as `stepValue` is going to be given
         * in terms of a linear curve.
         */
        newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.4, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.6, 1), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 1), Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, adjustedStepValue, 1));
        this.animation
            .easing('cubic-bezier(0.4, 0.0, 0.6, 1)')
            .onFinish(() => this.afterAnimation(shouldOpen), { oneTimeCallback: true })
            .progressEnd(shouldComplete ? 1 : 0, newStepValue, 300);
    }
    beforeAnimation(shouldOpen) {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(!this.isAnimating, '_before() should not be called while animating');
        // this places the menu into the correct location before it animates in
        // this css class doesn't actually kick off any animations
        this.el.classList.add(SHOW_MENU);
        if (this.backdropEl) {
            this.backdropEl.classList.add(SHOW_BACKDROP);
        }
        this.blocker.block();
        this.isAnimating = true;
        if (shouldOpen) {
            this.ionWillOpen.emit();
        }
        else {
            this.ionWillClose.emit();
        }
    }
    afterAnimation(isOpen) {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.isAnimating, '_before() should be called while animating');
        // keep opening/closing the menu disabled for a touch more yet
        // only add listeners/css if it's enabled and isOpen
        // and only remove listeners/css if it's not open
        // emit opened/closed events
        this._isOpen = isOpen;
        this.isAnimating = false;
        if (!this._isOpen) {
            this.blocker.unblock();
        }
        if (isOpen) {
            // add css class
            if (this.contentEl) {
                this.contentEl.classList.add(MENU_CONTENT_OPEN);
            }
            // emit open event
            this.ionDidOpen.emit();
        }
        else {
            // remove css classes
            this.el.classList.remove(SHOW_MENU);
            if (this.contentEl) {
                this.contentEl.classList.remove(MENU_CONTENT_OPEN);
            }
            if (this.backdropEl) {
                this.backdropEl.classList.remove(SHOW_BACKDROP);
            }
            if (this.animation) {
                this.animation.stop();
            }
            // emit close event
            this.ionDidClose.emit();
        }
    }
    updateState() {
        const isActive = this._isActive();
        if (this.gesture) {
            this.gesture.setDisabled(!isActive || !this.swipeGesture);
        }
        // Close menu immediately
        if (!isActive && this._isOpen) {
            // close if this menu is open, and should not be enabled
            this.forceClosing();
        }
        if (!this.disabled) {
            _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._setActiveMenu(this);
        }
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(!this.isAnimating, 'can not be animating');
    }
    forceClosing() {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this._isOpen, 'menu cannot be closed');
        this.isAnimating = true;
        const ani = this.animation.direction('reverse');
        ani.playSync();
        this.afterAnimation(false);
    }
    render() {
        const { isEndSide, type, disabled, mode, isPaneVisible } = this;
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "navigation", class: {
                [mode]: true,
                [`menu-type-${type}`]: true,
                'menu-enabled': !disabled,
                'menu-side-end': isEndSide,
                'menu-side-start': !isEndSide,
                'menu-pane-visible': isPaneVisible
            } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "menu-inner", ref: el => this.menuInnerEl = el }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { ref: el => this.backdropEl = el, class: "menu-backdrop", tappable: false, stopPropagation: false })));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "type": ["typeChanged"],
        "disabled": ["disabledChanged"],
        "side": ["sideChanged"],
        "swipeGesture": ["swipeGestureChanged"]
    }; }
    static get style() { return ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}"; }
};
const computeDelta = (deltaX, isOpen, isEndSide) => {
    return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
};
const checkEdgeSide = (win, posX, isEndSide, maxEdgeStart) => {
    if (isEndSide) {
        return posX >= win.innerWidth - maxEdgeStart;
    }
    else {
        return posX <= maxEdgeStart;
    }
};
const SHOW_MENU = 'show-menu';
const SHOW_BACKDROP = 'show-backdrop';
const MENU_CONTENT_OPEN = 'menu-content-open';

// Given a menu, return whether or not the menu toggle should be visible
const updateVisibility = async (menu) => {
    const menuEl = await _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].get(menu);
    return !!(menuEl && await menuEl.isActive());
};

const MenuButton = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visible = false;
        /**
         * If `true`, the user cannot interact with the menu button.
         */
        this.disabled = false;
        /**
         * Automatically hides the menu button when the corresponding menu is not active
         */
        this.autoHide = true;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.onClick = async () => {
            return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].toggle(this.menu);
        };
    }
    componentDidLoad() {
        this.visibilityChanged();
    }
    async visibilityChanged() {
        this.visible = await updateVisibility(this.menu);
    }
    render() {
        const { color, disabled } = this;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const menuIcon = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('menuIcon', 'menu');
        const hidden = this.autoHide && !this.visible;
        const attrs = {
            type: this.type
        };
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, "aria-disabled": disabled ? 'true' : null, "aria-hidden": hidden ? 'true' : null, class: Object.assign(Object.assign({ [mode]: true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["c"])(color)), { 'button': true, 'menu-button-hidden': hidden, 'menu-button-disabled': disabled, 'ion-activatable': true, 'ion-focusable': true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", Object.assign({}, attrs, { disabled: disabled, class: "button-native" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { icon: menuIcon, mode: mode, lazy: false })), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", { type: "unbounded" }))));
    }
    static get style() { return ":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.activated){opacity:.4}\@media (any-hover:hover){:host(:hover){opacity:.6}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.1)}"; }
};

const MenuController = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Open the menu. If a menu is not provided then it will open the first
     * menu found. If the specified menu is `start` or `end`, then it will open
     * the enabled menu on that side. Otherwise, it will try to find the menu
     * using the menu's `id` property. If a menu is not found then it will
     * return `false`.
     *
     * @param menu The menuId or side of the menu to open.
     */
    open(menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].open(menu);
    }
    /**
     * Close the menu. If a menu is specified, it will close that menu.
     * If no menu is specified, then it will close any menu that is open.
     * If it does not find any open menus, it will return `false`.
     *
     * @param menu The menuId or side of the menu to close.
     */
    close(menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].close(menu);
    }
    /**
     * Toggle the menu open or closed. If the menu is already open, it will try to
     * close the menu, otherwise it will try to open it. Returns `false` if
     * a menu is not found.
     *
     * @param menu The menuId or side of the menu to toggle.
     */
    toggle(menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].toggle(menu);
    }
    /**
     * Enable or disable a menu. Disabling a menu will not allow gestures
     * for that menu or any calls to open it. This is useful when there are
     * multiple menus on the same side and only one of them should be allowed
     * to open. Enabling a menu will automatically disable all other menus
     * on that side.
     *
     * @param enable If `true`, the menu should be enabled.
     * @param menu The menuId or side of the menu to enable or disable.
     */
    enable(enable, menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].enable(enable, menu);
    }
    /**
     * Enable or disable the ability to swipe open the menu.
     *
     * @param enable If `true`, the menu swipe gesture should be enabled.
     * @param menu The menuId or side of the menu to enable or disable the swipe gesture on.
     */
    swipeGesture(enable, menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].swipeGesture(enable, menu);
    }
    /**
     * Get whether or not the menu is open. Returns `true` if the specified
     * menu is open. If a menu is not specified, it will return `true` if
     * any menu is currently open.
     *
     * @param menu The menuId or side of the menu that is being checked.
     */
    isOpen(menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].isOpen(menu);
    }
    /**
     * Get whether or not the menu is enabled. Returns `true` if the
     * specified menu is enabled. Returns `false` if a menu is disabled
     * or not found.
     *
     * @param menu The menuId or side of the menu that is being checked.
     */
    isEnabled(menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].isEnabled(menu);
    }
    /**
     * Get a menu instance. If a menu is not provided then it will return the first
     * menu found. If the specified menu is `start` or `end`, then it will return the
     * enabled menu on that side. Otherwise, it will try to find the menu using the menu's
     * `id` property. If a menu is not found then it will return `null`.
     *
     * @param menu The menuId or side of the menu.
     */
    get(menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].get(menu);
    }
    /**
     * Get the instance of the opened menu. Returns `null` if a menu is not found.
     */
    getOpen() {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].getOpen();
    }
    /**
     * Get all menu instances.
     */
    getMenus() {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].getMenus();
    }
    /**
     * Get whether or not a menu is animating. Returns `true` if any
     * menu is currently animating.
     */
    isAnimating() {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].isAnimating();
    }
    /**
     * Registers a new animation that can be used with any `ion-menu` by
     * passing the name of the animation in its `type` property.
     *
     * @param name The name of the animation to register.
     * @param animation The animation function to register.
     */
    async registerAnimation(name, animation) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].registerAnimation(name, animation);
    }
};

const MenuToggle = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visible = false;
        /**
         * Automatically hides the content when the corresponding menu is not active.
         *
         * By default, it's `true`. Change it to `false` in order to
         * keep `ion-menu-toggle` always visible regardless the state of the menu.
         */
        this.autoHide = true;
        this.onClick = () => {
            return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].toggle(this.menu);
        };
    }
    connectedCallback() {
        this.visibilityChanged();
    }
    async visibilityChanged() {
        this.visible = await updateVisibility(this.menu);
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const hidden = this.autoHide && !this.visible;
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
                [mode]: true,
                'menu-toggle-hidden': hidden,
            } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
    static get style() { return ":host(.menu-toggle-hidden){display:none}"; }
};




/***/ })

}]);
//# sourceMappingURL=37-es2015.js.map