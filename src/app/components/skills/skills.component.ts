import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills section" id="skills">
      <div class="container">
        <div class="section-title">
          <h2 class="title">Technical Skills</h2>
          <p class="subtitle">Technologies and tools I work with</p>
        </div>
        
        <div class="skills-content">
          <!-- Skills Categories -->
          <div class="skills-grid">
            <div class="skill-category" *ngFor="let category of skillCategories; let i = index" [style.animation-delay]="i * 0.15 + 's'">
              <div class="category-header">
                <div class="category-icon">
                  <i [class]="category.icon"></i>
                </div>
                <h3>{{ category.name }}</h3>
              </div>
              
              <div class="skills-list">
                <div class="skill-item" *ngFor="let skill of category.skills">
                  <div class="skill-info">
                    <div class="skill-name">
                      <i [class]="skill.icon" [style.color]="skill.color"></i>
                      <span>{{ skill.name }}</span>
                    </div>
                    <span class="skill-percentage">{{ skill.level }}%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" [style.width.%]="skill.level" [style.background]="skill.color"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Tech Stack Cloud -->
          <div class="tech-cloud-section">
            <h3 class="cloud-title">
              <i class="fas fa-cloud"></i>
              My Tech Stack
            </h3>
            <div class="tech-cloud">
              <span class="cloud-tag" *ngFor="let tech of allTechnologies; let i = index" 
                    [style.animation-delay]="i * 0.05 + 's'"
                    [class.large]="tech.size === 'large'"
                    [class.medium]="tech.size === 'medium'">
                <i [class]="tech.icon"></i>
                {{ tech.name }}
              </span>
            </div>
          </div>
          
          <!-- Expertise Areas -->
          <div class="expertise-section">
            <h3 class="expertise-title">Areas of Expertise</h3>
            <div class="expertise-grid">
              <div class="expertise-card" *ngFor="let expertise of expertiseAreas; let i = index" [style.animation-delay]="i * 0.1 + 's'">
                <div class="expertise-icon">
                  <i [class]="expertise.icon"></i>
                </div>
                <h4>{{ expertise.title }}</h4>
                <p>{{ expertise.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills {
      background: var(--bg-gradient-start);
    }
    
    .skills-content {
      display: flex;
      flex-direction: column;
      gap: 80px;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
    
    .skill-category {
      background: var(--bg-secondary);
      border-radius: var(--radius-lg);
      padding: 30px;
      border: 1px solid var(--border-color);
      opacity: 0;
      animation: fadeInUp 0.6s ease forwards;
      
      &:hover {
        border-color: var(--primary-color);
        box-shadow: 0 10px 40px var(--shadow-color);
      }
    }
    
    .category-header {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 25px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--border-color);
      
      .category-icon {
        width: 50px;
        height: 50px;
        border-radius: var(--radius-md);
        background: var(--gradient-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        color: white;
      }
      
      h3 {
        font-size: 1.3rem;
        color: var(--text-primary);
      }
    }
    
    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
    
    .skill-item {
      .skill-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        
        .skill-name {
          display: flex;
          align-items: center;
          gap: 10px;
          
          i {
            font-size: 1.2rem;
          }
          
          span {
            color: var(--text-secondary);
            font-weight: 500;
          }
        }
        
        .skill-percentage {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 600;
        }
      }
      
      .skill-bar {
        height: 8px;
        background: var(--bg-card);
        border-radius: 10px;
        overflow: hidden;
        
        .skill-progress {
          height: 100%;
          border-radius: 10px;
          transition: width 1.5s ease;
          position: relative;
          
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: shimmer 2s infinite;
          }
        }
      }
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    .tech-cloud-section {
      text-align: center;
      
      .cloud-title {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        font-size: 1.8rem;
        margin-bottom: 40px;
        color: var(--text-primary);
        
        i {
          color: var(--secondary-color);
        }
      }
    }
    
    .tech-cloud {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      max-width: 900px;
      margin: 0 auto;
    }
    
    .cloud-tag {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 24px;
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 30px;
      color: var(--text-secondary);
      font-size: 0.95rem;
      font-weight: 500;
      transition: all 0.3s ease;
      opacity: 0;
      animation: fadeIn 0.5s ease forwards;
      
      i {
        font-size: 1.1rem;
      }
      
      &:hover {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
        transform: translateY(-3px);
        box-shadow: 0 5px 20px var(--shadow-color);
      }
      
      &.large {
        padding: 15px 30px;
        font-size: 1.1rem;
        
        i {
          font-size: 1.3rem;
        }
      }
      
      &.medium {
        padding: 13px 26px;
        font-size: 1rem;
      }
    }
    
    .expertise-section {
      .expertise-title {
        text-align: center;
        font-size: 1.8rem;
        margin-bottom: 40px;
        color: var(--text-primary);
      }
    }
    
    .expertise-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 25px;
    }
    
    .expertise-card {
      background: var(--bg-secondary);
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
        
        .expertise-icon {
          transform: scale(1.1);
          background: var(--gradient-primary);
          
          i {
            color: white;
          }
        }
      }
      
      .expertise-icon {
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
    
    @media (max-width: 1200px) {
      .expertise-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 992px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
    
    @media (max-width: 576px) {
      .expertise-grid {
        grid-template-columns: 1fr;
      }
      
      .cloud-tag {
        padding: 10px 18px;
        font-size: 0.85rem;
      }
      
      .skill-category {
        padding: 20px;
      }
    }
  `]
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      icon: 'fas fa-code',
      skills: [
        { name: 'C', level: 85, icon: 'fab fa-cuttlefish', color: '#00599c' },
        { name: 'C++', level: 80, icon: 'fab fa-cuttlefish', color: '#00599c' },
        { name: 'Java', level: 75, icon: 'fab fa-java', color: '#007396' },
        { name: 'Python', level: 85, icon: 'fab fa-python', color: '#3776ab' }
      ]
    },
    {
      name: 'Web Development',
      icon: 'fas fa-globe',
      skills: [
        { name: 'HTML5', level: 95, icon: 'fab fa-html5', color: '#e34f26' },
        { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt', color: '#1572b6' },
        { name: 'JavaScript', level: 85, icon: 'fab fa-js', color: '#f7df1e' },
        { name: 'PHP', level: 70, icon: 'fab fa-php', color: '#777bb4' }
      ]
    },
    {
      name: 'Frameworks & Libraries',
      icon: 'fas fa-layer-group',
      skills: [
        { name: 'Angular', level: 88, icon: 'fab fa-angular', color: '#dd0031' },
        { name: 'Django', level: 75, icon: 'fab fa-python', color: '#092e20' },
        { name: 'Node.js', level: 70, icon: 'fab fa-node-js', color: '#339933' },
        { name: 'React', level: 65, icon: 'fab fa-react', color: '#61dafb' }
      ]
    },
    {
      name: 'Databases & Tools',
      icon: 'fas fa-database',
      skills: [
        { name: 'PostgreSQL', level: 75, icon: 'fas fa-database', color: '#336791' },
        { name: 'MySQL', level: 80, icon: 'fas fa-database', color: '#4479a1' },
        { name: 'MongoDB', level: 65, icon: 'fas fa-leaf', color: '#47a248' },
        { name: 'Git', level: 80, icon: 'fab fa-git-alt', color: '#f05032' }
      ]
    }
  ];

  allTechnologies = [
    { name: 'C', icon: 'fab fa-cuttlefish', size: 'medium' },
    { name: 'C++', icon: 'fab fa-cuttlefish', size: 'medium' },
    { name: 'Java', icon: 'fab fa-java', size: 'medium' },
    { name: 'Python', icon: 'fab fa-python', size: 'large' },
    { name: 'HTML5', icon: 'fab fa-html5', size: 'large' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', size: 'large' },
    { name: 'JavaScript', icon: 'fab fa-js', size: 'large' },
    { name: 'PHP', icon: 'fab fa-php', size: 'medium' },
    { name: 'Angular', icon: 'fab fa-angular', size: 'large' },
    { name: 'Django', icon: 'fab fa-python', size: 'medium' },
    { name: 'Node.js', icon: 'fab fa-node-js', size: 'medium' },
    { name: 'PostgreSQL', icon: 'fas fa-database', size: 'medium' },
    { name: 'Android', icon: 'fab fa-android', size: 'medium' },
    { name: 'TensorFlow', icon: 'fas fa-brain', size: 'medium' },
    { name: 'Git', icon: 'fab fa-git-alt', size: 'small' },
    { name: 'Linux', icon: 'fab fa-linux', size: 'small' }
  ];

  expertiseAreas = [
    {
      title: 'Full Stack Development',
      description: 'Building complete web applications from frontend to backend',
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'Mobile App Development',
      description: 'Creating native and cross-platform mobile applications',
      icon: 'fas fa-mobile-alt'
    },
    {
      title: 'Deep Learning',
      description: 'Implementing AI/ML solutions for real-world problems',
      icon: 'fas fa-brain'
    },
    {
      title: 'Database Design',
      description: 'Designing efficient and scalable database architectures',
      icon: 'fas fa-server'
    }
  ];

  ngOnInit() {}
}
