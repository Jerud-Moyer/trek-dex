import React from 'react';
import './Confirm.css';

type Props = {
  action: string;
  handleStateChange: any;
  handleAction: any;
}

const Confirm: React.FC<Props> = ({ action, handleStateChange, handleAction}) => {
  return (

    <div className='confirm-box' >
      {action === 'delete' &&
      <h2>are you sure you wish to delete this character?</h2>
      }
      {action === 'update' &&
      <h2>are you sure you want to update this character?</h2>
      }
      <button onClick={handleAction}>yes</button>
      <button onClick={handleStateChange}>no</button>
    </div>
  )
}

export default Confirm
