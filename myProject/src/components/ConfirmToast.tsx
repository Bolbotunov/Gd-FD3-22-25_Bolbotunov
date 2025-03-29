import React from 'react';

type ConfirmToastProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmToast({
  onConfirm,
  onCancel,
}: ConfirmToastProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      <p>Are you sure you want to proceed?</p>
      <div style={{ marginTop: '10px' }}>
        <button
          onClick={onConfirm}
          style={{
            marginRight: '10px',
            backgroundColor: '#47f647',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 16px',
            cursor: 'pointer',
          }}
        >
          Confirm
        </button>
        <button
          onClick={onCancel}
          style={{
            backgroundColor: '#e83636',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 16px',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
