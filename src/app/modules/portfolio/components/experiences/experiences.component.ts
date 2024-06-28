import { Component, signal } from '@angular/core';
import { IExperiencesp } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiencesp[]>([
    {
      sumary: {
        strong: 'PROJETO ORACLE NEXT EDUCATION + ALURA LATAM',
        p: 'ONE | Jan 2024 - Present'
      },
      text: '<p>O projeto ONE (Oracle Next Education) é uma iniciativa da Oracle que oferece cursos gratuitos em tecnologia. Eu escolhi a trilha Back End com Spring Boot, visando capacitar-me para o mercado de trabalho. O programa também oferece acesso a mentores e oportunidades de emprego.</p>'
    },

    {
      sumary: {
        strong: 'FACULDADE',
        p: 'IFBA | Mar 2023 - Present'
      },
      text: '<p>Atualmente cursando Bacharelado em Sistemas de Informação no Instituto Federal da Bahia (IFBA), com previsão de conclusão em Dezembro de 2026.</p>'
    }

    
  ])

}
