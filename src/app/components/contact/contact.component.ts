import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact section" id="contact">
      <div class="container">
        <div class="section-title">
          <h2 class="title">Get In Touch</h2>
          <p class="subtitle">Let's connect and discuss opportunities</p>
        </div>
        
        <div class="contact-content">
          <!-- Contact Info Cards -->
          <div class="contact-info">
            <div class="info-card" *ngFor="let info of contactInfo; let i = index" [style.animation-delay]="i * 0.1 + 's'">
              <div class="info-icon">
                <i [class]="info.icon"></i>
              </div>
              <h3>{{ info.title }}</h3>
              <p>{{ info.value }}</p>
              <a *ngIf="info.link" [href]="info.link" target="_blank" class="info-link">
                {{ info.linkText }}
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <div class="form-card">
              <h3>Send Me a Message</h3>
              <p>Have a project in mind or want to collaborate? Fill out the form below.</p>
              
              <form class="contact-form" (ngSubmit)="onSubmit()">
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">
                      <i class="fas fa-user"></i>
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      [(ngModel)]="formData.name"
                      placeholder="John Doe"
                      required>
                  </div>
                  <div class="form-group">
                    <label for="email">
                      <i class="fas fa-envelope"></i>
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      [(ngModel)]="formData.email"
                      placeholder="john@example.com"
                      required>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="subject">
                    <i class="fas fa-tag"></i>
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    [(ngModel)]="formData.subject"
                    placeholder="Project Collaboration"
                    required>
                </div>
                
                <div class="form-group">
                  <label for="message">
                    <i class="fas fa-comment"></i>
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    [(ngModel)]="formData.message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    required></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary btn-full">
                  <i class="fas fa-paper-plane"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <!-- Social Links -->
        <div class="social-section">
          <h3 class="social-title">Connect With Me</h3>
          <div class="social-links">
            <a *ngFor="let social of socialLinks" [href]="social.link" target="_blank" [title]="social.name">
              <i [class]="social.icon"></i>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-brand">
              <span class="logo-icon">&lt;/&gt;</span>
              <span>Portfolio</span>
            </div>
            <p class="footer-text">
              Built with <i class="fas fa-heart"></i> using Angular & TypeScript
            </p>
            <p class="copyright">
              &copy; {{ currentYear }} All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </section>
  `,
  styles: [`
    .contact {
      background: var(--bg-gradient-start);
      padding-bottom: 0;
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 50px;
      margin-bottom: 80px;
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
    
    .info-card {
      background: var(--bg-secondary);
      border-radius: var(--radius-lg);
      padding: 30px;
      border: 1px solid var(--border-color);
      text-align: center;
      transition: all 0.4s ease;
      opacity: 0;
      animation: fadeInUp 0.6s ease forwards;
      
      &:hover {
        transform: translateY(-5px);
        border-color: var(--primary-color);
        box-shadow: 0 10px 30px var(--shadow-color);
        
        .info-icon {
          transform: scale(1.1);
          background: var(--gradient-primary);
        }
      }
      
      .info-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: rgba(99, 102, 241, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 15px;
        font-size: 1.5rem;
        color: var(--primary-color);
        transition: all 0.4s ease;
      }
      
      h3 {
        font-size: 1.1rem;
        color: var(--text-primary);
        margin-bottom: 8px;
      }
      
      p {
        color: var(--text-muted);
        font-size: 0.95rem;
        margin-bottom: 12px;
      }
      
      .info-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--primary-light);
        font-size: 0.9rem;
        font-weight: 500;
        
        i {
          transition: transform 0.3s ease;
        }
        
        &:hover {
          color: var(--primary-color);
          
          i {
            transform: translateX(5px);
          }
        }
      }
    }
    
    .contact-form-wrapper {
      .form-card {
        background: var(--bg-secondary);
        border-radius: var(--radius-lg);
        padding: 40px;
        border: 1px solid var(--border-color);
        
        h3 {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 10px;
        }
        
        > p {
          color: var(--text-muted);
          margin-bottom: 30px;
        }
      }
    }
    
    .contact-form {
      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
      
      .form-group {
        margin-bottom: 20px;
        
        label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 8px;
          
          i {
            color: var(--primary-color);
            font-size: 0.85rem;
          }
        }
        
        input,
        textarea {
          width: 100%;
          padding: 14px 18px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 0.95rem;
          font-family: var(--font-primary);
          transition: all 0.3s ease;
          
          &::placeholder {
            color: var(--text-muted);
          }
          
          &:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          }
        }
        
        textarea {
          resize: vertical;
          min-height: 120px;
        }
      }
      
      .btn-full {
        width: 100%;
        padding: 16px;
        font-size: 1rem;
      }
    }
    
    .social-section {
      text-align: center;
      margin-bottom: 80px;
      
      .social-title {
        font-size: 1.5rem;
        color: var(--text-primary);
        margin-bottom: 25px;
      }
      
      .social-links {
        display: flex;
        justify-content: center;
        gap: 20px;
        
        a {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          transition: all 0.4s ease;
          
          &:hover {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
            transform: translateY(-5px);
            box-shadow: 0 10px 25px var(--shadow-color);
          }
        }
      }
    }
    
    .footer {
      background: var(--bg-secondary);
      border-top: 1px solid var(--border-color);
      padding: 40px 0;
      
      .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        text-align: center;
      }
      
      .footer-brand {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-primary);
        
        .logo-icon {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: var(--font-mono);
        }
      }
      
      .footer-text {
        color: var(--text-muted);
        font-size: 0.95rem;
        
        i {
          color: #ef4444;
          animation: heartbeat 1.5s ease infinite;
        }
      }
      
      @keyframes heartbeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      
      .copyright {
        color: var(--text-muted);
        font-size: 0.9rem;
      }
    }
    
    @media (max-width: 992px) {
      .contact-content {
        grid-template-columns: 1fr;
      }
      
      .contact-info {
        flex-direction: row;
        flex-wrap: wrap;
        
        .info-card {
          flex: 1;
          min-width: 200px;
        }
      }
    }
    
    @media (max-width: 576px) {
      .contact-form {
        .form-row {
          grid-template-columns: 1fr;
        }
      }
      
      .contact-info {
        flex-direction: column;
      }
      
      .form-card {
        padding: 25px !important;
      }
      
      .social-links a {
        width: 45px;
        height: 45px;
        font-size: 1.2rem;
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactInfo = [
    {
      title: 'Location',
      value: 'Namchi, South Sikkim, Chisopani',
      icon: 'fas fa-map-marker-alt',
      link: null,
      linkText: null
    },
    {
      title: 'Education',
      value: 'Sikkim Institute of Science and Technology',
      icon: 'fas fa-university',
      link: null,
      linkText: null
    },
    {
      title: 'Research Paper',
      value: 'View my published paper',
      icon: 'fas fa-file-pdf',
      link: 'https://scispace.com/pdf/development-of-android-application-for-students-performance-2hf1qv95.pdf',
      linkText: 'Open Paper'
    }
  ];

  socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', link: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'fab fa-twitter', link: 'https://twitter.com' },
    { name: 'Email', icon: 'fas fa-envelope', link: 'mailto:email@example.com' }
  ];

  currentYear = new Date().getFullYear();

  ngOnInit() {}

  onSubmit() {
    // Form submission logic would go here
    alert('Thank you for your message! I will get back to you soon.');
    this.formData = { name: '', email: '', subject: '', message: '' };
  }
}
