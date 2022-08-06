import React from 'react';
import propTypes from 'prop-types';
import plural from 'plural-ru';
import './style.css';

function Controls({ setActive, summationCart }) {

  // reducer fn 
  const counterPrice = () => "пусто"

  console.log(summationCart())
  return (
    <div className='Controls'>
      <p className='Controls-title' >В корзине:</p>

      <p className='Controls-content' >
        {summationCart().quantityP > 0 ?
        `${summationCart().quantityP}
         ${plural(summationCart().quantityP, 'товар', 'товара', 'товарa')} / 
         ${summationCart().priceCrat} ₽` : 'пусто'}
      </p>



      <button onClick={() => setActive(true)}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onAdd: propTypes.func.isRequired // Обязательное свойство - функция
}

Controls.defaultProps = {
  onAdd: () => { } // Значение по умолчанию - функция-заглушка
}

export default React.memo(Controls);
