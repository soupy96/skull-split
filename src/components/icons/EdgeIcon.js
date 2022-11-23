function EdgeIcon({ fill = '#f0ff00', height = 210, width = 400 }) {
  return (
    <svg height={height} width={width}>
      <path d='M10 0 L225 0 L250 30 L250 100 L50 100 L10 70 Z' fill={fill} />
    </svg>
  );
}

export default EdgeIcon;
