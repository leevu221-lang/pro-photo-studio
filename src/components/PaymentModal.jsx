import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, QrCode, Copy, Check, ShieldCheck, Clock, 
  CreditCard, Smartphone, AlertCircle, Sparkles, Building
} from 'lucide-react';

export default function PaymentModal() {
  const { 
    paymentModalOpen, 
    setPaymentModalOpen, 
    pendingOrder, 
    completePayment, 
    showToast,
    photographerInfo 
  } = useApp();

  const [paymentMethod, setPaymentMethod] = useState('vietqr'); // 'vietqr' | 'momo' | 'vnpay'
  const [copiedField, setCopiedField] = useState(null);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes countdown

  // Timer countdown
  useEffect(() => {
    if (!paymentModalOpen) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [paymentModalOpen]);

  if (!paymentModalOpen || !pendingOrder) return null;

  const formatPrice = (num) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(fieldName);
    showToast(`Đã sao chép ${fieldName}!`, 'success');
    setTimeout(() => setCopiedField(null), 2500);
  };

  // Techcombank VietQR Dynamic URL (uses standard VietQR format)
  const vietQrUrl = `https://img.vietqr.io/image/970407-190388886688-compact2.png?amount=${pendingOrder.amount}&addInfo=${pendingOrder.id}&accountName=VU%20QUANG%20MINH`;

  return (
    <div className="modal-overlay" onClick={() => setPaymentModalOpen(false)}>
      <div 
        className="modal-content"
        style={{ maxWidth: '680px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close-btn"
          onClick={() => setPaymentModalOpen(false)}
          title="Đóng"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ padding: '24px 28px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '6px' }}>CỔNG THANH TOÁN BẢO MẬT</span>
              <h2 className="font-serif" style={{ fontSize: '1.4rem', color: '#fff' }}>
                Thanh Toán Đăng Ký Khóa Học
              </h2>
            </div>

            {/* Countdown Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(245, 158, 11, 0.12)', border: '1px solid var(--border-gold)', padding: '6px 12px', borderRadius: 'var(--radius-full)', color: 'var(--gold-light)', fontSize: '0.85rem' }}>
              <Clock size={15} />
              <span>Thời gian giữ chỗ: <strong>{formatTime(timeLeft)}</strong></span>
            </div>
          </div>
        </div>

        {/* Payment Methods Tabs */}
        <div style={{ padding: '20px 28px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            <button
              onClick={() => setPaymentMethod('vietqr')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                padding: '12px 8px',
                borderRadius: 'var(--radius-md)',
                background: paymentMethod === 'vietqr' ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255,255,255,0.03)',
                border: paymentMethod === 'vietqr' ? '1px solid var(--gold-primary)' : '1px solid var(--border-glass)',
                color: paymentMethod === 'vietqr' ? 'var(--gold-light)' : 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <QrCode size={20} />
              <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>Chuyển Khoản VietQR</span>
            </button>

            <button
              onClick={() => setPaymentMethod('momo')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                padding: '12px 8px',
                borderRadius: 'var(--radius-md)',
                background: paymentMethod === 'momo' ? 'rgba(165, 0, 100, 0.15)' : 'rgba(255,255,255,0.03)',
                border: paymentMethod === 'momo' ? '1px solid #d82d8b' : '1px solid var(--border-glass)',
                color: paymentMethod === 'momo' ? '#ff66b2' : 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <Smartphone size={20} />
              <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>Ví MoMo QR</span>
            </button>

            <button
              onClick={() => setPaymentMethod('vnpay')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                padding: '12px 8px',
                borderRadius: 'var(--radius-md)',
                background: paymentMethod === 'vnpay' ? 'rgba(0, 102, 204, 0.15)' : 'rgba(255,255,255,0.03)',
                border: paymentMethod === 'vnpay' ? '1px solid #0088ff' : '1px solid var(--border-glass)',
                color: paymentMethod === 'vnpay' ? '#66b2ff' : 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <CreditCard size={20} />
              <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>VNPAY / Thẻ ATM</span>
            </button>
          </div>
        </div>

        {/* Payment Details Container */}
        <div style={{ padding: '24px 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '24px', alignItems: 'center' }}>
            {/* QR Code Presentation */}
            <div style={{ textAlign: 'center', background: '#ffffff', padding: '16px', borderRadius: 'var(--radius-lg)', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}>
              <div style={{ fontSize: '0.75rem', color: '#333', fontWeight: 700, marginBottom: '6px' }}>
                QUÉT MÃ ĐỂ THANH TOÁN 24/7
              </div>
              <img
                src={vietQrUrl}
                alt="VietQR Payment Code"
                style={{ width: '100%', height: 'auto', borderRadius: '4px', display: 'block' }}
                onError={(e) => {
                  // Fallback QR display
                  e.currentTarget.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=TECHCOMBANK-190388886688-${pendingOrder.amount}-${pendingOrder.id}`;
                }}
              />
              <div style={{ fontSize: '0.7rem', color: '#666', marginTop: '6px' }}>
                Hỗ trợ 40+ ứng dụng ngân hàng & ví điện tử
              </div>
            </div>

            {/* Transfer Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>KHÓA HỌC ĐĂNG KÝ</div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>{pendingOrder.courseTitle}</div>
              </div>

              {/* Bank Details Table */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Ngân hàng:</span>
                  <strong style={{ fontSize: '0.85rem', color: '#fff' }}>Techcombank (Kỹ Thương)</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Số tài khoản:</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <strong style={{ color: 'var(--gold-light)', fontSize: '0.95rem' }}>1903 8888 6688</strong>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => copyToClipboard('190388886688', 'Số tài khoản')}
                      style={{ padding: '2px 8px', fontSize: '0.72rem' }}
                    >
                      {copiedField === 'Số tài khoản' ? <Check size={12} color="var(--accent-emerald)" /> : <Copy size={12} />}
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Chủ tài khoản:</span>
                  <strong style={{ fontSize: '0.85rem', color: '#fff' }}>VU QUANG MINH</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Số tiền:</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <strong className="gold-text" style={{ fontSize: '1.1rem', fontWeight: 800 }}>
                      {formatPrice(pendingOrder.amount)}
                    </strong>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => copyToClipboard(pendingOrder.amount.toString(), 'Số tiền')}
                      style={{ padding: '2px 8px', fontSize: '0.72rem' }}
                    >
                      {copiedField === 'Số tiền' ? <Check size={12} color="var(--accent-emerald)" /> : <Copy size={12} />}
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px dashed var(--border-subtle)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Nội dung CK:</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <strong style={{ color: '#38bdf8', fontSize: '0.95rem' }}>{pendingOrder.id}</strong>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => copyToClipboard(pendingOrder.id, 'Nội dung chuyển khoản')}
                      style={{ padding: '2px 8px', fontSize: '0.72rem' }}
                    >
                      {copiedField === 'Nội dung chuyển khoản' ? <Check size={12} color="var(--accent-emerald)" /> : <Copy size={12} />}
                    </button>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                <ShieldCheck size={16} color="var(--accent-emerald)" />
                <span>Hệ thống tự động kích hoạt khóa học trong 1 - 3 phút sau khi chuyển tiền.</span>
              </div>
            </div>
          </div>

          {/* Instant Simulation Action for Demo/Testing */}
          <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setPaymentModalOpen(false)}
            >
              Hủy Giao Dịch
            </button>

            {/* Test Simulation Button */}
            <button
              className="btn btn-gold"
              onClick={() => completePayment(pendingOrder.id)}
              style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: '#fff', border: 'none' }}
              title="Nhấn để giả lập ngân hàng đã nhận tiền và mở khóa ngay"
            >
              <Sparkles size={16} />
              <span>⚡ [Demo Test] Xác Nhận Đã Thanh Toán Thành Công</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
