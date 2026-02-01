import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Internship {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  certificate?: boolean;
}

@Component({
  selector: 'app-internships',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="internships section" id="internships">
      <div class="container">
        <div class="section-title">
          <h2 class="title">Internship Experience</h2>
          <p class="subtitle">Professional experience gained through industry internships</p>
        </div>
        
        <div class="internships-timeline">
          <div class="timeline-track">
            <div class="timeline-progress"></div>
          </div>
          
          <div class="internship-cards">
            <div class="internship-card" *ngFor="let internship of internships; let i = index" [class.left]="i % 2 === 0" [class.right]="i % 2 === 1" [style.animation-delay]="i * 0.2 + 's'">
              <div class="card-inner">
                <div class="card-header">
                  <div class="company-logo">
                    <i [class]="getCompanyIcon(internship.company)"></i>
                  </div>
                  <div class="header-info">
                    <h3>{{ internship.role }}</h3>
                    <h4>{{ internship.company }}</h4>
                  </div>
                </div>
                
                <div class="card-meta">
                  <span class="meta-item">
                    <i class="fas fa-calendar-alt"></i>
                    {{ internship.period }}
                  </span>
                  <span class="meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    {{ internship.location }}
                  </span>
                  <span class="badge" [class.current]="internship.type === 'Current'">
                    {{ internship.type }}
                  </span>
                </div>
                
                <p class="description">{{ internship.description }}</p>
                
                <div class="responsibilities">
                  <h5>Key Responsibilities:</h5>
                  <ul>
                    <li *ngFor="let resp of internship.responsibilities">
                      <i class="fas fa-arrow-right"></i>
                      {{ resp }}
                    </li>
                  </ul>
                </div>
                
                <div class="technologies">
                  <span class="tech-tag" *ngFor="let tech of internship.technologies">
                    {{ tech }}
                  </span>
                </div>
                
                <div class="certificate-badge" *ngIf="internship.certificate">
                  <i class="fas fa-certificate"></i>
                  Certificate Earned
                </div>
              </div>
              
              <div class="timeline-dot">
                <i class="fas fa-briefcase"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .internships {
      background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-gradient-start) 100%);
    }
    
    .internships-timeline {
      position: relative;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .timeline-track {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 100%;
      background: var(--bg-card);
      border-radius: 2px;
      
      .timeline-progress {
        width: 100%;
        height: 100%;
        background: var(--gradient-primary);
        border-radius: 2px;
        animation: progressGrow 2s ease forwards;
      }
    }
    
    @keyframes progressGrow {
      from { height: 0; }
      to { height: 100%; }
    }
    
    .internship-cards {
      position: relative;
      padding: 20px 0;
    }
    
    .internship-card {
      position: relative;
      width: 45%;
      margin-bottom: 50px;
      opacity: 0;
      animation: fadeInUp 0.6s ease forwards;
      
      &.left {
        margin-right: auto;
        padding-right: 40px;
        
        .timeline-dot {
          right: -52px;
        }
      }
      
      &.right {
        margin-left: auto;
        padding-left: 40px;
        
        .timeline-dot {
          left: -52px;
        }
      }
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    .card-inner {
      background: var(--bg-secondary);
      border-radius: var(--radius-lg);
      padding: 30px;
      border: 1px solid var(--border-color);
      transition: all 0.4s ease;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 30px;
        width: 20px;
        height: 20px;
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        transform: rotate(45deg);
      }
      
      .left &::before {
        right: -11px;
        border-left: none;
        border-bottom: none;
      }
      
      .right &::before {
        left: -11px;
        border-right: none;
        border-top: none;
      }
      
      &:hover {
        border-color: var(--primary-color);
        transform: translateY(-5px);
        box-shadow: 0 15px 40px var(--shadow-color);
      }
    }
    
    .card-header {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
      
      .company-logo {
        width: 55px;
        height: 55px;
        border-radius: var(--radius-md);
        background: var(--gradient-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: white;
        flex-shrink: 0;
      }
      
      .header-info {
        h3 {
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 5px;
        }
        
        h4 {
          font-size: 1rem;
          color: var(--primary-light);
          font-weight: 500;
        }
      }
    }
    
    .card-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-bottom: 20px;
      align-items: center;
      
      .meta-item {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--text-muted);
        font-size: 0.9rem;
        
        i {
          color: var(--secondary-color);
        }
      }
      
      .badge {
        padding: 6px 14px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        background: rgba(6, 182, 212, 0.2);
        color: var(--secondary-color);
        
        &.current {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          animation: pulse 2s infinite;
        }
      }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    
    .description {
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 20px;
    }
    
    .responsibilities {
      margin-bottom: 20px;
      
      h5 {
        font-size: 0.95rem;
        color: var(--text-secondary);
        margin-bottom: 12px;
      }
      
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        
        li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 0;
          color: var(--text-muted);
          font-size: 0.9rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          
          &:last-child {
            border-bottom: none;
          }
          
          i {
            color: var(--primary-color);
            font-size: 0.8rem;
            margin-top: 4px;
          }
        }
      }
    }
    
    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 15px;
      
      .tech-tag {
        padding: 6px 14px;
        background: rgba(99, 102, 241, 0.1);
        border: 1px solid var(--border-color);
        border-radius: 20px;
        color: var(--primary-light);
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
    
    .certificate-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      background: linear-gradient(135deg, rgba(251, 191, 36, 0.2) 0%, rgba(245, 158, 11, 0.2) 100%);
      border: 1px solid rgba(251, 191, 36, 0.3);
      border-radius: 25px;
      color: #fbbf24;
      font-size: 0.9rem;
      font-weight: 600;
      
      i {
        font-size: 1.1rem;
      }
    }
    
    .timeline-dot {
      position: absolute;
      top: 35px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: var(--gradient-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1rem;
      border: 4px solid var(--bg-primary);
      box-shadow: 0 0 20px var(--shadow-color);
      z-index: 1;
    }
    
    @media (max-width: 992px) {
      .timeline-track {
        left: 20px;
      }
      
      .internship-card {
        width: 100%;
        padding-left: 60px !important;
        padding-right: 0 !important;
        
        &.left, &.right {
          margin-left: 0;
          margin-right: 0;
          
          .timeline-dot {
            left: -8px !important;
            right: auto !important;
          }
          
          .card-inner::before {
            left: -11px !important;
            right: auto !important;
            border-right: none !important;
            border-top: none !important;
            border-left: 1px solid var(--border-color) !important;
            border-bottom: 1px solid var(--border-color) !important;
          }
        }
      }
    }
    
    @media (max-width: 576px) {
      .internship-card {
        padding-left: 45px !important;
      }
      
      .timeline-track {
        left: 15px;
      }
      
      .timeline-dot {
        width: 35px;
        height: 35px;
        font-size: 0.8rem;
        left: -5px !important;
      }
      
      .card-inner {
        padding: 20px;
      }
      
      .card-header {
        flex-direction: column;
        text-align: center;
        
        .company-logo {
          margin: 0 auto;
        }
      }
    }
  `]
})
export class InternshipsComponent implements OnInit {
  internships: Internship[] = [
    {
      role: 'Software Development Intern',
      company: 'National Informatics Center (NIC)',
      location: 'Sikkim',
      period: 'Jan 2025 - Present',
      type: 'Current',
      description: 'Currently undergoing 6-month internship at NIC Sikkim, working on government IT projects and software development initiatives.',
      responsibilities: [
        'Developing and maintaining government software applications',
        'Working on digital transformation projects',
        'Collaborating with cross-functional teams',
        'Implementing secure and scalable solutions'
      ],
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular'],
      certificate: false
    },
    {
      role: 'IT Intern',
      company: 'Department of Information Technology',
      location: 'Sikkim',
      period: '2024',
      type: 'Completed',
      description: 'Created a Server Help Desk Centre to manage and track IT support requests and server maintenance tasks efficiently.',
      responsibilities: [
        'Designed and developed Server Help Desk Centre',
        'Implemented ticket management system',
        'Created server monitoring dashboard',
        'Developed automated issue tracking'
      ],
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      certificate: true
    },
    {
      role: 'Software Development Intern',
      company: 'NIELIT',
      location: 'National Institute of Electronics & Information Technology',
      period: '2024',
      type: 'Completed',
      description: 'Gained hands-on experience in software development methodologies and enterprise application development.',
      responsibilities: [
        'Learned enterprise software development practices',
        'Worked on real-world software projects',
        'Gained exposure to industry-standard tools',
        'Participated in code reviews and team meetings'
      ],
      technologies: ['Java', 'C++', 'Software Engineering'],
      certificate: true
    },
    {
      role: 'Android Development Intern',
      company: 'Indian School of Ethical Hacking (ISOEH)',
      location: 'Kolkata',
      period: '2023',
      type: 'Completed',
      description: 'Intensive training in Android application development with focus on security and ethical hacking practices.',
      responsibilities: [
        'Developed Android applications from scratch',
        'Learned mobile app security principles',
        'Implemented secure coding practices',
        'Built and deployed multiple Android apps'
      ],
      technologies: ['Android', 'Java', 'XML', 'Firebase'],
      certificate: true
    },
    {
      role: 'C/C++ Programming Intern',
      company: 'Internshala',
      location: 'Online',
      period: '2023',
      type: 'Completed',
      description: 'Advanced C and C++ programming internship covering data structures, algorithms, and object-oriented programming.',
      responsibilities: [
        'Mastered advanced C/C++ concepts',
        'Implemented data structures and algorithms',
        'Solved complex programming problems',
        'Built console-based applications'
      ],
      technologies: ['C', 'C++', 'Data Structures', 'Algorithms'],
      certificate: true
    }
  ];

  ngOnInit() {}

  getCompanyIcon(company: string): string {
    const iconMap: { [key: string]: string } = {
      'National Informatics Center (NIC)': 'fas fa-landmark',
      'Department of Information Technology': 'fas fa-building',
      'NIELIT': 'fas fa-university',
      'Indian School of Ethical Hacking (ISOEH)': 'fas fa-shield-alt',
      'Internshala': 'fas fa-laptop-code'
    };
    return iconMap[company] || 'fas fa-briefcase';
  }
}
