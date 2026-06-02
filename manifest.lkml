project_name: "viz-text-tile"

constant: VIS_LABEL {
  value: "Text Tile"
  export: override_optional
}

constant: VIS_ID {
  value: "text_tile"
  export:  override_optional
}

visualization: {
  id: "@{VIS_ID}"
  file: "texttile.js"
  label: "@{VIS_LABEL}"
  dependencies: [
    "https://unpkg.com/react@16/umd/react.production.min.js",
    "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"
  ]
}

