const Alert = ({ text, state }: { text: string; state: 'success' | 'error' }) => {
  return (
    <div
      className={`
                px-5 py-2.5
                ${state === 'success' && 'bg-green-100 text-green-600'}
                ${state === 'error' && 'bg-red-100 text-red-500'}
            `}
    >
      <p> {text} </p>
    </div>
  );
};

export default Alert;
