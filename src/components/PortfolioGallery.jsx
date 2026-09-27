import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Camera, Heart, MapPin, Eye, SlidersHorizontal, Sparkles, 
  ArrowRight, Award, Flame, Search
} from 'lucide-react';

export default function PortfolioGallery() {
  const { photos, setSelectedPhoto, toggleLikePhoto, photographerInfo, setCurrentView } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Tất Cả Tác Phẩm' },
    { id: 'wedding', label: 'Cưới & Phóng Sự' },
    { id: 'portrait', label: 'Chân Dung Nghệ Thuật' },
    { id: 'landscape', label: 'Phong Cảnh & Du Ký' },
    { id: 'commercial', label: 'Thương Mại & Thời Trang' },
    { id: 'street', label: 'Đường Phố & Đời Thường' }
  ];

  // Filtering
  const filteredPhotos = photos.filter(photo => {
    const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
    const matchesSearch = 
      photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.camera.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.lens.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Editorial Hero Banner */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0 80px',
          background: `linear-gradient(to bottom, rgba(7, 8, 10, 0.65), rgba(7, 8, 10, 0.95)), url('${photographerInfo.heroBg}') center/cover no-repeat`,
          borderBottom: '1px solid var(--border-subtle)',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-full)', marginBottom: '20px' }}>
            <Award size={15} color="var(--gold-primary)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--gold-light)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              {photographerInfo.subtitle}
            </span>
          </div>

          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: '960px',
              margin: '0 auto 20px',
              color: '#ffffff'
            }}
          >
            Nơi Ánh Sáng Chạm Vào <span className="gold-text">Cảm Xúc</span> Vượt Thời Gian
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              maxWidth: '720px',
              margin: '0 auto 36px',
              lineHeight: 1.7
            }}
          >
            Bộ sưu tập các kiệt tác nhiếp ảnh phóng sự cưới, chân dung editorial và cảnh quan hùng vĩ được ghi lại qua ống kính của nghệ sĩ thị giác Minh Vũ.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              className="btn btn-gold btn-lg"
              onClick={() => {
                const el = document.getElementById('gallery-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Eye size={18} />
              Khám Phá Gallery 4K
            </button>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => setCurrentView('courses')}
            >
              <span>Học Viện Nhiếp Ảnh Trực Tuyến</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Quick Stats Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '20px',
              maxWidth: '900px',
              margin: '60px auto 0',
              padding: '24px',
              background: 'rgba(14, 17, 23, 0.8)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--border-glass)',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            {photographerInfo.stats.map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div className="font-serif gold-text" style={{ fontSize: '1.9rem', fontWeight: 800 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery-section" style={{ padding: '70px 0 100px' }}>
        <div className="container">
          {/* Header & Filter Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '8px' }}>
                  TRIỂN LÃM HÌNH ẢNH NGHỆ THUẬT
                </span>
                <h2 className="font-serif" style={{ fontSize: '2.2rem', color: '#fff' }}>
                  Tuyển Tập Tác Phẩm Chọn Lọc
                </h2>
              </div>

              {/* Search Box */}
              <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
                <Search
                  size={18}
                  style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }}
                />
                <input
                  type="text"
                  placeholder="Tìm theo địa điểm, camera, lens..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-input"
                  style={{ paddingLeft: '40px', fontSize: '0.88rem' }}
                />
              </div>
            </div>

            {/* Category Filter Chips */}
            <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '8px' }}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    background: selectedCategory === cat.id ? 'var(--gold-gradient)' : 'rgba(255,255,255,0.04)',
                    color: selectedCategory === cat.id ? '#000' : 'var(--text-muted)',
                    fontWeight: selectedCategory === cat.id ? 700 : 500,
                    fontSize: '0.9rem',
                    border: selectedCategory === cat.id ? 'none' : '1px solid var(--border-glass)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photos Grid */}
          {filteredPhotos.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border-subtle)' }}>
              <Camera size={48} color="var(--text-dim)" style={{ marginBottom: '16px' }} />
              <h3 style={{ color: '#fff', marginBottom: '8px' }}>Không tìm thấy tác phẩm phù hợp</h3>
              <p style={{ color: 'var(--text-muted)' }}>Vui lòng thử chọn danh mục khác hoặc xóa bộ lọc tìm kiếm.</p>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                style={{ marginTop: '16px' }}
              >
                Đặt lại bộ lọc
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                gap: '28px'
              }}
            >
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="glass-card"
                  style={{
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    group: 'photo-card'
                  }}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  {/* Photo Container */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: photo.aspectRatio === 'landscape' ? '280px' : photo.aspectRatio === 'square' ? '340px' : '440px',
                      overflow: 'hidden',
                      backgroundColor: '#12151b'
                    }}
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.06)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />

                    {/* Top Badges */}
                    <div style={{ position: 'absolute', top: '14px', left: '14px', right: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                      <span className="badge badge-gold" style={{ backdropFilter: 'blur(8px)', background: 'rgba(7, 8, 10, 0.75)' }}>
                        {photo.category.toUpperCase()}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLikePhoto(photo.id);
                        }}
                        style={{
                          background: 'rgba(7, 8, 10, 0.75)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid var(--border-glass)',
                          borderRadius: 'var(--radius-full)',
                          padding: '6px 12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: photo.isLiked ? '#f43f5e' : '#fff',
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          transition: 'all 0.2s'
                        }}
                        title="Thả tim"
                      >
                        <Heart size={14} fill={photo.isLiked ? '#f43f5e' : 'none'} />
                        <span>{photo.likes}</span>
                      </button>
                    </div>

                    {/* Gradient Overlay & Metadata on Bottom */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(7, 8, 10, 0.95) 0%, rgba(7, 8, 10, 0.3) 50%, transparent 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '20px',
                        zIndex: 1
                      }}
                    >
                      <h3
                        className="font-serif"
                        style={{
                          fontSize: '1.25rem',
                          color: '#fff',
                          marginBottom: '6px',
                          textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                        }}
                      >
                        {photo.title}
                      </h3>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '10px' }}>
                        <MapPin size={13} color="var(--gold-primary)" />
                        <span>{photo.location}</span>
                      </div>

                      {/* EXIF Tech pill */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '6px 12px',
                          background: 'rgba(255, 255, 255, 0.08)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.78rem',
                          color: 'var(--gold-light)'
                        }}
                      >
                        <Camera size={13} />
                        <span>{photo.camera} • {photo.settings.aperture} • {photo.settings.shutter}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
