import css from './controls.module.css';

const Controls = ({ onDecrement, onIncrement }) => {
  return (
    <div className={css.counter__controls}>
      <button className={css.btn} type="button" onClick={onDecrement}>
        Уменьшить на 1
      </button>
      <button className={css.btn} type="button" onClick={onIncrement}>
        Увеличить на 1
      </button>
    </div>
  );
};

export default Controls;
