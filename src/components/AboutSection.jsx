import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Camera, Award, Heart, CheckCircle2, Mail, Phone, 
  MapPin, Sparkles, Send
} from 'lucide-react';

export default function AboutSection() {
  const { photographerInfo, showToast } = useApp();
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    serviceType: 'wedding',
    date: '',
    message: ''
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    showToast(`Cảm ơn bạn ${bookingForm.name}! Y VÕ Visual sẽ liên hệ tư vấn lịch chụp trong 24 giờ.`, 'success');
    setBookingForm({ name: '', phone: '', serviceType: 'wedding', date: '', message: '' });
  };

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Top Hero Bio */}
        <div className="glass-panel" style={{ padding: '48px', marginBottom: '48px', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 420px) 1fr', gap: '48px', alignItems: 'center' }}>
            {/* Portrait Image */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg), 0 0 30px rgba(212, 175, 55, 0.2)',
                  border: '1px solid var(--border-gold)'
                }}
              >
                <img
                  src={photographerInfo.avatar}
                  alt={photographerInfo.fullName}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>

              {/* Accolade badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-16px',
                  right: '-16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-gold)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <Award size={24} color="var(--gold-primary)" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>DANH HIỆU</div>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--gold-light)' }}>Sony Artisan of Imagery</strong>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '12px' }}>
                MASTER VISUAL STORYTELLER
              </span>
              <h1 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#fff', marginBottom: '8px', lineHeight: 1.2 }}>
                {photographerInfo.fullName}
              </h1>
              <div style={{ fontSize: '1.05rem', color: 'var(--gold-light)', marginBottom: '20px' }}>
                {photographerInfo.title}
              </div>

              <blockquote
                style={{
                  borderLeft: '3px solid var(--gold-primary)',
                  paddingLeft: '18px',
                  fontStyle: 'italic',
                  color: 'var(--text-main)',
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                  background: 'rgba(212, 175, 55, 0.04)',
                  padding: '16px',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0'
                }}
              >
                "{photographerInfo.quote}"
              </blockquote>

              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '24px' }}>
                {photographerInfo.bio}
              </p>

              {/* Highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                  <CheckCircle2 size={16} color="var(--gold-primary)" />
                  <span>Vogue Italia Featured Artist</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                  <CheckCircle2 size={16} color="var(--gold-primary)" />
                  <span>Leica M Ambassador Vietnam</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                  <CheckCircle2 size={16} color="var(--gold-primary)" />
                  <span>Giám khảo Nhiếp Ảnh Trẻ 2025</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                  <CheckCircle2 size={16} color="var(--gold-primary)" />
                  <span>14+ Năm cống hiến nghệ thuật</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gear Bag & Booking Form Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
          {/* Gear Bag (Thiết Bị Sử Dụng) */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Camera size={22} color="var(--gold-primary)" />
              <h3 className="font-serif" style={{ fontSize: '1.3rem', color: '#fff', margin: 0 }}>
                Thiết Bị Tiêu Chuẩn (My Gear Bag)
              </h3>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '20px', lineHeight: 1.6 }}>
              Chất lượng hình ảnh vượt trội bắt nguồn từ sự kết hợp hoàn hảo giữa độ phân giải cực cao, dải màu trung thực và hệ thống ánh sáng chủ động.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {photographerInfo.gearList.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.9rem',
                    color: '#fff'
                  }}
                >
                  <span className="gold-text" style={{ fontWeight: 700 }}>0{idx + 1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={15} color="var(--gold-primary)" />
                <span>Studio: 18 Đặng Thai Mai, P. Quảng An, Q. Tây Hồ, Hà Nội</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} color="var(--gold-primary)" />
                <span>Hotline: 0988 888 888 • Giờ làm việc: 08:30 - 20:30 hàng ngày</span>
              </div>
            </div>
          </div>

          {/* Booking & Consultation Form */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <Sparkles size={22} color="var(--gold-primary)" />
              <h3 className="font-serif" style={{ fontSize: '1.3rem', color: '#fff', margin: 0 }}>
                Đặt Lịch Chụp & Hợp Tác Thương Mại
              </h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '20px' }}>
              Dành cho khách hàng cần chụp ảnh cưới nghệ thuật, lookbook thời trang hoặc dự án thương mại cao cấp.
            </p>

            <form onSubmit={handleBookingSubmit}>
              <div className="form-group">
                <label className="form-label">Họ và tên quý khách:</label>
                <input
                  type="text"
                  placeholder="Ví dụ: Nguyễn Phương Thảo"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  className="form-input"
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Số điện thoại liên hệ:</label>
                  <input
                    type="tel"
                    placeholder="0912 345 678"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Gói dịch vụ:</label>
                  <select
                    value={bookingForm.serviceType}
                    onChange={(e) => setBookingForm({ ...bookingForm, serviceType: e.target.value })}
                    className="form-select"
                  >
                    <option value="wedding">Phóng Sự Cưới Trọn Gói</option>
                    <option value="portrait">Chân Dung Nghệ Thuật</option>
                    <option value="commercial">Thương Mại & Bìa Tạp Chí</option>
                    <option value="destination">Pre-Wedding Ngoại Cảnh</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Dự kiến ngày thực hiện:</label>
                <input
                  type="date"
                  value={bookingForm.date}
                  onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Ý tưởng hoặc yêu cầu đặc biệt:</label>
                <textarea
                  rows={2}
                  placeholder="Mô tả phong cách mong muốn hoặc địa điểm yêu thích..."
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-gold" style={{ width: '100%' }}>
                <Send size={16} />
                <span>Gửi Yêu Cầu Tư Vấn Ngay</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
