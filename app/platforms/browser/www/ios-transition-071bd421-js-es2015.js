(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ios-transition-071bd421-js"],{

/***/ "./node_modules/@ionic/core/dist/esm/ios.transition-071bd421.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ios.transition-071bd421.js ***!
  \**********************************************************************/
/*! exports provided: iosTransitionAnimation, shadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosTransitionAnimation", function() { return iosTransitionAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
/* harmony import */ var _index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-6826f2f6.js */ "./node_modules/@ionic/core/dist/esm/index-6826f2f6.js");







const DURATION = 540;
const addSafeArea = (val, side = 'top') => {
    return `calc(${val}px + var(--ion-safe-area-${side}))`;
};
const getClonedElement = (tagName) => {
    return document.querySelector(`${tagName}.ion-cloned-element`);
};
const shadow = (el) => {
    return el.shadowRoot || el;
};
const getLargeTitle = (refEl) => {
    return refEl.querySelector('ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]');
};
const getBackButton = (refEl, backDirection) => {
    const buttonsList = refEl.querySelectorAll('ion-buttons');
    for (const buttons of buttonsList) {
        const parentHeader = buttons.closest('ion-header');
        const activeHeader = parentHeader && !parentHeader.classList.contains('header-collapse-condense-inactive');
        const backButton = buttons.querySelector('ion-back-button');
        const buttonsCollapse = buttons.classList.contains('buttons-collapse');
        if (backButton !== null && ((buttonsCollapse && activeHeader && backDirection) || !buttonsCollapse)) {
            return backButton;
        }
    }
    return null;
};
const createLargeTitleTransition = (rootAnimation, rtl, backDirection, enteringEl, leavingEl) => {
    const enteringBackButton = getBackButton(enteringEl, backDirection);
    const leavingLargeTitle = getLargeTitle(leavingEl);
    const enteringLargeTitle = getLargeTitle(enteringEl);
    const leavingBackButton = getBackButton(leavingEl, backDirection);
    const shouldAnimationForward = enteringBackButton !== null && leavingLargeTitle !== null && !backDirection;
    const shouldAnimationBackward = enteringLargeTitle !== null && leavingBackButton !== null && backDirection;
    if (shouldAnimationForward) {
        animateLargeTitle(rootAnimation, rtl, backDirection, leavingLargeTitle);
        animateBackButton(rootAnimation, rtl, backDirection, enteringBackButton);
    }
    else if (shouldAnimationBackward) {
        animateLargeTitle(rootAnimation, rtl, backDirection, enteringLargeTitle);
        animateBackButton(rootAnimation, rtl, backDirection, leavingBackButton);
    }
    return {
        forward: shouldAnimationForward,
        backward: shouldAnimationBackward
    };
};
const animateBackButton = (rootAnimation, rtl, backDirection, backButtonEl) => {
    const backButtonBounds = backButtonEl.getBoundingClientRect();
    const BACK_BUTTON_START_OFFSET = (rtl) ? `calc(100% - ${backButtonBounds.right + 4}px)` : `${backButtonBounds.left - 4}px`;
    const START_TEXT_TRANSLATE = (rtl) ? '7px' : '-7px';
    const END_TEXT_TRANSLATE = (rtl) ? '-4px' : '4px';
    const ICON_TRANSLATE = (rtl) ? '-4px' : '4px';
    const TEXT_ORIGIN_X = (rtl) ? 'right' : 'left';
    const ICON_ORIGIN_X = (rtl) ? 'left' : 'right';
    const FORWARD_TEXT_KEYFRAMES = [
        { offset: 0, opacity: 0, transform: `translate(${START_TEXT_TRANSLATE}, ${addSafeArea(8)}) scale(2.1)` },
        { offset: 1, opacity: 1, transform: `translate(${END_TEXT_TRANSLATE}, ${addSafeArea(-40)}) scale(1)` }
    ];
    const BACKWARD_TEXT_KEYFRAMES = [
        { offset: 0, opacity: 1, transform: `translate(${END_TEXT_TRANSLATE}, ${addSafeArea(-40)}) scale(1)` },
        { offset: 0.6, opacity: 0 },
        { offset: 1, opacity: 0, transform: `translate(${START_TEXT_TRANSLATE}, ${addSafeArea(8)}) scale(2.1)` }
    ];
    const TEXT_KEYFRAMES = (backDirection) ? BACKWARD_TEXT_KEYFRAMES : FORWARD_TEXT_KEYFRAMES;
    const FORWARD_ICON_KEYFRAMES = [
        { offset: 0, opacity: 0, transform: `translate3d(${ICON_TRANSLATE}, ${addSafeArea(-35)}, 0) scale(0.6)` },
        { offset: 1, opacity: 1, transform: `translate3d(${ICON_TRANSLATE}, ${addSafeArea(-40)}, 0) scale(1)` }
    ];
    const BACKWARD_ICON_KEYFRAMES = [
        { offset: 0, opacity: 1, transform: `translate(${ICON_TRANSLATE}, ${addSafeArea(-40)}) scale(1)` },
        { offset: 0.2, opacity: 0, transform: `translate(${ICON_TRANSLATE}, ${addSafeArea(-35)}) scale(0.6)` },
        { offset: 1, opacity: 0, transform: `translate(${ICON_TRANSLATE}, ${addSafeArea(-35)}) scale(0.6)` }
    ];
    const ICON_KEYFRAMES = (backDirection) ? BACKWARD_ICON_KEYFRAMES : FORWARD_ICON_KEYFRAMES;
    const enteringBackButtonTextAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const enteringBackButtonIconAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const clonedBackButtonEl = getClonedElement('ion-back-button');
    const backButtonTextEl = clonedBackButtonEl.querySelector('.button-text');
    const backButtonIconEl = clonedBackButtonEl.querySelector('ion-icon');
    clonedBackButtonEl.text = backButtonEl.text;
    clonedBackButtonEl.mode = backButtonEl.mode;
    clonedBackButtonEl.icon = backButtonEl.icon;
    clonedBackButtonEl.color = backButtonEl.color;
    clonedBackButtonEl.disabled = backButtonEl.disabled;
    clonedBackButtonEl.style.setProperty('display', 'block');
    clonedBackButtonEl.style.setProperty('position', 'fixed');
    enteringBackButtonIconAnimation.addElement(backButtonIconEl);
    enteringBackButtonTextAnimation.addElement(backButtonTextEl);
    enteringBackButtonTextAnimation
        .beforeStyles({
        'transform-origin': `${TEXT_ORIGIN_X} center`
    })
        .beforeAddWrite(() => {
        backButtonEl.style.setProperty('display', 'none');
        clonedBackButtonEl.style.setProperty(TEXT_ORIGIN_X, BACK_BUTTON_START_OFFSET);
    })
        .afterAddWrite(() => {
        backButtonEl.style.setProperty('display', '');
        clonedBackButtonEl.style.setProperty('display', 'none');
        clonedBackButtonEl.style.removeProperty(TEXT_ORIGIN_X);
    })
        .keyframes(TEXT_KEYFRAMES);
    enteringBackButtonIconAnimation
        .beforeStyles({
        'transform-origin': `${ICON_ORIGIN_X} center`
    })
        .keyframes(ICON_KEYFRAMES);
    rootAnimation.addAnimation([enteringBackButtonTextAnimation, enteringBackButtonIconAnimation]);
};
const animateLargeTitle = (rootAnimation, rtl, backDirection, largeTitleEl) => {
    const largeTitleBounds = largeTitleEl.getBoundingClientRect();
    const TITLE_START_OFFSET = (rtl) ? `calc(100% - ${largeTitleBounds.right}px)` : `${largeTitleBounds.left}px`;
    const START_TRANSLATE = (rtl) ? '-18px' : '18px';
    const ORIGIN_X = (rtl) ? 'right' : 'left';
    const BACKWARDS_KEYFRAMES = [
        { offset: 0, opacity: 0, transform: `translate(${START_TRANSLATE}, ${addSafeArea(0)}) scale(0.49)` },
        { offset: 0.1, opacity: 0 },
        { offset: 1, opacity: 1, transform: `translate(0, ${addSafeArea(49)}) scale(1)` }
    ];
    const FORWARDS_KEYFRAMES = [
        { offset: 0, opacity: 0.99, transform: `translate(0, ${addSafeArea(49)}) scale(1)` },
        { offset: 0.6, opacity: 0 },
        { offset: 1, opacity: 0, transform: `translate(${START_TRANSLATE}, ${addSafeArea(0)}) scale(0.5)` }
    ];
    const KEYFRAMES = (backDirection) ? BACKWARDS_KEYFRAMES : FORWARDS_KEYFRAMES;
    const clonedTitleEl = getClonedElement('ion-title');
    const clonedLargeTitleAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    clonedTitleEl.innerText = largeTitleEl.innerText;
    clonedTitleEl.size = largeTitleEl.size;
    clonedTitleEl.color = largeTitleEl.color;
    clonedLargeTitleAnimation.addElement(clonedTitleEl);
    clonedLargeTitleAnimation
        .beforeStyles({
        'transform-origin': `${ORIGIN_X} center`,
        'height': '46px',
        'display': '',
        'position': 'relative',
        [ORIGIN_X]: TITLE_START_OFFSET
    })
        .beforeAddWrite(() => {
        largeTitleEl.style.setProperty('display', 'none');
    })
        .afterAddWrite(() => {
        largeTitleEl.style.setProperty('display', '');
        clonedTitleEl.style.setProperty('display', 'none');
    })
        .keyframes(KEYFRAMES);
    rootAnimation.addAnimation(clonedLargeTitleAnimation);
};
const iosTransitionAnimation = (navEl, opts) => {
    try {
        const EASING = 'cubic-bezier(0.32,0.72,0,1)';
        const OPACITY = 'opacity';
        const TRANSFORM = 'transform';
        const CENTER = '0%';
        const OFF_OPACITY = 0.8;
        const isRTL = navEl.ownerDocument.dir === 'rtl';
        const OFF_RIGHT = isRTL ? '-99.5%' : '99.5%';
        const OFF_LEFT = isRTL ? '33%' : '-33%';
        const enteringEl = opts.enteringEl;
        const leavingEl = opts.leavingEl;
        const backDirection = (opts.direction === 'back');
        const contentEl = enteringEl.querySelector(':scope > ion-content');
        const headerEls = enteringEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
        const enteringToolBarEls = enteringEl.querySelectorAll(':scope > ion-header > ion-toolbar');
        const rootAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
        const enteringContentAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
        rootAnimation
            .addElement(enteringEl)
            .duration(opts.duration || DURATION)
            .easing(opts.easing || EASING)
            .fill('both')
            .beforeRemoveClass('ion-page-invisible');
        if (leavingEl && navEl) {
            const navDecorAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            navDecorAnimation.addElement(navEl);
            rootAnimation.addAnimation(navDecorAnimation);
        }
        if (!contentEl && enteringToolBarEls.length === 0 && headerEls.length === 0) {
            enteringContentAnimation.addElement(enteringEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
        }
        else {
            enteringContentAnimation.addElement(contentEl); // REVIEW
            enteringContentAnimation.addElement(headerEls);
        }
        rootAnimation.addAnimation(enteringContentAnimation);
        if (backDirection) {
            enteringContentAnimation
                .beforeClearStyles([OPACITY])
                .fromTo('transform', `translateX(${OFF_LEFT})`, `translateX(${CENTER})`)
                .fromTo(OPACITY, OFF_OPACITY, 1);
        }
        else {
            // entering content, forward direction
            enteringContentAnimation
                .beforeClearStyles([OPACITY])
                .fromTo('transform', `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`);
        }
        if (contentEl) {
            const enteringTransitionEffectEl = shadow(contentEl).querySelector('.transition-effect');
            if (enteringTransitionEffectEl) {
                const enteringTransitionCoverEl = enteringTransitionEffectEl.querySelector('.transition-cover');
                const enteringTransitionShadowEl = enteringTransitionEffectEl.querySelector('.transition-shadow');
                const enteringTransitionEffect = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                const enteringTransitionCover = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                const enteringTransitionShadow = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                enteringTransitionEffect
                    .addElement(enteringTransitionEffectEl)
                    .beforeStyles({ opacity: '1' })
                    .afterStyles({ opacity: '' });
                enteringTransitionCover
                    .addElement(enteringTransitionCoverEl) // REVIEW
                    .beforeClearStyles([OPACITY])
                    .fromTo(OPACITY, 0, 0.1);
                enteringTransitionShadow
                    .addElement(enteringTransitionShadowEl) // REVIEW
                    .beforeClearStyles([OPACITY])
                    .fromTo(OPACITY, 0.03, 0.70);
                enteringTransitionEffect.addAnimation([enteringTransitionCover, enteringTransitionShadow]);
                enteringContentAnimation.addAnimation([enteringTransitionEffect]);
            }
        }
        const enteringContentHasLargeTitle = enteringEl.querySelector('ion-header.header-collapse-condense');
        const { forward, backward } = createLargeTitleTransition(rootAnimation, isRTL, backDirection, enteringEl, leavingEl);
        enteringToolBarEls.forEach(enteringToolBarEl => {
            const enteringToolBar = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringToolBar.addElement(enteringToolBarEl);
            rootAnimation.addAnimation(enteringToolBar);
            const enteringTitle = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringTitle.addElement(enteringToolBarEl.querySelector('ion-title')); // REVIEW
            const enteringToolBarButtons = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            const buttons = Array.from(enteringToolBarEl.querySelectorAll('ion-buttons,[menuToggle]'));
            const parentHeader = enteringToolBarEl.closest('ion-header');
            const inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
            let buttonsToAnimate;
            if (backDirection) {
                buttonsToAnimate = buttons.filter(button => {
                    const isCollapseButton = button.classList.contains('buttons-collapse');
                    return (isCollapseButton && !inactiveHeader) || !isCollapseButton;
                });
            }
            else {
                buttonsToAnimate = buttons.filter(button => !button.classList.contains('buttons-collapse'));
            }
            enteringToolBarButtons.addElement(buttonsToAnimate);
            const enteringToolBarItems = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'));
            const enteringToolBarBg = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector('.toolbar-background')); // REVIEW
            const enteringBackButton = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            const backButtonEl = enteringToolBarEl.querySelector('ion-back-button');
            if (backButtonEl) {
                enteringBackButton.addElement(backButtonEl);
            }
            enteringToolBar.addAnimation([enteringTitle, enteringToolBarButtons, enteringToolBarItems, enteringToolBarBg, enteringBackButton]);
            enteringToolBarButtons.fromTo(OPACITY, 0.01, 1);
            enteringToolBarItems.fromTo(OPACITY, 0.01, 1);
            if (backDirection) {
                if (!inactiveHeader) {
                    enteringTitle
                        .fromTo('transform', `translateX(${OFF_LEFT})`, `translateX(${CENTER})`)
                        .fromTo(OPACITY, 0.01, 1);
                }
                enteringToolBarItems.fromTo('transform', `translateX(${OFF_LEFT})`, `translateX(${CENTER})`);
                // back direction, entering page has a back button
                enteringBackButton.fromTo(OPACITY, 0.01, 1);
            }
            else {
                // entering toolbar, forward direction
                if (!enteringContentHasLargeTitle) {
                    enteringTitle
                        .fromTo('transform', `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`)
                        .fromTo(OPACITY, 0.01, 1);
                }
                enteringToolBarItems.fromTo('transform', `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`);
                enteringToolBarBg
                    .beforeClearStyles([OPACITY])
                    .fromTo(OPACITY, 0.01, 1);
                // forward direction, entering page has a back button
                if (!forward) {
                    enteringBackButton.fromTo(OPACITY, 0.01, 1);
                }
                if (backButtonEl && !forward) {
                    const enteringBackBtnText = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    enteringBackBtnText
                        .addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
                        .fromTo(`transform`, (isRTL ? 'translateX(-100px)' : 'translateX(100px)'), 'translateX(0px)');
                    enteringToolBar.addAnimation(enteringBackBtnText);
                }
            }
        });
        // setup leaving view
        if (leavingEl) {
            const leavingContent = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            const leavingContentEl = leavingEl.querySelector(':scope > ion-content');
            leavingContent.addElement(leavingContentEl); // REVIEW
            leavingContent.addElement(leavingEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'));
            rootAnimation.addAnimation(leavingContent);
            if (backDirection) {
                // leaving content, back direction
                leavingContent
                    .beforeClearStyles([OPACITY])
                    .fromTo('transform', `translateX(${CENTER})`, (isRTL ? 'translateX(-100%)' : 'translateX(100%)'));
                const leavingPage = Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["g"])(leavingEl);
                rootAnimation.afterAddWrite(() => {
                    if (rootAnimation.getDirection() === 'normal') {
                        leavingPage.style.setProperty('display', 'none');
                    }
                });
            }
            else {
                // leaving content, forward direction
                leavingContent
                    .fromTo('transform', `translateX(${CENTER})`, `translateX(${OFF_LEFT})`)
                    .fromTo(OPACITY, 1, OFF_OPACITY);
            }
            if (leavingContentEl) {
                const leavingTransitionEffectEl = shadow(leavingContentEl).querySelector('.transition-effect');
                if (leavingTransitionEffectEl) {
                    const leavingTransitionCoverEl = leavingTransitionEffectEl.querySelector('.transition-cover');
                    const leavingTransitionShadowEl = leavingTransitionEffectEl.querySelector('.transition-shadow');
                    const leavingTransitionEffect = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    const leavingTransitionCover = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    const leavingTransitionShadow = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    leavingTransitionEffect
                        .addElement(leavingTransitionEffectEl)
                        .beforeStyles({ opacity: '1' })
                        .afterStyles({ opacity: '' });
                    leavingTransitionCover
                        .addElement(leavingTransitionCoverEl) // REVIEW
                        .beforeClearStyles([OPACITY])
                        .fromTo(OPACITY, 0.1, 0);
                    leavingTransitionShadow
                        .addElement(leavingTransitionShadowEl) // REVIEW
                        .beforeClearStyles([OPACITY])
                        .fromTo(OPACITY, 0.70, 0.03);
                    leavingTransitionEffect.addAnimation([leavingTransitionCover, leavingTransitionShadow]);
                    leavingContent.addAnimation([leavingTransitionEffect]);
                }
            }
            const leavingToolBarEls = leavingEl.querySelectorAll(':scope > ion-header > ion-toolbar');
            leavingToolBarEls.forEach(leavingToolBarEl => {
                const leavingToolBar = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                leavingToolBar.addElement(leavingToolBarEl);
                const leavingTitle = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                leavingTitle.addElement(leavingToolBarEl.querySelector('ion-title')); // REVIEW
                const leavingToolBarButtons = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                const buttons = leavingToolBarEl.querySelectorAll('ion-buttons,[menuToggle]');
                const parentHeader = leavingToolBarEl.closest('ion-header');
                const inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
                const buttonsToAnimate = Array.from(buttons).filter(button => {
                    const isCollapseButton = button.classList.contains('buttons-collapse');
                    return (isCollapseButton && !inactiveHeader) || !isCollapseButton;
                });
                leavingToolBarButtons.addElement(buttonsToAnimate);
                const leavingToolBarItems = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                const leavingToolBarItemEls = leavingToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])');
                if (leavingToolBarItemEls.length > 0) {
                    leavingToolBarItems.addElement(leavingToolBarItemEls);
                }
                const leavingToolBarBg = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector('.toolbar-background')); // REVIEW
                const leavingBackButton = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                const backButtonEl = leavingToolBarEl.querySelector('ion-back-button');
                if (backButtonEl) {
                    leavingBackButton.addElement(backButtonEl);
                }
                leavingToolBar.addAnimation([leavingTitle, leavingToolBarButtons, leavingToolBarItems, leavingBackButton, leavingToolBarBg]);
                rootAnimation.addAnimation(leavingToolBar);
                // fade out leaving toolbar items
                leavingBackButton.fromTo(OPACITY, 0.99, 0);
                leavingToolBarButtons.fromTo(OPACITY, 0.99, 0);
                leavingToolBarItems.fromTo(OPACITY, 0.99, 0);
                if (backDirection) {
                    if (!inactiveHeader) {
                        // leaving toolbar, back direction
                        leavingTitle
                            .fromTo('transform', `translateX(${CENTER})`, (isRTL ? 'translateX(-100%)' : 'translateX(100%)'))
                            .fromTo(OPACITY, 0.99, 0);
                    }
                    leavingToolBarItems.fromTo('transform', `translateX(${CENTER})`, (isRTL ? 'translateX(-100%)' : 'translateX(100%)'));
                    // leaving toolbar, back direction, and there's no entering toolbar
                    // should just slide out, no fading out
                    leavingToolBarBg
                        .beforeClearStyles([OPACITY])
                        .fromTo(OPACITY, 1, 0.01);
                    if (backButtonEl && !backward) {
                        const leavingBackBtnText = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                        leavingBackBtnText
                            .addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
                            .fromTo('transform', `translateX(${CENTER})`, `translateX(${(isRTL ? -124 : 124) + 'px'})`);
                        leavingToolBar.addAnimation(leavingBackBtnText);
                    }
                }
                else {
                    // leaving toolbar, forward direction
                    if (!inactiveHeader) {
                        leavingTitle
                            .fromTo('transform', `translateX(${CENTER})`, `translateX(${OFF_LEFT})`)
                            .fromTo(OPACITY, 0.99, 0)
                            .afterClearStyles([TRANSFORM, OPACITY]);
                    }
                    leavingToolBarItems
                        .fromTo('transform', `translateX(${CENTER})`, `translateX(${OFF_LEFT})`)
                        .afterClearStyles([TRANSFORM, OPACITY]);
                    leavingBackButton.afterClearStyles([OPACITY]);
                    leavingTitle.afterClearStyles([OPACITY]);
                    leavingToolBarButtons.afterClearStyles([OPACITY]);
                }
            });
        }
        return rootAnimation;
    }
    catch (err) {
        throw err;
    }
};




/***/ })

}]);
//# sourceMappingURL=ios-transition-071bd421-js-es2015.js.map