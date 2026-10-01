import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const [classValue, setClassName] = useState('');
  const [message, setMessage] = useState(`${selectedGood} is selected`);
  const [clearButton, setClearButton] = useState(
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={() => {
        setSelectedGood('');
        setMessage('No goods selected');
        setClearButton('');
      }}
    />,
  );
  const [sign, setClearSign] = useState('+');
  const [buttonName, setButtonName] = useState('AddButton');
  const [buttonClassName, setButtonClassName] = useState('');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {message}
        {clearButton}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                good === selectedGood
                  ? 'has-background-success-light'
                  : classValue
              }
            >
              <td>
                <button
                  data-cy={good === selectedGood ? 'RemoveButton' : buttonName}
                  type="button"
                  className={
                    good === selectedGood
                      ? 'button is-info'
                      : `button ${buttonClassName}`
                  }
                  onClick={() => {
                    if (good === selectedGood) {
                      setSelectedGood('');
                      setMessage('No goods selected');
                      setClearButton('');
                      setClassName('');
                      setClearSign(sign);
                      setButtonName(buttonName);
                      setButtonClassName(buttonClassName);
                    } else {
                      setSelectedGood(good);
                      setMessage(`${good} is selected`);
                      setClearButton(clearButton);
                    }
                  }}
                >
                  {good === selectedGood ? '-' : sign}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
