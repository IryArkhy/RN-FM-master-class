import React from 'react';
import Boxes from '../../components/Boxes';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return <Boxes colors={colors} paletteName={paletteName} />;
};

export default ColorPalette;
