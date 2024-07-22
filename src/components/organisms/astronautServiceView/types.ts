import React from 'react';

export type IAstronautTabProps = {
  onPressNext: () => void;
  onPressPrev: () => void;
  index: number;
  height: number;
  astronautHeight: number;
  astronautWidth: number;
  width: number;
  refFirst: React.LegacyRef<HTMLImageElement>;
  refSecond: React.LegacyRef<HTMLImageElement>;
  refThird: React.LegacyRef<HTMLImageElement>;
};
