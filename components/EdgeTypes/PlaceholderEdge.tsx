import React from 'react';
import { EdgeProps, getBezierPath } from 'react-flow-renderer';

import styles from './EdgeTypes.module.css';

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path id={id} style={style} className={styles.placeholderPath} d={edgePath} markerEnd={markerEnd} />
    </>
  );
}
