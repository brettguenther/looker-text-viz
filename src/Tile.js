import React from 'react';
import styled, { css } from 'styled-components';

// Shadow presets
const shadowPresets = {
  none: 'none',
  subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
  polished: '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.03)',
  elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.02)'
};

// Padding presets
const paddingPresets = {
  small: '12px',
  medium: '18px',
  large: '28px'
};

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  
  /* Background type */
  background: ${props => 
    props.bgType === 'gradient' 
      ? `linear-gradient(${props.gradientAngle}deg, ${props.gradientStartColor}, ${props.gradientEndColor})`
      : props.bgColor
  };

  /* Padding */
  padding: ${props => paddingPresets[props.paddingSize] || paddingPresets.medium};

  /* Borders */
  border-style: solid;
  border-width: ${props => props.borderWidth};
  border-color: ${props => props.borderColor};
  border-radius: ${props => props.borderRadius};

  /* Shadow */
  box-shadow: ${props => shadowPresets[props.shadowPreset] || shadowPresets.subtle};

  /* Height */
  height: ${props => props.heightMode === 'fixed' ? props.fixedHeight : 'auto'};
  min-height: 60px;

  /* Micro-animations for premium interaction */
  &:hover {
    transform: translateY(-1px);
    box-shadow: ${props => 
      props.shadowPreset !== 'none' 
        ? '0 10px 20px -5px rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.03)' 
        : 'none'
    };
  }
`;

const Header = styled.div`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  color: ${props => props.fontColor};
  font-weight: ${props => props.fontWeight};
  text-align: ${props => props.alignment};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-sizing: border-box;
  width: 100%;
`;

const MainText = styled.div`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  color: ${props => props.fontColor};
  font-weight: ${props => props.fontWeight};
  text-align: ${props => props.alignment};
  text-transform: ${props => props.textTransform};
  width: 100%;
  box-sizing: border-box;

  /* Text wrapping and behavior styles */
  ${props => props.wrapping === 'wrap' && css`
    white-space: normal;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  `}

  ${props => props.wrapping === 'nowrap' && css`
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    /* Style custom sleek scrollbars */
    &::-webkit-scrollbar {
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 2px;
    }
  `}

  ${props => props.wrapping === 'truncate' && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

const Subtext = styled.div`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  color: ${props => props.fontColor};
  font-weight: ${props => props.fontWeight};
  text-align: ${props => props.alignment};
  margin-top: 6px;
  width: 100%;
  box-sizing: border-box;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: break-word;
`;

const Tile = ({ data, config }) => {
  const { text, subtext, labelFieldLabel } = data;

  // Get configs with fallbacks
  const showHeader = config.show_header !== undefined ? config.show_header : true;
  const headerText = config.header_text || labelFieldLabel;
  const headerFontFamily = config.header_font_family || 'Inter, sans-serif';
  const headerFontSize = config.header_font_size || '12px';
  const headerFontColor = config.header_font_color || '#6B7280';
  const headerFontWeight = config.header_font_weight || '500';
  const headerAlignment = config.header_alignment || 'left';

  const textFontFamily = config.text_font_family || 'Inter, sans-serif';
  const textFontSize = config.text_font_size || '24px';
  const textFontColor = config.text_font_color || '#111827';
  const textFontWeight = config.text_font_weight || '600';
  const textAlignment = config.text_alignment || 'left';
  const textWrapping = config.text_wrapping || 'wrap';
  const textTransform = config.text_transform || 'none';

  const showSubtext = config.show_subtext !== undefined ? config.show_subtext : true;
  const subtextFontSize = config.subtext_font_size || '14px';
  const subtextFontColor = config.subtext_font_color || '#6B7280';
  const subtextFontWeight = config.subtext_font_weight || '400';

  const bgType = config.bg_type || 'solid';
  const bgColor = config.bg_color || '#FFFFFF';
  const gradientStartColor = config.gradient_start_color || '#FFFFFF';
  const gradientEndColor = config.gradient_end_color || '#F9FAFB';
  const gradientAngle = config.gradient_angle !== undefined ? config.gradient_angle : 135;

  const borderRadius = config.border_radius || '8px';
  const borderWidth = config.border_width || '1px';
  const borderColor = config.border_color || '#E5E7EB';
  const shadowPreset = config.shadow_preset || 'subtle';
  const paddingSize = config.padding || 'medium';
  const heightMode = config.tile_height || 'auto';
  const fixedHeight = config.fixed_height_val || '150px';

  return (
    <TileContainer
      bgType={bgType}
      bgColor={bgColor}
      gradientStartColor={gradientStartColor}
      gradientEndColor={gradientEndColor}
      gradientAngle={gradientAngle}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      borderColor={borderColor}
      shadowPreset={shadowPreset}
      paddingSize={paddingSize}
      heightMode={heightMode}
      fixedHeight={fixedHeight}
    >
      {showHeader && (
        <Header
          fontFamily={headerFontFamily}
          fontSize={headerFontSize}
          fontColor={headerFontColor}
          fontWeight={headerFontWeight}
          alignment={headerAlignment}
        >
          {headerText}
        </Header>
      )}
      
      <MainText
        fontFamily={textFontFamily}
        fontSize={textFontSize}
        fontColor={textFontColor}
        fontWeight={textFontWeight}
        alignment={textAlignment}
        wrapping={textWrapping}
        textTransform={textTransform}
      >
        {text}
      </MainText>

      {showSubtext && subtext && (
        <Subtext
          fontFamily={textFontFamily}
          fontSize={subtextFontSize}
          fontColor={subtextFontColor}
          fontWeight={subtextFontWeight}
          alignment={textAlignment}
        >
          {subtext}
        </Subtext>
      )}
    </TileContainer>
  );
};

export default Tile;
