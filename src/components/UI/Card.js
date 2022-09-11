function Card(props) {
  const classes = `card ${props.className}`;

  <div className={classes}>{props.children}</div>;
}

export default Card;
