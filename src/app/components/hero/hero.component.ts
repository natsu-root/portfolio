import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-content">
          <!-- Left Content -->
          <div class="hero-text">
            <div class="greeting">
              <span class="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 class="name">
              <span class="typing-text">{{ displayedText }}</span>
              <span class="cursor" [class.blink]="showCursor">|</span>
            </h1>
            
            <h2 class="title">
              <span class="static-text">A Passionate </span>
              <span class="highlight">{{ currentRole }}</span>
            </h2>
            
            <p class="description">
              Final year B.Tech Computer Engineering student with expertise in Web Development, 
              Mobile Applications, and Deep Learning. Silver Medalist with 8.4 CGPA in Diploma, 
              currently interning at National Informatics Center (NIC) Sikkim.
            </p>
            
            <div class="cta-buttons">
              <a href="#projects" class="btn btn-primary">
                <i class="fas fa-rocket"></i>
                View My Work
              </a>
              <a href="#contact" class="btn btn-secondary">
                <i class="fas fa-paper-plane"></i>
                Get In Touch
              </a>
            </div>
            
            <div class="stats">
              <div class="stat-item">
                <span class="stat-number">8.4</span>
                <span class="stat-label">CGPA</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-number">5+</span>
                <span class="stat-label">Internships</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-number">10+</span>
                <span class="stat-label">Projects</span>
              </div>
            </div>
          </div>
          
          <!-- Right Content - Profile Image -->
          <div class="hero-image">
            <div class="image-wrapper">
              <div class="glow-ring"></div>
              <div class="profile-container">
                <div class="profile-placeholder">
                  <div class="profile-placeholder">
                <img
                  src="https://res.cloudinary.com/dxktrmoul/image/upload/w_400,h_400,c_fill,g_face,f_auto,q_auto/profile_t9fi7b.jpg"
                  alt="Profile photo"
                  class="profile-image"
                  loading="lazy"
                />
            </div>

                </div>
              </div>
              <div class="floating-badges">
                <div class="badge-item" style="--delay: 0s">
                  <i class="fab fa-angular"></i>
                </div>
                <div class="badge-item" style="--delay: 0.2s">
                  <i class="fab fa-react"></i>
                </div>
                <div class="badge-item" style="--delay: 0.4s">
                  <i class="fab fa-python"></i>
                </div>
                <div class="badge-item" style="--delay: 0.6s">
                  <i class="fab fa-android"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
      
      <!-- Background Elements -->
      <div class="bg-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      padding: 120px 0 80px;
      overflow: hidden;
    }
    
    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      position: relative;
      z-index: 1;
    }
    
    .hero-text {
      animation: fadeInUp 0.8s ease;
    }

      .profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.profile-container:hover .profile-image {
  transform: scale(1.05);
  transition: transform 0.4s ease;
}
    
    .greeting {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.2rem;
      color: var(--text-secondary);
      margin-bottom: 15px;
      
      .wave {
        font-size: 1.5rem;
        animation: wave 2s ease-in-out infinite;
      }
    }
    
    @keyframes wave {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(20deg); }
      75% { transform: rotate(-10deg); }
    }
    
    .name {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      
      .typing-text {
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .cursor {
        color: var(--primary-color);
        margin-left: 5px;
        
        &.blink {
          animation: blink 1s step-end infinite;
        }
      }
    }
    
    @keyframes blink {
      50% { opacity: 0; }
    }
    
    .title {
      font-size: clamp(1.2rem, 2.5vw, 1.8rem);
      font-weight: 500;
      margin-bottom: 20px;
      color: var(--text-secondary);
      
      .static-text {
        color: var(--text-secondary);
      }
      
      .highlight {
        color: var(--secondary-color);
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--gradient-primary);
          border-radius: 2px;
        }
      }
    }
    
    .description {
      font-size: 1.1rem;
      color: var(--text-muted);
      max-width: 550px;
      margin-bottom: 30px;
      line-height: 1.8;
    }
    
    .cta-buttons {
      display: flex;
      gap: 15px;
      margin-bottom: 40px;
      flex-wrap: wrap;
    }
    
    .stats {
      display: flex;
      align-items: center;
      gap: 25px;
      
      .stat-item {
        display: flex;
        flex-direction: column;
        
        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
      }
      
      .stat-divider {
        width: 1px;
        height: 40px;
        background: var(--border-color);
      }
    }
    
    .hero-image {
      display: flex;
      justify-content: center;
      animation: fadeIn 1s ease 0.3s both;
    }
    
    .image-wrapper {
      position: relative;
      width: 350px;
      height: 350px;
    }
    
    .glow-ring {
      position: absolute;
      inset: -20px;
      border-radius: 50%;
      background: var(--gradient-primary);
      opacity: 0.3;
      filter: blur(40px);
      animation: pulse 3s ease-in-out infinite;
    }
    
    .profile-container {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid transparent;
      background: linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box,
                  var(--gradient-primary) border-box;
    }
    
    .profile-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-secondary);
      
      i {
        font-size: 8rem;
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    
    .floating-badges {
      position: absolute;
      inset: 0;
      
      .badge-item {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--bg-secondary);
        border: 2px solid var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: var(--primary-light);
        animation: float 3s ease-in-out infinite;
        animation-delay: var(--delay);
        box-shadow: 0 4px 15px var(--shadow-color);
        
        &:nth-child(1) {
          top: 10%;
          right: 0;
        }
        
        &:nth-child(2) {
          top: 50%;
          right: -25px;
        }
        
        &:nth-child(3) {
          bottom: 10%;
          right: 10%;
        }
        
        &:nth-child(4) {
          bottom: 20%;
          left: -15px;
        }
      }
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      color: var(--text-muted);
      font-size: 0.9rem;
      animation: bounce 2s infinite;
      
      .mouse {
        width: 25px;
        height: 40px;
        border: 2px solid var(--text-muted);
        border-radius: 15px;
        position: relative;
        
        .wheel {
          width: 4px;
          height: 8px;
          background: var(--primary-color);
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll 1.5s ease-in-out infinite;
        }
      }
    }
    
    @keyframes scroll {
      0% { opacity: 1; top: 8px; }
      100% { opacity: 0; top: 20px; }
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateX(-50%) translateY(0); }
      50% { transform: translateX(-50%) translateY(-10px); }
    }
    
    .bg-shapes {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
      
      .shape {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.3;
        
        &-1 {
          width: 400px;
          height: 400px;
          background: var(--primary-color);
          top: -100px;
          right: -100px;
        }
        
        &-2 {
          width: 300px;
          height: 300px;
          background: var(--secondary-color);
          bottom: -50px;
          left: -50px;
        }
        
        &-3 {
          width: 200px;
          height: 200px;
          background: var(--accent-color);
          top: 50%;
          left: 30%;
        }
      }
    }
    
    @media (max-width: 992px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
      }
      
      .hero-text {
        order: 2;
      }
      
      .hero-image {
        order: 1;
      }
      
      .image-wrapper {
        width: 250px;
        height: 250px;
      }
      
      .description {
        margin-left: auto;
        margin-right: auto;
      }
      
      .cta-buttons {
        justify-content: center;
      }
      
      .stats {
        justify-content: center;
      }
      
      .profile-placeholder i {
        font-size: 5rem;
      }
      
      .floating-badges .badge-item {
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
      }
    }
    
    @media (max-width: 576px) {
      .stats {
        flex-direction: column;
        gap: 15px;
        
        .stat-divider {
          display: none;
        }
      }
    }
  `]
})
export class HeroComponent implements OnInit {
  fullText = 'Abiral Rai';
  displayedText = '';
  showCursor = true;
  currentRole = 'Full Stack Developer';
  roles = ['Full Stack Developer', 'Mobile App Developer', 'Deep Learning Enthusiast', 'Problem Solver'];
  roleIndex = 0;

  ngOnInit() {
    this.startTypingAnimation();
    this.startRoleRotation();
  }

  private startTypingAnimation() {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < this.fullText.length) {
        this.displayedText += this.fullText.charAt(index);
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          this.startDeletingAnimation();
        }, 2000);
      }
    }, 100);
  }

  private startDeletingAnimation() {
    let index = this.fullText.length;
    const deleteInterval = setInterval(() => {
      if (index > 0) {
        this.displayedText = this.fullText.substring(0, index - 1);
        index--;
      } else {
        clearInterval(deleteInterval);
        setTimeout(() => {
          this.startTypingAnimation();
        }, 500);
      }
    }, 50);
  }

  private startRoleRotation() {
    setInterval(() => {
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.currentRole = this.roles[this.roleIndex];
    }, 3000);
  }
}
