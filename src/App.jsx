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
  const [value, selectedGood] = useState('Jam');
  const [classValue, setClassName] = useState('has-background-success-light');
  const [message, setMessage] = useState(`${value} is selected`);

  const [clearButton, setClearButton] = useState(
    <button data-cy="ClearButton" type="button" className="delete ml-3" />,
  );
  const [sign, setClearSign] = useState('-');
  const [buttonName, setButtonName] = useState('RemoveButton');
  const [buttonClassName, setButtonClassName] = useState('is-info');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {message}
        {clearButton}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr data-cy="Good" key={good} className={classValue}>
              <td>
                <button
                  data-cy={buttonName}
                  type="button"
                  className={`button ${buttonClassName}`}
                  onClick={() => {
                    selectedGood('');
                    setClassName('');
                    setClearSign('+');
                    setButtonName('AddButton');
                    setButtonClassName('');
                    setMessage('No goods selected');
                    setClearButton('');
                  }}
                >
                  {sign}
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
