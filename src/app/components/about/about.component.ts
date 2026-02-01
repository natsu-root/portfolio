import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
  achievements?: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about section" id="about">
      <div class="container">
        <div class="section-title">
          <h2 class="title">About Me</h2>
          <p class="subtitle">My educational journey and academic achievements</p>
        </div>
        
        <div class="about-content">
          <!-- Profile Summary -->
          <div class="profile-summary">
            <div class="summary-card">
              <div class="icon-box">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <h3>Education Excellence</h3>
              <p>
                I am a dedicated Computer Science student with a strong academic background. 
                I completed my Diploma in Computer Science and Technology with an outstanding 
                <strong>8.4 CGPA</strong> and earned a <strong>Silver Medal</strong> for my academic excellence.
              </p>
            </div>
            
            <div class="summary-card">
              <div class="icon-box">
                <i class="fas fa-code"></i>
              </div>
              <h3>Technical Passion</h3>
              <p>
                Passionate about building innovative solutions, I have developed multiple projects 
                including web applications, mobile apps, and deep learning solutions. My experience 
                spans across full-stack development and AI/ML technologies.
              </p>
            </div>
            
            <div class="summary-card">
              <div class="icon-box">
                <i class="fas fa-award"></i>
              </div>
              <h3>Research & Innovation</h3>
              <p>
                I have published a research paper on Android application development for student 
                performance tracking. Currently working on cutting-edge deep learning projects 
                including skin disease identification using mobile-integrated AI solutions.
              </p>
            </div>
          </div>
          
          <!-- Education Timeline -->
          <div class="education-section">
            <h3 class="section-subtitle">
              <i class="fas fa-book-open"></i>
              Educational Background
            </h3>
            
            <div class="timeline">
              <div class="timeline-item" *ngFor="let edu of education; let i = index" [style.animation-delay]="i * 0.2 + 's'">
                <div class="timeline-marker">
                  <i class="fas fa-university"></i>
                </div>
                <div class="timeline-content">
                  <div class="timeline-header">
                    <h4>{{ edu.degree }}</h4>
                    <span class="timeline-period">
                      <i class="fas fa-calendar-alt"></i>
                      {{ edu.period }}
                    </span>
                  </div>
                  <div class="timeline-body">
                    <h5>
                      <i class="fas fa-school"></i>
                      {{ edu.institution }}
                    </h5>
                    <p class="location">
                      <i class="fas fa-map-marker-alt"></i>
                      {{ edu.location }}
                    </p>
                    <ul class="details-list">
                      <li *ngFor="let detail of edu.details">
                        <i class="fas fa-check-circle"></i>
                        {{ detail }}
                      </li>
                    </ul>
                    <div class="achievements" *ngIf="edu.achievements">
                      <div class="achievement-badge" *ngFor="let achievement of edu.achievements">
                        <i class="fas fa-medal"></i>
                        {{ achievement }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background: linear-gradient(180deg, var(--bg-gradient-start) 0%, var(--bg-secondary) 100%);
    }
    
    .about-content {
      display: flex;
      flex-direction: column;
      gap: 80px;
    }
    
    .profile-summary {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
    
    .summary-card {
      background: var(--bg-secondary);
      border-radius: var(--radius-lg);
      padding: 35px;
      border: 1px solid var(--border-color);
      transition: all 0.4s ease;
      text-align: center;
      
      &:hover {
        transform: translateY(-10px);
        border-color: var(--primary-color);
        box-shadow: 0 20px 50px var(--shadow-color);
        
        .icon-box {
          transform: scale(1.1) rotate(5deg);
        }
      }
      
      .icon-box {
        width: 70px;
        height: 70px;
        border-radius: var(--radius-md);
        background: var(--gradient-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        color: white;
        margin: 0 auto 25px;
        transition: transform 0.4s ease;
      }
      
      h3 {
        font-size: 1.3rem;
        margin-bottom: 15px;
        color: var(--text-primary);
      }
      
      p {
        color: var(--text-muted);
        line-height: 1.8;
        font-size: 0.95rem;
        
        strong {
          color: var(--primary-light);
        }
      }
    }
    
    .education-section {
      .section-subtitle {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 1.8rem;
        margin-bottom: 40px;
        color: var(--text-primary);
        
        i {
          color: var(--primary-color);
        }
      }
    }
    
    .timeline {
      position: relative;
      padding-left: 40px;
      
      &::before {
        content: '';
        position: absolute;
        left: 15px;
        top: 0;
        height: 100%;
        width: 3px;
        background: var(--gradient-primary);
        border-radius: 3px;
      }
    }
    
    .timeline-item {
      position: relative;
      padding-bottom: 50px;
      opacity: 0;
      animation: fadeInUp 0.6s ease forwards;
      
      &:last-child {
        padding-bottom: 0;
      }
    }
    
    .timeline-marker {
      position: absolute;
      left: -40px;
      top: 0;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: var(--gradient-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 0.9rem;
      border: 4px solid var(--bg-primary);
      box-shadow: 0 0 20px var(--shadow-color);
    }
    
    .timeline-content {
      background: var(--bg-secondary);
      border-radius: var(--radius-lg);
      padding: 30px;
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;
      
      &:hover {
        border-color: var(--primary-color);
        transform: translateX(10px);
      }
    }
    
    .timeline-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 20px;
      flex-wrap: wrap;
      gap: 10px;
      
      h4 {
        font-size: 1.4rem;
        color: var(--text-primary);
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .timeline-period {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background: rgba(99, 102, 241, 0.1);
        border-radius: 20px;
        color: var(--primary-light);
        font-size: 0.9rem;
        font-weight: 500;
        
        i {
          font-size: 0.8rem;
        }
      }
    }
    
    .timeline-body {
      h5 {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1.1rem;
        color: var(--text-secondary);
        margin-bottom: 8px;
        
        i {
          color: var(--secondary-color);
        }
      }
      
      .location {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--text-muted);
        font-size: 0.95rem;
        margin-bottom: 20px;
        
        i {
          color: var(--accent-color);
        }
      }
    }
    
    .details-list {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 10px 0;
        color: var(--text-secondary);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        
        &:last-child {
          border-bottom: none;
        }
        
        i {
          color: var(--primary-color);
          margin-top: 3px;
          font-size: 0.9rem;
        }
      }
    }
    
    .achievements {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid var(--border-color);
    }
    
    .achievement-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%);
      border-radius: 25px;
      color: var(--primary-light);
      font-size: 0.9rem;
      font-weight: 600;
      border: 1px solid var(--border-color);
      
      i {
        color: #fbbf24;
      }
    }
    
    @media (max-width: 992px) {
      .profile-summary {
        grid-template-columns: 1fr;
      }
      
      .timeline {
        padding-left: 30px;
      }
      
      .timeline-marker {
        left: -30px;
        width: 25px;
        height: 25px;
        font-size: 0.7rem;
      }
    }
    
    @media (max-width: 576px) {
      .timeline-header {
        flex-direction: column;
        
        .timeline-period {
          align-self: flex-start;
        }
      }
      
      .timeline-content {
        padding: 20px;
      }
      
      .achievement-badge {
        font-size: 0.8rem;
        padding: 8px 14px;
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  education: Education[] = [
    {
      degree: 'B.Tech in Computer Engineering',
      institution: 'Sikkim Institute of Science and Technology (SIST)',
      location: 'Namchi, South Sikkim, Chisopani',
      period: '2022 - Present (Final Year)',
      details: [
        'Pursuing Bachelor of Technology in Computer Engineering',
        'Currently doing 6-month internship at National Informatics Center (NIC) Sikkim',
        'Completed mini project on Deep Learning: Mobile Integrated Deep Learning Solution for Reliable Identification of Skin Diseases',
        'Active participant in technical workshops and hackathons'
      ]
    },
    {
      degree: 'Diploma in Computer Science and Technology',
      institution: 'Center for Computers and Communication Technology (CCCT)',
      location: 'Namchi, South Sikkim, Chisopani',
      period: '2019 - 2022',
      details: [
        'Completed Diploma with specialization in Computer Science and Technology',
        'Major Project: Web and Mobile Application for School Management System',
        'Developed a comprehensive platform where teachers upload marks via website and students access results through mobile app',
        'Gained hands-on experience in full-stack development and mobile application development'
      ],
      achievements: [
        '8.4 CGPA',
        'Silver Medalist'
      ]
    }
  ];

  ngOnInit() {}
}
