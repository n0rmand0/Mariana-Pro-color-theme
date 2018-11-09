// set variables for easy color management
 var  white00= "#ffffff";
  white80= "#ffffff80"
  white30= "#ffffff30"
  white20="#ffffff20";
  white10="#ffffff10";
  lightGray00 = "#dddddd";
  lightGray70 = "#dddddd70";
  lightGray40 = "#dddddd40";
  mediumGray00 = "#aaaaaa";
  black30 = "#00000030";
  black70 = "#00000070";
  black00 = "#00000000"

  blueGrayHighlight="#434c5e";
  blueGrayHighlight30="#434c5e70";
  blueGray00="#343D46"
  blueGrayShadow= "#23292e";
  blueGrayShadow2="#1d1e22";

  lightTeal70 = "#88c0d070";
  teal00= "#5fb3b3";

  lightBlue20 = "#92b0ce20";
  lightBlue00 = "#92b0ce";
  blue00= "#6699cc";
  blue70= "#6699cc70";

  lightYellow00= "#ebcb8b";
  yellow00= "#FAB763";
  yellow70= "#FAB76370";
  yellow40= "#FAB76340";
  orangeRed="#FA8763";
  red00="#EE6A6F";
  redcc="#EE6A6FCC"
  red40="#EE6A6F40";

  purple00= "#c594c5";

  green00 = "#A3CE9E";
  green70 = "#A3CE9E70";
  green40 = "#A3CE9E40";

// exportable json via `gulp`
module.exports = {
    "name": "Mariana (Pro)",
    "type": "dark",
    "colors": {
      // COLOR REFERENCE: https://code.visualstudio.com/docs/getstarted/theme-color-reference
  
      //  BASE COLORS
      "focusBorder": black30,
      "foreground": lightGray00,
      "selection.background": lightTeal70,
      "widget.shadow": black30,
  
      // TEXT COLORS - Colors inside a text document, such as the welcome page.
      "textLink.activeForeground":  blue00,
      "textLink.foreground":  blue00,
      "textPreformat.foreground": blue00,
  
      // BUTTON CONTROL - A set of colors for button widgets such as Open Folder button in the Explorer of a new window.
      "button.background":  blue00,
      "button.foreground": white00,
      "button.hoverBackground": blue70,
  
      // DROPDOWN CONTROL - A set of colors for all dropdown widgets such as in the Integrated Terminal or the Output panel. Note that the dropdown control is not used on macOS currently.
      "dropdown.background": blueGrayShadow,
      "dropdown.listBackground": blueGrayShadow,
  
      // INPUT CONTROL - Colors for input controls such as in the Search view or the Find/Replace dialog.
      "input.background": blueGray00,
      "input.border": blueGray00,
      "input.foreground": lightGray00,
      "input.placeholderForeground": lightGray70,
  
      // SCROLL BAR CONTROL - Colors for input controls such as in the Search view or the Find/Replace dialog.
      "scrollbar.shadow": black70,
      "scrollbarSlider.activeBackground": white30,
      "scrollbarSlider.background": white20,
      "scrollbarSlider.hoverBackground": white30,
  
      // BADGE - Badges are small information labels, for example, search results count.
      "badge.foreground": white00,
      "badge.background": redcc,
  
      // PROGRESS BAR
      "progressBar.background": blueGrayShadow,
  
      // LIST AND TREES - Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.
      "list.activeSelectionBackground": blueGrayHighlight,
      "list.activeSelectionForeground": lightGray00,
      "list.inactiveSelectionBackground": blueGrayHighlight30,
      "list.inactiveSelectionForeground": lightGray00,
      "list.hoverForeground": lightGray00,
      "list.focusForeground": lightGray00,
      "list.focusBackground": blueGrayHighlight,
      "list.hoverBackground": blueGrayHighlight30,
      "list.dropBackground": blueGrayHighlight,
      "list.highlightForeground": white00,
      "list.errorForeground": red00,
      "list.warningForeground": yellow00,
  
      // ACTIVITY BAR - The Activity Bar is displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar
      "activityBar.background": blueGrayShadow,
      "activityBar.dropBackground": blueGray00,
      "activityBar.foreground": lightGray00,
      // "activityBar.border": black30,
      "activityBarBadge.background": redcc,
      "activityBarBadge.foreground": white00,
  
      // SIDE BAR - The Side Bar contains views like the Explorer and Search.
      "sideBar.background": blueGrayShadow,
      "sideBar.foreground": lightGray00,
      // "sideBar.border": black30,
      "sideBarSectionHeader.background": blueGrayShadow2,
      "sideBarSectionHeader.foreground": lightGray00,
      "sideBarTitle.foreground": lightGray00,
  
      // EDITOR GROUPS & TABS - Editor Groups are the containers of editors. There can be up to three editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.,
      "editorGroup.border": black30,
      "editorGroup.dropBackground": blueGrayShadow,
      "editorGroupHeader.noTabsBackground": blueGrayShadow,
      "editorGroupHeader.tabsBackground": blueGrayShadow,
      // "editorGroupHeader.tabsBorder": black30,
      "tab.activeBackground": blueGray00,
      "tab.activeForeground": lightGray00,
      "tab.border": white10,
      "tab.activeBorder": blueGray00,
      "tab.unfocusedActiveBorder": blueGray00,
      "tab.inactiveBackground": "#3940497c",
      "tab.inactiveForeground": lightGray70,
      "tab.unfocusedActiveForeground": lightGray70,
      "tab.unfocusedInactiveForeground": lightGray70,
  
      // EDITOR COLOR - The most prominent editor colors are the token colors used for syntax highlighting and are based on the language grammar installed.
      "editor.background": blueGray00,
      "editor.foreground": lightGray00,
  
      "editor.hoverHighlightBackground": lightBlue20,
      "editor.findMatchBackground": lightBlue20,
      "editor.findMatchHighlightBackground": lightBlue20,
      "editor.findRangeHighlightBackground": lightBlue20,
      "editor.lineHighlightBackground": lightBlue20,
      "editor.lineHighlightBorder": lightBlue20,
      "editor.inactiveSelectionBackground": lightBlue20,
      "editor.selectionBackground": lightBlue20,
      "editor.selectionHighlightBackground": lightBlue20,
      "editor.rangeHighlightBackground": lightBlue20,
      "editor.wordHighlightBackground": lightBlue20,
      "editor.wordHighlightStrongBackground": lightBlue20,
  
      "editorError.foreground": red00,
      "editorError.border": red00,
      "editorWarning.foreground": yellow00,
      "editorInfo.foreground": green00,
      "editorWarning.border": lightYellow00,
      "editorCursor.foreground": lightGray00,
      "editorIndentGuide.background": blueGrayHighlight,
      "editorLineNumber.foreground": lightGray70,
      "editorWhitespace.foreground": blueGrayHighlight30,
  
      "editorOverviewRuler.border": blueGrayHighlight,
      "editorOverviewRuler.currentContentForeground": blueGrayHighlight,
      "editorOverviewRuler.incomingContentForeground": blueGrayHighlight,
      "editorOverviewRuler.findMatchForeground": lightTeal70,
      "editorOverviewRuler.rangeHighlightForeground": lightTeal70,
      "editorOverviewRuler.selectionHighlightForeground": lightTeal70,
      "editorOverviewRuler.wordHighlightForeground": lightTeal70,
      "editorOverviewRuler.wordHighlightStrongForeground": lightTeal70,
      "editorOverviewRuler.modifiedForeground": lightYellow00,
      "editorOverviewRuler.addedForeground": green00,
      "editorOverviewRuler.deletedForeground": red00,
      "editorOverviewRuler.errorForeground": red00,
      "editorOverviewRuler.warningForeground": lightYellow00,
      "editorOverviewRuler.infoForeground": lightTeal70,
      "editorOverviewRuler.bracketMatchForeground": lightTeal70,
  
      "editorGutter.modifiedBackground": lightYellow00,
      "editorGutter.addedBackground": green00,
      "editorGutter.deletedBackground": red00,
  
      // DIFF EDITOR COLORS - For coloring inserted and removed text, use either a background or a border color but not both.
      "diffEditor.insertedTextBackground": green40,
      "diffEditor.removedTextBackground": red40,
  
      // EDITOR WIDGET COLORS - The Editor widget is shown in front of the editor content. Examples are the Find/Replace dialog, the suggestion widget, and the editor hover.
      "editorWidget.background": blueGrayShadow,
      "editorWidget.border": black00,
      "editorSuggestWidget.background": blueGrayShadow,
  
      // PEEK VIEW COLORS - Peek views are used to show references and declarations as a view inside the editor.
      "peekViewResult.background": blueGray00,
      "peekViewTitle.background": blueGrayShadow,
  
      // MERGE CONFLICTS - Merge conflict decorations are shown when the editor contains special diff ranges.
      "merge.currentHeaderBackground": yellow70,
      "merge.currentContentBackground": yellow40,
      "merge.incomingHeaderBackground": green70,
      "merge.incomingContentBackground": green40,
  
      // PANEL COLORS - Panels are shown below the editor area and contain views like Output and Integrated Terminal.
      "panel.background": blueGrayShadow2,
      "panel.border": black30,
      "panelTitle.activeBorder":  blue00,
  
      // STATUS BAR COLORS - The Status Bar is shown in the bottom of the workbench.
      "statusBar.background": blueGrayShadow2,
      "statusBar.debuggingBackground":  blue00,
      "statusBar.debuggingForeground": lightGray00,
      "statusBar.noFolderForeground": lightGray00,
      "statusBar.noFolderBackground": blueGrayHighlight,
      "statusBar.foreground": lightGray00,
      "statusBarItem.activeBackground": blueGrayHighlight,
      "statusBarItem.hoverBackground": blueGrayHighlight30,
      "statusBarItem.prominentBackground": blueGrayHighlight,
      "statusBarItem.prominentHoverBackground": blueGrayHighlight30,
      "statusBar.border": white10,
  
      // TITLE BAR COLORS - Note: These colors are currently only supported on macOS.
      "titleBar.activeBackground": blueGrayShadow,
      "titleBar.activeForeground": lightGray00,
      // "titleBar.border": black30,
      "titleBar.inactiveBackground": blueGrayShadow,
      "titleBar.inactiveForeground": lightGray70,
  
      // NOTIFICATION COLORS
      "notificationCenterHeader.foreground": lightGray00,
      "notificationCenterHeader.background": blueGrayShadow,
  
      // EXTENSIONS
      "extensionButton.prominentForeground": white00,
      "extensionButton.prominentBackground":  blue00,
      "extensionButton.prominentHoverBackground": blue70,
  
      // QUICK PICKER
      "pickerGroup.border": blue00,
      "pickerGroup.foreground": blue00,
  
      // INTEGRATED TERMINAL COLORS
      "terminal.ansiBrightBlack": white80,
      "terminal.ansiBlack": white80,
      "terminal.ansiBlue":  blue00,
      "terminal.ansiBrightBlue":  blue00,
      "terminal.ansiBrightCyan":  blue00,
      "terminal.ansiCyan":  blue00,
      "terminal.ansiBrightMagenta": purple00,
      "terminal.ansiMagenta": purple00,
      "terminal.ansiBrightRed": red00,
      "terminal.ansiRed": red00,
      "terminal.ansiYellow": yellow00,
      "terminal.ansiBrightYellow": yellow00,
      "terminal.ansiBrightGreen": green00,
      "terminal.ansiGreen": green00,
      "terminal.ansiWhite": lightGray00,
      "terminal.selectionBackground": lightGray40,
      "terminalCursor.background": lightGray40,
      "terminalCursor.foreground": lightGray00,
  
      // GIT COLORS
      "gitDecoration.modifiedResourceForeground": lightYellow00,
      "gitDecoration.deletedResourceForeground": red00,
      "gitDecoration.untrackedResourceForeground": lightGray70,
      "gitDecoration.conflictingResourceForeground": red00,
      "gitDecoration.submoduleResourceForeground": lightGray70
  
      // BREADCRUMBS - The theme colors for breadcrumbs navigation
      // "breadcrumb.foreground": white00,
      // "breadcrumb.focusForeground": white00,
      // "breadcrumb.activeSelectionForeground": white00,
      // "breadcrumbPicker.background": black00,
    },
    "tokenColors": [
      {
        "name": "Comment",
        "scope": ["comment", "punctuation.definition.comment"],
        "settings": {
          "foreground": lightGray70
        }
      },
      {
        "name": "String",
        "scope": "string",
        "settings": {
          "foreground": green00
        }
      },
      {
        "name": "Punctuation",
        "scope": ["punctuation.definition"],
        "settings": {
          "foreground": teal00
        }
      },
      {
        "name": "Number",
        "scope": "constant.numeric",
        "settings": {
          "foreground": yellow00
        }
      },
      {
        "name": "Built-in constant",
        "scope": "constant.language",
        "settings": {
          "fontStyle": "italic",
          "foreground": red00
        }
      },
      {
        "name": "User-defined constant",
        "scope": ["constant.character", "constant.other"],
        "settings": {
          "foreground": purple00
        }
      },
      {
        "name": "Member Variable",
        "scope": "variable.member",
        "settings": {
          "foreground": red00
        }
      },
      {
        "name": "Keyword",
        "scope": [
          "keyword - keyword.operator",
          "keyword.operator.word",
          "keyword.control",
          "keyword.operator.new.js"
        ],
        "settings": {
          "foreground": purple00
        }
      },
      {
        "name": "Embedded Line Template Line JS",
        "scope": "string.template.js meta.template.expression.js meta.embedded.line.js",
        "settings": {
          "foreground": lightGray00
        }
      },
      {
        "name": "Operators",
        "scope": "keyword.operator",
        "settings": {
          "foreground": orangeRed
        }
      },
      {
        "name": "Punctuation",
        "scope": ["punctuation.separator", "punctuation.terminator"],
        "settings": {
          "foreground": mediumGray00
        }
      },
      {
        "name": "Punctuation",
        "scope": "punctuation.section",
        "settings": {
          "foreground": white00
        }
      },
      {
        "name": "Accessor",
        "scope": "punctuation.accessor",
        "settings": {
          "foreground": mediumGray00 
        }
      },
      {
        "name": "Annotation Punctuation",
        "scope": "punctuation.definition.annotation",
        "settings": {
          "foreground": teal00
        }
      },
      {
        "name": "JavaScript Dollar",
        "scope": [
          "variable.other.dollar.only.js",
          "variable.other.object.dollar.only.js",
          "variable.type.dollar.only.js",
          "support.class.dollar.only.js"
        ],
        "settings": {
          "foreground": teal00
        }
      },
      {
        "name": "Storage",
        "scope": "storage",
        "settings": {
          "foreground": red00
        }
      },
      {
        "name": "Storage type",
        "scope": "storage.type",
        "settings": {
          "fontStyle": "italic",
          "foreground": purple00
        }
      },
      {
        "name": "Entity name",
        "scope": "entity.name.function",
        "settings": {
          "foreground": teal00
        }
      },
      {
        "name": "Object Property JS",
        "scope": "meta.object-literal.key.js",
        "settings": {
          "foreground": blue00
        }
      },
      {
        "name": "Entity name",
        "scope": "entity.name - (entity.name.section | entity.name.tag | entity.name.label)",
        "settings": {
          "foreground": yellow00
        }
      },
      {
        "name": "Inherited class",
        "scope": "entity.other.inherited-class",
        "settings": {
          "fontStyle": "italic underline",
          "foreground": teal00
        }
      },
      {
        "name": "Function argument",
        "scope": "variable.parameter",
        "settings": {
          "fontStyle": "",
          "foreground": yellow00
        }
      },
      {
        "name": "Language variable",
        "scope": "variable.language",
        "settings": {
          "fontStyle": "italic",
          "foreground": red00
        }
      },
      {
        "name": "Tag name",
        "scope": "entity.name.tag",
        "settings": {
          "fontStyle": "",
          "foreground": red00
        }
      },
      {
        "name": "Tag attribute",
        "scope": "entity.other.attribute-name",
        "settings": {
          "foreground": purple00
        }
      },
      {
        "name": "Function call",
        "scope": ["variable.function", "variable.annotation"],
        "settings": {
          "fontStyle": "",
          "foreground": blue00
        }
      },
      {
        "name": "Library function",
        "scope": ["support.function", "support.macro"],
        "settings": {
          "fontStyle": "italic",
          "foreground": blue00
        }
      },
      {
        "name": "Library constant",
        "scope": "support.constant",
        "settings": {
          "fontStyle": "italic",
          "foreground": purple00
        }
      },
      {
        "name": "Library class/type",
        "scope": ["support.type", "support.class"],
        "settings": {
          // "fontStyle": "italic",
          "foreground": blue00
        }
      },
      {
        "name": "Invalid",
        "scope": "invalid",
        "settings": {
          "foreground": mediumGray00
        }
      },
      {
        "name": "Invalid deprecated",
        "scope": "invalid.deprecated",
        "settings": {
          "foreground": white00
        }
      },
      {
        "name": "YAML Key",
        "scope": "entity.name.tag.yaml",
        "settings": {
          "foreground": teal00
        }
      },
      {
        "name": "YAML String",
        "scope": "source.yaml string.unquoted",
        "settings": {
          "foreground": lightGray00
        }
      },
      {
        "name": "markup headings",
        "scope": "markup.heading",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "name": "markup headings",
        "scope": "markup.heading punctuation.definition.heading",
        "settings": {
          "foreground": red00
        }
      },
      {
        "name": "markup h1",
        "scope": "markup.heading.1 punctuation.definition.heading",
        "settings": {
          "foreground": red00
        }
      },
      {
        "name": "markup links",
        "scope": ["string.other.link", "markup.underline.link"],
        "settings": {
          "foreground": blue00
        }
      },
      {
        "name": "markup bold",
        "scope": "markup.bold",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "name": "markup italic",
        "scope": "markup.italic",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "name": "markup bold/italic",
        "scope": "markup.italic markup.bold | markup.bold markup.italic",
        "settings": {
          "fontStyle": "bold italic"
        }
      },
      {
        "name": "markup hr",
        "scope": "punctuation.definition.thematic-break",
        "settings": {
          "foreground": yellow00
        }
      },
      {
        "name": "markup numbered list bullet",
        "scope": "markup.list.numbered.bullet",
        "settings": {
          "foreground": green00
        }
      },
      {
        "name": "markup blockquote",
        "scope": [
          "markup.quote punctuation.definition.blockquote",
          "markup.list punctuation.definition.list_item"
        ],
        "settings": {
          "foreground": yellow00
        }
      },
      {
        "name": "markup punctuation",
        "scope": "(text punctuation.definition.italic | text punctuation.definition.bold)",
        "settings": {
          "foreground": purple00
        }
      },
      {
        "name": "diff.header",
        "scope": ["meta.diff", "meta.diff.header"],
        "settings": {
          "foreground": purple00
        }
      },
      {
        "name": "diff.deleted",
        "scope": "markup.deleted",
        "settings": {
          "foreground": red00
        }
      },
      {
        "name": "diff.inserted",
        "scope": "markup.inserted",
        "settings": {
          "foreground": green00
        }
      },
      {
        "name": "diff.changed",
        "scope": "markup.changed",
        "settings": {
          "foreground": lightYellow00
        }
      },
      {
        "name": "CSS Properties",
        "scope": "support.type.property-name",
        "settings": {
          "fontStyle": "",
          "foreground": lightGray00
        }
      },
      {
        "scope": "constant.numeric.line-number.match",
        "settings": {
          "foreground": red00
        }
      },
      {
        "scope": "message.error",
        "settings": {
          "foreground": red00
        }
      }
    ]
  }
  