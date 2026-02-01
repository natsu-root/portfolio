import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Workshop {
  title: string;
  organizer: string;
  duration: string;
  year: string;
  description: string;
  skills: string[];
  certificate: boolean;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="workshops section" id="workshops">
      <div class="container">
        <div class="section-title">
          <h2 class="title">Workshops & Training</h2>
          <p class="subtitle">Continuous learning through professional workshops and certifications</p>
        </div>
        
        <div class="workshops-grid">
          <div class="workshop-card" *ngFor="let workshop of workshops; let i = index" [style.animation-delay]="i * 0.15 + 's'">
            <div class="card-header" [style.background]="workshop.color">
              <div class="workshop-icon">
                <i [class]="workshop.icon"></i>
              </div>
              <div class="certificate-stamp" *ngIf="workshop.certificate">
                <i class="fas fa-certificate"></i>
                <span>Certified</span>
              </div>
            </div>
            
            <div class="card-body">
              <h3>{{ workshop.title }}</h3>
              <p class="organizer">
                <i class="fas fa-building"></i>
                {{ workshop.organizer }}
              </p>
              
              <div class="workshop-meta">
                <span class="meta-item">
                  <i class="fas fa-clock"></i>
                  {{ workshop.duration }}
                </span>
                <span class="meta-item">
                  <i class="fas fa-calendar"></i>
                  {{ workshop.year }}
                </span>
              </div>
              
              <p class="description">{{ workshop.description }}</p>
              
              <div class="skills-gained">
                <h4>Skills Gained:</h4>
                <div class="skill-tags">
                  <span class="skill-tag" *ngFor="let skill of workshop.skills">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Stats Section -->
        <div class="workshop-stats">
          <div class="stat-card" *ngFor="let stat of workshopStats">
            <div class="stat-icon">
              <i [class]="stat.icon"></i>
            </div>
            <div class="stat-info">
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .workshops {
      background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-gradient-start) 100%);
    }
    
    .workshops-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 30px;
      margin-bottom: 80px;
    }
    
    .workshop-card {
      background: var(--bg-primary);
      border-radius: var(--radius-lg);
      overflow: hidden;
      border: 1px solid var(--border-color);
      transition: all 0.4s ease;
      opacity: 0;
      animation: fadeInUp 0.6s ease forwards;
      
      &:hover {
        transform: translateY(-10px);
        border-color: var(--primary-color);
        box-shadow: 0 20px 50px var(--shadow-color);
        
        .card-header .workshop-icon {
          transform: scale(1.1) rotate(5deg);
        }
      }
    }
    
    .card-header {
      padding: 30px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -50%;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
      }
      
      .workshop-icon {
        width: 65px;
        height: 65px;
        border-radius: var(--radius-md);
        background: rgba(255, 255, 255, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        color: white;
        transition: transform 0.4s ease;
        backdrop-filter: blur(10px);
        position: relative;
        z-index: 1;
      }
      
      .certificate-stamp {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        padding: 10px 15px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: var(--radius-md);
        color: white;
        font-size: 0.8rem;
        font-weight: 600;
        backdrop-filter: blur(10px);
        position: relative;
        z-index: 1;
        animation: pulse 2s infinite;
        
        i {
          font-size: 1.5rem;
          color: #fbbf24;
        }
      }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    .card-body {
      padding: 25px 30px 30px;
      
      h3 {
        font-size: 1.2rem;
        color: var(--text-primary);
        margin-bottom: 12px;
        line-height: 1.4;
      }
      
      .organizer {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--primary-light);
        font-size: 0.95rem;
        font-weight: 500;
        margin-bottom: 15px;
        
        i {
          font-size: 0.9rem;
        }
      }
    }
    
    .workshop-meta {
      display: flex;
      gap: 20px;
      margin-bottom: 18px;
      
      .meta-item {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--text-muted);
        font-size: 0.85rem;
        
        i {
          color: var(--secondary-color);
          font-size: 0.8rem;
        }
      }
    }
    
    .description {
      color: var(--text-muted);
      font-size: 0.9rem;
      line-height: 1.7;
      margin-bottom: 20px;
    }
    
    .skills-gained {
      h4 {
        font-size: 0.9rem;
        color: var(--text-secondary);
        margin-bottom: 12px;
      }
      
      .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        
        .skill-tag {
          padding: 6px 14px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          color: var(--primary-light);
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.3s ease;
          
          &:hover {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
          }
        }
      }
    }
    
    .workshop-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 25px;
      padding: 40px;
      background: var(--bg-secondary);
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-color);
    }
    
    .stat-card {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 25px;
      background: var(--bg-primary);
      border-radius: var(--radius-md);
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;
      
      &:hover {
        border-color: var(--primary-color);
        transform: translateY(-5px);
      }
      
      .stat-icon {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: var(--gradient-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        color: white;
        flex-shrink: 0;
      }
      
      .stat-info {
        display: flex;
        flex-direction: column;
        
        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
      }
    }
    
    @media (max-width: 992px) {
      .workshop-stats {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 576px) {
      .workshops-grid {
        grid-template-columns: 1fr;
      }
      
      .workshop-stats {
        grid-template-columns: 1fr;
        padding: 25px;
      }
      
      .stat-card {
        flex-direction: column;
        text-align: center;
      }
      
      .card-header {
        padding: 20px;
        
        .workshop-icon {
          width: 50px;
          height: 50px;
          font-size: 1.4rem;
        }
      }
      
      .card-body {
        padding: 20px;
      }
    }
  `]
})
export class WorkshopsComponent implements OnInit {
  workshops: Workshop[] = [
    {
      title: 'Ethical Hacking Workshop',
      organizer: 'Indian School of Ethical Hacking (ISOEH)',
      duration: '1 Week',
      year: '2023',
      description: 'Intensive hands-on training in ethical hacking techniques, penetration testing, and cybersecurity fundamentals.',
      skills: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment'],
      certificate: true,
      icon: 'fas fa-shield-alt',
      color: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)'
    },
    {
      title: 'Web Development Workshop',
      organizer: 'Technical Institute',
      duration: '2 Weeks',
      year: '2022',
      description: 'Comprehensive workshop covering modern web development technologies including HTML5, CSS3, JavaScript, and responsive design.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      certificate: true,
      icon: 'fas fa-code',
      color: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
    },
    {
      title: 'Life Skills Training',
      organizer: 'Professional Training Center',
      duration: '1 Week',
      year: '2022',
      description: 'Personality development and soft skills training focusing on communication, leadership, and teamwork.',
      skills: ['Communication', 'Leadership', 'Teamwork', 'Time Management'],
      certificate: true,
      icon: 'fas fa-users',
      color: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)'
    },
    {
      title: 'Artificial Intelligence Workshop',
      organizer: 'Tech Institute',
      duration: '1 Week',
      year: '2023',
      description: 'Introduction to AI concepts, machine learning algorithms, and practical applications of artificial intelligence.',
      skills: ['Machine Learning', 'Python', 'Data Analysis', 'Neural Networks'],
      certificate: true,
      icon: 'fas fa-brain',
      color: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
    },
    {
      title: 'Android Development Workshop',
      organizer: 'ISOEH',
      duration: '2 Weeks',
      year: '2023',
      description: 'Hands-on training in Android app development using Java and XML, covering UI design and app deployment.',
      skills: ['Android', 'Java', 'XML', 'Firebase'],
      certificate: true,
      icon: 'fab fa-android',
      color: 'linear-gradient(135deg, #3ddc84 0%, #2dd4bf 100%)'
    },
    {
      title: 'Advanced C/C++ Programming',
      organizer: 'Internshala',
      duration: '8 Weeks',
      year: '2023',
      description: 'Comprehensive training in C and C++ programming with focus on data structures, algorithms, and OOP concepts.',
      skills: ['C', 'C++', 'Data Structures', 'Algorithms', 'OOP'],
      certificate: true,
      icon: 'fas fa-laptop-code',
      color: 'linear-gradient(135deg, #00599c 0%, #659ad2 100%)'
    }
  ];

  workshopStats = [
    { value: '6+', label: 'Workshops Attended', icon: 'fas fa-chalkboard-teacher' },
    { value: '4+', label: 'Technical Skills', icon: 'fas fa-cogs' },
    { value: '6', label: 'Certifications', icon: 'fas fa-certificate' },
    { value: '100%', label: 'Completion Rate', icon: 'fas fa-check-circle' }
  ];

  ngOnInit() {}
}
