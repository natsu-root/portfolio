import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="container">
        <div class="nav-content">
          <!-- Logo -->
          <a href="#home" class="logo">
            <span class="logo-icon">&lt;/&gt;</span>
            <span class="logo-text">Welcome</span>
          </a>
          
          <!-- Desktop Navigation -->
          <ul class="nav-links" [class.active]="isMenuOpen">
            <li *ngFor="let item of navItems">
              <a [href]="item.link" 
                 [class.active]="activeSection === item.link"
                 (click)="closeMenu()">
                <i [class]="item.icon"></i>
                <span>{{ item.label }}</span>
              </a>
            </li>
          </ul>
          
          <!-- Mobile Menu Button -->
          <button class="menu-toggle" 
                  [class.active]="isMenuOpen"
                  (click)="toggleMenu()"
                  aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      transition: all 0.3s ease;
      padding: 20px 0;
      
      &.scrolled {
        background: rgba(15, 23, 42, 0.95);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        padding: 15px 0;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }
    }
    
    .nav-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .logo {
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
      
      .logo-text {
        background: linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        gap: 8px;
        padding: 10px 18px;
      }
    }
    
    .nav-links {
      display: flex;
      align-items: center;
      gap: 10px;
      list-style: none;
      margin: 0;
      padding: 0;
      
      li a {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 18px;
        color: var(--text-secondary);
        font-weight: 500;
        font-size: 0.95rem;
        border-radius: var(--radius-md);
        transition: all 0.3s ease;
        
        i {
          font-size: 1rem;
        }
        
        &:hover,
        &.active {
          color: var(--primary-light);
          background: rgba(99, 102, 241, 0.1);
        }
        
        &.active {
          background: var(--gradient-primary);
          color: white;
        }
      }
    }
    
    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      padding: 10px;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 1001;
      
      span {
        display: block;
        width: 25px;
        height: 2px;
        background: var(--text-primary);
        transition: all 0.3s ease;
        border-radius: 2px;
      }
      
      &.active {
        span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        span:nth-child(2) {
          opacity: 0;
        }
        
        span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
      }
    }
    
    @media (max-width: 992px) {
      .menu-toggle {
        display: flex;
      }
      
      .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        background: var(--bg-secondary);
        flex-direction: column;
        align-items: flex-start;
        padding: 100px 30px 30px;
        gap: 5px;
        transition: right 0.3s ease;
        box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
        
        &.active {
          right: 0;
        }
        
        li {
          width: 100%;
          
          a {
            width: 100%;
            padding: 15px 20px;
            font-size: 1rem;
          }
        }
      }
    }
  `]
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  activeSection = '#home';

  navItems = [
    { label: 'Home', link: '#home', icon: 'fas fa-home' },
    { label: 'About', link: '#about', icon: 'fas fa-user' },
    { label: 'Projects', link: '#projects', icon: 'fas fa-code' },
    { label: 'Internships', link: '#internships', icon: 'fas fa-briefcase' },
    { label: 'Skills', link: '#skills', icon: 'fas fa-cogs' },
    { label: 'Publications', link: '#publications', icon: 'fas fa-book' },
    { label: 'Workshops', link: '#workshops', icon: 'fas fa-chalkboard-teacher' },
    { label: 'Contact', link: '#contact', icon: 'fas fa-envelope' }
  ];

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  private setupIntersectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = `#${entry.target.id}`;
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
  }
}
