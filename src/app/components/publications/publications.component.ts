import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  abstract: string;
  keywords: string[];
  link: string;
  type: string;
}

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="publications section" id="publications">
      <div class="container">
        <div class="section-title">
          <h2 class="title">Publications</h2>
          <p class="subtitle">Research work and academic contributions</p>
        </div>
        
        <div class="publications-content">
          <div class="publication-card" *ngFor="let pub of publications; let i = index" [style.animation-delay]="i * 0.2 + 's'">
            <div class="pub-badge">
              <i class="fas fa-file-alt"></i>
              <span>{{ pub.type }}</span>
            </div>
            
            <div class="pub-content">
              <h3>{{ pub.title }}</h3>
              
              <div class="pub-meta">
                <span class="meta-item">
                  <i class="fas fa-users"></i>
                  {{ pub.authors }}
                </span>
                <span class="meta-item">
                  <i class="fas fa-book"></i>
                  {{ pub.journal }}
                </span>
                <span class="meta-item">
                  <i class="fas fa-calendar"></i>
                  {{ pub.year }}
                </span>
              </div>
              
              <div class="abstract">
                <h4>Abstract</h4>
                <p>{{ pub.abstract }}</p>
              </div>
              
              <div class="keywords">
                <span class="keyword" *ngFor="let keyword of pub.keywords">
                  {{ keyword }}
                </span>
              </div>
              
              <a [href]="pub.link" target="_blank" class="btn btn-primary">
                <i class="fas fa-external-link-alt"></i>
                View Publication
              </a>
            </div>
          </div>
        </div>
        
        <!-- Research Interests -->
        <div class="research-interests">
          <h3 class="interests-title">
            <i class="fas fa-lightbulb"></i>
            Research Interests
          </h3>
          <div class="interests-grid">
            <div class="interest-card" *ngFor="let interest of researchInterests; let i = index" [style.animation-delay]="i * 0.1 + 's'">
              <div class="interest-icon">
                <i [class]="interest.icon"></i>
              </div>
              <h4>{{ interest.title }}</h4>
              <p>{{ interest.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .publications {
      background: var(--bg-secondary);
    }
    
    .publications-content {
      max-width: 900px;
      margin: 0 auto 80px;
    }
    
    .publication-card {
      background: var(--bg-primary);
      border-radius: var(--radius-lg);
      padding: 40px;
      border: 1px solid var(--border-color);
      position: relative;
      opacity: 0;
      animation: fadeInUp 0.6s ease forwards;
      transition: all 0.4s ease;
      
      &:hover {
        border-color: var(--primary-color);
        box-shadow: 0 20px 50px var(--shadow-color);
        transform: translateY(-5px);
      }
    }
    
    .pub-badge {
      position: absolute;
      top: -15px;
      left: 40px;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      background: var(--gradient-primary);
      border-radius: 25px;
      color: white;
      font-weight: 600;
      font-size: 0.9rem;
      box-shadow: 0 5px 20px var(--shadow-color);
      
      i {
        font-size: 1rem;
      }
    }
    
    .pub-content {
      h3 {
        font-size: 1.5rem;
        color: var(--text-primary);
        margin-bottom: 20px;
        line-height: 1.4;
        padding-top: 10px;
      }
    }
    
    .pub-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-bottom: 25px;
      
      .meta-item {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--text-muted);
        font-size: 0.95rem;
        
        i {
          color: var(--primary-color);
        }
      }
    }
    
    .abstract {
      background: var(--bg-secondary);
      border-radius: var(--radius-md);
      padding: 25px;
      margin-bottom: 25px;
      
      h4 {
        font-size: 1rem;
        color: var(--text-secondary);
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
        
        &::before {
          content: '';
          width: 4px;
          height: 18px;
          background: var(--gradient-primary);
          border-radius: 2px;
        }
      }
      
      p {
        color: var(--text-muted);
        line-height: 1.8;
        font-size: 0.95rem;
      }
    }
    
    .keywords {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 25px;
      
      .keyword {
        padding: 8px 16px;
        background: rgba(99, 102, 241, 0.1);
        border: 1px solid var(--border-color);
        border-radius: 20px;
        color: var(--primary-light);
        font-size: 0.85rem;
        font-weight: 500;
        transition: all 0.3s ease;
        
        &:hover {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }
      }
    }
    
    .btn {
      i {
        font-size: 0.9rem;
      }
    }
    
    .research-interests {
      .interests-title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        font-size: 1.8rem;
        margin-bottom: 40px;
        color: var(--text-primary);
        
        i {
          color: #fbbf24;
        }
      }
    }
    
    .interests-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 25px;
    }
    
    .interest-card {
      background: var(--bg-primary);
      border-radius: var(--radius-lg);
      padding: 35px 25px;
      text-align: center;
      border: 1px solid var(--border-color);
      transition: all 0.4s ease;
      opacity: 0;
      animation: fadeInUp 0.6s ease forwards;
      
      &:hover {
        transform: translateY(-10px);
        border-color: var(--primary-color);
        box-shadow: 0 15px 40px var(--shadow-color);
        
        .interest-icon {
          background: var(--gradient-primary);
          
          i {
            color: white;
          }
        }
      }
      
      .interest-icon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: rgba(99, 102, 241, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
        font-size: 1.8rem;
        color: var(--primary-color);
        transition: all 0.4s ease;
      }
      
      h4 {
        font-size: 1.1rem;
        color: var(--text-primary);
        margin-bottom: 12px;
      }
      
      p {
        color: var(--text-muted);
        font-size: 0.9rem;
        line-height: 1.6;
      }
    }
    
    @media (max-width: 992px) {
      .interests-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .publication-card {
        padding: 30px 25px;
      }
    }
    
    @media (max-width: 576px) {
      .interests-grid {
        grid-template-columns: 1fr;
      }
      
      .pub-meta {
        flex-direction: column;
        gap: 10px;
      }
      
      .pub-content h3 {
        font-size: 1.2rem;
      }
      
      .abstract {
        padding: 18px;
      }
    }
  `]
})
export class PublicationsComponent implements OnInit {
  publications: Publication[] = [
    {
      title: 'Development of Android Application for Students Performance',
      authors: 'Research Paper',
      journal: 'International Journal',
      year: '2022',
      abstract: 'This research paper presents the development of an Android application designed to track and manage student performance effectively. The application provides a comprehensive solution for educational institutions to monitor student progress, generate reports, and facilitate better communication between teachers, students, and parents. The system includes features for marks entry, result generation, performance analytics, and progress tracking.',
      keywords: ['Android', 'Mobile Application', 'Student Performance', 'Education Technology', 'Java'],
      link: 'https://scispace.com/pdf/development-of-android-application-for-students-performance-2hf1qv95.pdf',
      type: 'Research Paper'
    }
  ];

  researchInterests = [
    {
      title: 'Mobile Computing',
      description: 'Developing innovative mobile applications for real-world problems',
      icon: 'fas fa-mobile-alt'
    },
    {
      title: 'Deep Learning',
      description: 'Exploring AI/ML solutions for healthcare and image recognition',
      icon: 'fas fa-brain'
    },
    {
      title: 'Web Technologies',
      description: 'Building scalable and responsive web applications',
      icon: 'fas fa-globe'
    },
    {
      title: 'Software Engineering',
      description: 'Applying best practices in software development lifecycle',
      icon: 'fas fa-cogs'
    }
  ];

  ngOnInit() {}
}
