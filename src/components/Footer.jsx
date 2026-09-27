import React from 'react';
import { useApp } from '../context/AppContext';
import { Camera, MapPin, Phone, Mail, Award, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const { setCurrentView } = useApp();

  return (
    <footer style={{ background: '#050608', borderTop: '1px solid var(--border-subtle)', padding: '60px 0 30px', color: 'var(--text-muted)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', color: '#fff' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--gold-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
                <Camera size={20} />
              </div>
              <div className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 800 }}>MINH VŨ STUDIO</div>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '18px' }}>
              Nền tảng triển lãm portfolio nghệ thuật 4K và học viện đào tạo nhiếp ảnh trực tuyến chuẩn quốc tế.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--gold-light)' }}>
              <Award size={16} />
              <span>Sony Artisan of Imagery & Leica Ambassador</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>Khám Phá</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li>
                <a href="#gallery" onClick={(e) => { e.preventDefault(); setCurrentView('portfolio'); }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                  Triển Lãm Portfolio 4K
                </a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => { e.preventDefault(); setCurrentView('courses'); }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                  Khóa Học Nhiếp Ảnh & Hậu Kỳ
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); setCurrentView('about'); }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                  Tiểu Sử & Dàn Máy Ảnh Pro
                </a>
              </li>
              <li>
                <a href="#booking" onClick={(e) => { e.preventDefault(); setCurrentView('about'); }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                  Đặt Lịch Chụp Cưới & Thương Mại
                </a>
              </li>
            </ul>
          </div>

          {/* Payment & Security */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>Thanh Toán An Toàn</h4>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '14px' }}>
              Hệ thống tự động kích hoạt khóa học tức thì 24/7 qua cổng VietQR, Ví MoMo và thẻ ATM/VNPAY.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>VietQR Pro</span>
              <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>Techcombank</span>
              <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>Ví MoMo</span>
              <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>VNPAY-QR</span>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>Liên Hệ Trực Tiếp</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={15} color="var(--gold-primary)" />
                <span>18 Đặng Thai Mai, Q. Tây Hồ, Hà Nội</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} color="var(--gold-primary)" />
                <span>Hotline: 0988 888 888</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} color="var(--gold-primary)" />
                <span>contact@minhvustudio.vn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ paddingTop: '24px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '0.8rem' }}>
          <div>
            © 2026 MINH VŨ STUDIO & ACADEMY. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>Được chế tác với</span>
            <Heart size={13} color="var(--accent-rose)" fill="var(--accent-rose)" />
            <span>dành cho cộng đồng nhiếp ảnh Việt Nam</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
