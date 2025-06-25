export const createChangelogSection = (container) => {
  const changelogData = [
    {
      "version": "4.3.5 - 5.0.0",
      "changes": [
        "Global reworking of styles and at some point moving to variables",
        "Global refactoring of important logic of various utilities",
        "Global hotfix of many bugs",
        "Finally implemented the menu, which contains a huge number of twists and opportunities for customization and configuration",
        "Implemented some modal windows and tooltip indication of various actions for a more pleasant UX",
        "Fake fps is now enabled/disabled exclusively through the menu and is automatically activated in battle if the menu is checked",
        "Improved and rewritten custom resources logic, now you can enable/disable selective resources or all of them if someone is not satisfied with something",
        "Improved and rewritten the logic of hotkeys, now they can be reassigned or disabled, leaving the control of purely toggle switches in the settings",
        "Implemented and modernized logic for customization through multiple variables",
        "Significantly improved performance through logic refactoring",
        "Changelog and other information is now also in menus",
        "Modernized and refactored the logic for importing, exporting and resetting settings in .json format directly from the local area",
        "Finally returned custom bs skins for cannons and hulls, in this case custom xp ht is implemented, which, if necessary, can be disabled in the resources tab"
      ]
    },
    {
      "version": "4.3.0 - 4.3.5",
      "changes": [
        "Interface fixes and improvements in almost all sections of the game",
        "Fix for loading of some substitutions both on the browser version and on the client *(be sure to update the userscript app.asar)*",
        "Fix crashes when using mirror versions of the theme",
        "Moving to another domain *(be sure to update the user script and app.asar)*"
      ]
    },
    {
      "version": "4.2.5 - 4.3.0",
      "changes": [
        "Fixes and improvements to various UI elements, especially after the recent update with buttons",
        "Resource redirection now works from the client, i.e.: custom lobby, sky, drone defender, supplies and more are available from the client *(update app.asar)*"
      ]
    },
    {
      "version": "4.2.0 - 4.2.5",
      "changes": [
        "Complete redesign of the new store",
        "Blurstyle lobby release *(beta version, also only available from browser)*",
        "Blurstyle defender drone release *(beta version, also only available from browser)*",
        "Added smooth manifestation animation when entering a battle",
        "Fixed visualization and animation of modal windows including new ones",
        "Fixed bugs with visualization/animations in different sections"
      ]
    },
    {
      "version": "4.1.9 - 4.2.0",
      "changes": [
        "Large-scale refactoring and breaking into modules for better scalability and ease of further project development",
        "Performance optimization",
        "Theme auto-update is now available on the client as well, no more need to manually update every time <code>app.asar</code>",
        "Fixed a bug with loading the theme on the client in a separate window, for example, when opening ratings",
        "Another styles fix"
      ]
    },
    {
      "version": "4.1.8 - 4.1.9",
      "changes": [
        "Minor styles tweaks",
        "Fixed resource redirection logic, special thanks to <code>NeonTechFox</code> and for the very concept of <code>San</code>"
      ]
    },
    {
      "version": "4.1.7 - 4.1.8",
      "changes": [
        "Added FakeFPS pre-release for browser version only *(use only in battle)*",
        "Style fixes in almost all sections of the game after the next USELESS update on the tanks side",
        "Animations fix",
        "Cosmetic edits in styles",
        "Updated progress bar visuals",
        "Updated logo visual"
      ]
    },
    {
      "version": "4.1.6 - 4.1.7",
      "changes": [
        "Changed the variation of the current battle pause menu to the old familiar variant",
        "Fixed a bug with the display of in-game events",
        "Fixed bug with network status coloring when scrolling clan members",
        "Minor style edits"
      ]
    },
    {
      "version": "4.1.5 - 4.1.6",
      "changes": [
        "Removed pop-up special offers",
        "Edits to logo animation",
        "Various style fixes",
        "Edits to theme accent colors"
      ]
    },
    {
      "version": "4.1 - 4.1.5",
      "changes": [
        "Various fixes and styling tweaks",
        "Finally got to global coloring of colors instead of the default puke green to orange in almost all sections of the game",
        "Removed experimental edits with shading in lobbies",
        "Added a new hotkey to disable the animated stars background in the loading screen on the <code>insert</code> button *(on weak PCs will speed up loading into battle)*"
      ]
    },
    {
      "version": "4.0.6 - 4.1",
      "changes": [
        "Theme is minified and completely moved to its own host, which in theory should speed up loading of the theme itself and provide an instant upload of the current version",
        "Added new LGBT animation for GearScore *(in garage, final stat and battle)*",
        "Added new space sky in space mode *(only for browser version)*",
        "Repainted the artwork of supplies in battle *(only for browser version)*",
        "Updated hover animation on all items *(added a new effect of falling into an item when hovering the cursor)*",
        "New icon for the button with chat logs in the battle and placed inside the container with the chat",
        "Changed the content of the billboard in the battle to a bluerstyle logo *(only for browser version)*",
        "Fixed bug with empty scrollbar in settings and overlapping of items with scrollbar in recent versions of chrome",
        "Fixed a bug with styles in different sections after another \"useful\" update from the tanks dev",
        "Fixed a bug with crooked GearScore indents in MM stat, never waited for a fix from the tanks dev",
        "Fixed a bug with blue background when entering/exiting a battle and moving between sections",
        "Fixed a bug with the background on the page TSTO",
        "Fixed a bug with buttons falling in the battles section due to a new \"useful\" update from the tanks dev",
        "Fixed a bug with text going on top of the log button icon in battle"
      ]
    },
    {
      "version": "4.0.5 - 4.0.6",
      "changes": [
        "Added BlurStyle logo to the tab icon",
        "Unlocked devtools on client and cleaned up main.js junk in app.asar itself",
        "Edit the logic of swapping images to the legal format",
        "By numerous requests, the readme is now written for EN locale as well",
        "Edits bg timers in missions"
      ]
    },
    {
      "version": "4.0 release - 4.0.5",
      "changes": [
        "Added BlurStyle logo to all loading screens.",
        "Minor tweaks"
      ]
    },
    {
      "version": "4.0 pre-release - 4.0 release",
      "changes": [
        "Added theme auto-update for browser version, no need to manually update git script anymore",
        "Fix animated background display on different browsers",
        "Fix adaptive elements in the header",
        "Fix button unclickability with enabled background in the event block",
        "Fix additional tab variation with resistors",
        "Minor tweaks in styles"
      ]
    },
    {
      "version": "3.9.6 - 4.0 pre-release",
      "changes": [
        "Full refactoring of the theme",
        "The theme was completely rewritten from scratch with a completely new and user-friendly code structure.",
        "Many fixes and optimizations of the project",
        "Many innovations",
        "Total styled elements in the game: 471"
      ]
    },
    {
      "version": "3.9.5 - 3.9.6",
      "changes": [
        "Small fixes",
        "Added depth effect to many elements",
        "Added hotkey to disable animated background (animation turned out to be resource-intensive for low-powered PCs)"
      ]
    },
    {
      "version": "3.9 - 3.9.5",
      "changes": [
        "Major theme fix with fixes for many performance and visual design leaks",
        "Fixed and added new card animations to create a 3d effect",
        "Styled new menu with containers",
        "Fixes canvas animations in play button and boot screen"
      ]
    },
    {
      "version": "3.8.1 - 3.8.5",
      "changes": [
        "Global rework and adaptation of the theme for all screen resolutions/any page scale",
        "Fixed styling of elements in the tasks section",
        "Minor edits to animations",
        "Fixed and improved fakeFPS feature",
        "Fixed and improved function with hiding nara in battle",
        "Performance Improvements",
        "More edits in the quest section"
      ]
    },
    {
      "version": "3.8 - 3.8.1",
      "changes": [
        "Fixed stylization of items in the garage",
        "Minor edits to animations"
      ]
    },
    {
      "version": "3.7.2 - 3.8",
      "changes": [
        "Finalized settings menu",
        "Fixed a large number of bugs/flaws",
        "Completed absolutely all dialog boxes in the game and not only.",
        "Completed almost all elements in the game",
        "Fixed all animations",
        "Fixed bug with resistances in mm rolls",
        "Optimized kanvas animations on the play button and in the loading screen",
        "Fixed animation on intermediate loading screen"
      ]
    },
    {
      "version": "3.7.1 - 3.7.2",
      "changes": [
        "Added new animations",
        "Fixed minor bugs",
        "Added new animation for boot screen"
      ]
    },
    {
      "version": "3.7 - 3.7.1",
      "changes": [
        "Minor bug fixes",
        "Added new animation when hovering over the play button in the main menu"
      ]
    },
    {
      "version": "3.6 - 3.7",
      "changes": [
        "More extensive development of animations in the game, including animations of popups, tooltips, info-blocks, separate animations for sections",
        "Bugfix for crooked display of stylization in different sections",
        "Improved nara hiding function",
        "Fixed bugs with account registration section",
        "Added indentation for all lists in the game",
        "More performance improvements"
      ]
    },
    {
      "version": "3.5 - 3.6",
      "changes": [
        "Completely reworked, fixed and added new animations",
        "Made some adjustments to the overlay logic for styles and animations",
        "Fixed checkboxes in settings",
        "Improved store section",
        "Improved dialog boxes",
        "Context menus and tooltips improved."
      ]
    },
    {
      "version": "3.4 - 3.5",
      "changes": [
        "Fixed performance leak",
        "Redesigned new ranks menu",
        "Small animation update",
        "Small interface bugfix",
        "Added logo anim",
        "Added interactive nara hiding bar",
        "Added additional taba variation in battle",
        "Mini-fix of some styles and functions"
      ]
    },
    {
      "version": "3.3 - 3.4",
      "changes": [
        "Minor edits were made to dialog boxes",
        "Fixed incorrect display of some items",
        "Fixed broken buttons after another tank update",
        "Performance improvements"
      ]
    },
    {
      "version": "3.2 - 3.3",
      "changes": [
        "Another bugfix"
      ]
    },
    {
      "version": "3.1 - 3.2",
      "changes": [
        "Reworked the logic of applying styles",
        "Full optimization of all styles and functions (the theme will eat less, should not lag even on potato-like pc)",
        "Fully finalized/reworked all sections in the game including submenus and context menus",
        "Completely fixed problems with text display, blurring and transparency of many elements",
        "Minor fixes on ratings and tsto sites",
        "Fixes for applying contrast and saturation in the theme itself",
        "Rework of info-blocks in the game and info-dia windows in the battle itself",
        "Fixes for problems with crashes",
        "Fixed display of various elements on lower screen resolutions",
        "Fixed bugs with animations and their smoothness/duration",
        "Fixed bugs with styling of some buttons",
        "Fixed bugs with displaying ranks in friend lists"
      ]
    },
    {
      "version": "3.0 - 3.1",
      "changes": [
        "Bugfixes of critical and minor bugs due to updates"
      ]
    },
    {
      "version": "1.0 - 3.0",
      "changes": [
        "Completely redesigned ratings site",
        "Completely redesigned TSTO site",
        "Completely redesigned start screen",
        "Completely redesigned friends section",
        "Completely redesigned clan section",
        "Completely redesigned news section",
        "Completely redesigned global chat section",
        "Completely redesigned in-game dialog boxes",
        "Completely redesigned garage section",
        "Completely redesigned store section",
        "Completely redesigned missions section",
        "Completely redesigned container section",
        "Completely redesigned in-game TAB and pause menu with related items already in the battle itself",
        "Completely redesigned interactive card menus",
        "Completely redesigned context menus",
        "Completely redesigned tutorial windows",
        "Completely redesigned all the buttons in the game",
        "Completely redesigned battle list",
        "Completely redesigned player list",
        "Completely new animations for many elements with smooth transitions"
      ]
    }
  ];

  changelogData.forEach(log => {
    const changelogItem = document.createElement('div'); changelogItem.className = 'bs-changelog-item';
    const versionTitle = document.createElement('div'); versionTitle.className = 'bs-changelog-version'; versionTitle.textContent = `Version ${log.version}`; changelogItem.appendChild(versionTitle);
    const changesList = document.createElement('ul'); changesList.className = 'bs-changelog-list';
    
    log.changes.forEach(change => {
      const changeItem = document.createElement('li'); changeItem.textContent = change; changesList.appendChild(changeItem);}); changelogItem.appendChild(changesList); container.appendChild(changelogItem);});
};