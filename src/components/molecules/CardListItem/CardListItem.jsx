import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
const CardListItem = (props) => {
  const [clicked, setClicked] = useState(false);
  const { image, title, description, tags, buttonText, buttonOnClick } = props;

  const clickHandler = () => {
    setClicked(true);
    if (buttonOnClick) {
      buttonOnClick();
    }
  };

  return (
    <div>
      <div>
        <div>okasdoksaokd</div>

        <div>
          <div>
            <Button onClick={clickHandler} disabled={clicked}>
              {buttonText || clicked ? 'Adotado!' : 'Adotar'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListItem;
