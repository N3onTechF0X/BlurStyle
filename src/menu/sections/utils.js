import {createCard, createToggle, createSlider, createNumberInput, showNotification} from '../utils';
import {getFromLocalStorage, saveToLocalStorage} from '../../utils/storage';

export const createUtilsSection = (container) => {
  const filtersCard = createCard('Filter settings');
  const filtersEnabled = getFromLocalStorage('filters', false);
  const saturationValue = getFromLocalStorage('saturationValue', 170);
  const contrastValue = getFromLocalStorage('contrastValue', 110);
  const filtersToggle = createToggle('Filters', filtersEnabled, (value) => {saveToLocalStorage('filters', value); value ? document.body.style.filter = `saturate(${saturationValue}%) contrast(${contrastValue}%)` : document.body.style.filter = '';
    showNotification(`Filters ${value ? 'on' : 'off'}`, 'success');}, 'filters'); filtersCard.appendChild(filtersToggle);
  
  const saturationSlider = createSlider('Saturation', saturationValue, 0, 300, (value) => {saveToLocalStorage('saturationValue', value); filtersEnabled && (document.body.style.filter = `saturate(${value}%) contrast(${contrastValue}%)`);}); filtersCard.appendChild(saturationSlider);
  const contrastSlider = createSlider('Contrast', contrastValue, 0, 200, (value) => {saveToLocalStorage('contrastValue', value); filtersEnabled && (document.body.style.filter = `saturate(${saturationValue}%) contrast(${value}%)`);}); filtersCard.appendChild(contrastSlider);
  const animationsCard = createCard('Animation settings');
  const animationsEnabled = getFromLocalStorage('animationsEnabled', true);
  const animationsToggle = createToggle('Global Animations', animationsEnabled, (value) => {saveToLocalStorage('animationsEnabled', value);
    const styleElement = document.querySelector('style[data-bs-animations-disabled]');
      if (!value && !styleElement) {
        const noAnimationsStyle = document.createElement('style'); noAnimationsStyle.dataset.bsAnimationsDisabled = 'true'; noAnimationsStyle.textContent = `* {animation: none !important; transition: none !important;}`;
          document.head.appendChild(noAnimationsStyle); showNotification('Global animations disabled', 'success');}
            else if (value && styleElement) {styleElement.remove(); showNotification('Global animations enabled', 'success');}}, 'animationsEnabled'); animationsCard.appendChild(animationsToggle);
  
  const loadingBgCard = createCard('Animated loading background');
  const spaceAnim = getFromLocalStorage('spaceAnim', true);
  const spaceAnimToggle = createToggle('Animation with space', spaceAnim, (value) => {
    if (window.toggleStarAnimation) {window.toggleStarAnimation();}
      else {saveToLocalStorage('spaceAnim', value);} showNotification(`Animation with space ${value ? 'enabled' : 'disabled'}`, 'success');}, 'spaceAnim'); loadingBgCard.appendChild(spaceAnimToggle);
  
  const bgAnimCard = createCard('Animated background');
  const bgAnim = getFromLocalStorage('bgAnim', true);
  const bgAnimToggle = createToggle('Animation with nebula', bgAnim, (value) => {
    if (window.toggleBG) {window.toggleBG();}
      else {saveToLocalStorage('bgAnim', value);} showNotification(`Animation with nebula ${value ? 'enabled' : 'disabled'}`, 'success');}, 'bgAnim'); bgAnimCard.appendChild(bgAnimToggle);
  
  const resistanceCard = createCard('Showing resists');
  const rTab = getFromLocalStorage('rTab', false);
  
  const rTabToggle = createToggle('Resists in battle', rTab, (value) => {
    if (window.toggleResistanceTab) {window.toggleResistanceTab();} 
      else {saveToLocalStorage('rTab', value); showNotification(`Showing resists ${value ? 'enabled' : 'disabled'}`, 'success');}}, 'rTab'); resistanceCard.appendChild(rTabToggle);
  
  const fpsCard = createCard('Setting fake FPS values');
  const fakeFpsEnabled = getFromLocalStorage('fakeFpsEnabled', false);
  const minFps = getFromLocalStorage('minFps', 143);
  const maxFps = getFromLocalStorage('maxFps', 144);
  const fakeFpsToggle = createToggle('Fake FPS', fakeFpsEnabled, (value) => {saveToLocalStorage('fakeFpsEnabled', value);
    if (window.toggleFakeFps) {window.toggleFakeFps(value);} showNotification(`Fake FPS ${value ? 'enabled' : 'disabled'}`, 'success');}, 'fakeFpsEnabled'); fpsCard.appendChild(fakeFpsToggle);

  const minFpsInput = createNumberInput('Minimum FPS', minFps, (value) => {saveToLocalStorage('minFps', value); showNotification(`Minimum FPS set to: ${value}`, 'success');}); fpsCard.appendChild(minFpsInput);
  const maxFpsInput = createNumberInput('Maximum FPS', maxFps, (value) => {saveToLocalStorage('maxFps', value); showNotification(`Maximum FPS set to: ${value}`, 'success');}); fpsCard.appendChild(maxFpsInput);
    container.appendChild(filtersCard); container.appendChild(animationsCard); container.appendChild(loadingBgCard); container.appendChild(bgAnimCard); container.appendChild(resistanceCard); container.appendChild(fpsCard);
      if (!animationsEnabled) {
        const styleExists = document.querySelector('style[data-bs-animations-disabled]');
          if (!styleExists) {
            const noAnimationsStyle = document.createElement('style'); noAnimationsStyle.dataset.bsAnimationsDisabled = 'true'; noAnimationsStyle.textContent = `* {animation: none !important; transition: none !important;}`; document.head.appendChild(noAnimationsStyle);}}
};