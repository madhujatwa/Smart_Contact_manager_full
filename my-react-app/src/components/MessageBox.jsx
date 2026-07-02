export default function MessageBox({ message, type = 'info', onClose }) {
  if (!message) return null;

  const styles = {
    success: 'bg-green-100 text-green-800 border-green-300',
    error:   'bg-red-100 text-red-800 border-red-300',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    info:    'bg-blue-100 text-blue-800 border-blue-300',
  };

  return (
    <div className={`flex items-center justify-between p-3 mb-4 border rounded-lg text-sm ${styles[type]}`}>
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} className="ml-4 font-bold hover:opacity-70">
          &times;
        </button>
      )}
    </div>
  );
}