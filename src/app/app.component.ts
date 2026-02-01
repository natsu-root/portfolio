import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { InternshipsComponent } from './components/internships/internships.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    InternshipsComponent,
    SkillsComponent,
    PublicationsComponent,
    WorkshopsComponent,
    ContactComponent
  ],
  template: `
    <div class="app-container">
      <!-- Particle Background -->
      <div class="particles">
        <div class="particle" *ngFor="let particle of particles" [style.left.%]="particle.left" [style.top.%]="particle.top" [style.animation-delay.s]="particle.delay"></div>
      </div>
      
      <!-- Navigation -->
      <app-navbar></app-navbar>
      
      <!-- Main Content -->
      <main>
        <app-hero id="home"></app-hero>
        <app-about id="about"></app-about>
        <app-projects id="projects"></app-projects>
        <app-internships id="internships"></app-internships>
        <app-skills id="skills"></app-skills>
        <app-publications id="publications"></app-publications>
        <app-workshops id="workshops"></app-workshops>
        <app-contact id="contact"></app-contact>
      </main>
      
      <!-- Scroll to Top Button -->
      <button 
        class="scroll-top" 
        [class.visible]="showScrollTop"
        (click)="scrollToTop()"
        aria-label="Scroll to top">
        <i class="fas fa-arrow-up"></i>
      </button>
    </div>
  `,
  styles: [`
    .app-container {
      position: relative;
      min-height: 100vh;
      background: var(--bg-gradient-start);
    }
    
    .particles {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    }
    
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: var(--primary-color);
      border-radius: 50%;
      opacity: 0.3;
      animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    
    main {
      position: relative;
      z-index: 1;
    }
    
    .scroll-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--gradient-primary);
      border: none;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: all 0.3s ease;
      z-index: 1000;
      box-shadow: 0 4px 15px var(--shadow-color);
      
      &.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px var(--shadow-color);
      }
    }
  `]
})
export class AppComponent implements OnInit {
  showScrollTop = false;
  particles: Array<{left: number, top: number, delay: number}> = [];

  ngOnInit() {
    // Generate random particles
    for (let i = 0; i < 50; i++) {
      this.particles.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6
      });
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 500;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
