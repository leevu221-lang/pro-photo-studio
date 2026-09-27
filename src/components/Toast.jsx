import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, Sparkles, X } from 'lucide-react';

export default function Toast() {
  const { toast } = useApp();

  if (!toast) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle2 size={20} color="var(--accent-emerald)" />;
      case 'info':
        return <Sparkles size={20} color="var(--gold-primary)" />;
      case 'error':
        return <AlertCircle size={20} color="var(--accent-rose)" />;
      default:
        return <Info size={20} color="var(--accent-blue)" />;
    }
  };

  return (
    <div className="toast-container">
      <div className="toast-item">
        <div style={{ flexShrink: 0, marginTop: '2px' }}>
          {getIcon()}
        </div>
        <div style={{ flex: 1, fontSize: '0.88rem', color: '#fff', lineHeight: 1.5 }}>
          {toast.message}
        </div>
      </div>
    </div>
  );
}
