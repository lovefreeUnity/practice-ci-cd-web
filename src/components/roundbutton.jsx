import PropTypes from 'prop-types';

function RoundButton({ buttonText, onClick }) {
  return (
    <button 
      className='bg-blue-500 text-white text-center p-1.5 m-1 self-center rounded-xl'
      onClick = {onClick}
    >
        {buttonText}
    </button>
  );
}

RoundButton.prototype = {
  buttonText: PropTypes.string.isRequired
}

export default RoundButton