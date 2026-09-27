import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen, Star, Clock, Users, Play, CheckCircle2, 
  Sparkles, ArrowRight, ShieldCheck, Gift, Layers, Search
} from 'lucide-react';

export default function CourseList() {
  const { 
    courses, 
    currentUser, 
    setSelectedCourseForDetail, 
    setSelectedCourseId, 
    setCurrentView,
    initiateCoursePurchase 
  } = useApp();

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Tất Cả Khóa Học' },
    { id: 'portrait', label: 'Ánh Sáng & Chân Dung' },
    { id: 'post-processing', label: 'Hậu Kỳ & Màu Sắc' },
    { id: 'wedding', label: 'Phóng Sự Cưới Pro' },
    { id: 'basics', label: 'Căn Bản & Nhập Môn' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (num) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
  };

  return (
    <div>
      {/* Academy Hero Header */}
      <section
        style={{
          padding: '80px 0 60px',
          background: 'linear-gradient(180deg, rgba(14, 17, 23, 0.9) 0%, rgba(7, 8, 10, 0.98) 100%)',
          borderBottom: '1px solid var(--border-subtle)',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-full)', marginBottom: '18px' }}>
            <Sparkles size={15} color="var(--gold-primary)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              ONLINE MASTERCLASS ACADEMY
            </span>
          </div>

          <h1 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', color: '#fff', marginBottom: '16px' }}>
            Làm Chủ Ống Kính • Khai Phá <span className="gold-text">Tư Duy Thị Giác</span>
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Giáo trình thực chiến 100% được đúc kết từ 14 năm chụp bìa tạp chí và thương mại. Học trực tuyến mọi lúc mọi nơi, cấp chứng chỉ và sở hữu trọn đời bộ Preset màu độc quyền.
          </p>

          {/* Value Props */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', color: 'var(--text-main)', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--gold-primary)" />
              <span>Video chất lượng 4K Ultra HD</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--gold-primary)" />
              <span>Tặng bộ Presets & File RAW độc quyền</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--gold-primary)" />
              <span>Hỗ trợ giải đáp 1-1 từ Nhiếp ảnh gia</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--gold-primary)" />
              <span>Kích hoạt học ngay qua VietQR 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Catalog Section */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="container">
          {/* Controls: Search & Category Chips */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
            <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '6px' }}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    background: activeCategory === cat.id ? 'var(--gold-gradient)' : 'rgba(255,255,255,0.04)',
                    color: activeCategory === cat.id ? '#000' : 'var(--text-muted)',
                    fontWeight: activeCategory === cat.id ? 700 : 500,
                    fontSize: '0.88rem',
                    border: activeCategory === cat.id ? 'none' : '1px solid var(--border-glass)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div style={{ position: 'relative', width: '280px', maxWidth: '100%' }}>
              <Search
                size={16}
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }}
              />
              <input
                type="text"
                placeholder="Tìm khóa học..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '36px', fontSize: '0.88rem' }}
              />
            </div>
          </div>

          {/* Courses Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '32px'
            }}
          >
            {filteredCourses.map(course => {
              const isEnrolled = currentUser?.enrolledCourses?.includes(course.id);

              return (
                <div
                  key={course.id}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-lg)'
                  }}
                >
                  {/* Thumbnail Cover */}
                  <div
                    style={{
                      position: 'relative',
                      height: '220px',
                      overflow: 'hidden',
                      backgroundColor: '#151922'
                    }}
                  >
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,17,23,0.9) 0%, transparent 60%)' }} />

                    {/* Badge */}
                    <div style={{ position: 'absolute', top: '14px', left: '14px', display: 'flex', gap: '6px' }}>
                      <span className="badge badge-gold" style={{ backdropFilter: 'blur(8px)', background: 'rgba(7, 8, 10, 0.8)' }}>
                        {course.badge}
                      </span>
                    </div>

                    {isEnrolled && (
                      <div style={{ position: 'absolute', top: '14px', right: '14px' }}>
                        <span className="badge badge-emerald" style={{ backdropFilter: 'blur(8px)' }}>
                          ✓ ĐÃ SỞ HỮU
                        </span>
                      </div>
                    )}

                    <div style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--gold-light)' }}>
                      <span>{course.level}</span>
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '0.85rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--gold-primary)' }}>
                        <Star size={15} fill="var(--gold-primary)" />
                        <strong>{course.rating}</strong>
                      </div>
                      <span style={{ color: 'var(--text-dim)' }}>•</span>
                      <span style={{ color: 'var(--text-muted)' }}>{course.studentsCount?.toLocaleString()} học viên</span>
                    </div>

                    <h3
                      className="font-serif"
                      style={{
                        fontSize: '1.25rem',
                        color: '#fff',
                        marginBottom: '10px',
                        lineHeight: 1.35,
                        minHeight: '52px'
                      }}
                    >
                      {course.title}
                    </h3>

                    <p
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.88rem',
                        lineHeight: 1.6,
                        marginBottom: '18px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {course.subtitle || course.description}
                    </p>

                    {/* Bottom Pricing & Action Buttons */}
                    <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '14px' }}>
                        <div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Học phí ưu đãi:</div>
                          <div className="font-serif gold-text" style={{ fontSize: '1.4rem', fontWeight: 800 }}>
                            {formatPrice(course.salePrice)}
                          </div>
                        </div>
                        {course.originalPrice && (
                          <div style={{ textDecoration: 'line-through', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                            {formatPrice(course.originalPrice)}
                          </div>
                        )}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: isEnrolled ? '1fr' : '1fr 1fr', gap: '8px' }}>
                        {isEnrolled ? (
                          <button
                            className="btn btn-gold"
                            onClick={() => {
                              setSelectedCourseId(course.id);
                              setCurrentView('classroom');
                            }}
                          >
                            <Play size={16} />
                            <span>Tiếp Tục Học Ngay</span>
                          </button>
                        ) : (
                          <>
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={() => setSelectedCourseForDetail(course)}
                              title="Xem chi tiết và học thử"
                            >
                              <span>Chi Tiết</span>
                            </button>
                            <button
                              className="btn btn-gold btn-sm"
                              onClick={() => initiateCoursePurchase(course)}
                              title="Đăng ký mua khóa học"
                            >
                              <span>Đăng Ký Học</span>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
