import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: string;
  color: string;
  github?: string;
  demo?: string;
  paper?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects section" id="projects">
      <div class="container">
        <div class="section-title">
          <h2 class="title">My Projects</h2>
          <p class="subtitle">Showcasing my technical expertise through innovative projects</p>
        </div>
        
        <!-- Project Categories -->
        <div class="category-filters">
          <button 
            *ngFor="let cat of categories" 
            class="filter-btn"
            [class.active]="selectedCategory === cat"
            (click)="filterProjects(cat)">
            {{ cat }}
          </button>
        </div>
        
        <!-- Projects Grid -->
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of filteredProjects; let i = index" [style.animation-delay]="i * 0.15 + 's'">
            <div class="project-header" [style.background]="project.color">
              <div class="project-icon">
                <i [class]="project.icon"></i>
              </div>
              <span class="project-category">{{ project.category }}</span>
            </div>
            
            <div class="project-body">
              <h3>{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-features">
                <h4>Key Features:</h4>
                <ul>
                  <li *ngFor="let feature of project.features">
                    <i class="fas fa-check"></i>
                    {{ feature }}
                  </li>
                </ul>
              </div>
              
              <div class="tech-stack">
                <span class="tech-tag" *ngFor="let tech of project.technologies">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="project-footer">
              <a *ngIf="project.github" [href]="project.github" target="_blank" class="btn btn-outline">
                <i class="fab fa-github"></i>
                Code
              </a>
              <a *ngIf="project.demo" [href]="project.demo" target="_blank" class="btn btn-primary">
                <i class="fas fa-external-link-alt"></i>
                Live Demo
              </a>
              <a *ngIf="project.paper" [href]="project.paper" target="_blank" class="btn btn-secondary">
                <i class="fas fa-file-pdf"></i>
                Research Paper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      background: var(--bg-secondary);
    }
    
    .category-filters {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 50px;
      flex-wrap: wrap;
    }
    
    .filter-btn {
      padding: 12px 28px;
      border-radius: 30px;
      border: 2px solid var(--border-color);
      background: transparent;
      color: var(--text-secondary);
      font-size: 0.95rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: var(--font-primary);
      
      &:hover {
        border-color: var(--primary-color);
        color: var(--primary-light);
      }
      
      &.active {
        background: var(--gradient-primary);
        border-color: transparent;
        color: white;
        box-shadow: 0 4px 15px var(--shadow-color);
      }
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
    }
    
    .project-card {
      background: var(--bg-primary);
      border-radius: var(--radius-lg);
      overflow: hidden;
      border: 1px solid var(--border-color);
      transition: all 0.4s ease;
      opacity: 0;
      animation: fadeInUp 0.6s ease forwards;
      display: flex;
      flex-direction: column;
      
      &:hover {
        transform: translateY(-10px);
        border-color: var(--primary-color);
        box-shadow: 0 20px 50px var(--shadow-color);
        
        .project-header {
          .project-icon {
            transform: scale(1.1) rotate(5deg);
          }
        }
      }
    }
    
    .project-header {
      padding: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
      
      .project-icon {
        width: 60px;
        height: 60px;
        border-radius: var(--radius-md);
        background: rgba(255, 255, 255, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        color: white;
        transition: transform 0.4s ease;
        backdrop-filter: blur(10px);
      }
      
      .project-category {
        padding: 8px 16px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        color: white;
        font-size: 0.85rem;
        font-weight: 500;
        backdrop-filter: blur(10px);
      }
    }
    
    .project-body {
      padding: 30px;
      flex: 1;
      
      h3 {
        font-size: 1.4rem;
        margin-bottom: 15px;
        color: var(--text-primary);
      }
      
      .project-description {
        color: var(--text-muted);
        line-height: 1.7;
        margin-bottom: 20px;
      }
    }
    
    .project-features {
      margin-bottom: 25px;
      
      h4 {
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
          padding: 6px 0;
          color: var(--text-muted);
          font-size: 0.9rem;
          
          i {
            color: var(--primary-color);
            font-size: 0.8rem;
            margin-top: 4px;
          }
        }
      }
    }
    
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      
      .tech-tag {
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
    
    .project-footer {
      padding: 20px 30px;
      border-top: 1px solid var(--border-color);
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      
      .btn {
        flex: 1;
        min-width: 120px;
        padding: 12px 20px;
        font-size: 0.9rem;
        
        i {
          font-size: 0.9rem;
        }
      }
    }
    
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .project-card {
        max-width: 500px;
        margin: 0 auto;
      }
      
      .category-filters {
        gap: 10px;
      }
      
      .filter-btn {
        padding: 10px 20px;
        font-size: 0.85rem;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  categories = ['All', 'Web Development', 'Mobile App', 'Deep Learning'];
  selectedCategory = 'All';

  projects: Project[] = [
    {
      title: 'School Management System',
      category: 'Web & Mobile App',
      description: 'A comprehensive web and mobile application developed for a school where teachers can upload student marks through the website, and students can access and download their results through the mobile application.',
      features: [
        'Teacher portal for marks upload and management',
        'Student mobile app for result viewing',
        'PDF result generation and download',
        'Secure authentication system',
        'Real-time notifications for result updates'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Android', 'Java'],
      icon: 'fas fa-school',
      color: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      paper: 'https://scispace.com/pdf/development-of-android-application-for-students-performance-2hf1qv95.pdf'
    },
    {
      title: 'Skin Disease Identification',
      category: 'Deep Learning',
      description: 'A mobile-integrated deep learning solution for reliable identification of skin diseases using convolutional neural networks and image processing techniques.',
      features: [
        'CNN-based image classification',
        'Mobile app integration for easy access',
        'Real-time disease detection',
        'Comprehensive disease database',
        'User-friendly interface for medical professionals'
      ],
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Flutter', 'Flask'],
      icon: 'fas fa-heartbeat',
      color: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
    },
    {
      title: 'Server Help Desk Centre',
      category: 'Web Development',
      description: 'A server help desk center developed for the Department of Information Technology to manage and track IT support requests and server maintenance tasks.',
      features: [
        'Ticket management system',
        'Server monitoring dashboard',
        'Automated issue tracking',
        'User role management',
        'Analytics and reporting'
      ],
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      icon: 'fas fa-server',
      color: 'linear-gradient(135deg, #f472b6 0%, #a855f7 100%)'
    }
  ];

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category.includes(this.selectedCategory) || 
      (this.selectedCategory === 'Web Development' && p.category.includes('Web')) ||
      (this.selectedCategory === 'Mobile App' && p.category.includes('Mobile')));
  }

  ngOnInit() {}

  filterProjects(category: string) {
    this.selectedCategory = category;
  }
}
