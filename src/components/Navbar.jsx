import React from 'react';
import { useApp } from '../context/AppContext';
import { Camera, BookOpen, Image, User, Shield, LogOut, Sparkles, CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export default function Navbar() {
  const {
    currentUser,
    setCurrentUser,
    currentView,
    setCurrentView,
    switchRole,
    setAuthModalOpen,
    setAuthMode,
    photographerInfo
  } = useApp();

  return (
    <>
      {/* Quick Demo Switcher Top Bar */}
      <div className="role-switcher-banner">
        <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={14} color="var(--gold-primary)" />
          <strong>Chế độ trải nghiệm nhanh:</strong>
        </span>
        <button
          className={`role-chip ${!currentUser ? 'active' : ''}`}
          onClick={() => switchRole('guest')}
          title="Xem trang với tư cách khách chưa đăng nhập"
        >
          Khách vãng lai
        </button>
        <button
          className={`role-chip ${currentUser?.role === 'student' ? 'active' : ''}`}
          onClick={() => switchRole('student')}
          title="Xem trang với tư cách học viên đã sở hữu khóa học"
        >
          🎓 Học viên: Đỗ Hoàng Long
        </button>
        <button
          className={`role-chip ${currentUser?.role === 'admin' ? 'active' : ''}`}
          onClick={() => switchRole('admin')}
          title="Xem quyền Quản trị viên (Thêm/Sửa ảnh, khóa học, duyệt đơn)"
        >
          👑 Quản trị viên: Vũ Quang Minh
        </button>
      </div>

      {/* Main Navigation Bar */}
      <header className="header-nav">
        <div className="container nav-container">
          {/* Brand Logo */}
          <div
            className="brand-logo"
            onClick={() => setCurrentView('portfolio')}
            title="Trang chủ Minh Vũ Studio"
          >
            <div className="brand-mark">
              <Camera size={22} />
            </div>
            <div>
              <div className="brand-name font-serif">MINH VŨ</div>
              <div className="brand-sub">STUDIO & ACADEMY</div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="nav-links">
              <li>
                <button
                  className={`nav-item-btn ${currentView === 'portfolio' ? 'active' : ''}`}
                  onClick={() => setCurrentView('portfolio')}
                >
                  <Image size={18} />
                  Triển Lãm Portfolio
                </button>
              </li>
              <li>
                <button
                  className={`nav-item-btn ${currentView === 'courses' ? 'active' : ''}`}
                  onClick={() => setCurrentView('courses')}
                >
                  <BookOpen size={18} />
                  Khóa Học Trực Tuyến
                </button>
              </li>
              <li>
                <button
                  className={`nav-item-btn ${currentView === 'about' ? 'active' : ''}`}
                  onClick={() => setCurrentView('about')}
                >
                  <User size={18} />
                  Nhiếp Ảnh Gia
                </button>
              </li>

              {currentUser && (
                <li>
                  <button
                    className={`nav-item-btn ${currentView === 'profile' ? 'active' : ''}`}
                    onClick={() => setCurrentView('profile')}
                  >
                    <span>Khóa Học Của Tôi</span>
                    {currentUser.enrolledCourses?.length > 0 && (
                      <span className="badge badge-gold" style={{ padding: '2px 7px', fontSize: '0.7rem' }}>
                        {currentUser.enrolledCourses.length}
                      </span>
                    )}
                  </button>
                </li>
              )}

              {currentUser?.role === 'admin' && (
                <li>
                  <button
                    className={`nav-item-btn ${currentView === 'admin' ? 'active' : ''}`}
                    onClick={() => setCurrentView('admin')}
                    style={{ borderColor: 'var(--gold-primary)', color: 'var(--gold-light)' }}
                  >
                    <Shield size={18} />
                    Trang Quản Trị
                  </button>
                </li>
              )}
            </ul>
          </nav>

          {/* User Account / Auth Actions */}
          <div className="nav-actions">
            {currentUser ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  onClick={() => setCurrentView('profile')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid var(--border-glass)',
                    cursor: 'pointer'
                  }}
                  title="Xem trang cá nhân & khóa học đã mua"
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--gold-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: '0.85rem'
                    }}
                  >
                    {currentUser.fullName ? currentUser.fullName.charAt(0) : 'U'}
                  </div>
                  <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>
                      {currentUser.fullName.split(' ').slice(-2).join(' ')}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--gold-light)' }}>
                      {currentUser.role === 'admin' ? 'Quản Trị Viên' : 'Học Viên'}
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    setCurrentUser(null);
                  }}
                  title="Đăng xuất"
                  style={{ padding: '8px 10px' }}
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    setAuthMode('login');
                    setAuthModalOpen(true);
                  }}
                >
                  <Phone size={14} />
                  Đăng Nhập (SĐT)
                </button>
                <button
                  className="btn btn-gold btn-sm"
                  onClick={() => {
                    setAuthMode('register');
                    setAuthModalOpen(true);
                  }}
                >
                  Đăng Ký
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
