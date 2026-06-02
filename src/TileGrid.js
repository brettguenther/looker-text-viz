import React from 'react';
import Tile from './Tile';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${props => props.spacing}px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 3}, minmax(0, 1fr));
  gap: ${props => props.gap}px;
  width: 100%;
  box-sizing: border-box;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap}px;
  width: 100%;
  box-sizing: border-box;
`;

const TileGrid = ({ tiles, config }) => {
  const layout = config.tile_layout || 'grid';
  const cols = config.tiles_per_row || 3;
  const spacing = config.spacing !== undefined ? config.spacing : 16;

  if (layout === 'list') {
    return (
      <Wrapper spacing={spacing}>
        <ListContainer gap={spacing}>
          {tiles.map((tile, index) => (
            <Tile key={index} data={tile} config={config} />
          ))}
        </ListContainer>
      </Wrapper>
    );
  }

  return (
    <Wrapper spacing={spacing}>
      <GridContainer cols={cols} gap={spacing}>
        {tiles.map((tile, index) => (
          <Tile key={index} data={tile} config={config} />
        ))}
      </GridContainer>
    </Wrapper>
  );
};

export default TileGrid;
