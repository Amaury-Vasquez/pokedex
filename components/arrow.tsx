import styles from 'styles/figures.module.css';

const { arrow, prev, next } = styles;

export const Arrow = (props: { type: 'next' | 'prev' }) => {
  const { type } = props;
  let componentClass;

  if (type === 'next') componentClass = next;
  if (type === 'prev') componentClass = prev;

  return <span className={arrow + ' ' + componentClass} />;
};
