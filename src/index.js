import React from 'react';
import ReactDOM from 'react-dom';
import TileGrid from './TileGrid';

const loadGoogleFonts = () => {
  const fontLink = document.getElementById('looker-custom-tile-fonts');
  if (!fontLink) {
    const link = document.createElement('link');
    link.id = 'looker-custom-tile-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Fira+Code:wght@400;500&display=swap';
    document.head.appendChild(link);
  }
};

const vizConfig = {
  options: {
    // Layout Mode Settings
    data_mode: {
      type: 'string',
      label: 'Mode',
      default: 'rows',
      display: 'select',
      values: [
        { 'Row-by-Row': 'rows' },
        { 'Column-by-Column': 'columns' }
      ],
      section: 'Layout',
      order: 0,
    },

    // Header Options
    show_header: {
      type: 'boolean',
      label: 'Show',
      default: true,
      section: 'Header',
      order: 1,
    },
    header_text: {
      type: 'string',
      label: 'Text',
      default: '',
      placeholder: 'Override (comma sep)',
      section: 'Header',
      order: 2,
    },
    header_font_family: {
      type: 'string',
      label: 'Font',
      default: 'Inter, sans-serif',
      display: 'select',
      values: [
        { 'Inter': 'Inter, sans-serif' },
        { 'Outfit': 'Outfit, sans-serif' },
        { 'Roboto': 'Roboto, sans-serif' },
        { 'Playfair': 'Playfair Display, serif' },
        { 'System': 'system-ui, -apple-system, sans-serif' }
      ],
      section: 'Header',
      order: 3,
    },
    header_font_size: {
      type: 'string',
      label: 'Size',
      default: '12px',
      display: 'select',
      values: [
        { '10px': '10px' },
        { '11px': '11px' },
        { '12px': '12px' },
        { '14px': '14px' },
        { '16px': '16px' }
      ],
      section: 'Header',
      order: 4,
    },
    header_font_color: {
      type: 'string',
      label: 'Color',
      default: '#6B7280',
      section: 'Header',
      display: 'color',
      order: 5,
    },
    header_font_weight: {
      type: 'string',
      label: 'Weight',
      default: '500',
      display: 'select',
      values: [
        { 'Normal': '400' },
        { 'Medium': '500' },
        { 'Bold': '700' }
      ],
      section: 'Header',
      order: 6,
    },
    header_alignment: {
      type: 'string',
      label: 'Align',
      default: 'left',
      display: 'select',
      values: [
        { 'Left': 'left' },
        { 'Center': 'center' },
        { 'Right': 'right' }
      ],
      section: 'Header',
      order: 7,
    },

    // Main Text Options
    text_font_family: {
      type: 'string',
      label: 'Font',
      default: 'Inter, sans-serif',
      display: 'select',
      values: [
        { 'Inter': 'Inter, sans-serif' },
        { 'Outfit': 'Outfit, sans-serif' },
        { 'Roboto': 'Roboto, sans-serif' },
        { 'Playfair': 'Playfair Display, serif' },
        { 'Fira': 'Fira Code, monospace' },
        { 'System': 'system-ui, -apple-system, sans-serif' }
      ],
      section: 'Text',
      order: 10,
    },
    text_font_size: {
      type: 'string',
      label: 'Size',
      default: '24px',
      display: 'select',
      values: [
        { '14px': '14px' },
        { '16px': '16px' },
        { '18px': '18px' },
        { '20px': '20px' },
        { '24px': '24px' },
        { '28px': '28px' },
        { '32px': '32px' },
        { '40px': '40px' },
        { '48px': '48px' }
      ],
      section: 'Text',
      order: 11,
    },
    text_font_color: {
      type: 'string',
      label: 'Color',
      default: '#111827',
      section: 'Text',
      display: 'color',
      order: 12,
    },
    text_font_weight: {
      type: 'string',
      label: 'Weight',
      default: '600',
      display: 'select',
      values: [
        { 'Light': '300' },
        { 'Normal': '400' },
        { 'Medium': '500' },
        { 'SemiBold': '600' },
        { 'Bold': '700' }
      ],
      section: 'Text',
      order: 13,
    },
    text_alignment: {
      type: 'string',
      label: 'Align',
      default: 'left',
      display: 'select',
      values: [
        { 'Left': 'left' },
        { 'Center': 'center' },
        { 'Right': 'right' }
      ],
      section: 'Text',
      order: 14,
    },
    text_wrapping: {
      type: 'string',
      label: 'Wrap',
      default: 'wrap',
      display: 'select',
      values: [
        { 'Wrap': 'wrap' },
        { 'Scroll': 'nowrap' },
        { 'Truncate': 'truncate' }
      ],
      section: 'Text',
      order: 15,
    },
    text_transform: {
      type: 'string',
      label: 'Casing',
      default: 'none',
      display: 'select',
      values: [
        { 'None': 'none' },
        { 'Capitalize': 'capitalize' },
        { 'Uppercase': 'uppercase' },
        { 'Lowercase': 'lowercase' }
      ],
      section: 'Text',
      order: 16,
    },
    markdown_mode: {
      type: 'boolean',
      label: 'Markdown',
      default: true,
      section: 'Text',
      order: 17,
    },
    line_height: {
      type: 'string',
      label: 'LineHeight',
      default: '1.6',
      display: 'select',
      values: [
        { 'Normal': 'normal' },
        { 'Comfortable (1.4)': '1.4' },
        { 'Readable (1.6)': '1.6' },
        { 'Spacious (1.8)': '1.8' }
      ],
      section: 'Text',
      order: 18,
    },

    // Subtext Settings
    show_subtext: {
      type: 'boolean',
      label: 'Show',
      default: true,
      section: 'Subtext',
      order: 20,
    },
    subtext_font_size: {
      type: 'string',
      label: 'Size',
      default: '14px',
      display: 'select',
      values: [
        { '11px': '11px' },
        { '12px': '12px' },
        { '13px': '13px' },
        { '14px': '14px' },
        { '16px': '16px' },
        { '18px': '18px' }
      ],
      section: 'Subtext',
      order: 21,
    },
    subtext_font_color: {
      type: 'string',
      label: 'Color',
      default: '#6B7280',
      section: 'Subtext',
      display: 'color',
      order: 22,
    },
    subtext_font_weight: {
      type: 'string',
      label: 'Weight',
      default: '400',
      display: 'select',
      values: [
        { 'Normal': '400' },
        { 'Medium': '500' },
        { 'Bold': '700' }
      ],
      section: 'Subtext',
      order: 23,
    },

    // Card Styling (Executive Look)
    bg_type: {
      type: 'string',
      label: 'Type',
      default: 'solid',
      display: 'select',
      values: [
        { 'Solid': 'solid' },
        { 'Gradient': 'gradient' }
      ],
      section: 'Card',
      order: 30,
    },
    bg_color: {
      type: 'string',
      label: 'Color',
      default: '#FFFFFF',
      section: 'Card',
      display: 'color',
      order: 31,
    },
    gradient_start_color: {
      type: 'string',
      label: 'Start',
      default: '#FFFFFF',
      section: 'Card',
      display: 'color',
      order: 32,
    },
    gradient_end_color: {
      type: 'string',
      label: 'End',
      default: '#F9FAFB',
      section: 'Card',
      display: 'color',
      order: 33,
    },
    gradient_angle: {
      type: 'number',
      label: 'Angle',
      default: 135,
      section: 'Card',
      order: 34,
    },
    border_radius: {
      type: 'string',
      label: 'Corners',
      default: '8px',
      display: 'select',
      values: [
        { 'None': '0px' },
        { 'Small': '4px' },
        { 'Medium': '8px' },
        { 'Large': '12px' },
        { 'Extra': '16px' },
        { 'Pill': '24px' }
      ],
      section: 'Card',
      order: 35,
    },
    border_width: {
      type: 'string',
      label: 'Border',
      default: '1px',
      display: 'select',
      values: [
        { 'None': '0px' },
        { 'Thin': '1px' },
        { 'Medium': '2px' }
      ],
      section: 'Card',
      order: 36,
    },
    border_color: {
      type: 'string',
      label: 'LineColor',
      default: '#E5E7EB',
      section: 'Card',
      display: 'color',
      order: 37,
    },
    shadow_preset: {
      type: 'string',
      label: 'Shadow',
      default: 'subtle',
      display: 'select',
      values: [
        { 'None': 'none' },
        { 'Subtle': 'subtle' },
        { 'Polished': 'polished' },
        { 'Elevated': 'elevated' }
      ],
      section: 'Card',
      order: 38,
    },
    padding: {
      type: 'string',
      label: 'Padding',
      default: 'medium',
      display: 'select',
      values: [
        { 'Small': 'small' },
        { 'Medium': 'medium' },
        { 'Large': 'large' }
      ],
      section: 'Card',
      order: 39,
    },
    tile_height: {
      type: 'string',
      label: 'Height',
      default: 'auto',
      display: 'select',
      values: [
        { 'Auto': 'auto' },
        { 'Fixed': 'fixed' }
      ],
      section: 'Card',
      order: 40,
    },
    fixed_height_val: {
      type: 'string',
      label: 'Value',
      default: '150px',
      placeholder: 'e.g. 150px',
      section: 'Card',
      order: 41,
    },

    // Layout Settings
    tile_layout: {
      type: 'string',
      label: 'Style',
      default: 'grid',
      display: 'select',
      values: [
        { 'Grid': 'grid' },
        { 'List': 'list' }
      ],
      section: 'Layout',
      order: 50,
    },
    tiles_per_row: {
      type: 'number',
      label: 'Columns',
      default: 3,
      min: 1,
      max: 12,
      section: 'Layout',
      order: 51,
    },
    spacing: {
      type: 'number',
      label: 'Gap',
      default: 16,
      min: 0,
      max: 64,
      section: 'Layout',
      order: 52,
    }
  }
};

looker.plugins.visualizations.add({
  ...vizConfig,
  create: function (element, config) {
    loadGoogleFonts();
    this.container = element.appendChild(document.createElement('div'));
    this.container.style.width = '100%';
    this.container.style.height = '100%';
    this.container.style.overflow = 'auto';
    this.container.style.boxSizing = 'border-box';
  },
  updateAsync: function (data, element, config, queryResponse, details, done) {
    this.clearErrors();

    if (data.length === 0) {
      this.addError({title: "No Data", message: "This visualization requires data."});
      return done();
    }

    const fields = queryResponse.fields;
    const dimensions = fields.dimension_like;
    
    if (dimensions.length < 1) {
      this.addError({title: "Missing Dimension", message: "This visualization requires at least one dimension to render text."});
      return done();
    }

    console.log("Polished Text Tile data shape:", data);
    console.log("Polished Text Tile queryResponse shape:", queryResponse);

    const dataMode = config.data_mode || 'rows';
    let tilesData = [];

    if (dataMode === 'columns') {
      // Shape B: Column-by-Column Mode (Single Row, Multi-Dimension)
      // Reads 1 row, and each column becomes a text box with its own custom header
      const firstRow = data[0];
      tilesData = dimensions.map((d, index) => {
        const text = firstRow[d.name] ? firstRow[d.name].value : '';
        const textRendered = firstRow[d.name] ? firstRow[d.name].rendered : null;
        
        // Handle comma-separated header overrides
        let tileHeader = d.label;
        if (config.header_text) {
          const overrides = config.header_text.split(',').map(s => s.trim());
          if (overrides[index] !== undefined && overrides[index] !== '') {
            tileHeader = overrides[index];
          }
        }

        return {
          text: textRendered !== null && textRendered !== undefined ? textRendered : String(text),
          subtext: '',
          labelFieldLabel: tileHeader
        };
      });
    } else {
      // Shape A: Row-by-Row Mode (Multi-Row, Single Dimension)
      // Reads multiple values in a single column of data
      const labelField = dimensions[0];
      const subtextField = dimensions.length > 1 ? dimensions[1] : null;

      tilesData = data.map((row, index) => {
        const text = row[labelField.name] ? row[labelField.name].value : '';
        const textRendered = row[labelField.name] ? row[labelField.name].rendered : null;
        const subtext = subtextField && row[subtextField.name] ? row[subtextField.name].value : '';
        const subtextRendered = subtextField && row[subtextField.name] ? row[subtextField.name].rendered : null;
        
        let tileHeader = labelField.label;
        if (config.header_text) {
          const overrides = config.header_text.split(',').map(s => s.trim());
          // If multiple overrides are supplied, map them index-to-index.
          // Otherwise fallback to the first override.
          if (overrides[index] !== undefined && overrides[index] !== '') {
            tileHeader = overrides[index];
          } else if (overrides[0] !== '') {
            tileHeader = overrides[0];
          }
        }

        return {
          text: textRendered !== null && textRendered !== undefined ? textRendered : String(text),
          subtext: subtextRendered !== null && subtextRendered !== undefined ? subtextRendered : String(subtext),
          labelFieldLabel: tileHeader
        };
      });
    }

    ReactDOM.render(
      <TileGrid tiles={tilesData} config={config} />,
      this.container
    );

    done();
  },
});
