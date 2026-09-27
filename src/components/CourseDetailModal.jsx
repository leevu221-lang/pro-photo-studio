import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, Play, CheckCircle2, Star, Clock, Users, BookOpen, 
  Download, ShieldCheck, ArrowRight, Lock, Sparkles, Award
} from 'lucide-react';

export default function CourseDetailModal() {
  const { 
    selectedCourseForDetail, 
    setSelectedCourseForDetail, 
    currentUser, 
    initiateCoursePurchase, 
    setSelectedCourseId, 
    setCurrentView 
  } = useApp();

  const [activePreviewLesson, setActivePreviewLesson] = useState(null);

  if (!selectedCourseForDetail) return null;
  const course = selectedCourseForDetail;

  const isEnrolled = currentUser?.enrolledCourses?.includes(course.id);

  const formatPrice = (num) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
  };

  const handleStartLearning = () => {
    setSelectedCourseId(course.id);
    setSelectedCourseForDetail(null);
    setCurrentView('classroom');
  };

  const handlePurchase = () => {
    initiateCoursePurchase(course);
    setSelectedCourseForDetail(null);
  };

  return (
    <div className="modal-overlay" onClick={() => setSelectedCourseForDetail(null)}>
      <div 
        className="modal-content"
        style={{ maxWidth: '850px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close-btn"
          onClick={() => setSelectedCourseForDetail(null)}
          title="Đóng"
        >
          <X size={18} />
        </button>

        {/* Modal Header Cover */}
        <div style={{ position: 'relative', height: '260px', overflow: 'hidden', borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0' }}>
          <img 
            src={course.thumbnail} 
            alt={course.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-surface) 0%, rgba(14,17,23,0.4) 60%, transparent 100%)' }} />
          
          <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <span className="badge badge-gold">{course.badge}</span>
              <span className="badge badge-blue">{course.level}</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: '1.6rem', color: '#fff', lineHeight: 1.25 }}>
              {course.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px 28px' }}>
          {/* Quick Metrics Bar */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', paddingBottom: '20px', borderBottom: '1px solid var(--border-subtle)', marginBottom: '24px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Star size={16} color="var(--gold-primary)" fill="var(--gold-primary)" />
              <strong style={{ color: '#fff' }}>{course.rating}</strong> ({course.reviewsCount} đánh giá)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Users size={16} />
              <span>{course.studentsCount?.toLocaleString()} học viên đã học</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} />
              <span>{course.duration}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Award size={16} color="var(--gold-primary)" />
              <span>Giảng viên: {course.instructor}</span>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '8px' }}>Mô Tả Khóa Học</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {course.description}
            </p>
          </div>

          {/* Free Preview Video Section if clicked */}
          {activePreviewLesson && (
            <div style={{ marginBottom: '28px', background: '#07080a', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-gold)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--gold-light)' }}>
                  🎬 Đang xem học thử: {activePreviewLesson.title}
                </span>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => setActivePreviewLesson(null)}
                  style={{ padding: '4px 8px', fontSize: '0.75rem' }}
                >
                  Tắt preview
                </button>
              </div>
              <video 
                controls 
                autoPlay 
                style={{ width: '100%', maxHeight: '360px', borderRadius: 'var(--radius-sm)' }}
                src={activePreviewLesson.videoUrl}
              >
                Trình duyệt của bạn không hỗ trợ video HTML5.
              </video>
            </div>
          )}

          {/* What you will learn */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '14px' }}>Bạn Sẽ Làm Chủ Điều Gì?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
              {course.whatYouWillLearn?.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={18} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Syllabus */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '14px' }}>Giáo Trình Khóa Học Chi Tiết</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {course.modules?.map((mod, mIdx) => (
                <div key={mod.id || mIdx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '14px 18px' }}>
                  <div style={{ fontWeight: 600, color: 'var(--gold-light)', fontSize: '0.95rem', marginBottom: '10px' }}>
                    {mod.title}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {mod.lessons?.map((lesson, lIdx) => (
                      <div 
                        key={lesson.id || lIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 12px',
                          background: 'rgba(255,255,255,0.02)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.88rem'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          {lesson.isPreview ? (
                            <Play size={14} color="var(--gold-primary)" />
                          ) : (
                            <Lock size={14} color="var(--text-dim)" />
                          )}
                          <span style={{ color: lesson.isPreview ? '#fff' : 'var(--text-muted)' }}>
                            {lesson.title}
                          </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>{lesson.duration}</span>
                          {lesson.isPreview && (
                            <button
                              className="btn btn-outline-gold btn-sm"
                              onClick={() => setActivePreviewLesson(lesson)}
                              style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                            >
                              Học thử
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & CTA Bottom Footer */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '16px', 
              padding: '20px', 
              background: 'rgba(212, 175, 55, 0.08)', 
              border: '1px solid var(--border-gold)', 
              borderRadius: 'var(--radius-lg)' 
            }}
          >
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Học phí ưu đãi trọn đời:</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                <span className="font-serif gold-text" style={{ fontSize: '1.8rem', fontWeight: 800 }}>
                  {formatPrice(course.salePrice)}
                </span>
                {course.originalPrice && (
                  <span style={{ textDecoration: 'line-through', color: 'var(--text-dim)', fontSize: '1rem' }}>
                    {formatPrice(course.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            <div>
              {isEnrolled ? (
                <button 
                  className="btn btn-gold btn-lg"
                  onClick={handleStartLearning}
                >
                  <Play size={18} />
                  <span>Vào Phòng Học Ngay</span>
                </button>
              ) : (
                <button 
                  className="btn btn-gold btn-lg"
                  onClick={handlePurchase}
                >
                  <Sparkles size={18} />
                  <span>Đăng Ký Học Ngay (VietQR / MoMo)</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
