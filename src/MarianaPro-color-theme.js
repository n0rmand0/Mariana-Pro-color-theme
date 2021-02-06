// set variables for easy color management
transparent = "#00000000";
// cool
base0 = "#343D46";
base1 = "#23292e";
base2 = "#1d1e22";

highlight0 = "#d0f4ff30";
highlight1 = "#d0f4ff14";
highlight2 = "#d0f4ff07";

shadow0 = "#00000070";
shadow1 = "#00000040";

white0 = "#ffffffdd";
white1 = "#ffffff70";
white2 = "#ffffff30";
white3 = "#ffffff10";

green0 = "#A3CE9E";
green1 = "#A3CE9E70";
green2 = "#A3CE9E40";

teal0 = "#5fb3b3";

lightBlue0 = "#92b0ce";

blue0 = "#6699cc";
blue1 = "#6699cc70";

lightYellow0 = "#ebcb8b";
yellow0 = "#FAB763";
yellow1 = "#FAB76370";
yellow2 = "#FAB76340";
orangeRed = "#FA8763";
red0 = "#EE6A6F";
red1 = "#EE6A6Fcc";
red2 = "#EE6A6F40";

purple0 = "#c594c5";

// exportable json via `gulp`
module.exports = {
  name: "Mariana (Pro)",
  type: "dark",
  colors: {
    // COLOR REFERENCE: https://code.visualstudio.com/docs/getstarted/theme-color-reference

    //  BASE COLORS
    focusBorder: highlight0,
    foreground: white0,
    "selection.background": white2,
    "widget.shadow": shadow1,

    // TEXT COLORS - Colors inside a text document, such as the welcome page.
    "textLink.activeForeground": blue0,
    "textLink.foreground": blue0,
    "textPreformat.foreground": blue0,

    // BUTTON CONTROL - A set of colors for button widgets such as Open Folder button in the Explorer of a new window.
    "button.background": blue0,
    "button.foreground": white0,
    "button.hoverBackground": blue1,

    // DROPDOWN CONTROL - A set of colors for all dropdown widgets such as in the Integrated Terminal or the Output panel. Note that the dropdown control is not used on macOS currently.
    "dropdown.background": base1,
    "dropdown.listBackground": base1,

    // INPUT CONTROL - Colors for input controls such as in the Search view or the Find/Replace dialog.
    "input.background": base0,
    "input.border": highlight1,
    "input.foreground": white0,
    "input.placeholderForeground": white1,

    // SCROLL BAR CONTROL - Colors for input controls such as in the Search view or the Find/Replace dialog.
    "scrollbar.shadow": shadow0,
    "scrollbarSlider.activeBackground": highlight0,
    "scrollbarSlider.background": highlight1,
    "scrollbarSlider.hoverBackground": highlight0,

    // BADGE - Badges are small information labels, for example, search results count.
    "badge.foreground": white0,
    "badge.background": red1,

    // PROGRESS BAR
    "progressBar.background": base1,

    // LIST AND TREES - Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.
    "list.activeSelectionBackground": highlight1,
    "list.activeSelectionForeground": white0,
    "list.inactiveSelectionBackground": highlight2,
    "list.inactiveSelectionForeground": white0,
    "list.hoverForeground": white0,
    "list.focusForeground": white0,
    "list.focusBackground": highlight1,
    "list.hoverBackground": highlight2,
    "list.dropBackground": highlight1,
    "list.highlightForeground": white0,
    "list.errorForeground": red0,
    "list.warningForeground": yellow0,

    // ACTIVITY BAR - The Activity Bar is displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar
    "activityBar.background": base1,
    "activityBar.dropBackground": base0,
    "activityBar.foreground": white0,
    // "activityBar.border":shadow1,
    "activityBarBadge.background": red1,
    "activityBarBadge.foreground": white0,

    // SIDE BAR - The Side Bar contains views like the Explorer and Search.
    "sideBar.background": base1,
    "sideBar.foreground": white0,
    // "sideBar.border":,
    "sideBarSectionHeader.background": base2,
    "sideBarSectionHeader.foreground": white0,
    "sideBarTitle.foreground": white0,

    // EDITOR GROUPS & TABS - Editor Groups are the containers of editors. There can be up to three editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.,
    "editorGroup.border": shadow1,
    "editorGroup.dropBackground": base1,
    "editorGroupHeader.noTabsBackground": base1,
    "editorGroupHeader.tabsBackground": base1,
    // "editorGroupHeader.tabsBorder":shadow1,
    "tab.activeBackground": base0,
    "tab.activeForeground": white0,
    "tab.border": white3,
    "tab.activeBorder": base0,
    "tab.unfocusedActiveBorder": base0,
    "tab.inactiveBackground": highlight2,
    "tab.inactiveForeground": white1,
    "tab.unfocusedActiveForeground": white1,
    "tab.unfocusedInactiveForeground": white1,

    // EDITOR COLOR - The most prominent editor colors are the token colors used for syntax highlighting and are base0d on the language grammar installed.
    "editor.background": base0,
    "editor.foreground": white0,

    "editor.hoverHighlightBackground": highlight1,
    "editor.findMatchBackground": highlight1,
    "editor.findMatchHighlightBackground": highlight1,
    "editor.findRangeHighlightBackground": highlight1,
    "editor.lineHighlightBackground": highlight2,
    "editor.lineHighlightBorder": highlight2,
    "editor.inactiveSelectionBackground": highlight0,
    "editor.selectionBackground": highlight0,
    "editor.selectionHighlightBackground": highlight1,
    "editor.rangeHighlightBackground": highlight1,
    "editor.wordHighlightBackground": transparent,
    "editor.wordHighlightStrongBackground": transparent,

    "editorError.foreground": red0,
    "editorError.border": transparent,
    "editorWarning.foreground": yellow0,
    "editorInfo.foreground": green0,
    "editorWarning.border": transparent,
    "editorCursor.foreground": white0,
    "editorIndentGuide.background": highlight1,
    "editorLineNumber.foreground": highlight0,
    "editorWhitespace.foreground": highlight0,

    "editorOverviewRuler.border": highlight1,
    "editorOverviewRuler.currentContentForeground": highlight0,
    "editorOverviewRuler.incomingContentForeground": highlight0,
    "editorOverviewRuler.findMatchForeground": highlight0,
    "editorOverviewRuler.rangeHighlightForeground": highlight0,
    "editorOverviewRuler.selectionHighlightForeground": highlight0,
    "editorOverviewRuler.wordHighlightForeground": highlight0,
    "editorOverviewRuler.wordHighlightStrongForeground": highlight0,
    "editorOverviewRuler.modifiedForeground": lightYellow0,
    "editorOverviewRuler.addedForeground": green0,
    "editorOverviewRuler.deletedForeground": red0,
    "editorOverviewRuler.errorForeground": red0,
    "editorOverviewRuler.warningForeground": lightYellow0,
    "editorOverviewRuler.infoForeground": highlight0,
    "editorOverviewRuler.bracketMatchForeground": highlight0,

    "editorGutter.modifiedBackground": lightYellow0,
    "editorGutter.addedBackground": green0,
    "editorGutter.deletedBackground": red0,

    // DIFF EDITOR COLORS - For coloring inserted and removed text, use either a background or a border color but not both.
    "diffEditor.insertedTextBackground": green2,
    "diffEditor.removedTextBackground": red2,

    // EDITOR WIDGET COLORS - The Editor widget is shown in front of the editor content. Examples are the Find/Replace dialog, the suggestion widget, and the editor hover.
    "editorWidget.background": base1,
    "editorWidget.border": highlight0,
    "editorSuggestWidget.background": base1,

    // PEEK VIEW COLORS - Peek views are used to show references and declarations as a view inside the editor.
    "peekView.border": blue0,
    "peekViewEditor.matchHighlightBackground": highlight0,
    "peekViewEditorGutter.background": base1,
    "peekViewEditor.background": base1,
    "peekViewResult.background": base0,
    "peekViewTitle.background": base1,

    // MERGE CONFLICTS - Merge conflict decorations are shown when the editor contains special diff ranges.
    "merge.currentHeaderBackground": yellow1,
    "merge.currentContentBackground": yellow2,
    "merge.incomingHeaderBackground": green1,
    "merge.incomingContentBackground": green2,

    // PANEL COLORS - Panels are shown below the editor area and contain views like Output and Integrated Terminal.
    "panel.background": base2,
    "panel.border": highlight1,
    "panelTitle.activeBorder": blue0,

    // STATUS BAR COLORS - The Status Bar is shown in the bottom of the workbench.
    "statusBar.background": base2,
    "statusBar.debuggingBackground": blue0,
    "statusBar.debuggingForeground": white0,
    "statusBar.noFolderForeground": white0,
    "statusBar.noFolderBackground": highlight1,
    "statusBar.foreground": white0,
    "statusBarItem.activeBackground": highlight1,
    "statusBarItem.hoverBackground": highlight2,
    "statusBarItem.prominentBackground": highlight1,
    "statusBarItem.prominentHoverBackground": highlight2,
    "statusBar.border": highlight1,

    // TITLE BAR COLORS - Note: These colors are currently only supported on macOS.
    "titleBar.activeBackground": base1,
    "titleBar.activeForeground": white0,
    // "titleBar.border":shadow1,
    "titleBar.inactiveBackground": base1,
    "titleBar.inactiveForeground": white1,

    // NOTIFICATION COLORS
    "notificationCenterHeader.foreground": white0,
    "notificationCenterHeader.background": base1,

    // EXTENSIONS
    "extensionButton.prominentForeground": white0,
    "extensionButton.prominentBackground": blue0,
    "extensionButton.prominentHoverBackground": blue1,

    // QUICK PICKER
    "pickerGroup.border": blue0,
    "pickerGroup.foreground": blue0,

    // INTEGRATED TERMINAL COLORS
    "terminal.ansiBrightBlack": white0,
    "terminal.ansiBlack": white0,
    "terminal.ansiBlue": blue0,
    "terminal.ansiBrightBlue": blue0,
    "terminal.ansiBrightCyan": blue0,
    "terminal.ansiCyan": blue0,
    "terminal.ansiBrightMagenta": purple0,
    "terminal.ansiMagenta": purple0,
    "terminal.ansiBrightRed": red0,
    "terminal.ansiRed": red0,
    "terminal.ansiYellow": yellow0,
    "terminal.ansiBrightYellow": yellow0,
    "terminal.ansiBrightGreen": green0,
    "terminal.ansiGreen": green0,
    "terminal.ansiWhite": white0,
    "terminal.selectionBackground": white2,
    "terminalCursor.background": white2,
    "terminalCursor.foreground": white0,

    // GIT COLORS
    "gitDecoration.modifiedResourceForeground": lightYellow0,
    "gitDecoration.deletedResourceForeground": red0,
    "gitDecoration.untrackedResourceForeground": white1,
    "gitDecoration.conflictingResourceForeground": red0,
    "gitDecoration.submoduleResourceForeground": white1,

    // BREADCRUMBS - The theme colors for breadcrumbs navigation
    // "breadcrumb.foreground": white0,
    // "breadcrumb.focusForeground": white0,
    // "breadcrumb.activeSelectionForeground": white0,
    // "breadcrumbPicker.background": shadow0,
  },
  tokenColors: [
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: white1,
      },
    },
    {
      name: "String",
      scope: "string",
      settings: {
        foreground: green0,
      },
    },
    {
      name: "Punctuation",
      scope: ["punctuation.definition"],
      settings: {
        foreground: teal0,
      },
    },
    {
      name: "Number",
      scope: "constant.numeric",
      settings: {
        foreground: yellow0,
      },
    },
    {
      name: "Built-in constant",
      scope: "constant.language",
      settings: {
        fontStyle: "italic",
        foreground: red0,
      },
    },
    {
      name: "User-defined constant",
      scope: ["constant.character", "constant.other"],
      settings: {
        foreground: purple0,
      },
    },
    {
      name: "Member Variable",
      scope: "variable.member",
      settings: {
        foreground: red0,
      },
    },
    {
      name: "Keyword",
      scope: [
        "keyword - keyword.operator",
        "keyword.operator.word",
        "keyword.control",
        "keyword.operator.new.js",
      ],
      settings: {
        foreground: purple0,
      },
    },
    {
      name: "Embedded Line Template Line JS",
      scope:
        "string.template.js meta.template.expression.js meta.embedded.line.js",
      settings: {
        foreground: white0,
      },
    },
    {
      name: "Operators",
      scope: "keyword.operator",
      settings: {
        foreground: orangeRed,
      },
    },
    {
      name: "Punctuation",
      scope: ["punctuation.separator", "punctuation.terminator"],
      settings: {
        foreground: white1,
      },
    },
    {
      name: "Punctuation",
      scope: "punctuation.section",
      settings: {
        foreground: white0,
      },
    },
    {
      name: "Accessor",
      scope: "punctuation.accessor",
      settings: {
        foreground: white1,
      },
    },
    {
      name: "Annotation Punctuation",
      scope: "punctuation.definition.annotation",
      settings: {
        foreground: teal0,
      },
    },
    {
      name: "JavaScript Dollar",
      scope: [
        "variable.other.dollar.only.js",
        "variable.other.object.dollar.only.js",
        "variable.type.dollar.only.js",
        "support.class.dollar.only.js",
      ],
      settings: {
        foreground: teal0,
      },
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: red0,
      },
    },
    {
      name: "Storage type",
      scope: "storage.type",
      settings: {
        fontStyle: "italic",
        foreground: purple0,
      },
    },
    {
      name: "Entity name",
      scope: "entity.name.function",
      settings: {
        foreground: teal0,
      },
    },
    {
      name: "Object Property JS",
      scope: "meta.object-literal.key.js",
      settings: {
        foreground: blue0,
      },
    },
    {
      name: "Entity name",
      scope:
        "entity.name - (entity.name.section | entity.name.tag | entity.name.label)",
      settings: {
        foreground: yellow0,
      },
    },
    {
      name: "Inherited class",
      scope: "entity.other.inherited-class",
      settings: {
        fontStyle: "italic underline",
        foreground: teal0,
      },
    },
    {
      name: "Function argument",
      scope: "variable.parameter",
      settings: {
        fontStyle: "",
        foreground: yellow0,
      },
    },
    {
      name: "Language variable",
      scope: "variable.language",
      settings: {
        fontStyle: "italic",
        foreground: red0,
      },
    },
    {
      name: "Tag name",
      scope: "entity.name.tag",
      settings: {
        fontStyle: "",
        foreground: red0,
      },
    },
    {
      name: "Tag attribute",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: purple0,
      },
    },
    {
      name: "Function call",
      scope: ["variable.function", "variable.annotation"],
      settings: {
        fontStyle: "",
        foreground: blue0,
      },
    },
    {
      name: "Library function",
      scope: ["support.function", "support.macro"],
      settings: {
        fontStyle: "italic",
        foreground: blue0,
      },
    },
    {
      name: "Library constant",
      scope: "support.constant",
      settings: {
        fontStyle: "italic",
        foreground: purple0,
      },
    },
    {
      name: "Library class/type",
      scope: ["support.type", "support.class"],
      settings: {
        // "fontStyle": "italic",
        foreground: blue0,
      },
    },
    {
      name: "Invalid",
      scope: "invalid",
      settings: {
        foreground: white1,
      },
    },
    {
      name: "Invalid deprecated",
      scope: "invalid.deprecated",
      settings: {
        foreground: white0,
      },
    },
    {
      name: "YAML Key",
      scope: "entity.name.tag.yaml",
      settings: {
        foreground: teal0,
      },
    },
    {
      name: "YAML String",
      scope: "source.yaml string.unquoted",
      settings: {
        foreground: white0,
      },
    },
    {
      name: "markup headings",
      scope: "markup.heading",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      name: "markup headings",
      scope: "markup.heading punctuation.definition.heading",
      settings: {
        foreground: red0,
      },
    },
    {
      name: "markup h1",
      scope: "markup.heading.1 punctuation.definition.heading",
      settings: {
        foreground: red0,
      },
    },
    {
      name: "markup links",
      scope: ["string.other.link", "markup.underline.link"],
      settings: {
        foreground: blue0,
      },
    },
    {
      name: "markup bold",
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      name: "markup italic",
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "markup bold/italic",
      scope: "markup.italic markup.bold | markup.bold markup.italic",
      settings: {
        fontStyle: "bold italic",
      },
    },
    {
      name: "markup hr",
      scope: "punctuation.definition.thematic-break",
      settings: {
        foreground: yellow0,
      },
    },
    {
      name: "markup numbered list bullet",
      scope: "markup.list.numbered.bullet",
      settings: {
        foreground: green0,
      },
    },
    {
      name: "markup blockquote",
      scope: [
        "markup.quote punctuation.definition.blockquote",
        "markup.list punctuation.definition.list_item",
      ],
      settings: {
        foreground: yellow0,
      },
    },
    {
      name: "markup punctuation",
      scope:
        "(text punctuation.definition.italic | text punctuation.definition.bold)",
      settings: {
        foreground: purple0,
      },
    },
    {
      name: "diff.header",
      scope: ["meta.diff", "meta.diff.header"],
      settings: {
        foreground: purple0,
      },
    },
    {
      name: "diff.deleted",
      scope: "markup.deleted",
      settings: {
        foreground: red0,
      },
    },
    {
      name: "diff.inserted",
      scope: "markup.inserted",
      settings: {
        foreground: green0,
      },
    },
    {
      name: "diff.changed",
      scope: "markup.changed",
      settings: {
        foreground: lightYellow0,
      },
    },
    {
      name: "CSS Properties",
      scope: "support.type.property-name",
      settings: {
        fontStyle: "",
        foreground: white0,
      },
    },
    {
      scope: "constant.numeric.line-number.match",
      settings: {
        foreground: red0,
      },
    },
    {
      scope: "message.error",
      settings: {
        foreground: red0,
      },
    },
  ],
};
